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

var objectKeys = require( './../../keys' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Returns the common own property names of two or more objects.
*
* @param {...Object} obj - two or more objects
* @throws {Error} must provide at least two objects
* @returns {Array} common keys of objects
*
* @example
* var obj = {
*     'a': 1,
*     'b': 2,
*     'c': 3
* };
*
* var obj2 = {
*     'a': 1,
*     'b': 2
* };
*
* var keys = commonKeys( obj, obj2 );
* // returns [ 'a', 'b' ]
*
* @example
* var obj1 = {
*     'a': 1,
*     'b': 2,
*     'c': 3
* };
*
* var obj2 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj3 = {
*     'a': 1,
* };
*
* var keys = commonKeys( obj1, obj2, obj3 );
* // returns [ 'a' ]
*/
function commonKeys() {
	var nargs;
	var keys;
	var arg;
	var out;
	var i;
	var j;

	nargs = arguments.length;
	if ( nargs < 2 ) {
		throw new Error( 'insufficient input arguments. Must provide at least two objects.' );
	}
	arg = arguments[ 0 ];
	keys = objectKeys( arg );
	for ( i = 1; i < nargs; i++ ) {
		arg = arguments[ i ];
		out = [];
		for ( j = 0; j < keys.length; j++ ) {
			if ( hasOwnProp( arg, keys[ j ] ) ) {
				out.push( keys[ j ] );
			}
		}
		keys = out;
	}
	return keys;
}


// EXPORTS //

module.exports = commonKeys;
