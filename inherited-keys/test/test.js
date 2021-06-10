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
var inherit = require( '@stdlib/utils/inherit' );
var inheritedKeys = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inheritedKeys, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer for the inheritance level', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			inheritedKeys( {}, value );
		};
	}
});

tape( 'the function returns an array of an object\'s inherited enumerable property names', function test( t ) {
	var expected;
	var actual;
	var obj;
	var idx;
	var i;

	function Foo() {
		this.a = 'a';
		this.b = 'b';
		defineProperty( this, 'c', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'c'
		});
		defineProperty( this, 'f', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'f'
		});
		return this;
	}

	Foo.prototype.d = 'd';
	defineProperty( Foo.prototype, 'e', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'e'
	});
	Foo.prototype.f = 'f';

	obj = new Foo();

	expected = [ 'd', 'f' ];
	actual = inheritedKeys( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s inherited enumerable property names (multiple inheritance)', function test( t ) {
	var expected;
	var actual;
	var obj;
	var idx;
	var i;

	function Bar() {
		this.a = 'a';
		this.b = 'b';
		defineProperty( this, 'c', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'c'
		});
		return this;
	}

	Bar.prototype.c = 'c';
	Bar.prototype.d = 'd';
	defineProperty( Bar.prototype, 'e', {
		'configurable': true,
		'enumerable': true,
		'writable': false,
		'value': 'e'
	});

	function Foo() {
		Bar.call( this );
		this.a = 'a';
		this.b = 'b';
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'd'
		});
		return this;
	}

	inherit( Foo, Bar );

	defineProperty( Foo.prototype, 'e', {
		'configurable': true,
		'enumerable': false,
		'writable': false,
		'value': 'e'
	});
	Foo.prototype.f = 'f';
	defineProperty( Foo.prototype, 'g', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'g'
	});

	obj = new Foo();

	expected = [ 'f', 'c', 'd' ];
	actual = inheritedKeys( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function supports limiting the inheritance level', function test( t ) {
	var expected;
	var actual;
	var obj;
	var idx;
	var i;

	function Bar() {
		this.boop = 'beep';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'e'
		});
		return this;
	}

	Bar.prototype.bar = [ 'foo' ];
	defineProperty( Bar.prototype, 'bap', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'baz'
	});

	function Foo() {
		Bar.call( this );
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
		return this;
	}

	inherit( Foo, Bar );

	Foo.prototype.foo = [ 'bar' ];
	defineProperty( Foo.prototype, 'baz', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'bap'
	});

	obj = new Foo();

	expected = [ 'foo' ];
	actual = inheritedKeys( obj, 1 );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
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
		actual = inheritedKeys( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
