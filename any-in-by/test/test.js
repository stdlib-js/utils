/*
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
var anyInBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof anyInBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object', function test( t ) {
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
		function noop() {},
		/.*/,
		new Date()
	];
	for ( i =0; i < values.length; i++ ) {
		t.throws( badValue( values ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			anyInBy( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function', function test( t ) {
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
		function noop() {},
		/.*/,
		new Date()
	];
	for ( i =0; i < values.length; i++ ) {
		t.throws( badValue( values ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			anyInBy( value );
		};
	}
});

tape( 'the function throws an error if predicate is not a function', function test( t ) {
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
		function noop() {},
		/.*/,
		new Date()
	];
	for ( i =0; i < values.length; i++ ) {
		t.throws( badValue( values ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			anyInBy( value, value );
		};
	}
});

tape( 'the function returns `true` if at least one own property passes a test', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 20,
		'b': 22,
		'c': 25
	};

	function overAge( value ) {
		return ( value > 18 );
	}

	bool = anyInBy( obj, overAge );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if one or more own properties pass a test', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 10,
		'b': 12,
		'c': 15
	};

	function underAge( value ) {
		return ( value < 18 );
	}

	bool = anyInBy( obj, underAge );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if none of the own properties passes a test', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 20,
		'b': 22,
		'c': 35
	};

	function underAge( value ) {
		return ( value < 18 );
	}

	bool = anyInBy( obj, underAge );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});
