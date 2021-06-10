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
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var inherit = require( '@stdlib/utils/inherit' );
var inheritedPropertySymbols = require( './../lib' );


// VARIABLES //

var hasSymbols = hasSymbolSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inheritedPropertySymbols, 'function', 'main export is a function' );
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
			inheritedPropertySymbols( {}, value );
		};
	}
});

tape( 'the function returns an array of an object\'s inherited symbol properties', function test( t ) {
	var expected;
	var symbols;
	var actual;
	var obj;
	var idx;
	var i;

	if ( hasSymbols ) {
		symbols = [ Symbol( 'a' ), Symbol( 'b' ), Symbol( 'c' ) ];
	} else {
		symbols = [];
	}

	function Foo() {
		if ( hasSymbols ) {
			this[ symbols[ 0 ] ] = 0;
			this[ symbols[ 1 ] ] = 1;
		}
		return this;
	}

	if ( hasSymbols ) {
		Foo.prototype[ symbols[ 1 ] ] = 1;
		Foo.prototype[ symbols[ 2 ] ] = 2;
	}

	obj = new Foo();

	if ( hasSymbols ) {
		expected = [ symbols[ 1 ], symbols[ 2 ] ];
	} else {
		expected = [];
	}
	actual = inheritedPropertySymbols( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property symbol: '+expected[i].toString() );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s inherited symbol properties (multiple inheritance)', function test( t ) {
	var expected;
	var symbols;
	var actual;
	var obj;
	var idx;
	var i;

	if ( hasSymbols ) {
		symbols = [ Symbol( 'a' ), Symbol( 'b' ), Symbol( 'c' ) ];
	} else {
		symbols = [];
	}

	function Bar() {
		return this;
	}

	if ( hasSymbols ) {
		Bar.prototype[ symbols[ 1 ] ] = 1;
		Bar.prototype[ symbols[ 2 ] ] = 2;
	}

	function Foo() {
		if ( hasSymbols ) {
			this[ symbols[ 0 ] ] = 0;
			this[ symbols[ 1 ] ] = 1;
		}
		return this;
	}

	inherit( Foo, Bar );

	if ( hasSymbols ) {
		Foo.prototype[ symbols[ 2 ] ] = 2;
	}

	obj = new Foo();

	if ( hasSymbols ) {
		expected = [ symbols[ 1 ], symbols[ 2 ] ];
	} else {
		expected = [];
	}
	actual = inheritedPropertySymbols( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property symbol: '+expected[i].toString() );
	}
	t.end();
});

tape( 'the function supports limiting the inheritance level', function test( t ) {
	var expected;
	var symbols;
	var actual;
	var obj;
	var idx;
	var i;

	if ( hasSymbols ) {
		symbols = [ Symbol( 'a' ), Symbol( 'b' ), Symbol( 'c' ) ];
	} else {
		symbols = [];
	}

	function Bar() {
		return this;
	}

	if ( hasSymbols ) {
		Bar.prototype[ symbols[ 1 ] ] = 1;
	}

	function Foo() {
		if ( hasSymbols ) {
			this[ symbols[ 0 ] ] = 0;
			this[ symbols[ 1 ] ] = 1;
		}
		return this;
	}

	inherit( Foo, Bar );

	if ( hasSymbols ) {
		Foo.prototype[ symbols[ 2 ] ] = 2;
	}

	obj = new Foo();

	if ( hasSymbols ) {
		expected = [ symbols[ 2 ] ];
	} else {
		expected = [];
	}
	actual = inheritedPropertySymbols( obj, 1 );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property symbol: '+expected[i].toString() );
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
		actual = inheritedPropertySymbols( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
