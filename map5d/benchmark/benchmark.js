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
var filled5dBy = require( '@stdlib/array/base/filled5d-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var abs = require( '@stdlib/math/base/special/abs' );
var naryFunction = require( './../../nary-function' );
var pkg = require( './../package.json' ).name;
var map5d = require( './../lib' );


// MAIN //

bench( pkg+':size=10000', function benchmark( b ) {
	var clbk;
	var out;
	var arr;
	var i;

	arr = filled5dBy( [ 2, 5, 10, 10, 10 ], discreteUniform( -100, 100 ) );
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
