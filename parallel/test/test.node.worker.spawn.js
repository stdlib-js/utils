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

var EventEmitter = require( 'events' ).EventEmitter;
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var noop = require( './../../noop' );
var spawn = require( './../lib/node/worker/spawn.js' );


// FIXTURES //

function Mock() {
	EventEmitter.call( this );
	this.pid = 12345;
	return this;
}
Mock.prototype = Object.create( EventEmitter.prototype );
Mock.prototype.constructor = Mock;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof spawn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a child process', function test( t ) {
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	child = spawn();

	t.equal( child.pid, 12345, 'returns child process' );
	t.end();

	function mock() {
		return new Mock();
	}
});

tape( 'the function calls a callback when a script finishes executing', function test( t ) {
	var script;
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	script = '/a/b/c.js';
	child = spawn( 'node', script, done );

	child.emit( 'close', 0, null );

	function mock() {
		return new Mock();
	}

	function done( error, pid, key ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( pid, 12345, 'returns pid' );
		t.equal( key, script, 'returns script name' );
		t.end();
	}
});

tape( 'the function calls a callback with an error if an error is encountered when executing a script', function test( t ) {
	var script;
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	script = '/a/b/c.js';
	child = spawn( 'node', script, done );

	child.emit( 'error', new Error( 'beep' ) );

	function mock() {
		return new Mock();
	}

	function done( error ) {
		t.ok( error, 'returns an error' );
		t.end();
	}
});

tape( 'the function calls a callback with an error if the process exits with a non-zero exit code', function test( t ) {
	var script;
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	script = '/a/b/c.js';
	child = spawn( 'node', script, done );

	child.emit( 'exit', 1, null );
	child.emit( 'close' );

	function mock() {
		return new Mock();
	}

	function done( error ) {
		t.ok( error, 'returns an error' );
		t.equal( error.code, 1, 'sets `code` property' );
		t.equal( error.signal, null, 'sets `signal` property' );
		t.end();
	}
});

tape( 'the function calls a callback with an error if the process exits due to a termination signal', function test( t ) {
	var script;
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	script = '/a/b/c.js';
	child = spawn( 'node', script, done );

	child.emit( 'exit', null, 'SIGINT' );
	child.emit( 'close' );

	function mock() {
		return new Mock();
	}

	function done( error ) {
		t.ok( error, 'returns an error' );
		t.equal( error.code, null, 'sets `code` property' );
		t.equal( error.signal, 'SIGINT', 'sets `signal` property' );
		t.end();
	}
});

tape( 'the function calls a callback with an error if the process closes with a non-zero exit code', function test( t ) {
	var script;
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	script = '/a/b/c.js';
	child = spawn( 'node', script, done );

	child.emit( 'close', 2, null );

	function mock() {
		return new Mock();
	}

	function done( error ) {
		t.ok( error, 'returns an error' );
		t.equal( error.code, 2, 'sets `code` property' );
		t.equal( error.signal, null, 'sets `signal` property' );
		t.end();
	}
});

tape( 'the function calls a callback with an error if the process closes due to a termination signal', function test( t ) {
	var script;
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	script = '/a/b/c.js';
	child = spawn( 'node', script, done );

	child.emit( 'close', null, 'SIGINT' );

	function mock() {
		return new Mock();
	}

	function done( error ) {
		t.ok( error, 'returns an error' );
		t.equal( error.code, null, 'sets `code` property' );
		t.equal( error.signal, 'SIGINT', 'sets `signal` property' );
		t.end();
	}
});

tape( 'the function calls a callback with an error if the process exits/closes with a non-zero exit code', function test( t ) {
	var script;
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	script = '/a/b/c.js';
	child = spawn( 'node', script, done );

	child.emit( 'exit', 1, null );
	child.emit( 'close', 1, null );

	function mock() {
		return new Mock();
	}

	function done( error ) {
		t.ok( error, 'returns an error' );
		t.equal( error.code, 1, 'sets `code` property' );
		t.equal( error.signal, null, 'sets `signal` property' );
		t.end();
	}
});

tape( 'the function calls a callback with an error if the process exits/closes due to a termination signal', function test( t ) {
	var script;
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	script = '/a/b/c.js';
	child = spawn( 'node', script, done );

	child.emit( 'exit', null, 'SIGINT' );
	child.emit( 'close', null, 'SIGINT' );

	function mock() {
		return new Mock();
	}

	function done( error ) {
		t.ok( error, 'returns an error' );
		t.equal( error.code, null, 'sets `code` property' );
		t.equal( error.signal, 'SIGINT', 'sets `signal` property' );
		t.end();
	}
});

tape( 'if the `WORKER_UID` environment is set, the function sets the child process `uid`', function test( t ) {
	var script;
	var spawn;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		},
		'./process.js': {
			'env': {
				'WORKER_UID': '123'
			}
		}
	});

	script = '/a/b/c.js';
	spawn( 'node', script, noop );

	t.end();

	function mock( cmd, args, opts ) {
		t.equal( opts.uid, 123, 'sets uid' );
		return new Mock();
	}
});

tape( 'if the `WORKER_GID` environment is set, the function sets the child process `gid`', function test( t ) {
	var script;
	var spawn;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		},
		'./process.js': {
			'env': {
				'WORKER_GID': '1234'
			}
		}
	});

	script = '/a/b/c.js';
	spawn( 'node', script, noop );

	t.end();

	function mock( cmd, args, opts ) {
		t.equal( opts.gid, 1234, 'sets gid' );
		return new Mock();
	}
});

tape( 'the function does not error when a child process emits either a `disconnect` or `exit` event', function test( t ) {
	var script;
	var spawn;
	var child;

	spawn = proxyquire( './../lib/node/worker/spawn.js', {
		'child_process': {
			'spawn': mock
		}
	});

	script = '/a/b/c.js';
	child = spawn( 'node', script, noop );

	child.emit( 'exit', 0, null );
	child.emit( 'disconnect' );

	t.ok( true, 'does not error' );
	t.end();

	function mock() {
		return new Mock();
	}
});
