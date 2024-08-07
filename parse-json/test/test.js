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
var noop = require( './../../noop' );
var parseJSON = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof parseJSON, 'function', 'main export is a function' );
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
			parseJSON( value );
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
			parseJSON( value, noop );
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
			parseJSON( '{"a":"b"}', value );
		};
	}
});

tape( 'the function returns a JSON value if provided valid JSON', function test( t ) {
	var expected;
	var actual;

	expected = {
		'beep': 'boop'
	};
	actual = parseJSON( '{"beep":"boop"}' );
	t.deepEqual( actual, expected, 'deep equal' );

	expected = null;
	actual = parseJSON( 'null' );
	t.equal( actual, expected, 'returns null' );

	expected = true;
	actual = parseJSON( 'true' );
	t.equal( actual, expected, 'returns true' );

	expected = 3.14;
	actual = parseJSON( '3.14' );
	t.equal( actual, expected, 'returns 3.14' );

	t.end();
});

tape( 'the function returns an error if provided invalid JSON', function test( t ) {
	var out = parseJSON( '{"beep":"boop}' );
	t.equal( out instanceof Error, true, 'returns an error' );
	t.end();
});

tape( 'the function supports providing a custom reviver function', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '{"beep":"boop","a":"b"}';
	expected = {
		'beep': 'boop'
	};
	actual = parseJSON( str, reviver );

	t.deepEqual( actual, expected, 'supports custom reviver' );

	t.end();

	function reviver( key, value ) {
		if ( key === '' ) {
			return value;
		}
		if ( key === 'beep' ) {
			return value;
		}
	}
});
