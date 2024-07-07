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
var prepend = require( './../lib' );


// MAIN //

bench( pkg+'::float64array,preallocated', function benchmark( b ) {
	var arr;
	var buf;
	var i;

	buf = new ArrayBuffer( b.iterations*8*3 ); // 8 bytes per double
	arr = new Float64Array( buf, buf.byteLength, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = prepend( arr, [ i, i+1, i+2 ] );
		if ( arr.length !== 3*(i+1) ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations*3 ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::float64array,preallocated,no-wrapper', function benchmark( b ) {
	var prepend;
	var arr;
	var buf;
	var i;

	prepend = require( './../lib/prepend_typed_array.js' );

	buf = new ArrayBuffer( b.iterations*8*3 ); // 8 bytes per double
	arr = new Float64Array( buf, b.iterations*8*3, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = prepend( arr, [ i, i+1, i+2 ] );
		if ( arr.length !== 3*(i+1) ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations*3 ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::float64array,control,preallocated,constructor', function benchmark( b ) {
	var offset;
	var arr;
	var buf;
	var i;
	var k;

	buf = new ArrayBuffer( b.iterations*8*3 ); // 8 bytes per double
	arr = new Float64Array( buf, b.iterations*8*3, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Here, we are only testing the operation of creating a new view each time a value must be added to a typed array:
		k = 3 * (i+1);
		offset = arr.byteOffset - ( arr.BYTES_PER_ELEMENT*3 );
		arr = new Float64Array( arr.buffer, offset, k );
		if ( arr.length !== k ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations*3 ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::float64array,control,preallocated,constructor,value', function benchmark( b ) {
	var offset;
	var arr;
	var buf;
	var i;
	var j;
	var k;

	buf = new ArrayBuffer( b.iterations*8*3 ); // 8 bytes per double
	arr = new Float64Array( buf, b.iterations*8*3, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		k = 3 * (i+1);
		offset = arr.byteOffset - ( arr.BYTES_PER_ELEMENT*3 );
		arr = new Float64Array( arr.buffer, offset, k );
		for ( j = 0; j < 3; j++ ) {
			arr[ j ] = i + j;
		}
		if ( arr.length !== k ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations*3 ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
