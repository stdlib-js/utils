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
var isNonEnumerableProperty = require( '@stdlib/assert/is-nonenumerable-property' );
var isConfigurableProperty = require( '@stdlib/assert/is-configurable-property' );
var isWritableProperty = require( '@stdlib/assert/is-writable-property' );
var setNonEnumerableProperty = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof setNonEnumerableProperty, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function sets a property on a provided object', function test( t ) {
	var obj = {};
	setNonEnumerableProperty( obj, 'foo', 'bar' );
	t.equal( obj.foo, 'bar', 'returns expected value' );
	t.end();
});

tape( 'the property is writable', function test( t ) {
	var obj;

	obj = {};
	setNonEnumerableProperty( obj, 'foo', 'bar' );
	t.equal( isWritableProperty( obj, 'foo' ), true, 'property is writable' );

	// The following should not throw...
	obj.foo = 'beep';

	t.end();
});

tape( 'the property is configurable', function test( t ) {
	var obj;

	obj = {};
	setNonEnumerableProperty( obj, 'foo', 'bar' );

	delete obj.foo;
	t.equal( obj.foo, void 0, 'returns expected value' );

	obj = {};
	setNonEnumerableProperty( obj, 'foo', 'bar' );
	t.equal( isConfigurableProperty( obj, 'foo' ), true, 'property is configurable' );

	// The following should not throw...
	defineProperty( obj, 'foo', {
		'configurable': false,
		'enumerable': true,
		'writable': true,
		'value': 'boop'
	});

	t.end();
});

tape( 'the property is not enumerable (in supporting environments; ES5+)', function test( t ) {
	var obj = {};
	setNonEnumerableProperty( obj, 'foo', 'bar' );
	t.equal( isNonEnumerableProperty( obj, 'foo' ), true, 'property is not enumerable' );
	t.end();
});
