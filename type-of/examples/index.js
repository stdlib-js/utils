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

/* eslint-disable no-restricted-syntax, no-empty-function, func-names, func-style */

'use strict';

var hasMapSupport = require( '@stdlib/assert/has-map-support' );
var hasWeakMapSupport = require( '@stdlib/assert/has-weakmap-support' );
var hasSetSupport = require( '@stdlib/assert/has-set-support' );
var hasWeakSetSupport = require( '@stdlib/assert/has-weakset-support' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Symbol = require( '@stdlib/symbol/ctor' );
var typeOf = require( './../lib' );

console.log( typeOf( 'a' ) );
// => 'string'

console.log( typeOf( 5 ) );
// => 'number'

console.log( typeOf( NaN ) );
// => 'number'

console.log( typeOf( Infinity ) );
// => 'number'

console.log( typeOf( true ) );
// => 'boolean'

console.log( typeOf( false ) );
// => 'boolean'

console.log( typeOf( void 0 ) );
// => 'undefined'

console.log( typeOf( null ) );
// => 'null'

console.log( typeOf( [] ) );
// => 'array'

console.log( typeOf( {} ) );
// => 'object'

console.log( typeOf( function noop() {} ) );
// => 'function'

if ( hasMapSupport() ) {
	console.log( typeOf( new Map() ) );
	// => 'map'
}
if ( hasWeakMapSupport() ) {
	console.log( typeOf( new WeakMap() ) );
	// => 'weakmap'
}
if ( hasSetSupport() ) {
	console.log( typeOf( new Set() ) );
	// => 'set'
}
if ( hasWeakSetSupport() ) {
	console.log( typeOf( new WeakSet() ) );
	// => 'weakset'
}
if ( hasSymbolSupport() ) {
	console.log( typeOf( Symbol( 'beep' ) ) );
	// => 'symbol'
}
console.log( typeOf( new Error( 'beep' ) ) );
// => 'error'

console.log( typeOf( new TypeError( 'beep' ) ) );
// => 'typeerror'

console.log( typeOf( new SyntaxError( 'beep' ) ) );
// => 'syntaxerror'

console.log( typeOf( new ReferenceError( 'beep' ) ) );
// => 'referenceerror'

console.log( typeOf( new URIError( 'beep' ) ) );
// => 'urierror'

console.log( typeOf( new EvalError( 'beep' ) ) );
// => 'evalerror'

console.log( typeOf( new RangeError( 'beep' ) ) );
// => 'rangeerror'

console.log( typeOf( new Date() ) );
// => 'date'

console.log( typeOf( /./ ) );
// => 'regexp'

console.log( typeOf( Math ) );
// => 'math'

console.log( typeOf( JSON ) );
// => 'json'

console.log( typeOf( new Int8Array( 10 ) ) );
// => 'int8array'

console.log( typeOf( new Uint8Array( 10 ) ) );
// => 'uint8array'

console.log( typeOf( new Int16Array( 10 ) ) );
// => 'int16array'

console.log( typeOf( new Uint16Array( 10 ) ) );
// => 'uint16array'

console.log( typeOf( new Int32Array( 10 ) ) );
// => 'int32array'

console.log( typeOf( new Uint32Array( 10 ) ) );
// => 'uint32array'

console.log( typeOf( new Float32Array( 10 ) ) );
// => 'float32array'

console.log( typeOf( new Float64Array( 10 ) ) );
// => 'float64array'

console.log( typeOf( new ArrayBuffer( 10 ) ) );
// => 'arraybuffer'

function Person1() {
	return this;
}
console.log( typeOf( new Person1() ) );
// => 'person1'

var Person2 = function () {
	return this;
};
console.log( typeOf( new Person2() ) );
// => '' || 'person2'
