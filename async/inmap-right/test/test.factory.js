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
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
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
			factory( value );
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
			factory( {}, value );
		};
	}
});

tape( 'the function throws an error if provided an `options` argument which is not an object', function test( t ) {
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
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
			factory( value, next );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
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
			factory( opts, next );
		};
	}
});

tape( 'the function returns a function (no options)', function test( t ) {
	function next( value, clbk ) {
		clbk( null, value );
	}
	t.strictEqual( typeof factory( next ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (options)', function test( t ) {
	function next( value, clbk ) {
		clbk( null, value );
	}
	t.strictEqual( typeof factory( {}, next ), 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function throws an error if not provided a collection (no options)', function test( t ) {
	var inmapRightAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
	}

	inmapRightAsync = factory( next );

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
			inmapRightAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if not provided a collection (options)', function test( t ) {
	var inmapRightAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
	}

	inmapRightAsync = factory( {}, next );

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
			inmapRightAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (no options)', function test( t ) {
	var inmapRightAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
	}

	inmapRightAsync = factory( next );

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
			inmapRightAsync( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (options)', function test( t ) {
	var inmapRightAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
	}

	inmapRightAsync = factory( {}, next );

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
			inmapRightAsync( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the returned function invokes a provided function once for each element in a collection and updates a collection in-place (value,next)', function test( t ) {
	var inmapRightAsync;
	var expected1;
	var expected2;
	var arr;
	var i;

	inmapRightAsync = factory( fcn );

	arr = [ 3, 2, 1 ];
	expected1 = [ 1, 2, 3 ];
	expected2 = [ 6, 4, 2 ];
	i = -1;

	inmapRightAsync( arr, done );

	function fcn( value, next ) {
		i += 1;
		t.strictEqual( value, expected1[ i ], 'provides expected value' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, value*2 );
		}
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.deepEqual( collection, expected2, 'updates all values' );
		t.end();
	}
});

tape( 'the returned function invokes a provided function once for each element in a collection and updates a collection in-place (value,index,next)', function test( t ) {
	var inmapRightAsync;
	var expected1;
	var expected2;
	var arr;
	var i;
	var j;

	inmapRightAsync = factory( fcn );

	arr = [ 3, 2, 1 ];
	expected1 = [ 1, 2, 3 ];
	expected2 = [ 6, 4, 2 ];
	i = arr.length;
	j = -1;

	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
		i -= 1;
		j += 1;
		t.strictEqual( value, expected1[ j ], 'provides expected value' );
		t.strictEqual( index, i, 'provides expected index' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, value*2 );
		}
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns the input collection' );
		t.deepEqual( collection, expected2, 'updates all values' );
		t.end();
	}
});

tape( 'the returned function invokes a provided function once for each element in a collection and updates a collection in-place (value,index,collection,next)', function test( t ) {
	var inmapRightAsync;
	var expected1;
	var expected2;
	var arr;
	var i;
	var j;

	inmapRightAsync = factory( fcn );

	arr = [ 3, 2, 1 ];
	expected1 = [ 1, 2, 3 ];
	expected2 = [ 6, 4, 2 ];
	i = arr.length;
	j = -1;

	inmapRightAsync( arr, done );

	function fcn( value, index, collection, next ) {
		i -= 1;
		j += 1;
		t.strictEqual( value, expected1[ j ], 'provides expected value' );
		t.strictEqual( index, i, 'provides expected index' );
		t.strictEqual( collection, arr, 'provides input collection' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, value*2 );
		}
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.deepEqual( collection, expected2, 'updates all values' );
		t.end();
	}
});

tape( 'if a provided function accepts fewer than 2 arguments, the function returns a function which invokes a provided function with four arguments (1 argument)', function test( t ) {
	var inmapRightAsync;
	var expected1;
	var expected2;
	var arr;
	var i;
	var j;

	inmapRightAsync = factory( fcn );

	arr = [ 3, 2, 1 ];
	expected1 = [ 1, 2, 3 ];
	expected2 = [ 9, 6, 3 ];
	i = arr.length;
	j = -1;

	inmapRightAsync( arr, done );

	function fcn( value ) {
		var next = arguments[ 3 ];
		i -= 1;
		j += 1;

		t.strictEqual( value, expected1[ j ], 'provides expected value' );
		t.strictEqual( arguments[ 1 ], i, 'provides expected index' );
		t.strictEqual( arguments[ 2 ], arr, 'provides input collection' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, value*3 );
		}
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.deepEqual( collection, expected2, 'updates all values' );
		t.end();
	}
});

tape( 'if a provided function length is 0, the function returns a function which invokes a provided function with four arguments', function test( t ) {
	var inmapRightAsync;
	var expected1;
	var expected2;
	var arr;
	var i;
	var j;

	inmapRightAsync = factory( fcn );

	arr = [ 3, 2, 1 ];
	expected1 = [ 1, 2, 3 ];
	expected2 = [ 'beep0', 'beep1', 'beep2' ];
	i = arr.length;
	j = -1;

	inmapRightAsync( arr, done );

	function fcn() {
		var next;
		var k;

		next = arguments[ 3 ];
		k = arguments[ 1 ];

		i -= 1;
		j += 1;

		t.strictEqual( arguments[ 0 ], expected1[ j ], 'provides expected value' );
		t.strictEqual( k, i, 'provides expected index' );
		t.strictEqual( arguments[ 2 ], arr, 'provides input collection' );

		setTimeout( onTimeout, arguments[ 0 ] );

		function onTimeout() {
			next( null, 'beep'+k );
		}
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.deepEqual( collection, expected2, 'updates all values' );
		t.end();
	}
});

tape( 'by default, the returned function processes collection elements concurrently', function test( t ) {
	var inmapRightAsync;
	var expected;
	var count;
	var arr;

	inmapRightAsync = factory( fcn );

	arr = [ 100, 250, 300 ];
	expected = [ 100, 250, 300 ];
	count = -1;

	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, expected[ count ], 'provides expected value' );
			next( null, value );
		}
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.end();
	}
});

tape( 'the function supports returning a function for processing collection elements sequentially (in series)', function test( t ) {
	var inmapRightAsync;
	var expected;
	var count;
	var opts;
	var arr;

	opts = {
		'series': true
	};
	inmapRightAsync = factory( opts, fcn );

	arr = [ 100, 250, 300 ];
	expected = [ 300, 250, 100 ];
	count = -1;

	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, expected[ count ], 'provides expected value' );
			next( null, value );
		}
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.end();
	}
});

tape( 'the function supports returning a function for processing collection elements sequentially (limit = 1)', function test( t ) {
	var inmapRightAsync;
	var expected;
	var count;
	var opts;
	var arr;

	opts = {
		'series': false,
		'limit': 1
	};
	inmapRightAsync = factory( opts, fcn );

	arr = [ 100, 250, 300 ];
	expected = [ 300, 250, 100 ];
	count = -1;

	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, expected[ count ], 'provides expected value' );
			next( null, value );
		}
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.end();
	}
});

tape( 'the function supports returning a function which limits the maximum number of collection elements which are processed at any one time', function test( t ) {
	var inmapRightAsync;
	var expected;
	var count;
	var opts;
	var arr;

	opts = {
		'series': false,
		'limit': 2
	};
	inmapRightAsync = factory( opts, fcn );

	arr = [ 100, 250, 300 ];
	expected = [ 250, 300, 100 ];
	count = -1;

	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, expected[ count ], 'provides expected value' );
			next( null, value );
		}
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.end();
	}
});

tape( 'the function supports specifying an execution context for the invoked function', function test( t ) {
	var inmapRightAsync;
	var opts;
	var arr;
	var ctx;

	ctx = {
		'count': 0
	};
	opts = {
		'thisArg': ctx
	};
	inmapRightAsync = factory( opts, fcn );

	arr = [ 3, 2, 1 ];
	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
		/* eslint-disable no-invalid-this */
		this.count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, value );
		}
	}

	function done( error, collection ) {
		t.strictEqual( ctx.count, 3, 'updated provided context' );
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.end();
	}
});

tape( 'if an error is encountered while processing a collection element, the returned function suspends execution and immediately returns the error (series)', function test( t ) {
	var inmapRightAsync;
	var count;
	var opts;
	var arr;

	opts = {
		'series': true
	};
	inmapRightAsync = factory( opts, fcn );

	arr = [ 3, 2, 1 ];
	count = 0;

	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
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

tape( 'if an error is encountered while processing a collection element, the returned function suspends execution and immediately returns the error (concurrent; limit)', function test( t ) {
	var inmapRightAsync;
	var count;
	var opts;
	var arr;

	opts = {
		'limit': 2
	};
	inmapRightAsync = factory( opts, fcn );

	arr = [ 250, 100, 300 ];
	count = 0;

	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
		count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			if ( index === 1 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, value );
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

tape( 'if an error is encountered while processing a collection element, the returned function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var inmapRightAsync;
	var count;
	var arr;

	inmapRightAsync = factory( fcn );

	arr = [ 500, 500, 500 ];
	count = 0;
	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
		count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			if ( index === 1 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, value );
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

tape( 'if an error is encountered while processing a collection element, the returned function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var inmapRightAsync;
	var count;
	var arr;

	inmapRightAsync = factory( fcn );

	arr = [ 500, 500, 500 ];
	count = 0;
	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
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

tape( 'if an error is encountered while processing a collection element, a collection may be partially mutated', function test( t ) {
	var inmapRightAsync;
	var expected;
	var arr;

	inmapRightAsync = factory( fcn );

	arr = [ 300, 200, 100 ];
	expected = [ 300, 200, 1 ];

	inmapRightAsync( arr, done );

	function fcn( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			if ( index === 1 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, value/100 );
		}
	}

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.deepEqual( arr, expected, 'partially mutates a collection' );
		t.end();
	}
});

tape( 'if provided an empty collection, the returned function never invokes a provided function', function test( t ) {
	var inmapRightAsync;
	var arr;

	inmapRightAsync = factory( fcn );
	arr = [];

	inmapRightAsync( arr, done );

	function fcn() {
		t.fail( 'should never be called' );
	}

	function done( error, collection ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.strictEqual( collection, arr, 'returns input collection' );
		t.deepEqual( collection, [], 'returns empty collection' );
		t.end();
	}
});

tape( 'the returned function does not guarantee asynchronous execution', function test( t ) {
	var inmapRightAsync;
	var arr;
	var i;

	inmapRightAsync = factory( fcn );

	arr = [ 3, 2, 1 ];
	i = 0;

	inmapRightAsync( arr, done );
	i = 1;

	function fcn( value, next ) {
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
