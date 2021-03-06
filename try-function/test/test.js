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
var wrap = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof wrap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function will throw an error if not provided a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			wrap( value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	t.strictEqual( typeof wrap( noop ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function having the same signature', function test( t ) {
	var f;

	f = wrap( add );
	t.strictEqual( add( 1, 2, 3 ), f( 1, 2, 3 ), 'returns same results' );
	t.end();

	function add( a, b, c ) {
		return a + b + c;
	}
});

tape( 'the function returns any trapped errors', function test( t ) {
	var out;
	var f;

	f = wrap( fcn );
	out = f();

	t.strictEqual( out instanceof Error, true, 'returns an error instance' );
	t.strictEqual( out.message, 'beep boop', 'returns trapped error' );
	t.end();

	function fcn() {
		throw new Error( 'beep boop' );
	}
});

tape( 'the function returns any trapped errors (thrown string literal)', function test( t ) {
	var out;
	var f;

	f = wrap( fcn );
	out = f();

	t.strictEqual( out instanceof Error, true, 'returns an error instance' );
	t.strictEqual( out.message, 'beep boop', 'returns trapped error' );
	t.end();

	function fcn() {
		throw 'beep boop'; // eslint-disable-line no-throw-literal
	}
});

tape( 'the function returns any trapped errors (thrown number literal)', function test( t ) {
	var out;
	var f;

	f = wrap( fcn );
	out = f();

	t.strictEqual( out instanceof Error, true, 'returns an error instance' );
	t.strictEqual( out.message, '3.14', 'returns trapped error' );
	t.end();

	function fcn() {
		throw 3.14; // eslint-disable-line no-throw-literal
	}
});

tape( 'the function returns any trapped errors (thrown boolean literal)', function test( t ) {
	var out;
	var f;

	f = wrap( fcn );
	out = f();

	t.strictEqual( out instanceof Error, true, 'returns an error instance' );
	t.strictEqual( out.message, 'true', 'returns trapped error' );
	t.end();

	function fcn() {
		throw true; // eslint-disable-line no-throw-literal
	}
});

tape( 'the function returns any trapped errors (thrown object literal)', function test( t ) {
	var out;
	var f;

	f = wrap( fcn );
	out = f();

	t.strictEqual( out instanceof Error, true, 'returns an error instance' );
	t.strictEqual( out.message, '{"beep":"boop"}', 'returns trapped error' );
	t.end();

	function fcn() {
		var obj = {
			'beep': 'boop'
		};
		throw obj;
	}
});

tape( 'the function supports setting the `this` context', function test( t ) {
	var f;

	f = wrap( fcn, {
		'beep': 'boop'
	});

	t.strictEqual( f(), 'boop', 'returns property bound to `this` context' );
	t.end();

	function fcn() {
		return this.beep; // eslint-disable-line no-invalid-this
	}
});

tape( 'the function will not trap and return errors which occur in nested asynchronous function scopes', function test( t ) {
	var f = wrap( fcn );
	t.strictEqual( f(), void 0, 'returns undefined' );

	function fcn() {
		setTimeout( clbk, 0 );
	}
	function clbk() {
		t.throws( createError, Error, 'throws an untrapped error' );
		t.end();
	}
	function createError() {
		throw new Error( 'beep boop' );
	}
});
