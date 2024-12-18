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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var objectKeys = require( './../../keys' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var defineProperty = require( './../lib/polyfill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof defineProperty, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not an object, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided ' + (typeof values[i]) );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			defineProperty( value, 'a', {
				'value': 'b'
			});
		};
	}
});

tape( 'if the third argument is not an object, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided ' + (typeof values[i]) );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			defineProperty( {}, 'a', value );
		};
	}
});

tape( 'if the property descriptor contains accessors and a value or writable attribute, the function will throw an error', function test( t ) {
	function badValue() {
		defineProperty( {}, 'a', {
			'value': 'b',
			'get': function getter() {
				return 'b';
			}
		});
	}
	t.throws( badValue, Error, 'throws error' );
	t.end();
});

tape( 'the property is writable no matter the value of the `writable` option', function test( t ) {
	var obj = {};
	defineProperty( obj, 'foo', {
		'value': 'bar',
		'writable': false
	});
	obj.foo = 'bip';
	t.strictEqual( obj.foo, 'bip', 'returns new value' );

	obj = {};
	defineProperty( obj, 'foo', {
		'value': 'bar',
		'writable': true
	});
	obj.foo = 'bip';
	t.strictEqual( obj.foo, 'bip', 'returns new value' );

	t.end();
});

tape( 'the property is configurable no matter the value of the `configurable` option', function test( t ) {
	var obj = {};
	defineProperty( obj, 'foo', {
		'value': 'bar',
		'configurable': false
	});
	delete obj.foo;
	t.strictEqual( hasOwnProp( obj, 'foo' ), false, 'has no `foo` property' );

	obj = {};
	defineProperty( obj, 'foo', {
		'value': 'bar',
		'configurable': true
	});
	delete obj.foo;
	t.strictEqual( hasOwnProp( obj, 'foo' ), false, 'has no `foo` property' );

	t.end();
});

tape( 'the property is enumerable no matter the value of the `enumerable` option', function test( t ) {
	var obj;

	obj = {};
	defineProperty( obj, 'foo', {
		'value': 'bar',
		'enumerable': false
	});
	t.equal( objectKeys( obj )[ 0 ], 'foo', 'property is enumerable' );

	obj = {};
	defineProperty( obj, 'foo', {
		'value': 'bar',
		'enumerable': true
	});
	t.equal( objectKeys( obj )[ 0 ], 'foo', 'property is enumerable' );

	t.end();
});

tape( 'can use a getter function to define a property', function test( t ) {
	var obj;

	obj = {
		'a': 3.0
	};

	defineProperty( obj, 'a2', {
		'get': function getter() {
			return this.a*this.a;
		}
	});
	t.strictEqual( obj.a2, 9.0, 'returns expected value' );
	t.end();
});

tape( 'can use a setter function to define a property', function test( t ) {
	var obj;

	obj = {
		'a': 3
	};

	defineProperty( obj, 'a2', {
		'set': function setter( x ) {
			this.a = sqrt( x );
		}
	});
	obj.a2 = 81.0;
	t.strictEqual( obj.a, 9, 'returns expected value' );
	t.end();
});

tape( 'can override a getter function when defining a property', function test( t ) {
	var obj = {};
	defineProperty( obj, 'hello', {
		'get': function getter() {
			return 'world';
		}
	});
	t.strictEqual( obj.hello, 'world', 'returns expected value' );

	defineProperty( obj, 'hello', {
		'value': 'my friend'
	});
	t.strictEqual( obj.hello, 'my friend', 'returns expected value' );
	t.end();
});
