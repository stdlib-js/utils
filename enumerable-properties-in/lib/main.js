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

var getOwnPropertySymbols = require( './../../property-symbols' );
var getOwnPropertyNames = require( './../../property-names' );
var getPrototypeOf = require( './../../get-prototype-of' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isEnumerable = require( '@stdlib/assert/is-enumerable-property' );
var Object = require( '@stdlib/object/ctor' );


// MAIN //

/**
* Returns an array of an object's own and inherited enumerable property names and symbols.
*
* @param {*} value - input object
* @returns {Array} a list of own and inherited enumerable property names and symbols
*
* @example
* var props = enumerablePropertiesIn( [] );
* // returns []
*/
function enumerablePropertiesIn( value ) {
	var cache;
	var out;
	var obj;
	var tmp;
	var k;
	var i;

	if ( value === null || value === void 0 ) {
		return [];
	}
	// Cast the value to an object:
	obj = Object( value );

	// Walk the prototype chain collecting enumerable properties...
	cache = {};
	out = [];
	do {
		tmp = getOwnPropertyNames( obj );
		for ( i = 0; i < tmp.length; i++ ) {
			k = tmp[ i ];
			if (
				hasOwnProp( cache, k ) === false && // guards against processing a name more than once
				isEnumerable( obj, k )
			) {
				out.push( k );
			}
			cache[ k ] = true;
		}
		tmp = getOwnPropertySymbols( obj );
		for ( i = 0; i < tmp.length; i++ ) {
			k = tmp[ i ];
			if (
				hasOwnProp( cache, k ) === false && // guards against processing a symbol more than once
				isEnumerable( obj, k )
			) {
				out.push( k );
			}
			cache[ k ] = true;
		}
		obj = getPrototypeOf( obj );
	} while ( obj );

	return out;
}


// EXPORTS //

module.exports = enumerablePropertiesIn;
