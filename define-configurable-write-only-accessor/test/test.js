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
var setConfigurableWriteOnlyAccessor = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof setConfigurableWriteOnlyAccessor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function sets a property on a provided object', function test( t ) {
	var obj = {};
	var val = '';

	setConfigurableWriteOnlyAccessor( obj, 'foo', setter );
	obj.foo = 'bar';

	t.equal( val, 'bar', 'equals expected value' );
	t.end();

	function setter( v ) {
		val = v;
	}
});

tape( 'the write-only property is not readable', function test( t ) {
	var obj = {};
	var val = '';

	setConfigurableWriteOnlyAccessor( obj, 'foo', setter );
	t.equal( obj.foo, void 0, 'property cannot be get' );

	t.equal( val, '', 'equals expected value' );
	t.end();

	function setter(v ) {
		val = v;
	}
});

tape( 'the write-only property is not configurable', function test( t ) {
	var desc;
	var obj;
	var val;

	val = '';

	obj = {};
	setConfigurableWriteOnlyAccessor( obj, 'foo', setter );
	setConfigurableWriteOnlyAccessor( obj, 'beep', setter );

	desc = {
		'configurable': true,
		'enumerable': false,
		'set': setter,
		'get': void 0
	};
	defineProperty( obj, 'foo', desc );
	t.deepEqual( propertyDescriptor( obj, 'foo' ), desc, 'property can be reconfigured' );

	t.equal( hasOwnProp( obj, 'beep' ), true, 'has property' );

	// Configurable properties can be deleted...
	delete obj.beep;
	t.equal( obj.beep, void 0, 'returns expected value' );
	t.equal( hasOwnProp( obj, 'beep' ), false, 'does not have property' );

	t.equal( val, '', 'equals expected value' );
	t.end();

	function setter( v ) {
		val = v;
	}
});

tape( 'the write-only property is enumerable', function test( t ) {
	var obj = {};
	var val = '';

	setConfigurableWriteOnlyAccessor( obj, 'foo', setter );
	t.deepEqual( objectKeys( obj ), [ 'foo' ], 'property is enumerable' );

	t.equal( val, '', 'equals expected value' );
	t.end();

	function setter( v ) {
		val = v;
	}
});
