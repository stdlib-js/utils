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
var proxyquire = require( 'proxyquire' );
var isArguments = require( '@stdlib/assert/is-arguments' );
var polyfill = require( './../lib/polyfill.js' );
var check = require( './../lib/has_arguments_bug.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof check, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if an environment does not support providing `arguments` to the built-in `Object.keys()` interface', function test( t ) {
	var check = proxyquire( './../lib/has_arguments_bug.js', {
		'./builtin.js': objectKeys
	});

	t.strictEqual( check(), true, 'returns expected value' );
	t.end();

	function objectKeys( value ) {
		if ( isArguments( value ) ) {
			return null;
		}
		return polyfill( value );
	}
});

tape( 'the function returns `false` if an environment does support providing `arguments` to the built-in `Object.keys()` interface', function test( t ) {
	var check = proxyquire( './../lib/has_arguments_bug.js', {
		'./builtin.js': polyfill // Note: we assume that the polyfill always works and can serve as the "ground truth"
	});

	t.strictEqual( check(), false, 'returns expected value' );
	t.end();
});
