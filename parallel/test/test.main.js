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

var path = require( 'path' );
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var noop = require( './../../noop' );
var parallel = require( './../lib/main.js' );


// FIXTURES //

function files() {
	var out;
	var i;

	out = new Array( 4 );
	for ( i = 0; i < out.length; i++ ) {
		out[ i ] = path.resolve( __dirname, './fixtures/'+(i+1)+'.js' );
	}
	return out;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof parallel, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not a string array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		void 0,
		null,
		{},
		function noop() {},
		[ 5, 'beep' ],
		[ 'boop', null ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			parallel( value, noop );
		};
	}
});

tape( 'the function throws an error if the first argument is not a string array (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		void 0,
		null,
		{},
		function noop() {},
		[ 5, 'beep' ],
		[ 'boop', null ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			parallel( value, {}, noop );
		};
	}
});

tape( 'the function throws an error if the callback argument is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		void 0,
		null,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			parallel( ['./a.js'], value );
		};
	}
});

tape( 'the function throws an error if the callback argument is not a function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		void 0,
		null,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			parallel( ['./a.js'], {}, value );
		};
	}
});

tape( 'the function throws an error if the options argument is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		void 0,
		null,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			parallel( ['./a.js'], value, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			parallel( ['./a.js'], {
				'workers': value
			}, noop );
		};
	}
});

tape( 'the function calls a provided callback after executing all scripts', function test( t ) {
	var parallel = proxyquire( './../lib/main.js', {
		'./node': exec
	});

	parallel( files(), done );

	function done( error ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'calls callback' );
		}
		t.end();
	}

	function exec( files, opts, clbk ) {
		clbk();
	}
});

tape( 'the function returns an error to the provided callback if an error is encountered during script execution', function test( t ) {
	var parallel = proxyquire( './../lib/main.js', {
		'./node': exec
	});

	parallel( files(), done );

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'failed to return an error' );
		}
		t.end();
	}

	function exec( files, opts, clbk ) {
		clbk( new Error( 'beep' ) );
	}
});

tape( 'if the concurrency is greater than the number of files, the function sets the concurrency equal to the number of files', function test( t ) {
	var parallel;
	var opts;
	var f;

	f = files();
	opts = {
		'concurrency': f.length + 10
	};
	parallel = proxyquire( './../lib/main.js', {
		'./node': exec
	});

	parallel( f, opts, noop );

	function exec( files, opts ) {
		t.equal( opts.concurrency, f.length, 'lowers the concurrency' );
		t.end();
	}
});

tape( 'if the number of workers is greater than the concurrency, the function sets the number of workers equal to the concurrency', function test( t ) {
	var parallel;
	var opts;
	var f;

	f = files();
	opts = {
		'workers': 10,
		'concurrency': 2
	};
	parallel = proxyquire( './../lib/main.js', {
		'./node': exec
	});

	parallel( f, opts, noop );

	function exec( files, opts ) {
		t.equal( opts.workers, 2, 'lowers the workers' );
		t.end();
	}
});

tape( 'the function runs scripts in parallel', function test( t ) {
	parallel( files(), done );
	function done( error ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'runs scripts in parallel' );
		}
		t.end();
	}
});
