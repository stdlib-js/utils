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
var map5d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof map5d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a first argument which is a five-dimensional nested array', function test( t ) {
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
		[ [ [ [] ] ], [ [ 2 ] ] ],
		[ [ [ [ [] ] ] ], [ [ [ 2 ] ] ] ],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map5d( value, naryFunction( abs, 1 ) );
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
			map5d( [ [ [ [ [ 1, 2, 3 ] ] ] ], [ [ [ [ 4, 5, 6 ] ] ] ] ], value ); // eslint-disable-line max-len
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
			map5d( [ [ [ [ [ 1, 2, 3 ] ] ] ], [ [ [ [ 4, 5, 6 ] ] ] ] ], value, {} ); // eslint-disable-line max-len
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
		[ [ [ [ -1 ], [ -2 ], [ -3 ] ] ] ],
		[ [ [ [ -4 ], [ -5 ], [ -6 ] ] ] ]
	];
	expected = [
		[ [ [ [ 1 ], [ 2 ], [ 3 ] ] ] ],
		[ [ [ [ 4 ], [ 5 ], [ 6 ] ] ] ]
	];
	actual = map5d( arr, f );

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
		[ [ [ [ -1, -2, -3 ] ] ] ],
		[ [ [ [ -4 ], [ -5 ] ] ] ],
		[ [ [ [ -6, -7, -8, -9 ] ] ] ],
		[ [ [ [ -10 ] ], [ [ -11 ] ] ] ]
	];
	expected = [
		[ [ [ [ 1, 2, 3 ] ] ] ],
		[ [ [ [ 4 ], [ 5 ] ] ] ],
		[ [ [ [ 6, 7, 8, 9 ] ] ] ],
		[ [ [ [ 10 ] ], [ [ 11 ] ] ] ]
	];
	actual = map5d( arr, f );

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
		[ [ [ new Float64Array( [ -1, -2, -3 ] ) ] ] ],
		[ [ [ new Float64Array( [ -4, -5, -6 ] ) ] ] ]
	];
	expected = [
		[ [ [ [ 1, 2, 3 ] ] ] ],
		[ [ [ [ 4, 5, 6 ] ] ] ]
	];
	actual = map5d( arr, f );

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
	actual = map5d( arr, f );

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
	actual = map5d( arr, f );

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
	actual = map5d( arr, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to nested array elements (empty nested arrays; 4d)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( abs, 1 );

	arr = [
		[ [ [] ] ],
		[ [ [] ] ]
	];
	expected = [
		[ [ [] ] ],
		[ [ [] ] ]
	];
	actual = map5d( arr, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to nested array elements (empty nested arrays; 5d)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( abs, 1 );

	arr = [
		[ [ [ [] ] ] ],
		[ [ [ [ ] ] ] ]
	];
	expected = [
		[ [ [ [] ] ] ],
		[ [ [ [] ] ] ]
	];
	actual = map5d( arr, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function invokes an applied function with three arguments', function test( t ) {
	var expected;
	var actual;
	var values;
	var arrays;
	var nargs;
	var i0idx;
	var i1idx;
	var i2idx;
	var i3idx;
	var i4idx;
	var arr;

	arr = [
		[ [ [ [ -1, -2, -3 ] ] ] ],
		[ [ [ [ -4, -5, -6 ] ] ] ]
	];

	nargs = [];
	values = [];
	i0idx = [];
	i1idx = [];
	i2idx = [];
	i3idx = [];
	i4idx = [];
	arrays = [];

	actual = map5d( arr, fcn );

	expected = [
		[ [ [ [ 1, 2, 3 ] ] ] ],
		[ [ [ [ 4, 5, 6 ] ] ] ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ -1, -2, -3, -4, -5, -6 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 0, 0, 0, 1, 1, 1 ];
	t.deepEqual( i0idx, expected, 'returns expected value' );

	expected = [ 0, 0, 0, 0, 0, 0 ];
	t.deepEqual( i1idx, expected, 'returns expected value' );

	expected = [ 0, 0, 0, 0, 0, 0 ];
	t.deepEqual( i2idx, expected, 'returns expected value' );

	expected = [ 0, 0, 0, 0, 0, 0 ];
	t.deepEqual( i3idx, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 0, 1, 2 ];
	t.deepEqual( i4idx, expected, 'returns expected value' );

	expected = [ arr, arr, arr, arr, arr, arr ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	expected = [ 3, 3, 3, 3, 3, 3 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( v, indices, arr ) {
		nargs.push( arguments.length );
		values.push( v );
		i0idx.push( indices[ 0 ] );
		i1idx.push( indices[ 1 ] );
		i2idx.push( indices[ 2 ] );
		i3idx.push( indices[ 3 ] );
		i4idx.push( indices[ 4 ] );
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
		[ [ [ [ -1, -2, -3 ] ] ] ],
		[ [ [ [ -4, -5, -6 ] ] ] ]
	];

	ctx = {
		'count': 0
	};

	expected = [
		[ [ [ [ 1, 2, 3 ] ] ] ],
		[ [ [ [ 4, 5, 6 ] ] ] ]
	];
	actual = map5d( arr, fcn, ctx );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( ctx.count, 6, 'returns expected value' );

	t.end();

	function fcn( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return abs( v );
	}
});
