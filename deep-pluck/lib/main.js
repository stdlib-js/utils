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

var deepGet = require( './../../deep-get' ).factory;
var isArray = require( '@stdlib/assert/is-array' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );


// MAIN //

/**
* Extracts a nested property value from each element of an object array.
*
* @param {Array} arr - source array
* @param {(string|Array)} path - key path
* @param {Options} [options] - function options
* @param {boolean} [options.copy=true] - boolean indicating whether to return a new data structure
* @param {string} [options.sep="."] - key path separator
* @throws {TypeError} first argument must be an array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Array} destination array
*
* @example
* var arr = [
*     {'a':{'b':{'c':1}}},
*     {'a':{'b':{'c':2}}}
* ];
*
* var out = deepPluck( arr, 'a.b.c' );
* // returns [ 1, 2 ]
*
* @example
* var arr = [
*     {'a':[0,1,2]},
*     {'a':[3,4,5]}
* ];
*
* var out = deepPluck( arr, ['a',1] );
* // returns [ 1, 4 ]
*
* @example
* var arr = [
*     {'a':{'b':{'c':1}}},
*     {'a':{'b':{'c':2}}}
* ];
*
* var out = deepPluck( arr, 'a.b.c', {'copy':false} );
* // returns [ 1, 2 ]
*
* var bool = ( arr[ 0 ] === out[ 0 ] );
* // returns true
*
* @example
* var arr = [
*     {'a':{'b':{'c':1}}},
*     {'a':{'b':{'c':2}}}
* ];
*
* var out = deepPluck( arr, 'a|b|c', {'sep':'|'} );
* // returns [ 1, 2 ]
*/
function deepPluck( arr, path, options ) {
	var dget;
	var opts;
	var out;
	var err;
	var i;

	if ( !isArray( arr ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array. Value: `%s`.', arr ) );
	}
	opts = defaults();
	if ( arguments.length > 2 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.copy ) {
		out = new Array( arr.length );
	} else {
		out = arr;
	}
	dget = deepGet( path, {
		'sep': opts.sep
	});
	for ( i = 0; i < arr.length; i++ ) {
		out[ i ] = dget( arr[ i ] );
	}
	return out;
}


// EXPORTS //

module.exports = deepPluck;
