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
var indexOf = require( '@stdlib/utils/index-of' );
var defineProperty = require( '@stdlib/utils/define-property' );
var nonEnumerablePropertyNames = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nonEnumerablePropertyNames, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of an object\'s own non-enumerable property names', function test( t ) {
	var expected;
	var actual;
	var obj;
	var idx;
	var i;

	function Foo() {
		this.beep = 'boop';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'e'
		});
		defineProperty( this, 'f', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'g'
		});
		defineProperty( this, 'h', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'i'
		});
		return this;
	}

	Foo.prototype.foo = [ 'bar' ];
	defineProperty( Foo.prototype, 'baz', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'bap'
	});

	obj = new Foo();

	expected = [ 'd', 'f', 'h' ];
	actual = nonEnumerablePropertyNames( obj );

	t.strictEqual( actual.length, 3, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own non-enumerable property names (string)', function test( t ) {
	var expected;
	var actual;

	expected = [ 'length' ];
	actual = nonEnumerablePropertyNames( 'foo' );

	t.deepEqual( actual, expected, 'returns expected results' );
	t.end();
});

tape( 'the function returns an empty array if provided `null` or `undefined`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		void 0,
		null
	];
	expected = [];

	for ( i = 0; i < values.length; i++ ) {
		actual = nonEnumerablePropertyNames( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns an empty array if provided a non-string primitive', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false
	];
	expected = [];

	for ( i = 0; i < values.length; i++ ) {
		actual = nonEnumerablePropertyNames( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
