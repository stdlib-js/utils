/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isArrayArray = require( '@stdlib/assert/is-array-array' );
var abs = require( '@stdlib/math/base/special/abs' );
var naryFunction = require( './../../nary-function' );
var pkg = require( './../package.json' ).name;
var map5d = require( './../lib' );


// MAIN //

bench( pkg+':size=10000', function benchmark( b ) {
	var clbk;
	var out;
	var arr;
	var t1;
	var t2;
	var t3;
	var t4;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i;

	arr = [];
	for ( i0 = 0; i0 < 10; i0++ ) {
		t1 = [];
		for ( i1 = 0; i1 < 10; i1++ ) {
			t2 = [];
			for ( i2 = 0; i2 < 10; i2++ ) {
				t3 = [];
				for ( i3 = 0; i3 < 5; i3++ ) {
					t4 = [];
					for ( i4 = 0; i4 < 2; i4++ ) {
						t4.push( -i4 );
					}
					t3.push( t4 );
				}
				t2.push( t3 );
			}
			t1.push( t2 );
		}
		arr.push( t1 );
	}
	clbk = naryFunction( abs, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = map5d( arr, clbk );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( out ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
