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
var Float64Array = require( '@stdlib/array/float64' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var pkg = require( './../package.json' ).name;


// MAIN //

bench( pkg+'::float64array,control,constructor', function benchmark( b ) {
	var arr;
	var buf;
	var len;
	var i;

	buf = new ArrayBuffer( b.iterations*8 ); // 8 bytes per double
	arr = new Float64Array( buf, 0, b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Here, we are only testing the operation of creating a new view each time a value must be removed from a typed array:
		len -= 1;
		arr = new Float64Array( arr.buffer, arr.byteOffset, len );
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
