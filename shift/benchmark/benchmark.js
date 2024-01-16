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
var pkg = require( './../package.json' ).name;
var shift = require( './../lib' );


// MAIN //

bench( pkg+'::array', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	len = b.iterations;
	arr = new Array( len );
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
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

bench( pkg+'::built-in', function benchmark( b ) {
	var arr;
	var len;
	var i;

	len = b.iterations;
	arr = new Array( len );
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr.shift();
		len -= 1;
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
