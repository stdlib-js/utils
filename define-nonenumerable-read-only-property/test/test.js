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
var setNonEnumerableReadOnly = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof setNonEnumerableReadOnly, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function sets a property on a provided object', function test( t ) {
	var obj = {};
	setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	t.equal( obj.foo, 'bar', 'returns expected value' );
	t.end();
});

tape( 'the read-only property is not writable', function test( t ) {
	var obj = {};
	setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	t.throws( foo, Error, 'property cannot be set' );
	t.end();

	function foo() {
		obj.foo = 'bip';
	}
});

tape( 'the read-only property is not configurable', function test( t ) {
	var obj = {};
	setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	t.throws( foo, Error, 'property cannot be deleted' );
	t.throws( bar, Error, 'property cannot be reconfigured' );
	t.end();

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

tape( 'the read-only property is not enumerable', function test( t ) {
	var obj = {};
	setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	t.equal( objectKeys( obj ).length, 0, 'property is not enumerable' );
	t.end();
});
