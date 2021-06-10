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
var trythen = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof trythen, 'function', 'main export is a function' );
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
			trythen( value, noop );
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
			trythen( noop, value );
		};
	}
});

tape( 'if a function does not throw, the function returns the return value of the provided function', function test( t ) {
	var z;

	function x() {
		return 'beep';
	}

	function y() {
		return 'boop';
	}

	z = trythen( x, y );
	t.strictEqual( z, 'beep', 'returns expected value' );

	t.end();
});

tape( 'if a provided function throws, the function returns the return value of a second function', function test( t ) {
	var z;

	function x() {
		throw new Error( 'beep' );
	}

	function y() {
		return 'boop';
	}

	z = trythen( x, y );
	t.strictEqual( z, 'boop', 'returns expected value' );

	t.end();
});

tape( 'if a provided function throws, the function invokes the second function with the thrown error', function test( t ) {
	var z;

	function x() {
		throw new Error( 'beep' );
	}

	function y( err ) {
		t.strictEqual( err.message, 'beep', 'returns expected value' );
		return 'boop';
	}

	z = trythen( x, y );
	t.strictEqual( z, 'boop', 'returns expected value' );

	t.end();
});
