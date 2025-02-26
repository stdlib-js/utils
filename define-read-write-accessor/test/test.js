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
var objectKeys = require( './../../keys' );
var defineProperty = require( './../../define-property' );
var setReadWriteAccessor = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof setReadWriteAccessor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function sets a property on a provided object', function test( t ) {
	var obj = {};
	var val = 0;

	setReadWriteAccessor( obj, 'foo', getter, setter );
	t.equal( obj.foo, val, 'returns expected value' );

	t.end();

	function getter() {
		return val;
	}

	function setter( v ) {
		val = v;
	}
});

tape( 'the read-write property is writable', function test( t ) {
	var obj = {};
	var val = 0;

	setReadWriteAccessor( obj, 'foo', getter, setter );
	t.equal( obj.foo, 0, 'returns expected value' );

	obj.foo = 1;
	t.equal( obj.foo, 1, 'returns expected value' );

	t.end();

	function getter() {
		return val;
	}

	function setter( v ) {
		val = v;
	}
});

tape( 'the read-write property is not configurable', function test( t ) {
	var obj = {};
	var val = 0;

	setReadWriteAccessor( obj, 'foo', getter, setter );

	t.throws( foo, Error, 'property cannot be deleted' );
	t.throws( bar, Error, 'property cannot be reconfigured' );
	t.end();

	function getter() {
		return val;
	}

	function setter( v ) {
		val = v;
	}

	function foo() {
		delete obj.foo;
	}

	function bar() {
		defineProperty( obj, 'foo', {
			'value': 'boop',
			'writable': true,
			'configurable': false,
			'enumerable': true
		});
	}
});

tape( 'the read-write property is enumerable', function test( t ) {
	var obj = {};
	var val = 0;

	setReadWriteAccessor( obj, 'foo', getter, setter );

	t.equal( objectKeys( obj )[ 0 ], 'foo', 'property is enumerable' );
	t.end();

	function getter() {
		return val;
	}

	function setter( v ) {
		val = v;
	}
});
