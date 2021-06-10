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
var ifthen = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ifthen, 'function', 'main export is a function' );
	t.end();
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
			ifthen( true, value, noop );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a function', function test( t ) {
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
			ifthen( true, noop, value );
		};
	}
});

tape( 'if a condition is truthy, the function invokes the second argument', function test( t ) {
	var z;

	function x() {
		return 'beep';
	}

	function y() {
		return 'boop';
	}

	z = ifthen( true, x, y );
	t.strictEqual( z, 'beep', 'returns expected value' );

	z = ifthen( [], x, y );
	t.strictEqual( z, 'beep', 'returns expected value' );

	z = ifthen( 'woot', x, y );
	t.strictEqual( z, 'beep', 'returns expected value' );

	z = ifthen( {}, x, y );
	t.strictEqual( z, 'beep', 'returns expected value' );

	t.end();
});

tape( 'if a condition is falsy, the function invokes the third argument', function test( t ) {
	var z;

	function x() {
		return 'beep';
	}

	function y() {
		return 'boop';
	}

	z = ifthen( false, x, y );
	t.strictEqual( z, 'boop', 'returns expected value' );

	z = ifthen( '', x, y );
	t.strictEqual( z, 'boop', 'returns expected value' );

	z = ifthen( null, x, y );
	t.strictEqual( z, 'boop', 'returns expected value' );

	z = ifthen( void 0, x, y );
	t.strictEqual( z, 'boop', 'returns expected value' );

	t.end();
});
