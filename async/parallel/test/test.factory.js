/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
			factory( value );
		};
	}
});

tape( 'the function throws an error if not provided a function array (options)', function test( t ) {
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
			factory( value, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a callback argument which is a function', function test( t ) {
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
			factory( [ noop ] )( value );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a callback argument which is a function (options)', function test( t ) {
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
			factory( [ noop ], {} )( value );
		};
	}
});

tape( 'the function throws an error if provided an `options` argument which is not an object', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( [ foo ], value );
		};
	}

	function foo( clbk ) {
		clbk();
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

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
			factory( [ foo ], opts, next );
		};
	}

	function next( value, clbk ) {
		clbk( null, value );
	}

	function foo( clbk ) {
		clbk();
	}
});

tape( 'the function returns a function', function test( t ) {
	var f = factory( [ noop ] );
	t.equal( typeof f, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a function (options)', function test( t ) {
	var f = factory( [ noop ], {} );
	t.equal( typeof f, 'function', 'returns expected value' );
	t.end();
});

tape( 'the returned function invokes the provided functions once and returns the results in order (asynchronous)', function test( t ) {
	var parallel;
	var expected;

	parallel = factory( [ one, two, three ] );

	expected = [
		1,
		2,
		3
	];

	parallel( done );

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		}
		t.deepEqual( out, expected, 'returns expected value' );
		t.end();
	}

	function one( clbk ) {
		setTimeout( onTimeout, 100 );

		function onTimeout() {
			clbk( null, 1 );
		}
	}

	function two( clbk ) {
		setTimeout( onTimeout, 400 );

		function onTimeout() {
			clbk( null, 2 );
		}
	}

	function three( clbk ) {
		setTimeout( onTimeout, 200 );

		function onTimeout() {
			clbk( null, 3 );
		}
	}
});

tape( 'the returned function invokes the provided functions once and returns the results in order (synchronous)', function test( t ) {
	var parallel;
	var expected;

	parallel = factory( [ one, two, three ] );

	expected = [
		1,
		2,
		3
	];

	parallel( done );

	function done( error, out ) {
		if ( error ) {
			t.fail( error.message );
		}
		t.deepEqual( out, expected, 'returns expected value' );
		t.end();
	}

	function one( clbk ) {
		clbk( null, 1 );
	}

	function two( clbk ) {
		clbk( null, 2 );
	}

	function three( clbk ) {
		clbk( null, 3 );
	}
});

tape( 'the function supports specifying an execution context for all invoked functions', function test( t ) {
	var parallel;
	var opts;
	var ctx;

	ctx = {
		'count': 0
	};
	opts = {
		'thisArg': ctx
	};
	parallel = factory( [ one, two, three ], opts );

	parallel( done );

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		}
		t.strictEqual( ctx.count, 3, 'returns expected value' );
		t.end();
	}

	function one( clbk ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		setTimeout( onTimeout, 100 );

		function onTimeout() {
			clbk( null, 1 );
		}
	}

	function two( clbk ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		setTimeout( onTimeout, 400 );

		function onTimeout() {
			clbk( null, 2 );
		}
	}

	function three( clbk ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		setTimeout( onTimeout, 200 );

		function onTimeout() {
			clbk( null, 3 );
		}
	}
});

tape( 'if an error is encountered during function execution, the returned function suspends execution and immediately returns the error (limit = 1)', function test( t ) {
	var parallel;
	var count;
	var opts;

	count = 0;

	opts = {
		'limit': 1
	};
	parallel = factory( [ one, two, three ], opts );

	parallel( done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.strictEqual( count, 1, 'returns expected value' );
		t.end();
	}

	function one( clbk ) {
		setTimeout( onTimeout, 100 );

		function onTimeout() {
			count += 1;
			clbk( new Error( 'beep' ) );
		}
	}

	function two( clbk ) {
		setTimeout( onTimeout, 400 );

		function onTimeout() {
			count += 1;
			clbk( null, 2 );
		}
	}

	function three( clbk ) {
		setTimeout( onTimeout, 200 );

		function onTimeout() {
			count += 1;
			clbk( null, 3 );
		}
	}
});

tape( 'if an error is encountered during function execution, the returned function suspends execution and immediately returns the error (concurrent; limit)', function test( t ) {
	var parallel;
	var count;
	var opts;

	count = 0;

	opts = {
		'limit': 2
	};
	parallel = factory( [ one, two, three ], opts );

	parallel( done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.strictEqual( count, 2, 'returns expected value' );
		t.end();
	}

	function one( clbk ) {
		count += 1;
		setTimeout( onTimeout, 100 );

		function onTimeout() {
			clbk( new Error( 'beep' ) );
		}
	}

	function two( clbk ) {
		count += 1;
		setTimeout( onTimeout, 400 );

		function onTimeout() {
			clbk( new Error( 'beep' ) );
		}
	}

	function three( clbk ) {
		count += 1;
		setTimeout( onTimeout, 200 );

		function onTimeout() {
			clbk( null, 3 );
		}
	}
});

tape( 'if an error is encountered during function execution, the returned function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var parallel;
	var count;

	count = 0;

	parallel = factory( [ one, two, three ] );
	parallel( done );

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.strictEqual( count, 3, 'returns expected value' );
		t.end();
	}

	function one( clbk ) {
		count += 1;
		setTimeout( onTimeout, 100 );

		function onTimeout() {
			clbk( new Error( 'beep' ) );
		}
	}

	function two( clbk ) {
		count += 1;
		setTimeout( onTimeout, 400 );

		function onTimeout() {
			clbk( new Error( 'beep' ) );
		}
	}

	function three( clbk ) {
		count += 1;
		setTimeout( onTimeout, 200 );

		function onTimeout() {
			clbk( new Error( 'beep' ) );
		}
	}
});
