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
var noop = require( './../../noop' );
var naryFunction = require( './../../nary-function' );
var add = require( '@stdlib/number/float64/base/add' );
var cadd = require( '@stdlib/complex/float64/base/add' );
var Float64Array = require( '@stdlib/array/float64' );
var Complex64Array = require( '@stdlib/array/complex64' );
var array = require( '@stdlib/ndarray/array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var reduceRight = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reduceRight, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a first argument which is either an array-like object or an ndarray', function test( t ) {
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
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRight( value, 0, noop );
		};
	}
});

tape( 'the function throws an error if not provided a third argument which is a function', function test( t ) {
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
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRight( [ 1, 2, 3 ], 0, value );
		};
	}
});

tape( 'the function throws an error if not provided a third argument which is a function (context)', function test( t ) {
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
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRight( [ 1, 2, 3 ], 0, value, {} );
		};
	}
});

tape( 'the function invokes a reduction function for each element in an array (array-like object)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( add, 2 );

	arr = [ 1, 2, 3 ];
	expected = 7;
	actual = reduceRight( arr, 1, f );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function invokes a reduction function for each element in an array (typed array)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( add, 2 );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = 7.0;
	actual = reduceRight( arr, 1.0, f );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function invokes a reduction function for each element in an array (complex number array)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( cadd, 2 );

	arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	expected = new Complex64( 9.0, 12.0 );
	actual = reduceRight( arr, new Complex64( 0.0, 0.0 ), f );

	t.strictEqual( realf( actual ), realf( expected ), 'returns expected value' );
	t.strictEqual( imagf( actual ), imagf( expected ), 'returns expected value' );
	t.end();
});

tape( 'the function invokes a reduction function for each element in an array (ndarray)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( add, 2 );

	arr = array( [ 1.0, 2.0, 3.0, 4.0 ], {
		'dtype': 'generic'
	});
	expected = 11.0;
	actual = reduceRight( arr, 1.0, f );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function invokes a reduction function for each element in an array (ndarray; 0-dimensional)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var f;

	f = naryFunction( add, 2 );

	arr = ndarray( 'generic', [ 10.0 ], [], [ 0 ], 0, 'row-major' );
	expected = 11.0;
	actual = reduceRight( arr, 1.0, f );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty array, the function returns the initial value and never invokes a reduction function (array-like object)', function test( t ) {
	var out = reduceRight( [], 0, foo );
	t.strictEqual( out, 0, 'expected result' );
	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'if provided an empty array, the function returns the initial value and never invokes a reduction function (ndarray)', function test( t ) {
	var arr;
	var out;

	arr = ndarray( 'generic', [], [ 2, 0, 2 ], [ 0, 2, 1 ], 0, 'row-major' );
	out = reduceRight( arr, 0, foo );
	t.strictEqual( out, 0, 'expected result' );

	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the function invokes an applied function with four arguments (array-like object)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arrays;
	var nargs;
	var idx;
	var arr;
	var acc;

	arr = [ 1, 2, 3, 4, 5, 6 ];

	nargs = [];
	acc = [];
	values = [];
	idx = [];
	arrays = [];

	actual = reduceRight( arr, 0, fcn );

	expected = 21;
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = [ 0, 6, 11, 15, 18, 20 ];
	t.deepEqual( acc, expected, 'returns expected value' );

	expected = [ 6, 5, 4, 3, 2, 1 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 5, 4, 3, 2, 1, 0 ];
	t.deepEqual( idx, expected, 'returns expected value' );

	expected = [ arr, arr, arr, arr, arr, arr ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	expected = [ 4, 4, 4, 4, 4, 4 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( accumulator, v, i, arr ) {
		nargs.push( arguments.length );
		acc.push( accumulator );
		values.push( v );
		idx.push( i );
		arrays.push( arr );
		return add( accumulator, v );
	}
});

tape( 'the function invokes an applied function with four arguments (ndarray)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arrays;
	var nargs;
	var idx;
	var arr;
	var acc;

	arr = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ]
	});

	nargs = [];
	acc = [];
	values = [];
	idx = [];
	arrays = [];

	actual = reduceRight( arr, 0, fcn );

	expected = 21;
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = [ 0, 6, 11, 15, 18, 20 ];
	t.deepEqual( acc, expected, 'returns expected value' );

	expected = [ 6, 5, 4, 3, 2, 1 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 5, 4, 3, 2, 1, 0 ];
	t.deepEqual( idx, expected, 'returns expected value' );

	expected = [ arr, arr, arr, arr, arr, arr ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	expected = [ 4, 4, 4, 4, 4, 4 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( accumulator, v, i, arr ) {
		nargs.push( arguments.length );
		acc.push( accumulator );
		values.push( v );
		idx.push( i );
		arrays.push( arr );
		return add( accumulator, v );
	}
});

tape( 'the function supports providing a `this` context (array-like object)', function test( t ) {
	var expected;
	var actual;
	var ctx;
	var arr;

	arr = [ 1.0, 2.0, 3.0 ];

	ctx = {
		'count': 0
	};

	expected = 6.0;
	actual = reduceRight( arr, 0.0, sum, ctx );

	t.strictEqual( actual, expected, 'expected value' );
	t.strictEqual( ctx.count, 3, 'returns expected value' );

	t.end();

	function sum( acc, value ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return acc + value;
	}
});

tape( 'the function supports providing a `this` context (ndarray)', function test( t ) {
	var expected;
	var actual;
	var ctx;
	var arr;

	arr = array( [ 1.0, 2.0, 3.0 ], {
		'dtype': 'generic'
	});

	ctx = {
		'count': 0
	};

	expected = 6.0;
	actual = reduceRight( arr, 0.0, sum, ctx );

	t.strictEqual( actual, expected, 'expected value' );
	t.strictEqual( ctx.count, 3, 'returns expected value' );

	t.end();

	function sum( acc, value ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return acc + value;
	}
});

tape( 'the function does not skip empty elements (array-like object)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arr;

	arr = [ 1, , , 4 ]; // eslint-disable-line no-sparse-arrays

	values = [];

	actual = reduceRight( arr, 0, sum );

	t.strictEqual( isnan( actual ), true, 'returns expected value' );

	expected = [ 4, void 0, void 0, 1 ];
	t.deepEqual( values, expected, 'returns expected value' );

	t.end();

	function sum( acc, value ) {
		values.push( value );
		return acc + value;
	}
});

tape( 'the function does not skip empty elements (ndarray)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arr;

	arr = array( [ 1, , , 4 ], { // eslint-disable-line no-sparse-arrays
		'dtype': 'generic'
	});

	values = [];

	actual = reduceRight( arr, 0, sum );

	t.strictEqual( isnan( actual ), true, 'returns expected value' );

	expected = [ 4, void 0, void 0, 1 ];
	t.deepEqual( values, expected, 'returns expected value' );

	t.end();

	function sum( acc, value ) {
		values.push( value );
		return acc + value;
	}
});
