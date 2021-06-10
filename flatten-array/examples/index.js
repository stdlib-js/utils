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

var flattenArray = require( './../lib' );

var xStride;
var yStride;
var zStride;
var data;
var tmp1;
var tmp2;
var arr;
var val;
var N;
var M;
var L;
var i;
var j;
var k;

N = 1000;
M = 100;
L = 10;

// Create an NxMxL (3D) array...
data = new Array( N );
for ( i = 0; i < N; i++ ) {
	tmp1 = new Array( M );
	for ( j = 0; j < M; j++ ) {
		tmp2 = new Array( L );
		for ( k = 0; k < L; k++ ) {
			tmp2[ k ] = (M*L*i) + (j*L) + k + 1;
		}
		tmp1[ j ] = tmp2;
	}
	data[ i ] = tmp1;
}
// Create a flattened (strided) array:
arr = flattenArray( data );

// To access the data[4][20][2] element...
xStride = M * L;
yStride = L;
zStride = 1;
val = arr[ (4*xStride) + (20*yStride) + (2*zStride) ];

console.log( val );
// => 4203

console.log( data[4][20][2] === val );
// => true
