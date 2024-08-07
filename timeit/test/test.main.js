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

var join = require( 'path' ).join;
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var noop = require( './../../noop' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var timeit = require( './../lib' );


// FIXTURES //

var dir = join( __dirname, 'fixtures' );
var before = readFileSync( join( dir, 'before.js.txt' ), 'utf8' );
var code = readFileSync( join( dir, 'code.js.txt' ), 'utf8' );
var codeAsync = readFileSync( join( dir, 'code.async.js.txt' ), 'utf8' );
var after = readFileSync( join( dir, 'after.js.txt' ), 'utf8' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof timeit, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			timeit( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a string (options)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			timeit( value, {}, noop );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			timeit( '/**/', value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			timeit( '/**/', {}, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			timeit( '/**/', value, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'before': value
			};
			timeit( '/**/', opts, noop );
		};
	}
});

tape( 'the function returns an error to a provided callback if a snippet errors', function test( t ) {
	// Undefined variable:
	timeit( 'beep;', done );

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if a snippet errors', function test( t ) {
	// Throws:
	timeit( 'throw new Error( \'Beep!\' );', done );

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if a snippet early returns', function test( t ) {
	timeit( 'return;', done );

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if an asynchronous setup snippet returns an error', function test( t ) {
	var before;
	var opts;

	before = 'next( new Error( \'beep\' ) );';
	opts = {
		'before': before,
		'asynchronous': true
	};
	timeit( 'next();', opts, done );

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if an asynchronous cleanup snippet returns an error', function test( t ) {
	var after;
	var opts;

	after = 'next( new Error( \'beep\' ) );';
	opts = {
		'after': after,
		'asynchronous': true
	};
	timeit( 'next();', opts, done );

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if an asynchronous code snippet returns an error', function test( t ) {
	var opts = {
		'asynchronous': true
	};
	timeit( 'next( new Error( \'beep\' ) );', opts, done );

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if timing results are not returned during the pre-test', function test( t ) {
	var timeit;

	timeit = proxyquire( './../lib/main.js', {
		'./vm_evaluate.js': evaluate
	});

	timeit( '', done );

	function evaluate( code, opts, filename, dirname, clbk ) {
		clbk();
	}

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if the timing results returned during the pre-test are not a 2-element array', function test( t ) {
	var timeit;

	timeit = proxyquire( './../lib/main.js', {
		'./vm_evaluate.js': evaluate
	});

	timeit( '', done );

	function evaluate( code, opts, filename, dirname, clbk ) {
		clbk( null, [] );
	}

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if an error is returned during a timing run', function test( t ) {
	var timeit;
	var count;
	var opts;

	timeit = proxyquire( './../lib/main.js', {
		'./vm_evaluate.js': evaluate
	});

	count = -1;
	opts = {
		'repeats': 5
	};
	timeit( '', opts, done );

	function evaluate( code, opts, filename, dirname, clbk ) {
		count += 1;
		if ( count < 3 ) {
			return clbk( null, [ 0, 100 ] );
		}
		clbk( new Error( 'beep' ) );
	}

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if an error is returned while determining an iteration number', function test( t ) {
	var timeit;
	var count;
	var opts;

	timeit = proxyquire( './../lib/main.js', {
		'./vm_evaluate.js': evaluate
	});

	count = -1;
	opts = {
		'iterations': null,
		'repeats': 5
	};
	timeit( '', opts, done );

	function evaluate( code, opts, filename, dirname, clbk ) {
		count += 1;
		if ( count < 3 ) {
			return clbk( null, [ 0, 100 ] );
		}
		clbk( new Error( 'beep' ) );
	}

	function done( error ) {
		if ( error ) {
			t.ok( true, 'returns an error' );
		} else {
			t.ok( false, 'did not return an error' );
		}
		t.end();
	}
});

tape( 'the function is always asynchronous', function test( t ) {
	var beep;
	timeit( '', done );
	beep = 'boop';

	function done( error ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( beep, 'boop', 'function is asynchronous' );
		t.end();
	}
});

tape( 'the function times a code snippet', function test( t ) {
	var opts;

	opts = {
		'before': before,
		'after': after,
		'iterations': 100,
		'repeats': 3
	};

	timeit( code, opts, done );

	function done( error, results ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'no error' );
		}
		t.strictEqual( results.iterations > 0, true, 'returns results' );
		t.strictEqual( results.times.length > 0, true, 'returns results' );
		t.end();
	}
});

tape( 'the function times a code snippet (opts.iterations = null)', function test( t ) {
	var opts;

	opts = {
		'before': before,
		'after': after,
		'repeats': 1,
		'iterations': null
	};

	timeit( code, opts, done );

	function done( error, results ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'no error' );
		}
		t.strictEqual( results.iterations > 0, true, 'returns results' );
		t.strictEqual( results.times.length > 0, true, 'returns results' );
		t.end();
	}
});

tape( 'the function times an asynchronous code snippet', function test( t ) {
	var opts;

	opts = {
		'iterations': 10,
		'repeats': 2,
		'asynchronous': true
	};

	timeit( codeAsync, opts, done );

	function done( error, results ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'no error' );
		}
		t.strictEqual( results.iterations > 0, true, 'returns results' );
		t.strictEqual( results.times.length > 0, true, 'returns results' );
		t.end();
	}
});

tape( 'the function times an asynchronous code snippet (opts.iterations = null)', function test( t ) {
	var opts;

	opts = {
		'iterations': null,
		'repeats': 1,
		'asynchronous': true
	};

	timeit( codeAsync, opts, done );

	function done( error, results ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'no error' );
		}
		t.strictEqual( results.iterations > 0, true, 'returns results' );
		t.strictEqual( results.times.length > 0, true, 'returns results' );
		t.end();
	}
});
