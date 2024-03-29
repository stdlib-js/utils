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
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var hasProxySupport = require( '@stdlib/assert/has-proxy-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var Proxy = require( '@stdlib/proxy/ctor' );
var getOwnPropertyDescriptor = require( './../../property-descriptor' );
var getOwnPropertyDescriptors = require( './../lib/builtin.js' );


// VARIABLES //

var opts = {
	'skip': ( typeof Object.getOwnPropertyDescriptors === 'undefined' ) // eslint-disable-line node/no-unsupported-features/es-builtins
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getOwnPropertyDescriptors, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns own property descriptors', opts, function test( t ) {
	var expected;
	var actual;
	var obj;

	function Foo() {
		this.beep = 'boop';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'e'
		});
		return this;
	}

	Foo.prototype.foo = [ 'bar' ];

	obj = new Foo();

	expected = {
		'beep': {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': 'boop'
		},
		'a': {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': obj.a
		},
		'd': {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'e'
		}
	};
	actual = getOwnPropertyDescriptors( obj );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty object if provided a non-string primitive or `null`', opts, function test( t ) {
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
	expected = {};

	for ( i = 0; i < values.length; i++ ) {
		actual = getOwnPropertyDescriptors( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function supports symbols', opts, function test( t ) {
	var expected;
	var actual;
	var obj;
	var sym;

	if ( hasSymbolSupport() ) {
		obj = {};
		sym = Symbol( 'beep' );
		obj[ sym ] = 'boop';

		actual = getOwnPropertyDescriptors( obj );
		expected = {};
		expected[ sym ] = {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': 'boop'
		};
		t.deepEqual( actual, expected, 'returns expected value' );
	} else {
		t.pass( 'environment does not support symbols' );
	}
	t.end();
});

tape( 'the function supports proxies', opts, function test( t ) {
	var handlers;
	var expected;
	var actual;
	var obj;
	var o;

	if ( hasProxySupport() ) {
		obj = {
			'foo': 'bar'
		};
		handlers = {
			'getOwnPropertyDescriptor': propertyDescriptor,
			'ownKeys': ownKeys
		};
		o = new Proxy( obj, handlers );

		actual = getOwnPropertyDescriptors( o );
		expected = {
			'foo': {
				'configurable': true,
				'enumerable': true,
				'writable': true,
				'value': 'bar'
			}
		};
		t.deepEqual( actual, expected, 'returns expected value' );
	} else {
		t.pass( 'environment does not support proxy objects' );
	}
	t.end();

	function propertyDescriptor( target, key ) {
		var desc = getOwnPropertyDescriptor( target, key );
		return ( desc === null ) ? void 0 : desc;
	}

	function ownKeys() {
		return [ 'foo', 'bar' ];
	}
});

tape( 'the function supports proxies (symbols)', opts, function test( t ) {
	var handlers;
	var expected;
	var actual;
	var obj;
	var sym;
	var o;

	if ( hasProxySupport() && hasSymbolSupport() ) {
		obj = {};
		sym = Symbol( 'foo' );
		obj[ sym ] = 'bar';
		handlers = {
			'getOwnPropertyDescriptor': propertyDescriptor,
			'ownKeys': ownKeys
		};
		o = new Proxy( obj, handlers );

		actual = getOwnPropertyDescriptors( o );
		expected = {};
		expected[ sym ] = {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': 'boop'
		};
		t.deepEqual( actual, expected, 'returns expected value' );
	} else {
		t.pass( 'environment does not support proxy objects and/or symbols' );
	}
	t.end();

	function propertyDescriptor( target, key ) {
		var desc = getOwnPropertyDescriptor( target, key );
		return ( desc === null ) ? void 0 : desc;
	}

	function ownKeys() {
		return [ sym, Symbol( 'bar' ) ];
	}
});
