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

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var hasMapSupport = require( '@stdlib/assert/has-map-support' );
var hasWeakMapSupport = require( '@stdlib/assert/has-weakmap-support' );
var hasSetSupport = require( '@stdlib/assert/has-set-support' );
var hasWeakSetSupport = require( '@stdlib/assert/has-weakset-support' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var Number = require( '@stdlib/number/ctor' );
var Symbol = require( '@stdlib/symbol/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var constructorName = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof constructorName, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns the name of a value\'s constructor', function test( t ) {
	var expected;
	var values;
	var v;
	var i;

	values = [
		'a',
		new String( 'a' ),
		5,
		new Number( 5 ),
		NaN,
		true,
		new Boolean( true ),
		false,
		new Boolean( false ),
		void 0,
		null,
		[],
		{},
		function noop() {},
		/./,
		new Date(),
		Math,
		JSON,
		new Error(),
		new TypeError(),
		new SyntaxError(),
		new URIError(),
		new EvalError(),
		new ReferenceError(),
		new RangeError(),
		new Int8Array(),
		new Uint8Array(),
		new Uint8ClampedArray(),
		new Int16Array(),
		new Uint16Array(),
		new Int32Array(),
		new Uint32Array(),
		new Float32Array(),
		new Float64Array(),
		new ArrayBuffer(),
		string2buffer( 'beep' )
	];

	expected = [
		'String',
		'String',
		'Number',
		'Number',
		'Number',
		'Boolean',
		'Boolean',
		'Boolean',
		'Boolean',
		'Undefined',
		'Null',
		'Array',
		'Object',
		'Function',
		'RegExp',
		'Date',
		'Math',
		'JSON',
		'Error',
		'TypeError',
		'SyntaxError',
		'URIError',
		'EvalError',
		'ReferenceError',
		'RangeError',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Int16Array',
		'Uint16Array',
		'Int32Array',
		'Uint32Array',
		'Float32Array',
		'Float64Array',
		'ArrayBuffer',
		'Buffer'
	];

	for ( i = 0; i < values.length; i++ ) {
		v = constructorName( values[i] );
		t.equal( v, expected[i], 'returns '+expected[i]+' when provided '+values[i] );
	}
	t.end();
});

tape( 'the function supports environments lacking `Function.name` support', function test( t ) {
	var constructorName;
	var foo;
	var v;

	constructorName = proxyquire( './../lib/main.js', {
		'./../../native-class': nativeClass
	});

	function Foo() {
		var ctor = {};

		// Intercept simple constructor access by setting a `constructor` property to a plain object lacking a `name` property...
		ctor.toString = toString;
		this.constructor = ctor;

		return this;
	}
	foo = new Foo();
	v = constructorName( foo );

	t.equal( v, 'Foo', 'returns Foo' );
	t.end();

	function nativeClass() {
		return '[object Object]';
	}
	function toString() {
		return Foo.toString();
	}
});

tape( 'the function supports Map objects (ES2015)', function test( t ) {
	var v;
	if ( hasMapSupport() ) {
		v = constructorName( new Map() );
		t.equal( v, 'Map', 'returns Map' );
	}
	t.end();
});

tape( 'the function supports WeakMap objects (ES2015)', function test( t ) {
	var v;
	if ( hasWeakMapSupport() ) {
		v = constructorName( new WeakMap() );
		t.equal( v, 'WeakMap', 'returns WeakMap' );
	}
	t.end();
});

tape( 'the function supports Set objects (ES2015)', function test( t ) {
	var v;
	if ( hasSetSupport() ) {
		v = constructorName( new Set() );
		t.equal( v, 'Set', 'returns Set' );
	}
	t.end();
});

tape( 'the function supports WeakSet objects (ES2015)', function test( t ) {
	var v;
	if ( hasWeakSetSupport() ) {
		v = constructorName( new WeakSet() );
		t.equal( v, 'WeakSet', 'returns WeakSet' );
	}
	t.end();
});

tape( 'the function supports Symbol objects (ES2015)', function test( t ) {
	var v;
	if ( hasSymbolSupport() ) {
		v = constructorName( Symbol( 'foo' ) );
		t.equal( v, 'Symbol', 'returns Symbol' );
	}
	t.end();
});

tape( 'the function supports custom objects', function test( t ) {
	var v;
	function Person() {
		return this;
	}
	v = constructorName( new Person() );
	t.equal( v, 'Person', 'returns Person' );
	t.end();
});

tape( 'if a value\'s constructor is an anonymous function, the function returns an empty string', function test( t ) {
	var v = constructorName( new (function () {})() ); // eslint-disable-line func-names, no-extra-parens
	t.equal( v, '', 'returns empty string' );

	t.end();
});

// TODO: add generator function test
