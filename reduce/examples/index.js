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

var filledarrayBy = require( '@stdlib/array/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var naryFunction = require( './../../nary-function' );
var add = require( '@stdlib/number/float64/base/add' );
var array = require( '@stdlib/ndarray/array' );
var reduce = require( './../lib' );

function fill( i ) {
	var rand = discreteUniform( -10*(i+1), 10*(i+1) );
	return filledarrayBy( 10, 'generic', rand );
}

// Create a two-dimensional ndarray (i.e., a matrix):
var x = array( filledarrayBy( 10, 'generic', fill ), {
	'dtype': 'generic',
	'flatten': true
});

// Create an explicit binary function:
var f = naryFunction( add, 2 );

// Compute the sum:
var out = reduce( x, 0, f );

console.log( 'x:' );
console.log( x.data );

console.log( 'sum: %d', out );
