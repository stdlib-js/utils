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
var defineProperty = require( './../../define-property' );
var indexOf = require( './../../index-of' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var writableProperties = require( './../lib' );


// VARIABLES //

var hasSymbols = hasSymbolSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof writableProperties, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of an object\'s own writable property names and symbols', function test( t ) {
	var expected;
	var actual;
	var syms;
	var obj;
	var idx;
	var i;

	if ( hasSymbols ) {
		syms = [
			Symbol( 'a' ),
			Symbol( 'b' ),
			Symbol( 'c' ),
			Symbol( 'd' )
		];
	} else {
		syms = [];
	}

	function Foo() {
		this.a = 'a';
		defineProperty( this, 'b', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'b'
		});
		if ( hasSymbols ) {
			this[ syms[ 0 ] ] = 'a';
			defineProperty( this, syms[ 1 ], {
				'configurable': false,
				'enumerable': false,
				'writable': false,
				'value': 'b'
			});
		}
		return this;
	}

	Foo.prototype.c = 'c';
	defineProperty( Foo.prototype, 'd', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'd'
	});
	if ( hasSymbols ) {
		Foo.prototype[ syms[ 2 ] ] = 'c';
		defineProperty( Foo.prototype, syms[ 3 ], {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'd'
		});
	}

	obj = new Foo();

	expected = [ 'a' ];
	if ( hasSymbols ) {
		expected.push( syms[ 0 ] );
	}
	actual = writableProperties( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own writable properties (string)', function test( t ) {
	var actual = writableProperties( 'foo' );
	t.deepEqual( actual, [], 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty array if provided non-string primitives', function test( t ) {
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
	if ( hasSymbols ) {
		values.push( Symbol( 'beep' ) );
	}
	expected = [];

	for ( i = 0; i < values.length; i++ ) {
		actual = writableProperties( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+String( values[ i ] ) );
	}
	t.end();
});
