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

tape( 'the function throws an error if not provided a function to invoke for each own property in an object (no options)', function test( t ) {
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

tape( 'the function throws an error if not provided a function to invoke for each own property in an object (options)', function test( t ) {
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

tape( 'the returned function throws an error if not provided an object (no options)', function test( t ) {
	var mapValuesAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
	}

	mapValuesAsync = factory( next );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapValuesAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if not provided an object (options)', function test( t ) {
	var mapValuesAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
	}

	mapValuesAsync = factory( {}, next );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapValuesAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (no options)', function test( t ) {
	var mapValuesAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
	}

	mapValuesAsync = factory( next );

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
			var obj = {
				'a': 1,
				'b': 2
			};
			mapValuesAsync( obj, value );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (options)', function test( t ) {
	var mapValuesAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, value );
	}

	mapValuesAsync = factory( {}, next );

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
			var obj = {
				'a': 1,
				'b': 2
			};
			mapValuesAsync( obj, value );
		};
	}
});

tape( 'the returned function invokes a provided function once for each own property in an object (value,next)', function test( t ) {
	var mapValuesAsync;
	var expected;
	var obj;

	mapValuesAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a': 2,
		'b': 4,
		'c': 6
	};

	mapValuesAsync( obj, done );

	function fcn( value, next ) {
		setTimeout( onTimeout, value );
		function onTimeout() {
			next( null, value*2 );
		}
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, expected, 'returns expected output' );
		t.end();
	}
});

tape( 'the returned function invokes a provided function once for each own property in an object (value,key,next)', function test( t ) {
	var mapValuesAsync;
	var expected;
	var obj;

	mapValuesAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a': 2,
		'b': 4,
		'c': 6
	};

	mapValuesAsync( obj, done );

	function fcn( value, key, next ) {
		setTimeout( onTimeout, value );
		function onTimeout() {
			next( null, value*2 );
		}
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, expected, 'returns expected output' );
		t.end();
	}
});

tape( 'the returned function invokes a provided function once for each own property in an object (value,key,obj,next)', function test( t ) {
	var mapValuesAsync;
	var expected;
	var obj;

	mapValuesAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a': 2,
		'b': 4,
		'c': 6
	};

	mapValuesAsync( obj, done );

	function fcn( value, key, o, next ) {
		t.strictEqual( o, obj, 'provides input object' );
		setTimeout( onTimeout, value );
		function onTimeout() {
			next( null, value*2 );
		}
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, expected, 'returns expected output' );
		t.end();
	}
});

tape( 'if a provided function accepts fewer than 2 arguments, the function returns a function which invokes a provided function with four arguments (1 argument)', function test( t ) {
	var mapValuesAsync;
	var expected;
	var obj;

	mapValuesAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a': 2,
		'b': 4,
		'c': 6
	};

	mapValuesAsync( obj, done );

	function fcn( value ) {
		var next = arguments[ 3 ];
		t.strictEqual( arguments[ 2 ], obj, 'provides input object' );
		setTimeout( onTimeout, value );
		function onTimeout() {
			next( null, value*2 );
		}
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, expected, 'returns expected output' );
		t.end();
	}
});

tape( 'if a provided function length is 0, the function returns a function which invokes a provided function with four arguments', function test( t ) {
	var mapValuesAsync;
	var expected;
	var obj;

	mapValuesAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a': 'a',
		'b': 'b',
		'c': 'c'
	};

	mapValuesAsync( obj, done );

	function fcn() {
		var next = arguments[ 3 ];
		var key = arguments[ 1 ];

		t.strictEqual( arguments[ 2 ], obj, 'provides input object' );
		setTimeout( onTimeout, arguments[ 0 ] );

		function onTimeout() {
			next( null, key );
		}
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, expected, 'returns expected output' );
		t.end();
	}
});

tape( 'by default, the returned function processes object properties concurrently', function test( t ) {
	var mapValuesAsync;
	var expected;
	var values;
	var count;
	var obj;

	mapValuesAsync = factory( fcn );

	obj = {
		'a': 300,
		'b': 250,
		'c': 100
	};
	values = [ 100, 250, 300 ];
	expected = {
		'a': 600,
		'b': 500,
		'c': 200
	};
	count = -1;

	mapValuesAsync( obj, done );

	function fcn( value, key, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, value*2 );
		}
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, expected, 'returns expected output' );
		t.end();
	}
});

tape( 'the function supports returning a function for processing object properties sequentially (in series)', function test( t ) {
	var mapValuesAsync;
	var expected;
	var values;
	var count;
	var opts;
	var obj;

	opts = {
		'series': true
	};
	mapValuesAsync = factory( opts, fcn );

	obj = {
		'a': 300,
		'b': 250,
		'c': 100
	};
	values = [ 300, 250, 100 ];
	expected = {
		'a': 600,
		'b': 500,
		'c': 200
	};
	count = -1;

	mapValuesAsync( obj, done );

	function fcn( value, key, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, value*2 );
		}
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, expected, 'returns expected results' );
		t.end();
	}
});

tape( 'the function supports returning a function for processing object properties sequentially (limit = 1)', function test( t ) {
	var mapValuesAsync;
	var expected;
	var values;
	var count;
	var opts;
	var obj;

	opts = {
		'series': false,
		'limit': 1
	};
	mapValuesAsync = factory( opts, fcn );

	obj = {
		'a': 300,
		'b': 250,
		'c': 100
	};
	values = [ 300, 250, 100 ];
	expected = {
		'a': 600,
		'b': 500,
		'c': 200
	};
	count = -1;

	mapValuesAsync( obj, done );

	function fcn( value, key, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, value*2 );
		}
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, expected, 'returns expected results' );
		t.end();
	}
});

tape( 'the function supports returning a function which limits the maximum number of object properties which are processed at any one time', function test( t ) {
	var mapValuesAsync;
	var expected;
	var values;
	var count;
	var opts;
	var obj;

	opts = {
		'series': false,
		'limit': 2
	};
	mapValuesAsync = factory( opts, fcn );

	obj = {
		'a': 300,
		'b': 250,
		'c': 100
	};
	values = [ 250, 300, 100 ];
	expected = {
		'a': 600,
		'b': 500,
		'c': 200
	};
	count = -1;

	mapValuesAsync( obj, done );

	function fcn( value, key, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, values[ count ], 'provides expected value' );
			next( null, value*2 );
		}
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, expected, 'returns expected results' );
		t.end();
	}
});

tape( 'the function supports specifying an execution context for the invoked function', function test( t ) {
	var mapValuesAsync;
	var opts;
	var obj;
	var ctx;

	ctx = {
		'count': 0
	};
	opts = {
		'thisArg': ctx
	};
	mapValuesAsync = factory( opts, fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	mapValuesAsync( obj, done );

	function fcn( value, key, next ) {
		/* eslint-disable no-invalid-this */
		this.count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, value );
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

tape( 'if an error is encountered while processing an object property, the returned function suspends execution and immediately returns the error (series)', function test( t ) {
	var mapValuesAsync;
	var count;
	var opts;
	var obj;

	opts = {
		'series': true
	};
	mapValuesAsync = factory( opts, fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	count = 0;

	mapValuesAsync( obj, done );

	function fcn( value, key, next ) {
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

tape( 'if an error is encountered while processing an object property, the returned function suspends execution and immediately returns the error (concurrent; limit)', function test( t ) {
	var mapValuesAsync;
	var count;
	var opts;
	var obj;

	opts = {
		'limit': 2
	};
	mapValuesAsync = factory( opts, fcn );

	obj = {
		'a': 300,
		'b': 100,
		'c': 250
	};
	count = 0;

	mapValuesAsync( obj, done );

	function fcn( value, key, next ) {
		count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			return next( new Error( 'beep' ) );
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

tape( 'if an error is encountered while processing an object property, the returned function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var mapValuesAsync;
	var count;
	var obj;

	mapValuesAsync = factory( fcn );

	obj = {
		'a': 500,
		'b': 500,
		'c': 500
	};
	count = 0;
	mapValuesAsync( obj, done );

	function fcn( value, key, next ) {
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

tape( 'the returned function ignores inherited properties', function test( t ) {
	var mapValuesAsync;
	var expected;
	var obj1;

	function fcn( value, key, next ) {
		if ( key === 'f' || key === 'g' ) {
			t.ok( false, 'returns an inherited property' );
		}
		return next( null, value );
	}

	function Foo() {
		this.a = 1;
		this.b = 2;
		this.c = 3;
		this.d = 4;
		this.e = 5;
		return this;
	}

	Foo.prototype.f = 6;
	Foo.prototype.g = 7;

	obj1 = new Foo();

	expected = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	mapValuesAsync = factory( fcn );
	mapValuesAsync( obj1, done );

	function done( error, obj2 ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( obj2, expected, 'returns expected object' );
		t.end();
	}
});

tape( 'the returned function accepts non-plain objects', function test( t ) {
	var mapValuesAsync;
	var expected;
	var obj1;

	function fcn( value, key, next ) {
		return next( null, key + value );
	}

	obj1 = [ 0, 1, 2, 3, 4, 5 ];

	expected = {
		'0': '00',
		'1': '11',
		'2': '22',
		'3': '33',
		'4': '44',
		'5': '55'
	};

	mapValuesAsync = factory( fcn );
	mapValuesAsync( obj1, done );

	function done( error, obj2 ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( obj2, expected, 'returns expected object' );
		t.end();
	}
});

tape( 'the returned function returns a shallow copy', function test( t ) {
	var mapValuesAsync;
	var expected;
	var obj1;

	function fcn( value, next ) {
		return next( null, value );
	}

	obj1 = {
		'a': [ 1 ],
		'b': [ 2 ],
		'c': [ 3 ],
		'd': [ 4 ],
		'e': [ 5 ]
	};

	expected = {
		'a': obj1.a,
		'b': obj1.b,
		'c': obj1.c,
		'd': obj1.d,
		'e': obj1.e
	};

	mapValuesAsync = factory( fcn );
	mapValuesAsync( obj1, done );

	function done( error, obj2 ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( obj2, expected, 'returns expected object' );
		t.strictEqual( obj2.a, obj1.a, 'returns shallow copy' );
		t.strictEqual( obj2.b, obj1.b, 'returns shallow copy' );
		t.strictEqual( obj2.c, obj1.c, 'returns shallow copy' );
		t.strictEqual( obj2.d, obj1.d, 'returns shallow copy' );
		t.strictEqual( obj2.e, obj1.e, 'returns shallow copy' );

		t.end();
	}
});

tape( 'if provided an empty object, the returned function never invokes a provided function', function test( t ) {
	var mapValuesAsync;
	var obj;

	mapValuesAsync = factory( fcn );
	obj = {};

	mapValuesAsync( obj, done );

	function fcn() {
		t.fail( 'should never be called' );
	}

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.notEqual( out, obj, 'returns a new object' );
		t.deepEqual( out, {}, 'returns an empty object' );
		t.end();
	}
});

tape( 'the returned function does not guarantee asynchronous execution', function test( t ) {
	var mapValuesAsync;
	var obj;
	var i;

	mapValuesAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	i = 0;

	mapValuesAsync( obj, done );
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
