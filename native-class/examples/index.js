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

/* eslint-disable no-restricted-syntax, no-empty-function */

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
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Symbol = require( '@stdlib/symbol/ctor' );
var nativeClass = require( './../lib' );

console.log( nativeClass( 'a' ) );
// => '[object String]'

console.log( nativeClass( 5 ) );
// => '[object Number]'

console.log( nativeClass( NaN ) );
// => '[object Number]'

console.log( nativeClass( null ) );
// => '[object Null]'

console.log( nativeClass( void 0 ) );
// => '[object Undefined]'

console.log( nativeClass( true ) );
// => '[object Boolean]'

console.log( nativeClass( false ) );
// => '[object Boolean]'

console.log( nativeClass( {} ) );
// => '[object Object]'

console.log( nativeClass( [] ) );
// => '[object Array]'

console.log( nativeClass( function noop() {} ) );
// => '[object Function]'

console.log( nativeClass( /./ ) );
// => '[object RegExp]'

console.log( nativeClass( new Date() ) );
// => '[object Date]'

if ( hasMapSupport() ) {
	console.log( nativeClass( new Map() ) );
	// => '[object Map]'
}
if ( hasWeakMapSupport() ) {
	console.log( nativeClass( new WeakMap() ) );
	// => '[object WeakMap]'
}
if ( hasSetSupport() ) {
	console.log( nativeClass( new Set() ) );
	// => '[object Set]'
}
if ( hasWeakSetSupport() ) {
	console.log( nativeClass( new WeakSet() ) );
	// => '[object WeakSet]'
}
if ( hasSymbolSupport() ) {
	console.log( nativeClass( Symbol( 'beep' ) ) );
	// => '[object Symbol]'
}
console.log( nativeClass( new Error() ) );
// => '[object Error]'

console.log( nativeClass( new TypeError() ) );
// => '[object Error]'

console.log( nativeClass( new SyntaxError() ) );
// => '[object Error]'

console.log( nativeClass( new URIError() ) );
// => '[object Error]'

console.log( nativeClass( new RangeError() ) );
// => '[object Error]'

console.log( nativeClass( new ReferenceError() ) );
// => '[object Error]'

console.log( nativeClass( new EvalError() ) );
// => '[object Error]'

console.log( nativeClass( new Int8Array() ) );
// => '[object Int8Array]'

console.log( nativeClass( new Uint8Array() ) );
// => '[object Uint8Array]'

console.log( nativeClass( new Uint8ClampedArray() ) );
// => '[object Uint8ClampedArray]'

console.log( nativeClass( new Int16Array() ) );
// => '[object Int16Array]'

console.log( nativeClass( new Uint16Array() ) );
// => '[object Uint16Array]'

console.log( nativeClass( new Int32Array() ) );
// => '[object Int32Array]'

console.log( nativeClass( new Uint32Array() ) );
// => '[object Uint32Array]'

console.log( nativeClass( new Float32Array() ) );
// => '[object Float32Array]'

console.log( nativeClass( new Float64Array() ) );
// => '[object Float64Array]'

console.log( nativeClass( new ArrayBuffer() ) );
// => '[object ArrayBuffer]'

console.log( nativeClass( Math ) );
// => '[object Math]'

console.log( nativeClass( JSON ) );
// => '[object JSON]'

function Person() {
	return this;
}
console.log( nativeClass( new Person() ) );
// => '[object Object]'
