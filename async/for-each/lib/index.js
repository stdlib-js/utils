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
* Invoke a function once for each element in a collection.
*
* @module @stdlib/utils/async/for-each
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
* var forEachAsync = require( '@stdlib/utils/async/for-each' );
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( 'Successfully read all files.' );
* }
*
* function read( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             error = new Error( 'unable to read file: '+file );
*             return next( error );
*         }
*         console.log( 'Successfully read file: %s', file );
*         next();
*     }
* }
*
* forEachAsync( files, read, done );
*/

// MODULES //

var setReadOnly = require( './../../../define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
