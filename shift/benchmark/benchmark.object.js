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

bench( pkg+'::object', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = {
		'length': b.iterations
	};
	len = b.iterations;
	for ( i = 0; i < arr.length; i++ ) {
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

bench( pkg+'::built-in,object', function benchmark( b ) {
	var shift;
	var arr;
	var len;
	var i;

	shift = Array.prototype.shift;

	arr = {
		'length': b.iterations
	};
	len = b.iterations;
	for ( i = 0; i < arr.length; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		shift.call( arr );
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
