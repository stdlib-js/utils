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
var Object = require( '@stdlib/object/ctor' );


// FUNCTIONS //

/**
* Returns a boolean indicating if an array contains a provided value.
*
* @private
* @param {Array} arr - array
* @param {*} v - search value
* @returns {boolean} boolean indicating if an array contains a search value
*/
function contains( arr, v ) {
	var i;
	for ( i = 0; i < arr.length; i++ ) {
		if ( arr[ i ] === v ) {
			return true;
		}
	}
	return false;
}


// MAIN //

/**
* Returns an array of an object's own and inherited property names and symbols.
*
* @param {*} value - input object
* @returns {Array} a list of own and inherited property names and symbols
*
* @example
* var props = propertiesIn( [] );
* // returns [...]
*/
function propertiesIn( value ) {
	var out;
	var obj;
	var tmp;
	var i;

	if ( value === null || value === void 0 ) {
		return [];
	}
	// Cast the value to an object:
	obj = Object( value );

	// Walk the prototype chain collecting all properties...
	out = [];
	do {
		tmp = getOwnPropertyNames( obj );
		for ( i = 0; i < tmp.length; i++ ) {
			if ( contains( out, tmp[ i ] ) === false ) {
				out.push( tmp[ i ] );
			}
		}
		tmp = getOwnPropertySymbols( obj );
		for ( i = 0; i < tmp.length; i++ ) {
			if ( contains( out, tmp[ i ] ) === false ) {
				out.push( tmp[ i ] );
			}
		}
		obj = getPrototypeOf( obj );
	} while ( obj );

	return out;
}


// EXPORTS //

module.exports = propertiesIn;
