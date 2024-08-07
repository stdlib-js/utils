/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var parseJSON = require( './../../parse-json' );
var format = require( '@stdlib/string/format' );
var isWhitespace = require( '@stdlib/assert/is-whitespace' );
var reEOL = require( '@stdlib/regexp/eol' );


// MAIN //

/**
* Parses a string as newline-delimited JSON (NDJSON).
*
* @param {string} str - input string
* @param {Function} [reviver] - transformation function applied to each line
* @throws {TypeError} first argument must be a string
* @throws {TypeError} reviver must be a function
* @returns {Array|Error} array of parsed values or an error
*
* @example
* var out = parseNDJSON( '{"name":"John"}\n{"name":"Doe"}' );
* // returns [ { 'name': 'John' }, { 'name': 'Doe' } ]
*/
function parseNDJSON( str, reviver ) {
	var parsed;
	var RE_EOL;
	var lines;
	var out;
	var i;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( arguments.length > 1 && !isFunction( reviver ) ) {
		throw new TypeError( format( 'invalid argument. Reviver argument must be a function. Value: `%s`.', str ) );
	}
	if ( isWhitespace( str ) || str === '' ) {
		return [];
	}

	RE_EOL = reEOL();

	lines = str.split( RE_EOL );

	// Remove trailing newline:
	if ( lines[ lines.length - 1 ].length === 0 ) {
		lines.pop();
	}

	out = [];

	for ( i = 0; i < lines.length; i++ ) {
		if ( reviver ) {
			parsed = parseJSON( lines[ i ], reviver );
		} else {
			parsed = parseJSON( lines[ i ] );
		}
		if ( parsed instanceof Error ) {
			return parsed;
		}

		out.push( parsed );
	}
	return out;
}


// EXPORTS //

module.exports = parseNDJSON;
