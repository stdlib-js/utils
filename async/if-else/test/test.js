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
var ifelseAsync = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ifelseAsync, 'function', 'main export is a function' );
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
			ifelseAsync( value, 1.0, -1.0, noop );
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
			ifelseAsync( noop, 1.0, -1.0, value );
		};
	}
});

tape( 'if a predicate function returns a truthy value, the function returns the second argument', function test( t ) {
	ifelseAsync( predicate, 'beep', 'boop', done );

	function predicate( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, true );
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

tape( 'if a predicate function returns a falsy value, the function returns the third argument', function test( t ) {
	ifelseAsync( predicate, 'beep', 'boop', done );

	function predicate( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, false );
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

tape( 'if a predicate function returns an error, the function returns the error', function test( t ) {
	ifelseAsync( predicate, 'beep', 'boop', done );

	function predicate( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( new Error( 'beep' ) );
		}
	}

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.end();
	}
});

tape( 'the function does not guarantee asynchronous execution', function test( t ) {
	var i = 0;
	ifelseAsync( predicate, 'beep', 'boop', done );
	i = 1;

	function predicate( clbk ) {
		clbk( null, true );
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
