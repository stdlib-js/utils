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
var isFunction = require( '@stdlib/assert/is-function' );
var indexOf = require( './../../index-of' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );


// MAIN //

/**
* Generates a frequency table according to a provided function.
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
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {Function} indicator - function whose return values are used to populate the output frequency table
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} options argument must be an object
* @throws {TypeError} last argument must be a function
* @throws {TypeError} must provide valid options
* @returns {(Array<Array>|Array)} frequency table
*
* @example
* function indicator( value ) {
*     return value[ 0 ];
* }
*
* var arr = [ 'beep', 'boop', 'foo', 'beep' ];
*
* var out = tabulateBy( arr, indicator );
* // returns [ [ 'b', 3, 0.75 ], [ 'f', 1, 0.25 ] ]
*/
function tabulateBy( collection, options, indicator ) {
	var thisArg;
	var count;
	var opts;
	var tmp;
	var len;
	var out;
	var err;
	var cb;
	var v;
	var i;
	var j;
	if ( !isCollection( collection ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a collection. Value: `%s`.', collection ) );
	}
	opts = {};
	if ( arguments.length === 2 ) {
		cb = options;
	} else {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		cb = indicator;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( format( 'invalid argument. Last argument must be a function. Value: `%s`.', cb ) );
	}
	thisArg = opts.thisArg;
	count = 0;
	tmp = [];
	out = [];

	// For each collection element, determine if we've seen the element before. If not, cache a reference which points to its location in the output array; otherwise, update the running count.
	len = collection.length;
	for ( i = 0; i < len; i++ ) {
		v = cb.call( thisArg, collection[ i ], i );
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

module.exports = tabulateBy;
