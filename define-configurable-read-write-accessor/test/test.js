/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var propertyDescriptor = require( './../../property-descriptor' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var setConfigurableReadWriteAccessor = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof setConfigurableReadWriteAccessor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function sets a property on a provided object', function test( t ) {
	var obj = {};
	var val = 0;

	setConfigurableReadWriteAccessor( obj, 'foo', getter, setter );
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

	setConfigurableReadWriteAccessor( obj, 'foo', getter, setter );
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

tape( 'the read-write property is configurable', function test( t ) {
	var desc;
	var obj;
	var val;

	val = 0;

	obj = {};
	setConfigurableReadWriteAccessor( obj, 'foo', getter, setter );
	setConfigurableReadWriteAccessor( obj, 'beep', getter, setter );

	desc = {
		'configurable': true,
		'enumerable': false,
		'get': getter,
		'set': setter
	};
	defineProperty( obj, 'foo', desc );
	t.deepEqual( propertyDescriptor( obj, 'foo' ), desc, 'property can be reconfigured' );

	t.equal( obj.beep, 0, 'returns expected value' );
	t.equal( hasOwnProp( obj, 'beep' ), true, 'has property' );

	// Configurable properties can be deleted...
	delete obj.beep;
	t.equal( obj.beep, void 0, 'returns expected value' );
	t.equal( hasOwnProp( obj, 'beep' ), false, 'does not have property' );
	t.end();

	function getter() {
		return val;
	}

	function setter( v ) {
		val = v;
	}
});

tape( 'the read-write property is enumerable', function test( t ) {
	var obj = {};
	var val = 0;

	setConfigurableReadWriteAccessor( obj, 'foo', getter, setter );

	t.deepEqual( objectKeys( obj ), [ 'foo' ], 'property is enumerable' );
	t.end();

	function getter() {
		return val;
	}

	function setter( v ) {
		val = v;
	}
});
