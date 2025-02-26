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

	function next( key, clbk ) {
		clbk( null, key );
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

	function next( key, clbk ) {
		clbk( null, key );
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
	var mapKeysAsync;
	var values;
	var i;

	function next( key, clbk ) {
		clbk( null, key );
	}

	mapKeysAsync = factory( next );

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
			mapKeysAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if not provided an object (options)', function test( t ) {
	var mapKeysAsync;
	var values;
	var i;

	function next( key, clbk ) {
		clbk( null, key );
	}

	mapKeysAsync = factory( {}, next );

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
			mapKeysAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (no options)', function test( t ) {
	var mapKeysAsync;
	var values;
	var i;

	function next( key, clbk ) {
		clbk( null, key );
	}

	mapKeysAsync = factory( next );

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
			mapKeysAsync( obj, value );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (options)', function test( t ) {
	var mapKeysAsync;
	var values;
	var i;

	function next( key, clbk ) {
		clbk( null, key );
	}

	mapKeysAsync = factory( {}, next );

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
			mapKeysAsync( obj, value );
		};
	}
});

tape( 'the returned function invokes a provided function once for each own property in an object (key,next)', function test( t ) {
	var mapKeysAsync;
	var expected;
	var obj;

	mapKeysAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a:beep': 1,
		'b:beep': 2,
		'c:beep': 3
	};

	mapKeysAsync( obj, done );

	function fcn( key, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, key+':beep' );
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

tape( 'the returned function invokes a provided function once for each own property in an object (key,value,next)', function test( t ) {
	var mapKeysAsync;
	var expected;
	var obj;

	mapKeysAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a:1': 1,
		'b:2': 2,
		'c:3': 3
	};

	mapKeysAsync( obj, done );

	function fcn( key, value, next ) {
		setTimeout( onTimeout, value );
		function onTimeout() {
			next( null, key+':'+value );
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

tape( 'the returned function invokes a provided function once for each own property in an object (key,value,obj,next)', function test( t ) {
	var mapKeysAsync;
	var expected;
	var obj;

	mapKeysAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a:1': 1,
		'b:2': 2,
		'c:3': 3
	};

	mapKeysAsync( obj, done );

	function fcn( key, value, o, next ) {
		t.strictEqual( o, obj, 'provides input object' );
		setTimeout( onTimeout, value );
		function onTimeout() {
			next( null, key+':'+value );
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
	var mapKeysAsync;
	var expected;
	var obj;

	mapKeysAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a:beep': 1,
		'b:beep': 2,
		'c:beep': 3
	};

	mapKeysAsync( obj, done );

	function fcn( key ) {
		var next = arguments[ 3 ];
		t.strictEqual( arguments[ 2 ], obj, 'provides input object' );
		setTimeout( onTimeout, arguments[ 1 ] );
		function onTimeout() {
			next( null, key+':beep' );
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
	var mapKeysAsync;
	var expected;
	var obj;

	mapKeysAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	expected = {
		'a:beep': 1,
		'b:beep': 2,
		'c:beep': 3
	};

	mapKeysAsync( obj, done );

	function fcn() {
		var next = arguments[ 3 ];
		var key = arguments[ 0 ];

		t.strictEqual( arguments[ 2 ], obj, 'provides input object' );
		setTimeout( onTimeout, arguments[ 1 ] );

		function onTimeout() {
			next( null, key+':beep' );
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
	var mapKeysAsync;
	var expected;
	var count;
	var keys;
	var obj;

	mapKeysAsync = factory( fcn );

	obj = {
		'a': 300,
		'b': 250,
		'c': 100
	};
	keys = [ 'c', 'b', 'a' ];
	expected = {
		'a:beep': 300,
		'b:beep': 250,
		'c:beep': 100
	};
	count = -1;

	mapKeysAsync( obj, done );

	function fcn( key, value, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( key, keys[ count ], 'provides expected key' );
			next( null, key+':beep' );
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
	var mapKeysAsync;
	var expected;
	var count;
	var keys;
	var opts;
	var obj;

	opts = {
		'series': true
	};
	mapKeysAsync = factory( opts, fcn );

	obj = {
		'a': 300,
		'b': 250,
		'c': 100
	};
	keys = [ 'a', 'b', 'c' ];
	expected = {
		'a:beep': 300,
		'b:beep': 250,
		'c:beep': 100
	};
	count = -1;

	mapKeysAsync( obj, done );

	function fcn( key, value, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( key, keys[ count ], 'provides expected key' );
			next( null, key+':beep' );
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
	var mapKeysAsync;
	var expected;
	var count;
	var keys;
	var opts;
	var obj;

	opts = {
		'series': false,
		'limit': 1
	};
	mapKeysAsync = factory( opts, fcn );

	obj = {
		'a': 300,
		'b': 250,
		'c': 100
	};
	keys = [ 'a', 'b', 'c' ];
	expected = {
		'a:beep': 300,
		'b:beep': 250,
		'c:beep': 100
	};
	count = -1;

	mapKeysAsync( obj, done );

	function fcn( key, value, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( key, keys[ count ], 'provides expected key' );
			next( null, key+':beep' );
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
	var mapKeysAsync;
	var expected;
	var count;
	var keys;
	var opts;
	var obj;

	opts = {
		'series': false,
		'limit': 2
	};
	mapKeysAsync = factory( opts, fcn );

	obj = {
		'a': 300,
		'b': 250,
		'c': 100
	};
	keys = [ 'b', 'a', 'c' ];
	expected = {
		'a:beep': 300,
		'b:beep': 250,
		'c:beep': 100
	};
	count = -1;

	mapKeysAsync( obj, done );

	function fcn( key, value, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( key, keys[ count ], 'provides expected key' );
			next( null, key+':beep' );
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
	var mapKeysAsync;
	var opts;
	var obj;
	var ctx;

	ctx = {
		'count': 0
	};
	opts = {
		'thisArg': ctx
	};
	mapKeysAsync = factory( opts, fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	mapKeysAsync( obj, done );

	function fcn( key, value, next ) {
		/* eslint-disable no-invalid-this */
		this.count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, key );
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
	var mapKeysAsync;
	var count;
	var opts;
	var obj;

	opts = {
		'series': true
	};
	mapKeysAsync = factory( opts, fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	count = 0;

	mapKeysAsync( obj, done );

	function fcn( key, value, next ) {
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
	var mapKeysAsync;
	var count;
	var opts;
	var obj;

	opts = {
		'limit': 2
	};
	mapKeysAsync = factory( opts, fcn );

	obj = {
		'a': 300,
		'b': 100,
		'c': 250
	};
	count = 0;

	mapKeysAsync( obj, done );

	function fcn( key, value, next ) {
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
	var mapKeysAsync;
	var count;
	var obj;

	mapKeysAsync = factory( fcn );

	obj = {
		'a': 500,
		'b': 500,
		'c': 500
	};
	count = 0;
	mapKeysAsync( obj, done );

	function fcn( key, value, next ) {
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
	var mapKeysAsync;
	var expected;
	var obj1;

	function fcn( key, value, next ) {
		if ( key === 'f' || key === 'g' ) {
			t.ok( false, 'returns an inherited property' );
		}
		return next( null, key );
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

	mapKeysAsync = factory( fcn );
	mapKeysAsync( obj1, done );

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
	var mapKeysAsync;
	var expected;
	var obj1;

	function fcn( key, value, next ) {
		return next( null, key + value );
	}

	obj1 = [ 0, 1, 2, 3, 4, 5 ];

	expected = {
		'00': 0,
		'11': 1,
		'22': 2,
		'33': 3,
		'44': 4,
		'55': 5
	};

	mapKeysAsync = factory( fcn );
	mapKeysAsync( obj1, done );

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
	var mapKeysAsync;
	var expected;
	var obj1;

	function fcn( key, next ) {
		return next( null, key );
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

	mapKeysAsync = factory( fcn );
	mapKeysAsync( obj1, done );

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
	var mapKeysAsync;
	var obj;

	mapKeysAsync = factory( fcn );
	obj = {};

	mapKeysAsync( obj, done );

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

tape( 'the returned function serializes transform function return values as object keys', function test( t ) {
	var mapKeysAsync;
	var expected;
	var obj;

	function fcn( key, value, next ) {
		return next( null, value );
	}

	obj = {
		'a': {}
	};
	expected = {
		'[object Object]': obj.a
	};

	mapKeysAsync = factory( fcn );
	mapKeysAsync( obj, done );

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

tape( 'the function serializes transform function return values as object keys', function test( t ) {
	var mapKeysAsync;
	var expected;
	var obj;

	function fcn( key, value, next ) {
		return next();
	}

	obj = {
		'a': 1
	};
	expected = {
		'undefined': obj.a
	};

	mapKeysAsync = factory( fcn );
	mapKeysAsync( obj, done );

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

tape( 'the returned function does not guarantee asynchronous execution', function test( t ) {
	var mapKeysAsync;
	var obj;
	var i;

	mapKeysAsync = factory( fcn );

	obj = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	i = 0;

	mapKeysAsync( obj, done );
	i = 1;

	function fcn( key, next ) {
		next( null, key );
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
