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
var base = require( '@stdlib/array/base/none' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Tests whether all elements in a collection are falsy.
*
* @param {Collection} collection - input collection
* @throws {TypeError} must provide a collection
* @returns {boolean} boolean indicating whether all elements are falsy
*
* @example
* var arr = [ 0, 0, 0, 0, 0 ];
*
* var bool = none( arr );
* // returns true
*/
function none( collection ) {
	if ( !isCollection( collection ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a collection. Value: `%s`.', collection ) );
	}
	return base( collection );
}


// EXPORTS //

module.exports = none;
