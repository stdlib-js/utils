/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var noop = require( './../../noop' );
var isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );
var isWritableProperty = require( '@stdlib/assert/is-writable-property' );
var isConfigurableProperty = require( '@stdlib/assert/is-configurable-property' );
var propertyDescriptor = require( './../../property-descriptor' );
var setMemoizedReadOnly = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof setMemoizedReadOnly, 'function', 'main export is a function' );
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
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			setMemoizedReadOnly( value, 'foo', noop );
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
		t.throws( badValue( values[i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			setMemoizedReadOnly( {}, 'foo', value );
		};
	}
});

tape( 'the function sets a memoized read-only property on a provided object', function test( t ) {
	var expected;
	var count;
	var obj;
	var i;

	obj = {};
	count = 0;

	setMemoizedReadOnly( obj, 'foo', foo );
	t.equal( hasOwnProp( obj, 'foo' ), true, 'has property' );
	for ( i = 0; i < 10; i++ ) {
		t.equal( obj.foo, 'bar', 'returns expected value' );
		t.equal( count, 1, 'returns expected value' );
	}
	expected = {
		'configurable': false,
		'enumerable': true,
		'writable': false,
		'value': 'bar'
	};
	t.deepEqual( propertyDescriptor( obj, 'foo' ), expected, 'has expected descriptor' );
	t.end();

	function foo() {
		count += 1;
		return 'bar';
	}
});

tape( 'until deferred evaluation, the set property is temporarily configurable', function test( t ) {
	var obj;

	obj = {};
	setMemoizedReadOnly( obj, 'foo', foo );
	t.equal( hasOwnProp( obj, 'foo' ), true, 'has property' );
	t.equal( isEnumerableProperty( obj, 'foo' ), true, 'is enumerable' );
	t.equal( isWritableProperty( obj, 'foo' ), false, 'is not writable' );
	t.equal( isConfigurableProperty( obj, 'foo' ), true, 'is configurable' );

	t.equal( obj.foo, 'bar', 'returns expected value' );
	t.equal( isEnumerableProperty( obj, 'foo' ), true, 'is enumerable' );
	t.equal( isWritableProperty( obj, 'foo' ), false, 'is not writable' );
	t.equal( isConfigurableProperty( obj, 'foo' ), false, 'is not configurable' );
	t.end();

	function foo() {
		return 'bar';
	}
});
