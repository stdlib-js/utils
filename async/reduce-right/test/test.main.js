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
var reduceRightAsync = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reduceRightAsync, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
	var values;
	var i;

	function next( acc, value, clbk ) {
		clbk( null, acc );
	}

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
			reduceRightAsync( value, 0, next, noop );
		};
	}
});

tape( 'the function throws an error if not provided a function to invoke for each collection element (no options)', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRightAsync( [ 1, 2, 3 ], 0, value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a function to invoke for each collection element (options)', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRightAsync( [ 1, 2, 3 ], 0, {}, value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a callback function (no options)', function test( t ) {
	var values;
	var i;

	function next( acc, value, clbk ) {
		clbk( null, acc );
	}

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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRightAsync( [ 1, 2, 3 ], 0, next, value );
		};
	}
});

tape( 'the function throws an error if not provided a callback function (options)', function test( t ) {
	var values;
	var i;

	function next( acc, value, clbk ) {
		clbk( null, acc );
	}

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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRightAsync( [ 1, 2, 3 ], 0, {}, next, value );
		};
	}
});

tape( 'the function throws an error if provided an `options` argument which is not an object', function test( t ) {
	var values;
	var i;

	function next( acc, value, clbk ) {
		clbk( null, 0 );
	}

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRightAsync( [ 1, 2, 3 ], 0, value, next, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	function next( acc, value, clbk ) {
		clbk( null, acc );
	}

	values = [
		'5',
		-5,
		3.14,
		0,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'limit': value
			};
			reduceRightAsync( [ 1, 2, 3 ], 0, opts, next, noop );
		};
	}
});

tape( 'the function invokes a provided function once for each element in a collection (acc,value,next)', function test( t ) {
	var values;
	var arr;
	var acc;
	var i;

	arr = [ 3, 2, 1 ];
	values = [ 1, 2, 3 ];
	i = -1;

	acc = {
		'sum': 0
	};
	reduceRightAsync( arr, acc, fcn, done );

	function fcn( acc, value, next ) {
		i += 1;
		t.strictEqual( value, values[ i ], 'provides expected value' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			acc.sum += value;
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 6, 'returns expected result' );
		t.end();
	}
});

tape( 'the function invokes a provided function once for each element in a collection (acc,value,index,next)', function test( t ) {
	var values;
	var arr;
	var acc;
	var i;
	var j;

	arr = [ 3, 2, 1 ];
	values = [ 1, 2, 3 ];
	i = arr.length;
	j = -1;

	acc = {
		'sum': 0
	};
	reduceRightAsync( arr, acc, fcn, done );

	function fcn( acc, value, index, next ) {
		i -= 1;
		j += 1;
		t.strictEqual( value, values[ j ], 'provides expected value' );
		t.strictEqual( index, i, 'provides expected index' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			acc.sum += value;
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 6, 'returns expected result' );
		t.end();
	}
});

tape( 'the function invokes a provided function once for each element in a collection (acc,value,index,collection,next)', function test( t ) {
	var values;
	var arr;
	var acc;
	var i;
	var j;

	arr = [ 3, 2, 1 ];
	values = [ 1, 2, 3 ];
	i = arr.length;
	j = -1;

	acc = {
		'sum': 0
	};
	reduceRightAsync( arr, acc, fcn, done );

	function fcn( acc, value, index, collection, next ) {
		i -= 1;
		j += 1;
		t.strictEqual( value, values[ j ], 'provides expected value' );
		t.strictEqual( index, i, 'provides expected index' );
		t.strictEqual( collection, arr, 'provides input collection' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			acc.sum += value;
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 6, 'returns expected result' );
		t.end();
	}
});

tape( 'if a provided function accepts fewer than 3 arguments, the function invokes a provided function with five arguments (1 argument)', function test( t ) {
	var values;
	var arr;
	var acc;
	var i;
	var j;

	arr = [ 3, 2, 1 ];
	values = [ 1, 2, 3 ];
	i = arr.length;
	j = -1;

	acc = {
		'sum': 0
	};
	reduceRightAsync( arr, acc, fcn, done );

	function fcn( acc ) {
		var value = arguments[ 1 ];
		var next = arguments[ 4 ];

		i -= 1;
		j += 1;

		t.strictEqual( value, values[ j ], 'provides expected value' );
		t.strictEqual( arguments[ 2 ], i, 'provides expected index' );
		t.strictEqual( arguments[ 3 ], arr, 'provides input collection' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			acc.sum += value;
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 6, 'returns expected result' );
		t.end();
	}
});

tape( 'if a provided function accepts fewer than 3 arguments, the function invokes a provided function with five arguments (2 arguments)', function test( t ) {
	var values;
	var arr;
	var acc;
	var i;
	var j;

	arr = [ 3, 2, 1 ];
	values = [ 1, 2, 3 ];
	i = arr.length;
	j = -1;

	acc = {
		'sum': 0
	};
	reduceRightAsync( arr, acc, fcn, done );

	function fcn( acc, value ) {
		var next = arguments[ 4 ];

		i -= 1;
		j += 1;

		t.strictEqual( value, values[ j ], 'provides expected value' );
		t.strictEqual( arguments[ 2 ], i, 'provides expected index' );
		t.strictEqual( arguments[ 3 ], arr, 'provides input collection' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			acc.sum += value;
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 6, 'returns expected result' );
		t.end();
	}
});

tape( 'if a provided function length is 0, the function invokes a provided function with five arguments', function test( t ) {
	var values;
	var arr;
	var acc;
	var i;
	var j;

	arr = [ 3, 2, 1 ];
	values = [ 1, 2, 3 ];
	i = arr.length;
	j = -1;

	acc = {
		'sum': 0
	};
	reduceRightAsync( arr, acc, fcn, done );

	function fcn() {
		var next;
		var acc;
		var v;

		next = arguments[ 4 ];
		acc = arguments[ 0 ];
		v = arguments[ 1 ];

		i -= 1;
		j += 1;

		t.strictEqual( v, values[ j ], 'provides expected value' );
		t.strictEqual( arguments[ 2 ], i, 'provides expected index' );
		t.strictEqual( arguments[ 3 ], arr, 'provides input collection' );

		setTimeout( onTimeout, v );

		function onTimeout() {
			acc.sum += v;
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 6, 'returns expected result' );
		t.end();
	}
});

tape( 'by default, the function processes collection elements sequentially', function test( t ) {
	var values;
	var count;
	var arr;
	var acc;

	arr = [ 100, 250, 300 ];
	values = [ 300, 250, 100 ];
	count = -1;

	acc = {
		'sum': 0
	};
	reduceRightAsync( arr, acc, fcn, done );

	function fcn( acc, value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			acc.sum += value;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 650, 'returns expected result' );
		t.end();
	}
});

tape( 'the function supports processing collection elements concurrently', function test( t ) {
	var values;
	var count;
	var opts;
	var arr;
	var acc;

	arr = [ 100, 250, 300 ];
	values = [ 100, 250, 300 ];
	count = -1;

	acc = {
		'sum': 0
	};
	opts = {
		'series': false
	};
	reduceRightAsync( arr, acc, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			acc.sum += value;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 650, 'returns expected result' );
		t.end();
	}
});

tape( 'the function supports processing collection elements sequentially', function test( t ) {
	var values;
	var count;
	var opts;
	var arr;
	var acc;

	arr = [ 100, 250, 300 ];
	values = [ 300, 250, 100 ];
	count = -1;

	acc = {
		'sum': 0
	};
	opts = {
		'series': true
	};
	reduceRightAsync( arr, acc, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			acc.sum += value;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 650, 'returns expected result' );
		t.end();
	}
});

tape( 'the function supports processing collection elements sequentially (limit = 1)', function test( t ) {
	var values;
	var count;
	var opts;
	var arr;
	var acc;

	arr = [ 100, 250, 300 ];
	values = [ 300, 250, 100 ];
	count = -1;

	acc = {
		'sum': 0
	};
	opts = {
		'series': false,
		'limit': 1
	};
	reduceRightAsync( arr, acc, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			acc.sum += value;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 650, 'returns expected result' );
		t.end();
	}
});

tape( 'the function supports limiting the maximum number of collection elements which are processed at any one time', function test( t ) {
	var values;
	var count;
	var opts;
	var arr;
	var acc;

	arr = [ 100, 250, 300 ];
	values = [ 250, 300, 100 ];
	count = -1;

	acc = {
		'sum': 0
	};
	opts = {
		'limit': 2
	};
	reduceRightAsync( arr, acc, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			acc.sum += value;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 650, 'returns expected result' );
		t.end();
	}
});

tape( 'the function supports limiting the maximum number of collection elements which are processed at any one time', function test( t ) {
	var values;
	var count;
	var opts;
	var arr;
	var acc;

	arr = [ 100, 250, 300 ];
	values = [ 250, 300, 100 ];
	count = -1;

	acc = {
		'sum': 0
	};
	opts = {
		'series': false,
		'limit': 2
	};
	reduceRightAsync( arr, acc, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			acc.sum += value;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, acc );
		}
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc.sum, 650, 'returns expected result' );
		t.end();
	}
});

tape( 'the function supports specifying an execution context for the invoked function', function test( t ) {
	var opts;
	var arr;
	var ctx;

	arr = [ 3, 2, 1 ];
	ctx = {
		'count': 0
	};
	opts = {
		'thisArg': ctx
	};
	reduceRightAsync( arr, {}, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		/* eslint-disable no-invalid-this */
		this.count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, acc );
		}
	}

	function done( error ) {
		t.strictEqual( ctx.count, 3, 'updated provided context' );
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered while processing a collection element, the function suspends execution and immediately returns the error (series)', function test( t ) {
	var count;
	var opts;
	var arr;

	arr = [ 3, 2, 1 ];
	opts = {
		'series': true
	};
	count = 0;
	reduceRightAsync( arr, {}, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			next( new Error( 'beep' ) );
		}
	}

	function done( error ) {
		t.strictEqual( count, 1, 'suspends execution' );
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered while processing a collection element, the function suspends execution and immediately returns the error (concurrent; limit)', function test( t ) {
	var count;
	var opts;
	var arr;

	arr = [ 250, 100, 300 ];
	opts = {
		'limit': 2
	};
	count = 0;
	reduceRightAsync( arr, {}, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			if ( index === 1 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, acc );
		}
	}

	function done( error ) {
		t.strictEqual( count, 2, 'suspends execution' );
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered while processing a collection element, the function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var count;
	var opts;
	var arr;

	arr = [ 500, 500, 500 ];
	opts = {
		'series': false
	};
	count = 0;
	reduceRightAsync( arr, {}, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			if ( index === 1 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, acc );
		}
	}

	function done( error ) {
		t.strictEqual( count, 3, 'suspends execution' );
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered while processing a collection element, the function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var count;
	var opts;
	var arr;

	arr = [ 500, 500, 500 ];
	opts = {
		'series': false
	};
	count = 0;
	reduceRightAsync( arr, {}, opts, fcn, done );

	function fcn( acc, value, index, next ) {
		count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			return next( new Error( 'beep' ) );
		}
	}

	function done( error ) {
		t.strictEqual( count, 3, 'suspends execution' );
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.end();
	}
});

tape( 'if provided an empty collection, the function never invokes a provided function and returns the initial value as the accumulated result', function test( t ) {
	var arr = [];
	reduceRightAsync( arr, 0, fcn, done );

	function fcn() {
		t.fail( 'should never be called' );
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc, 0, 'returns initial value' );
		t.end();
	}
});

tape( 'if provided an empty collection, the function never invokes a provided function and returns the initial value as the accumulated result (object)', function test( t ) {
	var arr = [];
	var obj = {};

	reduceRightAsync( arr, obj, fcn, done );

	function fcn() {
		t.fail( 'should never be called' );
	}

	function done( error, acc ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( acc, obj, 'returns initial value' );
		t.end();
	}
});

tape( 'the function does not guarantee asynchronous execution', function test( t ) {
	var opts;
	var arr;
	var i;

	opts = {
		'series': false
	};
	arr = [ 3, 2, 1 ];
	i = 0;
	reduceRightAsync( arr, {}, opts, fcn, done );
	i = 1;

	function fcn( acc, value, next ) {
		next( null, value );
	}

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( i, 0, 'releases the zalgo' );
		t.end();
	}
});

tape( 'the function does not skip empty elements', function test( t ) {
	var expected;
	var arr;

	arr = [ 1, , , 4 ]; // eslint-disable-line no-sparse-arrays
	expected = [ 1, void 0, void 0, 4 ];

	reduceRightAsync( arr, {}, fcn, done );

	function fcn( acc, value, index, next ) {
		t.strictEqual( value, expected[ index ], 'provides expected value' );
		setTimeout( onTimeout, 0 );

		function onTimeout() {
			return next( null, acc );
		}
	}

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.end();
	}
});
