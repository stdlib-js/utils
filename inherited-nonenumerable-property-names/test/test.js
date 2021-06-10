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
var inheritedNonEnumerablePropertyNames = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inheritedNonEnumerablePropertyNames, 'function', 'main export is a function' );
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
			inheritedNonEnumerablePropertyNames( {}, value );
		};
	}
});

tape( 'the function returns an array of an object\'s inherited non-enumerable property names', function test( t ) {
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

	expected = [ 'e' ];
	actual = inheritedNonEnumerablePropertyNames( obj );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s inherited non-enumerable property names (multiple inheritance)', function test( t ) {
	var expected;
	var actual;
	var obj;
	var idx;
	var i;

	function Bar() {
		this.a = 'a';
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'd'
		});
		return this;
	}

	Bar.prototype.b = 'b';
	Bar.prototype.c = 'c';
	defineProperty( Bar.prototype, 'd', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'd'
	});
	defineProperty( Bar.prototype, 'f', {
		'configurable': true,
		'enumerable': false,
		'writable': false,
		'value': 'f'
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

	Foo.prototype.b = 'b';
	defineProperty( Foo.prototype, 'e', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'e'
	});
	defineProperty( Foo.prototype, 'f', {
		'configurable': true,
		'enumerable': true,
		'writable': false,
		'value': 'f'
	});

	obj = new Foo();

	expected = [ 'e', 'd' ];
	actual = inheritedNonEnumerablePropertyNames( obj );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	idx = indexOf( actual, 'f' );
	t.strictEqual( idx, -1, 'does not contain property' );
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

	expected = [ 'baz' ];
	actual = inheritedNonEnumerablePropertyNames( obj, 1 );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	idx = indexOf( actual, 'bap' );
	t.strictEqual( idx === -1, true, 'does not contain property' );
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
		actual = inheritedNonEnumerablePropertyNames( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
