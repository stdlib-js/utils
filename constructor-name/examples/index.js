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

var hasMapSupport = require( '@stdlib/assert/has-map-support' );
var hasWeakMapSupport = require( '@stdlib/assert/has-weakmap-support' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var hasSetSupport = require( '@stdlib/assert/has-set-support' );
var hasWeakSetSupport = require( '@stdlib/assert/has-weakset-support' );
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
var Buffer = require( '@stdlib/buffer/ctor' );
var Symbol = require( '@stdlib/symbol/ctor' );
var constructorName = require( './../lib' );

function noop() {
	// Do nothing...
}

console.log( constructorName( 'a' ) );
// => 'String'

console.log( constructorName( 5 ) );
// => 'Number'

console.log( constructorName( NaN ) );
// => 'Number'

console.log( constructorName( null ) );
// => 'Null'

console.log( constructorName( void 0 ) );
// => 'Undefined'

console.log( constructorName( true ) );
// => 'Boolean'

console.log( constructorName( false ) );
// => 'Boolean'

console.log( constructorName( {} ) );
// => 'Object'

console.log( constructorName( [] ) );
// => 'Array'

console.log( constructorName( noop ) );
// => 'Function'

console.log( constructorName( /./ ) );
// => 'RegExp'

console.log( constructorName( new Date() ) );
// => 'Date'

if ( hasMapSupport() ) {
	console.log( constructorName( new Map() ) );
	// => 'Map'
}
if ( hasWeakMapSupport() ) {
	console.log( constructorName( new WeakMap() ) );
	// => 'WeakMap'
}
if ( hasSetSupport() ) {
	console.log( constructorName( new Set() ) );
	// => 'Set'
}
if ( hasWeakSetSupport() ) {
	console.log( constructorName( new WeakSet() ) );
	// => 'WeakSet'
}
if ( hasSymbolSupport() ) {
	console.log( constructorName( Symbol( 'beep' ) ) );
	// => 'Symbol'
}
console.log( constructorName( new Error() ) );
// => 'Error'

console.log( constructorName( new TypeError() ) );
// => 'TypeError'

console.log( constructorName( new SyntaxError() ) );
// => 'SyntaxError'

console.log( constructorName( new URIError() ) );
// => 'URIError'

console.log( constructorName( new RangeError() ) );
// => 'RangeError'

console.log( constructorName( new ReferenceError() ) );
// => 'ReferenceError'

console.log( constructorName( new EvalError() ) );
// => 'EvalError'

console.log( constructorName( new Int8Array() ) );
// => 'Int8Array'

console.log( constructorName( new Uint8Array() ) );
// => 'Uint8Array'

console.log( constructorName( new Uint8ClampedArray() ) );
// => 'Uint8ClampedArray'

console.log( constructorName( new Int16Array() ) );
// => 'Int16Array'

console.log( constructorName( new Uint16Array() ) );
// => 'Uint16Array'

console.log( constructorName( new Int32Array() ) );
// => 'Int32Array'

console.log( constructorName( new Uint32Array() ) );
// => 'Uint32Array'

console.log( constructorName( new Float32Array() ) );
// => 'Float32Array'

console.log( constructorName( new Float64Array() ) );
// => 'Float64Array'

console.log( constructorName( new ArrayBuffer() ) );
// => 'ArrayBuffer'

console.log( constructorName( new Buffer( 'beep' ) ) ); // eslint-disable-line no-buffer-constructor
// => 'Buffer'

console.log( constructorName( Math ) );
// => 'Math'

console.log( constructorName( JSON ) );
// => 'JSON'

function Person1() {
	return this;
}
console.log( constructorName( new Person1() ) );
// => 'Person1'

// eslint-disable-next-line func-names, no-restricted-syntax, func-style
var Person2 = function () {
	return this;
};
console.log( constructorName( new Person2() ) );
// => '' || 'Person2'
