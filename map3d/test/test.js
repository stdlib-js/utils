/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var naryFunction = require( './../../nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var map3d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof map3d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a first argument which is a three-dimensional nested array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[ 1, 2, 3 ],
		[ [], 2 ],
		[ [ [] ], [ 2 ] ],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map3d( value, naryFunction( abs, 1 ) );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map3d( [ [ [ 1, 2, 3 ] ], [ [ 4, 5, 6 ] ] ], value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function (context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map3d( [ [ [ 1, 2, 3 ] ], [ [ 4, 5, 6 ] ] ], value, {} );
		};
	}
});

tape( 'the function applies a function to nested array elements', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( abs, 1 );

	arr = [
		[ [ -1, -2, -3 ] ],
		[ [ -4, -5, -6 ] ]
	];
	expected = [
		[ [ 1, 2, 3 ] ],
		[ [ 4, 5, 6 ] ]
	];
	actual = map3d( arr, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to nested array elements (ragged arrays)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( abs, 1 );

	arr = [
		[ [ -1, -2, -3 ] ],
		[ [ -4, -5 ] ],
		[ [ -6, -7, -8, -9 ] ],
		[ [ -10 ], [ -11 ] ]
	];
	expected = [
		[ [ 1, 2, 3 ] ],
		[ [ 4, 5 ] ],
		[ [ 6, 7, 8, 9 ] ],
		[ [ 10 ], [ 11 ] ]
	];
	actual = map3d( arr, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to nested array elements (typed arrays)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( abs, 1 );

	arr = [
		[ new Float64Array( [ -1, -2, -3 ] ) ],
		[ new Float64Array( [ -4, -5, -6 ] ) ]
	];
	expected = [
		[ [ 1, 2, 3 ] ],
		[ [ 4, 5, 6 ] ]
	];
	actual = map3d( arr, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to nested array elements (empty array; 1d)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( abs, 1 );

	arr = [];
	expected = [];
	actual = map3d( arr, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to nested array elements (empty nested arrays; 2d)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( abs, 1 );

	arr = [
		[],
		[]
	];
	expected = [
		[],
		[]
	];
	actual = map3d( arr, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to nested array elements (empty nested arrays; 3d)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( abs, 1 );

	arr = [
		[ [] ],
		[ [] ]
	];
	expected = [
		[ [] ],
		[ [] ]
	];
	actual = map3d( arr, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function invokes an applied function with three arguments', function test( t ) {
	var expected;
	var actual;
	var values;
	var arrays;
	var nargs;
	var iidx;
	var jidx;
	var kidx;
	var arr;

	arr = [
		[ [ -1, -2, -3 ] ],
		[ [ -4, -5, -6 ] ]
	];

	nargs = [];
	values = [];
	iidx = [];
	jidx = [];
	kidx = [];
	arrays = [];

	actual = map3d( arr, fcn );

	expected = [
		[ [ 1, 2, 3 ] ],
		[ [ 4, 5, 6 ] ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ -1, -2, -3, -4, -5, -6 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 0, 0, 0, 1, 1, 1 ];
	t.deepEqual( iidx, expected, 'returns expected value' );

	expected = [ 0, 0, 0, 0, 0, 0 ];
	t.deepEqual( jidx, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 0, 1, 2 ];
	t.deepEqual( kidx, expected, 'returns expected value' );

	expected = [ arr, arr, arr, arr, arr, arr ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	expected = [ 3, 3, 3, 3, 3, 3 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( v, indices, arr ) {
		nargs.push( arguments.length );
		values.push( v );
		iidx.push( indices[ 0 ] );
		jidx.push( indices[ 1 ] );
		kidx.push( indices[ 2 ] );
		arrays.push( arr );
		return abs( v );
	}
});

tape( 'the function supports providing a `this` context', function test( t ) {
	var expected;
	var actual;
	var ctx;
	var arr;

	arr = [
		[ [ -1, -2, -3 ] ],
		[ [ -4, -5, -6 ] ]
	];

	ctx = {
		'count': 0
	};

	expected = [
		[ [ 1, 2, 3 ] ],
		[ [ 4, 5, 6 ] ]
	];
	actual = map3d( arr, fcn, ctx );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( ctx.count, 6, 'returns expected value' );

	t.end();

	function fcn( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return abs( v );
	}
});
