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
var noop = require( './../../../noop' );
var waterfall = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof waterfall, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			waterfall( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a callback argument which is a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			waterfall( [noop], value );
		};
	}
});

tape( 'the function executes each function in series, passing the results of one function as arguments to the next function', function test( t ) {
	var fcns;
	var str;

	str = 'beep';

	function foo( next ) {
		next( null, str );
	}
	function bar( res, next ) {
		t.equal( res, str, 'invoked with result of previous function' );
		next( null, 'hello', 'world' );
	}
	function fun( str1, str2, next ) {
		t.equal( str1, 'hello', 'invoked with result 1' );
		t.equal( str2, 'world', 'invoked with result 2' );
		next();
	}
	function done( error ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.end();
	}

	fcns = [ foo, bar, fun ];
	waterfall( fcns, done );
});

tape( 'the function immediately returns an error to a provided callback', function test( t ) {
	var fcns;

	function foo( next ) {
		next( null, 'beep' );
	}
	function bar( res, next ) {
		next( new Error( 'boop' ) );
	}
	function fun( next ) {
		t.ok( false, 'should not be called' );
		next();
	}
	function done( error ) {
		t.ok( error, 'returns an error' );
		t.equal( error.message, 'boop', 'equal message' );
		t.end();
	}

	fcns = [ foo, bar, fun ];
	waterfall( fcns, done );
});

tape( 'the function supports executing each function in series with a specified `this` context', function test( t ) {
	/* eslint-disable no-invalid-this */
	var locals;
	var fcns;

	locals = {};

	function foo( next ) {
		this._idx = 0;
		next();
	}
	function bar( next ) {
		t.equal( this._idx, 0, 'correct this context' );
		this._idx += 1;
		next();
	}
	function fun( next ) {
		t.equal( this._idx, 1, 'correct this context' );
		this._idx += 1;
		next();
	}
	function done( error ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( locals._idx, 2, 'correct this context' ); // eslint-disable-line no-underscore-dangle
		t.end();
	}

	fcns = [ foo, bar, fun ];
	waterfall( fcns, done, locals );
});
