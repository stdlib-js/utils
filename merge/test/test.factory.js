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
var objectKeys = require( './../../keys' );
var copy = require( './../../copy' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var defaults = require( './../lib/defaults.js' );
var factory = require( './../lib/factory.js' );


// FUNCTIONS //

function setup() {
	var opts = defaults();
	delete opts.level;
	return opts;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'export is a function' );
	t.end();
});

tape( 'if provided an `options` argument which is not an object, the function will throw a type error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		void 0,
		true,
		[],
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

tape( 'if provided an invalid option, the function will throw a type error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
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
			factory({
				'copy': value
			});
		};
	}
});

tape( 'the function returns a merge function', function test( t ) {
	var merge;
	var opts;

	opts = setup();
	merge = factory( opts );

	t.equal( typeof merge, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function which throws an error if provided insufficient arguments', function test( t ) {
	var merge = factory( setup() );
	t.throws( foo, Error, 'throws error' );
	t.throws( bar, Error, 'throws error' );
	t.end();
	function foo() {
		merge();
	}
	function bar() {
		merge( {} );
	}
});

tape( 'if provided a `target` argument which is not an object, the returned function throws a type error', function test( t ) {
	var values;
	var merge;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		void 0,
		true,
		[],
		function noop() {}
	];

	merge = factory( setup() );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			merge( value, {} );
		};
	}
});

tape( 'if provided a `source` argument which is not an object, the returned function throws a type error', function test( t ) {
	var values;
	var merge;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		void 0,
		true,
		[],
		function noop() {}
	];

	merge = factory( setup() );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			merge( {}, value );
		};
	}
});

tape( 'the returned function can merge two objects', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var src;

	target = {};
	src = {
		'a': 'beep',
		'b': 'boop'
	};

	merge = factory( setup() );

	actual = merge( target, src );
	expected = copy( src );

	t.notEqual( actual, src, 'does not return source object' );
	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the returned function returns the target object', function test( t ) {
	var actual;
	var target;
	var merge;
	var src;

	target = {};
	src = {
		'a': 'beep',
		'b': 'boop'
	};

	merge = factory( setup() );

	actual = merge( target, src );

	t.equal( actual, target, 'returns target object' );
	t.end();
});

tape( 'the returned function can merge multiple objects', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var src1;
	var src2;

	target = {};
	src1 = {
		'a': 'beep',
		'b': 'boop'
	};
	src2 = {
		'c': [ 1, 2, 3 ]
	};

	merge = factory( setup() );

	actual = merge( target, src1, src2 );
	expected = {
		'a': 'beep',
		'b': 'boop',
		'c': [ 1, 2, 3 ]
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the returned function can deep merge', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var src;

	target = {
		'c': {
			'a': 'beep',
			'b': 'boop'
		}
	};
	src = {
		'c': {
			'b': 'woot',
			'c': [ 1, 2, 3 ]
		}
	};

	merge = factory( setup() );

	actual = merge( target, src );
	expected = {
		'c': {
			'a': 'beep',
			'b': 'woot',
			'c': [ 1, 2, 3 ]
		}
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual.c.c, src.c.c, 'deep copied' );
	t.end();
});

tape( 'the returned function can merge to an arbitrary depth', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var opts;
	var src;

	target = {
		'one': {
			'a': 'beep',
			'b': 'boop',
			'two': {
				'three': null,
				'c': [ 5, 6, 7 ]
			}
		}
	};
	src = {
		'one': {
			'b': 'woot',
			'two': {
				'three': [ 1, 2, 3 ]
			}
		}
	};

	opts = setup();
	opts.level = 2;

	merge = factory( opts );

	actual = merge( target, src );
	expected = {
		'one': {
			'a': 'beep',
			'b': 'woot',
			'two': src.one.two
		}
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual.one.two, src.one.two, 'deep copied' );
	t.end();
});

tape( 'if `copy` is `false`, the returned function will not deep copy', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var opts;
	var src;

	// Simple case...
	target = {};

	src = {
		'a': [ 1, 2, 3 ]
	};

	opts = setup();
	opts.copy = false;

	merge = factory( opts );

	actual = merge( target, src );
	expected = {
		'a': src.a
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( actual.a, src.a, 'same reference' );

	// Deep merge...
	target = {
		'one': {
			'a': 'beep',
			'b': 'boop',
			'two': {
				'three': null,
				'c': [ 5, 6, 7 ]
			}
		}
	};
	src = {
		'one': {
			'b': 'woot',
			'two': {
				'three': [ 1, 2, 3 ]
			}
		}
	};

	opts = setup();
	opts.level = 2;
	opts.copy = false;

	merge = factory( opts );

	actual = merge( target, src );
	expected = {
		'one': {
			'a': 'beep',
			'b': 'woot',
			'two': src.one.two
		}
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( actual.one.two, src.one.two, 'same reference' );

	t.end();
});

tape( 'if `extend` is `false`, the returned function will not extend a target object', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var opts;
	var src;

	target = {
		'a': 'woot'
	};
	src = {
		'a': 'beep',
		'b': 'boop'
	};

	opts = setup();
	opts.extend = false;

	merge = factory( opts );

	actual = merge( target, src );
	expected = {
		'a': 'beep'
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'if `override` is `false`, the returned function will not override a target property', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var opts;
	var src;

	target = {
		'a': 'woot'
	};
	src = {
		'a': 'beep',
		'b': 'boop'
	};

	opts = setup();
	opts.override = false;

	merge = factory( opts );

	actual = merge( target, src );
	expected = {
		'a': 'woot',
		'b': 'boop'
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the returned function supports a custom merge strategy (override)', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var opts;
	var src;

	function strategy( a, b, key ) {
		if ( typeof a === 'string' && typeof b === 'string' ) {
			return a + b;
		}
		if ( key === 'b' ) {
			return b.replace( /oo/, '00' );
		}
		if ( key === 'e' ) {
			return a;
		}
		return b;
	}

	target = {
		'a': 'woot',
		'b': null,
		'c': null
	};
	src = {
		'a': 'beep',
		'b': 'boop',
		'c': {
			'd': 3.14
		}
	};

	opts = setup();
	opts.override = strategy;

	merge = factory( opts );

	actual = merge( target, src );
	expected = {
		'a': 'wootbeep',
		'b': 'b00p',
		'c': {
			'd': 3.14
		}
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual.c, src.c, 'not equal (simple case)' );

	// No deep copies if provided existing value...
	target = {
		'a': 'woot',
		'b': null,
		'c': null,
		'e': {
			'f': true
		}
	};
	src = {
		'a': 'beep',
		'b': 'boop',
		'c': {
			'd': 3.14
		},
		'e': null
	};

	opts = setup();
	opts.override = strategy;

	merge = factory( opts );

	actual = merge( target, src );
	expected = {
		'a': 'wootbeep',
		'b': 'b00p',
		'c': {
			'd': 3.14
		},
		'e': target.e
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( actual.e, target.e, 'existing value' );

	// No deep copies if copy is `false` and provided a new value...
	target = {
		'a': 'woot',
		'b': null,
		'c': null
	};
	src = {
		'a': 'beep',
		'b': 'boop',
		'c': {
			'd': 3.14
		}
	};

	opts = setup();
	opts.override = strategy;
	opts.copy = false;

	merge = factory( opts );

	actual = merge( target, src );
	expected = {
		'a': 'wootbeep',
		'b': 'b00p',
		'c': {
			'd': 3.14
		}
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( actual.c, src.c, 'no deep copies of new values' );

	t.end();
});

tape( 'if `extend` and `override` options are both `false`, the returned function returns the target object', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var opts;
	var src;

	target = {
		'a': 'beep'
	};

	src = {
		'a': 'boop',
		'b': 'woot'
	};

	opts = setup();
	opts.extend = false;
	opts.override = false;

	merge = factory( opts );

	actual = merge( target, src );
	expected = target;

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( actual, target, 'returns target object' );
	t.end();
});

tape( 'the returned function supports merging built-in objects and class instances', function test( t ) {
	var expected;
	var actual;
	var target;
	var merge;
	var opts;
	var keys;
	var src;
	var key;
	var len;
	var i;

	function Foo( bar ) {
		this._bar = bar;
		return this;
	}

	target = {
		'time': new Date(),
		'regex': /beep/,
		'buffer': string2buffer( 'beep' ),
		'Boolean': new Boolean( true ), // eslint-disable-line no-new-wrappers
		'String': new String( 'woot' ), // eslint-disable-line no-new-wrappers
		'Number': new Number( 5 ), // eslint-disable-line no-new-wrappers
		'Uint8Array': new Uint8Array( 10 ),
		'Foo': new Foo( 'beep' )
	};

	src = {
		'time': new Date( target.time - 60000 ),
		'regex': /boop/,
		'buffer': string2buffer( 'boop' ),
		'Boolean': new Boolean( false ), // eslint-disable-line no-new-wrappers
		'String': new String( 'bop' ), // eslint-disable-line no-new-wrappers
		'Number': new Number( 10 ), // eslint-disable-line no-new-wrappers
		'Uint8Array': new Uint8Array( 5 ),
		'Foo': new Foo( 'boop' )
	};

	opts = setup();
	merge = factory( opts );

	actual = merge( target, src );
	expected = copy( src );

	t.deepEqual( actual, expected, 'deep equal' );

	opts = setup();
	opts.copy = false;

	merge = factory( opts );

	actual = merge( target, src );
	expected = src;

	t.deepEqual( actual, expected, 'deep equal' );

	keys = objectKeys( src );
	len = keys.length;
	for ( i = 0; i < len; i++ ) {
		key = keys[ i ];
		t.equal( actual[ key ], src[ key ], key );
	}

	t.end();
});
