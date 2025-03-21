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
var hasClassSupport = require( '@stdlib/assert/has-class-support' );
var defineProperty = require( './../../define-property' );
var copy = require( './../lib' );


// FIXTURES //

var CustomError1 = require( './fixtures/customerror.proto.js' );
var createClass = require( './fixtures/customerror.subclass.js' );


// VARIABLES //

var opts = {
	'skip': !hasClassSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof copy, 'function', 'export is a function' );
	t.end();
});

tape( 'generic <Error> object', function test( t ) {
	var err1 = new Error( 'beep' );
	var err2 = copy( err1 );

	t.equal( err1 !== err2, true, 'separate instances' );
	t.equal( err2 instanceof Error, true, 'instance of Error' );
	t.equal( err2.message, err1.message, 'equal messages' );
	t.equal( err2.name, err1.name, 'equal names' );
	t.equal( err2.stack, err1.stack, 'equal stack trace' );
	t.end();
});

tape( '<TypeError>', function test( t ) {
	var err1 = new TypeError( 'invalid type' );
	var err2 = copy( err1 );

	t.equal( err1 !== err2, true, 'separate instances' );
	t.equal( err2 instanceof TypeError, true, 'instance of TypeError' );
	t.equal( err2.message, err1.message, 'equal messages' );
	t.equal( err2.name, err1.name, 'equal names' );
	t.equal( err2.stack, err1.stack, 'equal stack trace' );
	t.end();
});

tape( '<RangeError>', function test( t ) {
	var err1 = new RangeError( 'out-of-range' );
	var err2 = copy( err1 );

	t.equal( err1 !== err2, true, 'separate instances' );
	t.equal( err2 instanceof RangeError, true, 'instance of RangeError' );
	t.equal( err2.message, err1.message, 'equal messages' );
	t.equal( err2.name, err1.name, 'equal names' );
	t.equal( err2.stack, err1.stack, 'equal stack trace' );
	t.end();
});

tape( '<SyntaxError>', function test( t ) {
	var err1 = new SyntaxError( 'bad syntax' );
	var err2 = copy( err1 );

	t.equal( err1 !== err2, true, 'separate instances' );
	t.equal( err2 instanceof SyntaxError, true, 'instance of SyntaxError' );
	t.equal( err2.message, err1.message, 'equal messages' );
	t.equal( err2.name, err1.name, 'equal names' );
	t.equal( err2.stack, err1.stack, 'equal stack trace' );
	t.end();
});

tape( '<ReferenceError>', function test( t ) {
	var err1 = new ReferenceError( 'undefined variable' );
	var err2 = copy( err1 );

	t.equal( err1 !== err2, true, 'separate instances' );
	t.equal( err2 instanceof ReferenceError, true, 'instance of ReferenceError' );
	t.equal( err2.message, err1.message, 'equal messages' );
	t.equal( err2.name, err1.name, 'equal names' );
	t.equal( err2.stack, err1.stack, 'equal stack trace' );
	t.end();
});

tape( '<EvalError>', function test( t ) {
	var err1 = new EvalError( 'eval err1' );
	var err2 = copy( err1 );

	t.equal( err1 !== err2, true, 'separate instances' );
	t.equal( err2 instanceof EvalError, true, 'instance of EvalError' );
	t.equal( err2.message, err1.message, 'equal messages' );
	t.equal( err2.name, err1.name, 'equal names' );
	t.equal( err2.stack, err1.stack, 'equal stack trace' );
	t.end();
});

tape( '<URIError>', function test( t ) {
	var err1 = new URIError( 'bad URI' );
	var err2 = copy( err1 );

	t.equal( err1 !== err2, true, 'separate instances' );
	t.equal( err2 instanceof URIError, true, 'instance of URIError' );
	t.equal( err2.message, err1.message, 'equal messages' );
	t.equal( err2.name, err1.name, 'equal names' );
	t.equal( err2.stack, err1.stack, 'equal stack trace' );
	t.end();
});

tape( 'environments missing a `stack` trace', function test( t ) {
	var err1;
	var err2;

	// Blank `stack` property...
	err1 = new Error( 'beep' );
	err1.stack = '';
	err1.constructor = createError;

	err2 = copy( err1 );
	t.equal( err2.stack, '', 'no stack trace' );

	t.end();

	function createError( msg ) {
		var err = new Error( msg );
		err.stack = '';
		return err;
	}
});

tape( '`code` property (Node.js)', function test( t ) {
	var err1;
	var err2;

	err1 = new Error( 'beep' );
	err1.code = 43;

	err2 = copy( err1 );
	t.equal( err2.code, err1.code, 'equal codes' );

	t.end();
});

tape( '`errno` property (Node.js)', function test( t ) {
	var err1;
	var err2;

	err1 = new Error( 'beep' );
	err1.errno = 'EACCES';

	err2 = copy( err1 );
	t.equal( err1.errno, err2.errno, 'equal errno' );

	t.end();
});

tape( '`syscall` property (Node.js)', function test( t ) {
	var err1;
	var err2;

	err1 = new Error( 'beep' );
	err1.syscall = 'boop';

	err2 = copy( err1 );
	t.equal( err2.syscall, err1.syscall, 'equal syscall values' );

	t.end();
});

tape( 'additional (enumerable) properties', function test( t ) {
	var err1;
	var err2;

	// Data descriptor...
	err1 = new Error( 'errrr' );
	err1.beep = 'boop';
	err1.boop = 'beep';

	err2 = copy( err1 );
	t.equal( err2.beep, err1.beep, 'data descriptor' );
	t.equal( err2.boop, err1.boop, 'data descriptor' );

	// Accessor descriptor...
	err1 = new Error( 'errrr' );
	defineProperty( err1, 'beep', {
		'enumerable': true,
		'configurable': true,
		'get': function get() {
			return 'boop';
		}
	});
	defineProperty( err1, 'boop', {
		'enumerable': true,
		'configurable': false,
		'get': function get() {
			return 'beep';
		}
	});

	err2 = copy( err1 );
	t.equal( err2.beep, err1.beep, 'accessor descriptor' );
	t.equal( err2.boop, err1.boop, 'accessor descriptor' );

	// Deep equal...
	err1 = new Error( 'errrr' );
	err1.arr = [ 1, 2, [ 3, 4, 5 ] ];

	err2 = copy( err1 );
	t.notEqual( err2.arr, err1.arr, 'new instances' );
	t.deepEqual( err2.arr, err1.arr, 'deep equal' );

	t.end();
});

tape( 'custom errors (proto)', function test( t ) {
	var err1 = new CustomError1( 'custom error' );
	var err2 = copy( err1 );

	t.equal( err1 !== err2, true, 'separate instances' );
	t.equal( err2 instanceof CustomError1, true, 'instance of CustomError' );
	t.equal( err2 instanceof Error, true, 'instance of Error' );
	t.equal( err2.message, err1.message, 'equal messages' );
	t.equal( err2.name, err1.name, 'equal names' );
	t.equal( err2.stack, err1.stack, 'equal stack trace' );
	t.end();
});

tape( 'custom errors (subclass; ES2015)', opts, function test( t ) {
	var CustomError2 = createClass();
	var err1 = new CustomError2( 'custom error' );
	var err2 = copy( err1 );

	t.equal( err1 !== err2, true, 'separate instances' );
	t.equal( err2 instanceof CustomError2, true, 'instance of CustomError' );
	t.equal( err2 instanceof Error, true, 'instance of Error' );
	t.equal( err2.message, err1.message, 'equal messages' );
	t.equal( err2.name, err1.name, 'equal names' );
	t.equal( err2.stack, err1.stack, 'equal stack trace' );
	t.end();
});
