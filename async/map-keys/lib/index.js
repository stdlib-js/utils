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

/**
* Map keys from one object to a new object having the same values.
*
* @module @stdlib/utils/async/map-keys
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
* var mapKeysAsync = require( '@stdlib/utils/async/map-keys' );
*
* function read( key, value, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( value, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, key+':unreadable' );
*         }
*         next( null, key+':readable' );
*     }
* }
*
* // Define a callback which handles errors:
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( out );
* }
*
* // Create a dictionary of file names:
* var files = {
*     'file1': './beep.js',
*     'file2': './boop.js'
* };
*
* var opts = {
*     'series': true
* };
*
* // Process each file in `files`:
* mapKeysAsync( files, opts, read, done );
*/

// MODULES //

var setReadOnly = require( './../../../define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
