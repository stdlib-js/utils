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
var anyOwnBy = require( './../lib' );


// FUNCTIONS //

function isPositive( v ) {
	return ( v > 0 );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof anyOwnBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an object', function test( t ) {
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
			anyOwnBy( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a predicate function', function test( t ) {
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
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			anyOwnBy( {}, value );
		};
	}
});

tape( 'if provided an empty object, the function returns `false`', function test( t ) {
	var bool;
	var obj;

	function foo() {
		t.fail( 'should not be invoked' );
	}
	obj = {};
	bool = anyOwnBy( obj, foo );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if any one property pass a test', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': -1,
		'b': 2,
		'c': -3
	};

	bool = anyOwnBy( obj, isPositive );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if no properties pass a test', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': -1,
		'b': -2,
		'c': -3,
		'd': -34
	};

	bool = anyOwnBy( obj, isPositive );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var bool;
	var ctx;
	var obj;

	function verify( value ) {
		/* eslint-disable no-invalid-this */
		this.sum += value;
		this.count += 1;
		return ( value > 0 );
	}

	ctx = {
		'sum': 0,
		'count': 0
	};

	obj = {
		'a': -1,
		'b': -2,
		'c': 3,
		'd': -14
	};

	bool = anyOwnBy( obj, verify, ctx );

	t.strictEqual( bool, true, 'returns true' );
	t.strictEqual( ctx.sum/ctx.count, 0, 'expected result' );

	t.end();
});
