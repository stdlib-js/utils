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
var defineProperty = require( '@stdlib/utils/define-property' );
var indexOf = require( '@stdlib/utils/index-of' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var getOwnPropertyNames = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( typeof Object.getOwnPropertyNames === 'undefined' )
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getOwnPropertyNames, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of an object\'s own property names', opts, function test( t ) {
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
		return this;
	}

	Foo.prototype.foo = [ 'bar' ];

	obj = new Foo();

	expected = [ 'beep', 'a' ];
	actual = getOwnPropertyNames( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own property names (arguments)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var i;

	expected = [ '0', 'length' ];
	actual = getOwnPropertyNames( arguments );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own property names (string)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var i;

	expected = [ '0', '1', '2', 'length' ];
	actual = getOwnPropertyNames( 'foo' );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function does not ignore non-enumerable properties (in contrast to `Object.keys`)', opts, function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {};
	defineProperty( obj, 'foo', {
		'configurable': true,
		'writable': true,
		'enumerable': false,
		'value': 'bar'
	});

	actual = getOwnPropertyNames( obj );
	expected = [ 'foo' ];

	t.deepEqual( actual, expected, 'does not ignore non-enumerable properties' );
	t.end();
});

tape( 'the function returns an empty array if provided non-string primitives', opts, function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false,
		void 0,
		null
	];
	expected = [];

	for ( i = 0; i < values.length; i++ ) {
		actual = getOwnPropertyNames( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns an empty array if provided a Symbol', opts, function test( t ) {
	var expected;
	var actual;

	if ( hasSymbolSupport() ) {
		actual = getOwnPropertyNames( Symbol( 'beep' ) );
		expected = [];
		t.deepEqual( actual, expected, 'returns expected value' );
	} else {
		t.pass( 'environment does not support symbols' );
	}
	t.end();
});
