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

/* eslint-disable object-curly-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var defineProperty = require( './../../define-property' );
var moveProperty = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof moveProperty, 'function', 'export is a function' );
	t.end();
});

tape( 'if provided a `source` argument which is not an object, the function will throw', function test( t ) {
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
			moveProperty( value, 'a', {} );
		};
	}
});

tape( 'if provided a `target` argument which is not an object, the function will throw', function test( t ) {
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
			moveProperty( {}, 'a', value );
		};
	}
});

tape( 'if unable to move a property, the function returns `false`', function test( t ) {
	var bool = moveProperty( {}, 'a', {} );
	t.notOk( bool, 'unable to move property' );
	t.end();
});

tape( 'if moving a property is successful, the function returns `true`', function test( t ) {
	var bool = moveProperty( { 'a': 'b' }, 'a', {} );
	t.ok( bool, 'successfully moved property' );
	t.end();
});

tape( 'the function moves property a from one object to another object', function test( t ) {
	var obj1 = { 'a': 'b' };
	var obj2 = {};
	var bool = moveProperty( obj1, 'a', obj2 );

	t.ok( bool, 'successfully moved property' );
	t.deepEqual( obj2, { 'a': 'b' }, 'deep equal' );
	t.deepEqual( obj1, {}, 'deep equal' );
	t.end();
});

tape( 'the function deletes a property from the source object', function test( t ) {
	var obj1 = { 'a': 'b' };
	var obj2 = {};
	var bool = moveProperty( obj1, 'a', obj2 );

	t.ok( bool, 'successfully moved property' );
	t.deepEqual( obj1, {}, 'deep equal' );
	t.end();
});

tape( 'the function preserves property\'s descriptors', function test( t ) {
	var obj1 = {};
	var obj2 = {};
	var bool;
	var desc;

	desc = {
		'value': 'b',
		'writable': false,
		'configurable': true,
		'enumerable': false
	};

	defineProperty( obj1, 'a', desc );

	bool = moveProperty( obj1, 'a', obj2 );

	t.ok( bool, 'successfully moved property' );
	t.deepEqual( obj1, {}, 'deep equal' );
	t.equal( obj2.a, 'b' );
	t.deepEqual( Object.getOwnPropertyDescriptor( obj2, 'a' ), desc, 'descriptors are equal' );

	t.end();
});

tape( 'if a property cannot be deleted from a source object, the function throws an error', function test( t ) {
	var obj1 = {};
	var obj2 = {};
	var desc;

	desc = {
		'value': 'b',
		'writable': false,
		'configurable': false,
		'enumerable': false
	};

	defineProperty( obj1, 'a', desc );

	t.throws( foo, Error );
	t.end();
	function foo() {
		moveProperty( obj1, 'a', obj2 );
	}
});

tape( 'the function does not deep copy moved properties', function test( t ) {
	var bool;
	var obj1;
	var obj2;
	var arr;

	arr = [ 1, 2, 3 ];
	obj1 = { 'a': arr };
	obj2 = {};
	bool = moveProperty( obj1, 'a', obj2 );

	t.ok( bool, 'successfully moved property' );
	t.deepEqual( obj2, { 'a': arr }, 'deep equal' );
	t.deepEqual( obj1, {}, 'deep equal' );
	t.equal( obj2.a, arr, 'same reference' );

	t.end();
});
