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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var someByRight = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var bool;
	var arr;
	var i;

	function predicate( v ) {
		return isnan( v );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ NaN, i, i+1, NaN, i+3, i+4 ];
		bool = someByRight( arr, 2, predicate );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop', function benchmark( b ) {
	var total;
	var count;
	var bool;
	var arr;
	var i;
	var j;

	total = 2;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ NaN, i, i+1, NaN, i+3, i+4 ];
		bool = false;
		count = 0;
		for ( j = arr.length-1; j >= 0; j-- ) {
			if ( isnan( arr[ j ] ) ) {
				count += 1;
				if ( count === total ) {
					bool = true;
					break;
				}
			}
		}
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should be a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
