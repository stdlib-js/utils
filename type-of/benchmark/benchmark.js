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

var bench = require( '@stdlib/bench' );
var isString = require( '@stdlib/assert/is-string' );
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
var Number = require( '@stdlib/number/ctor' );
var noop = require( '@stdlib/utils/noop' );
var pkg = require( './../package.json' ).name;
var typeOf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var m;
	var i;

	values = [
		'a',
		new String( 'a' ),
		5,
		new Number( 5 ),
		NaN,
		true,
		new Boolean( true ),
		false,
		new Boolean( false ),
		void 0,
		null,
		[],
		{},
		noop,
		/./,
		new Date(),
		Math,
		JSON,
		new Error(),
		new TypeError(),
		new SyntaxError(),
		new URIError(),
		new EvalError(),
		new ReferenceError(),
		new RangeError(),
		new Int8Array( 10 ),
		new Uint8Array( 10 ),
		new Uint8ClampedArray( 10 ),
		new Int16Array( 10 ),
		new Uint16Array( 10 ),
		new Int32Array( 10 ),
		new Uint32Array( 10 ),
		new Float32Array( 10 ),
		new Float64Array( 10 ),
		new ArrayBuffer( 10 ),
		new Buffer( 'beep' ) // eslint-disable-line no-buffer-constructor
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		m = typeOf( values[ i%values.length ] );
		if ( typeof m !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( m ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
