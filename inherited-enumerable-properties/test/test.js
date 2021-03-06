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
var inherit = require( './../../inherit' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var inheritedEnumerableProperties = require( './../lib' ); // eslint-disable-line id-length


// VARIABLES //

var hasSymbols = hasSymbolSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inheritedEnumerableProperties, 'function', 'main export is a function' );
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
			inheritedEnumerableProperties( {}, value );
		};
	}
});

tape( 'the function returns an array of an object\'s inherited enumerable properties', function test( t ) {
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
		if ( hasSymbols ) {
			this[ syms[ 0 ] ] = 'a';
			defineProperty( this, syms[ 1 ], {
				'configurable': false,
				'enumerable': false,
				'writable': true,
				'value': 'b'
			});
		}
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
	if ( hasSymbols ) {
		Foo.prototype[ syms[ 1 ] ] = 'b';
		Foo.prototype[ syms[ 2 ] ] = 'c';
		defineProperty( Foo.prototype, syms[ 3 ], {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'd'
		});
	}

	obj = new Foo();

	expected = [ 'd', 'f' ];
	if ( hasSymbols ) {
		expected.push( syms[ 1 ], syms[ 2 ] );
	}
	actual = inheritedEnumerableProperties( obj );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s inherited enumerable properties (multiple inheritance)', function test( t ) {
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
			Symbol( 'd' ),
			Symbol( 'e' ),
			Symbol( 'f' ),
			Symbol( 'g' )
		];
	} else {
		syms = [];
	}

	function Bar() {
		this.a = 'a';
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'd'
		});
		if ( hasSymbols ) {
			this[ syms[ 0 ] ] = 'a';
		}
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
	Bar.prototype.e = 'e';
	defineProperty( Bar.prototype, 'f', {
		'configurable': true,
		'enumerable': false,
		'writable': false,
		'value': 'f'
	});
	if ( hasSymbols ) {
		Bar.prototype[ syms[ 2 ] ] = 'c';
		defineProperty( Bar.prototype, syms[ 3 ], {
			'configurable': true,
			'enumerable': false,
			'writable': false,
			'value': 'd'
		});
		defineProperty( Bar.prototype, syms[ 4 ], {
			'configurable': false,
			'enumerable': true,
			'writable': false,
			'value': 'e'
		});
		Bar.prototype[ syms[ 6 ] ] = 'g';
	}

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
		if ( hasSymbols ) {
			defineProperty( this, syms[ 1 ], {
				'configurable': false,
				'enumerable': false,
				'writable': true,
				'value': 'b'
			});
		}
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
	if ( hasSymbols ) {
		Foo.prototype[ syms[ 2 ] ] = 'c';
		defineProperty( Foo.prototype, syms[ 3 ], {
			'configurable': true,
			'enumerable': false,
			'writable': false,
			'value': 'd'
		});
		defineProperty( Foo.prototype, syms[ 5 ], {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'f'
		});
		defineProperty( Foo.prototype, syms[ 6 ], {
			'configurable': true,
			'enumerable': false,
			'writable': false,
			'value': 'g'
		});
	}

	obj = new Foo();

	expected = [ 'b', 'c', 'f' ];
	if ( hasSymbols ) {
		expected.push( syms[ 2 ], syms[ 4 ] );
	}
	actual = inheritedEnumerableProperties( obj );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	idx = indexOf( actual, 'e' );
	t.strictEqual( idx, -1, 'does not contain property' );
	if ( hasSymbols ) {
		idx = indexOf( actual, syms[ 6 ] );
		t.strictEqual( idx, -1, 'does not contain property' );
	}
	t.end();
});

tape( 'the function supports limiting the inheritance level', function test( t ) {
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
			Symbol( 'd' ),
			Symbol( 'e' )
		];
	} else {
		syms = [];
	}

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
		if ( hasSymbols ) {
			this[ syms[ 0 ] ] = 'a';
		}
		return this;
	}

	Bar.prototype.bar = [ 'foo' ];
	defineProperty( Bar.prototype, 'bap', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'baz'
	});
	if ( hasSymbols ) {
		Bar.prototype[ syms[ 2 ] ] = 'c';
		defineProperty( Bar.prototype, syms[ 3 ], {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': 'd'
		});
	}

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
		if ( hasSymbols ) {
			defineProperty( this, syms[ 1 ], {
				'configurable': false,
				'enumerable': false,
				'writable': true,
				'value': 'b'
			});
		}
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
	if ( hasSymbols ) {
		Foo.prototype[ syms[ 2 ] ] = 'c';
		defineProperty( Foo.prototype, syms[ 4 ], {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'e'
		});
	}

	obj = new Foo();

	expected = [ 'foo' ];
	if ( hasSymbols ) {
		expected.push( syms[ 2 ] );
	}
	actual = inheritedEnumerableProperties( obj, 1 );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	idx = indexOf( actual, 'bap' );
	t.strictEqual( idx === -1, true, 'does not contain property' );
	if ( hasSymbols ) {
		idx = indexOf( actual, syms[ 3 ] );
		t.strictEqual( idx === -1, true, 'does not contain property' );
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
		actual = inheritedEnumerableProperties( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
