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
var indexOf = require( './../../index-of' );
var defineProperty = require( './../../define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var propertiesIn = require( './../lib' );


// VARIABLES //

var hasSymbols = hasSymbolSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof propertiesIn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of an object\'s own and inherited property names and symbols', function test( t ) {
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
		this.a = 'b';
		defineProperty( this, 'beep', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': true
		});
		if ( hasSymbols ) {
			this[ symbols[ 0 ] ] = 0;
			defineProperty( this, symbols[ 1 ], {
				'configurable': false,
				'enumerable': false,
				'writable': true,
				'value': 1
			});
		}
		return this;
	}

	Foo.prototype.a = 'c';
	defineProperty( Foo.prototype, 'foo', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'bar'
	});
	if ( hasSymbols ) {
		Foo.prototype[ symbols[ 1 ] ] = '1';
		defineProperty( Foo.prototype, symbols[ 2 ], {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 2
		});
	}

	obj = new Foo();

	expected = [ 'a', 'foo', 'beep' ].concat( symbols );
	actual = propertiesIn( obj );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
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
		actual = propertiesIn( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
