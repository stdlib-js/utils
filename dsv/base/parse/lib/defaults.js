/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var noop = require( './../../../../noop' );


// FUNCTIONS //

/**
* Throws a provided exception.
*
* @private
* @param {Error} err - error object
* @throws {Error} exception
*/
function throwError( err ) {
	throw err;
}


// MAIN //

/**
* Returns default options.
*
* @private
* @returns {Object} default options
*
* @example
* var o = defaults();
* // returns {...}
*/
function defaults() {
	return {
		// Character sequence appearing at the beginning of a row which demarcates that the row content should be parsed as a commented line. A commented line ends upon encountering the first newline character sequence, regardless of whether that newline character sequence is preceded by an escape character sequence.
		'comment': '',

		// Character sequence demarcating a decimal point in numeric values (e.g., use `'.'` for US data and `','` for European data).
		'decimal': '.',

		// Character sequence separating record fields (e.g., use `','` for CSV and use `'\t'` for TSV).
		'delimiter': ',',

		// Flag indicating how quote sequences should be escaped within a quoted field. When `true`, a quote sequence must be escaped by another quote sequence. When `false`, a quote sequence must be escaped by the escape sequence.
		'doublequote': true,

		// Character sequence for escaping character sequences having special meaning (i.e., delimiter, newline, escape, and comment outside of quoted fields, and the quote sequence within quoted fields when `doublequote` is `false`).
		'escape': '',

		// When converting a column value to a boolean, a list of string values which should be converted to `false`. May also be a regular expression.
		'false': [ 'false' ],

		// When processing a column value, a list of string values which should be interpreted as indicating a missing value (i.e., an empty field; e.g., `[ '', 'null', 'NULL', 'NaN', 'NA', 'na' ]`). May also be a regular expression.
		'missing': [ '' ],

		// Character sequence separating rows.
		'newline': '\r\n',

		// Callback to be invoked upon closing the parser.
		'onClose': noop,

		// Callback to be invoked upon processing a field.
		'onColumn': noop,

		// Callback to be invoked upon processing a commented line.
		'onComment': null,

		// Callback to be invoked upon encountering an unrecoverable parse error.
		'onError': throwError,

		// When `strict` is `false`, a callback to be invoked upon encountering invalid DSV.
		'onWarn': null,

		// Callback to be invoked upon processing a record.
		'onRow': noop,

		// Character sequence demarcating the beginning and ending of a quoted field.
		'quote': '"',

		// Flag indicating whether to enable special processing of quote character sequences (i.e., whether a quote sequence should demarcate a quoted field).
		'quoting': true,

		// Array-like object for storing the field values of the most recently processed record. This allows reusing memory and avoiding copies upon invocation of the `onRow` callback.
		'rowBuffer': [],

		// Schema specifying field data types.
		'schema': null,

		// Flag indicating whether to raise an exception upon encountering invalid DSV.
		'strict': true,

		// Character sequence demarcating a thousands separator in numeric values (e.g., use `'_'` for `1_000_000` or `','` for `1,000,000`).
		'thousands': '',

		// Flag indicating whether to trim leading whitespace from field values. If `false`, leading whitespace is not trimmed (e.g., `a, b, c` parses as`[ 'a', ' b', ' c' ]`). If `true`, leading whitespace is trimmed (e.g., `a, b, c`parses as `[ 'a', 'b', 'c' ]`).
		'trim': false,

		// Flag indicating whether to trim leading and trailing whitespace in commented lines.
		'trimComment': true,

		// Flag indicating whether to trim non-numeric characters from numeric values. If `false`, non-numeric characters are not trimmed (e.g., `$2.00` => `[ '$2.00' ]`). If `true`, non-numeric characters are trimmed (e.g., `$2.00` => `[ '2.00' ] `).
		'trimNonNumeric': false,

		// When converting a column value to a boolean, a list of string values which should be converted to `true`. May also be a regular expression.
		'true': [ 'true' ],

		// List of characters to be treated as whitespace. May also be a regular expression.
		'whitespace': [ ' ' ]
	};
}


// EXPORTS //

module.exports = defaults;
