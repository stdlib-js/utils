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

var filledarrayBy = require( '@stdlib/array/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var naryFunction = require( './../../nary-function' );
var abs2 = require( '@stdlib/math/base/special/abs2' );
var map4d = require( './../lib' );

function fill( n ) {
	if ( n > 0 ) {
		return array;
	}
	return values;

	function array() {
		return filledarrayBy( 2, 'generic', fill( n-1 ) );
	}

	function values( i ) {
		var rand = discreteUniform( -10*(i+1), 10*(i+1) );
		return filledarrayBy( 10, 'generic', rand );
	}
}

// Create a four-dimensional nested array:
var x = filledarrayBy( 2, 'generic', fill( 2 ) );

// Create an explicit unary function:
var f = naryFunction( abs2, 1 );

// Compute the element-wise squared absolute value...
var y = map4d( x, f );

console.log( 'x:' );
console.log( JSON.stringify( x, null, '  ' ) );

console.log( 'y:' );
console.log( JSON.stringify( y, null, '  ' ) );
