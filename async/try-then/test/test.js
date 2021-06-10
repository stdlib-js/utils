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
var noop = require( '@stdlib/utils/noop' );
var trythenAsync = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof trythenAsync, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
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
			trythenAsync( value, noop, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
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
			trythenAsync( noop, value, noop );
		};
	}
});

tape( 'the function throws an error if provided a last argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
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
			trythenAsync( noop, noop, value );
		};
	}
});

tape( 'if a provided function does not return an error, the function invokes a callback with the function result', function test( t ) {
	trythenAsync( x, y, done );

	function x( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, 'beep' );
		}
	}

	function y( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, 'boop' );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( result, 'beep', 'returns expected value' );
		}
		t.end();
	}
});

tape( 'if a provided function returns an error, the function invokes a second callback, which if successful, supplies the return value provided to a final callback (unary `y`)', function test( t ) {
	trythenAsync( x, y, done );

	function x( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( new Error( 'oops' ) );
		}
	}

	function y( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, 'boop' );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( result, 'boop', 'returns expected value' );
		}
		t.end();
	}
});

tape( 'if a provided function returns an error, the function invokes a second callback, which if successful, supplies the return value provided to a final callback (non-unary `y`)', function test( t ) {
	trythenAsync( x, y, done );

	function x( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( new Error( 'oops' ) );
		}
	}

	function y( error, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			t.strictEqual( error.message, 'oops', 'returns expected value' );
			clbk( null, 'boop' );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( result, 'boop', 'returns expected value' );
		}
		t.end();
	}
});

tape( 'if both functions return errors, the function invokes a callback with the error of the second function', function test( t ) {
	trythenAsync( x, y, done );

	function x( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( new Error( 'oops' ) );
		}
	}

	function y( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( new Error( 'woopsie') );
		}
	}

	function done( error ) {
		t.strictEqual( error.message, 'woopsie', 'returns expected value' );
		t.strictEqual( arguments.length, 1, 'provides a single argument' );
		t.end();
	}
});

tape( 'the function provides support for invoking a callback with multiple results (first function successful)', function test( t ) {
	trythenAsync( x, y, done );

	function x( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, 1, 2, 3 );
		}
	}

	function y( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, 4, 5, 6 );
		}
	}

	function done( error, a, b, c ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( a, 1, 'returns expected value' );
			t.strictEqual( b, 2, 'returns expected value' );
			t.strictEqual( c, 3, 'returns expected value' );
		}
		t.end();
	}
});

tape( 'the function provides support for invoking a callback with multiple results (first function errors)', function test( t ) {
	trythenAsync( x, y, done );

	function x( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( new Error( 'oops' ) );
		}
	}

	function y( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, 4, 5, 6 );
		}
	}

	function done( error, a, b, c ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( a, 4, 'returns expected value' );
			t.strictEqual( b, 5, 'returns expected value' );
			t.strictEqual( c, 6, 'returns expected value' );
		}
		t.end();
	}
});

tape( 'the function does not guarantee asynchronous execution', function test( t ) {
	var i = 0;
	trythenAsync( x, y, done );
	i = 1;

	function x( clbk ) {
		clbk( null, 'beep' );
	}

	function y( clbk ) {
		clbk( null, 'boop' );
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( result, 'beep', 'returns expected value' );
		}
		t.strictEqual( i, 0, 'releases the zalgo' );
		t.end();
	}
});
