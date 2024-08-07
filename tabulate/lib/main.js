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

var isCollection = require( '@stdlib/assert/is-collection' );
var indexOf = require( './../../index-of' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Generates a frequency table.
*
* ## Notes
*
* -   The output is an array of arrays. Each sub-array corresponds to a unique value in the input collection and is structured as follows:
*
*     -   0: unique value
*     -   1: value count
*     -   2: frequency percentage
*
* @param {Collection} collection - input collection
* @throws {TypeError} first argument must be a collection
* @returns {(Array<Array>|Array)} frequency table
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'beep' ];
*
* var out = tabulate( arr );
* // returns [ [ 'beep', 2, 0.5 ], [ 'boop', 1, 0.25 ], [ 'foo', 1, 0.25 ] ]
*/
function tabulate( collection ) {
	var count;
	var tmp;
	var len;
	var out;
	var v;
	var i;
	var j;
	if ( !isCollection( collection ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a collection. Value: `%s`.', collection ) );
	}
	count = 0;
	tmp = [];
	out = [];

	// For each collection element, determine if we've seen the element before. If not, cache a reference which points to its location in the output array; otherwise, update the running count.
	len = collection.length;
	for ( i = 0; i < len; i++ ) {
		v = collection[ i ];
		count += 1;
		j = indexOf( tmp, v );
		if ( j === -1 ) {
			tmp.push( v );
			out.push( [ v, 1, 0 ] );
		} else {
			out[ j ][ 1 ] += 1;
		}
	}
	// Compute percentages...
	len = out.length;
	for ( i = 0; i < len; i++ ) {
		out[ i ][ 2 ] = out[ i ][ 1 ] / count;
	}
	return out;
}


// EXPORTS //

module.exports = tabulate;
