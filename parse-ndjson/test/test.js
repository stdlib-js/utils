/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var noop = require( './../../noop' );
var parseNDJSON = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof parseNDJSON, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		null,
		void 0,
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
			parseNDJSON( value );
		};
	}
});

tape( 'the function throws if not provided a string (reviver)', function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		null,
		void 0,
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
			parseNDJSON( value, noop );
		};
	}
});

tape( 'the function throws if provided a reviver argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			parseNDJSON( '{"a":"b"}\n{"c": "d"}', value );
		};
	}
});

tape( 'the function returns an array of parsed values if provided valid NDJSON', function test( t ) {
	var expected;
	var actual;

	expected = [
		{
			'beep': 'boop'
		},
		{
			'example': 42
		},
		{
			'data': [ 1, 2, 3 ]
		}
	];
	actual = parseNDJSON( '{"beep":"boop"}\n{"example":42}\n{"data":[1,2,3]}' );
	t.deepEqual( actual, expected, 'deep equal' );

	expected = [];
	actual = parseNDJSON('');

	t.deepEqual( actual, expected, 'returns an empty array' );

	t.end();
});

tape( 'the function returns an error if provided invalid NDJSON', function test( t ) {
	var out = parseNDJSON( '{"beep":"boop"' );
	t.equal( out instanceof SyntaxError, true, 'returns an error' );
	t.end();
});

tape( 'the function supports providing a custom reviver function', function test( t ) {
	var expected;
	var actual;
	var str;

	function reviver( key, value ) {
		if ( key === '' || key === 'beep' ) {
			return ( typeof value === 'string' ) ? value.toUpperCase() : value;
		}
		return ( typeof value === 'number' ) ? value * 2 : value;
	}

	str = '{"beep":"boop"}\n{"value": 20}\n{"numbers": [1,2,3]}';
	expected = [
		{
			'beep': 'BOOP'
		},
		{
			'value': 40
		},
		{
			'numbers': [ 2, 4, 6 ]
		}
	];
	actual = parseNDJSON( str, reviver );

	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
