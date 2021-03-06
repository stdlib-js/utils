/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var fork = require( 'child_process' ).fork;
var path = require( 'path' );
var logger = require( 'debug' );
var objectKeys = require( './../../../keys' );
var format = require( '@stdlib/string/format' );
var getOpts = require( './options.js' );


// VARIABLES //

var debug = logger( 'parallel:exec' );
var WORKER_FILEPATH = path.resolve( __dirname, './worker/index.js' );


// MAIN //

/**
* Executes scripts in parallel.
*
* @private
* @param {StringArray} files - script absolute file paths
* @param {Options} opts - options
* @param {PositiveInteger} opts.concurrency - number of scripts to execute concurrently
* @param {PositiveInteger} opts.workers - number of workers
* @param {string} opts.cmd - executable file/command
* @param {boolean} opts.ordered - boolean indicating whether to preserve order of script output
* @param {(NonNegativeInteger|null)} opts.uid - process user identity
* @param {(NonNegativeInteger|null)} opts.gid - process group identity
* @param {string} opts.encoding - `stdio` encoding
* @param {NonNegativeInteger} opts.maxBuffer - max child process `stdio` buffer size
* @param {Callback} clbk - callback to invoke after executing all scripts
*/
function exec( files, opts, clbk ) {
	var numClosed;
	var workers;
	var pending;
	var fopts;
	var args;
	var proc;
	var pids;
	var pid;
	var idx;
	var err;
	var i;

	debug( 'Options: %s.', JSON.stringify( opts ) );
	numClosed = 0;

	debug( 'Creating %d workers...', opts.workers );
	workers = {};
	args = [];
	fopts = getOpts( opts );
	for ( i = 0; i < opts.workers; i++ ) {
		debug( 'Creating child process...' );
		proc = fork( WORKER_FILEPATH, args, fopts );

		proc.on( 'error', onError( proc ) );
		proc.on( 'close', onClose( proc ) );
		proc.on( 'exit', onExit( proc ) );
		proc.on( 'disconnect', onDisconnect( proc ) );
		proc.on( 'message', onMessage( proc ) );

		debug( 'Child process created. pid: %d.', proc.pid );
		workers[ proc.pid ] = proc;
	}
	pids = objectKeys( workers );
	debug( '%d workers created.', pids.length );

	debug( 'Running %d scripts concurrently...', opts.concurrency );
	pending = {};
	idx = -1;
	for ( i = 0; i < opts.concurrency; i++ ) {
		pid = pids[ i%pids.length ];
		next( workers[ pid ] ); // eslint-disable-line node/callback-return
	}

	/**
	* Instructs a child process to run the next script.
	*
	* @private
	* @param {Object} child - child process
	* @returns {void}
	*/
	function next( child ) {
		var numPending;
		idx += 1;
		if ( idx >= files.length ) {
			numPending = objectKeys( pending ).length;
			if ( numPending > 0 ) {
				debug( '%d scripts are pending.', numPending );
				return;
			}
			debug( 'All scripts have finished.' );
			return close();
		}
		debug( 'Instructing child process to run script: %s. pid: %d.', files[ idx ], child.pid );
		child.send( files[ idx ] );
		pending[ files[ idx ] ] = true;

		debug( '%d of %d scripts have been processed.', idx, files.length );
	}

	/**
	* Returns a callback to be invoked upon receiving a message from a child process.
	*
	* @private
	* @param {Object} child - child process
	* @returns {Callback} callback
	*/
	function onMessage( child ) {
		return listener;

		/**
		* Callback invoked upon receiving a message from a child process.
		*
		* @private
		* @param {string} filepath - script filepath
		*/
		function listener( filepath ) {
			debug( 'Child process message: %s. pid: %d.', filepath, child.pid );

			// Remove the script from the listing of pending scripts:
			delete pending[ filepath ];

			// Indicate that the child process is ready for its next task:
			next( child );
		}
	}

	/**
	* Returns a callback to be invoked upon child process close.
	*
	* @private
	* @param {Object} child - child process
	* @returns {Callback} callback
	*/
	function onClose( child ) {
		return listener;

		/**
		* Callback invoked upon child process close.
		*
		* @private
		* @param {(number|null)} code - exit code
		* @param {(string|null)} signal - termination signal
		*/
		function listener( code, signal ) {
			debug( 'Child process closed. Code: %d. Signal: %s. pid: %d.', code, signal, child.pid );
			processExit( code, signal );
			childClosed();
		}
	}

	/**
	* Callback invoked if a child closes.
	*
	* @private
	*/
	function childClosed() {
		numClosed += 1;
		debug( '%d of %d child processes have closed.', numClosed, opts.workers );
		if ( numClosed === opts.workers ) {
			done(); // eslint-disable-line node/callback-return
		}
	}

	/**
	* Returns a callback to be invoked upon child process exit.
	*
	* @private
	* @param {Object} child - child process
	* @returns {Callback} callback
	*/
	function onExit( child ) {
		return listener;

		/**
		* Callback invoked upon child process exit.
		*
		* @private
		* @param {(number|null)} code - exit code
		* @param {(string|null)} signal - termination signal
		*/
		function listener( code, signal ) {
			debug( 'Child process exited. Code: %d. Signal: %s. pid: %d.', code, signal, child.pid );
			processExit( code, signal );
		}
	}

	/**
	* Closes all workers.
	*
	* @private
	* @param {Error} [error] - error object
	*/
	function close( error ) {
		var pids;
		var pid;
		var i;
		if ( error && !err ) {
			err = error;
		}
		debug( 'Instructing child processes to close...' );
		pids = objectKeys( workers );
		for ( i = 0; i < pids.length; i++ ) {
			pid = pids[ i ];
			debug( 'Instructing child process (pid: %d) to close...', pid );
			workers[ pid ].send( 'close' );
		}
	}

	/**
	* Returns a callback to be invoked upon child process disconnect.
	*
	* @private
	* @param {Object} child - child process
	* @returns {Callback} callback
	*/
	function onDisconnect( child ) {
		return listener;

		/**
		* Callback invoked upon child process disconnect.
		*
		* @private
		*/
		function listener() {
			debug( 'Child process disconnected. pid: %d.', child.pid );
		}
	}

	/**
	* Returns a callback to be invoked upon encountering a child process error.
	*
	* @private
	* @param {Object} child - child process
	* @returns {Callback} callback
	*/
	function onError( child ) {
		return listener;

		/**
		* Callback invoked upon a child process error.
		*
		* @private
		* @param {Error} error - error object
		*/
		function listener( error ) {
			debug( 'Child process error: %s. pid: %d.', error.message, child.pid );
			close( error );
		}
	}

	/**
	* Processes process exit values. If provided a non-zero exit code or termination signal, instructs the process to close.
	*
	* @private
	* @param {(number|null)} code - exit code
	* @param {(string|null)} signal - termination signal
	* @returns {void}
	*/
	function processExit( code, signal ) {
		var error;
		if ( err ) {
			return;
		}
		if ( code !== null && code !== 0 ) {
			error = new Error( format( 'unexpected error. Child process failed with exit code: `%u`.', code ) );
		} else if ( signal !== null ) {
			error = new Error( format( 'unexpected error. Child process failed due to termination signal: `%s`.', signal ) );
		}
		if ( error ) {
			error.code = code;
			error.signal = signal;
			return close( error );
		}
	}

	/**
	* Callback invoked once all tasks are finished.
	*
	* @private
	* @returns {void}
	*/
	function done() {
		if ( err ) {
			return clbk( err );
		}
		clbk();
	}
}


// EXPORTS //

module.exports = exec;
