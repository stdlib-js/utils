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

var getOwnPropertyNames = require( './../../property-names' );
var getPrototypeOf = require( './../../get-prototype-of' );
var isNonEnumerableProperty = require( '@stdlib/assert/is-nonenumerable-property' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var Object = require( '@stdlib/object/ctor' );


// MAIN //

/**
* Returns an array of an object's own and inherited non-enumerable property names.
*
* @param {*} value - input object
* @returns {Array} a list of own and inherited non-enumerable property names
*
* @example
* var defineProperty = require( '@stdlib/utils/define-property' );
*
* var obj = {};
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': 'boop'
* });
*
* var keys = nonEnumerablePropertyNamesIn( obj );
* // e.g., returns [ 'beep', ... ]
*/
function nonEnumerablePropertyNamesIn( value ) { // eslint-disable-line id-length
	var names;
	var cache;
	var obj;
	var tmp;
	var k;
	var i;

	if ( value === null || value === void 0 ) {
		return [];
	}
	// Cast the value to an object:
	obj = Object( value );

	// Walk the prototype chain collecting non-enumerable property names...
	names = [];
	cache = {};
	do {
		tmp = getOwnPropertyNames( obj );
		for ( i = 0; i < tmp.length; i++ ) {
			k = tmp[ i ];
			if (
				hasOwnProp( cache, k ) === false &&
				isNonEnumerableProperty( obj, k )
			) {
				names.push( k );
			}
			cache[ k ] = true;
		}
		obj = getPrototypeOf( obj );
	} while ( obj );

	return names;
}


// EXPORTS //

module.exports = nonEnumerablePropertyNamesIn;
