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

var tape = require( 'tape' );
var noop = require( './../../../noop' );
var composeAsync = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof composeAsync, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided multiple functions to compose', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.throws( bar, Error, 'throws an error' );
	t.end();

	function foo() {
		composeAsync();
	}

	function bar() {
		composeAsync( noop );
	}
});

tape( 'the function throws an error if not provided a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue1( values[i] ), TypeError, 'throws an error when provided '+values[i] );
		t.throws( badValue2( values[i] ), TypeError, 'throws an error when provided '+values[i] );
		t.throws( badValue3( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue1( value ) {
		return function badValue() {
			composeAsync( value, noop );
		};
	}

	function badValue2( value ) {
		return function badValue() {
			composeAsync( noop, value );
		};
	}

	function badValue3( value ) {
		return function badValue() {
			composeAsync( noop, noop, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var fcn = composeAsync( noop, noop );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a composite function', function test( t ) {
	var f;

	function a( x, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, x*3 );
		}
	}

	function b( z, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, z+5 );
		}
	}

	function c( r, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, r/10 );
		}
	}

	f = composeAsync( c, b, a );
	f( 5, done );

	function done( error, v ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( v, 2, 'returns composite result' );
		}
		t.end();
	}
});

tape( 'the composite function supports providing a rightmost multi-parameter function', function test( t ) {
	var f;

	function a( x, y, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, x*y );
		}
	}

	function b( z, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, z+5 );
		}
	}

	function c( r, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, r/10 );
		}
	}

	f = composeAsync( c, b, a );
	f( 5, 3, done );

	function done( error, v ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( v, 2, 'returns composite result' );
		}
		t.end();
	}
});

tape( 'if an error is encountered while invoking a composed function, the composite function suspends execution and immediately returns the error', function test( t ) {
	var count;
	var f;

	function a( x, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			count += 1;
			next( new Error( 'beep' ) );
		}
	}

	function b( z, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			count += 1;
			next( null, z+5 );
		}
	}

	function c( r, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			count += 1;
			next( null, r/10 );
		}
	}

	f = composeAsync( c, b, a );
	count = 0;
	f( 5, done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.strictEqual( count, 1, 'invokes expected number of functions' );
		t.end();
	}
});

tape( 'if an error is encountered while invoking a composed function, the composite function suspends execution and immediately returns the error', function test( t ) {
	var count;
	var f;

	function a( x, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			count += 1;
			next( null, x*3 );
		}
	}

	function b( z, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			count += 1;
			next( new Error( 'beep' ) );
		}
	}

	function c( r, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			count += 1;
			next( null, r/10 );
		}
	}

	f = composeAsync( c, b, a );
	count = 0;
	f( 5, done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.strictEqual( count, 2, 'invokes expected number of functions' );
		t.end();
	}
});

tape( 'if an error is encountered while invoking a composed function, the composite function suspends execution and immediately returns the error', function test( t ) {
	var count;
	var f;

	function a( x, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			count += 1;
			next( null, x*3 );
		}
	}

	function b( z, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			count += 1;
			next( null, z+5 );
		}
	}

	function c( r, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			count += 1;
			next( new Error( 'beep' ) );
		}
	}

	f = composeAsync( c, b, a );
	count = 0;
	f( 5, done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.strictEqual( count, 3, 'invokes expected number of functions' );
		t.end();
	}
});
