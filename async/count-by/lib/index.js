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
* Group values according to an indicator function and return group counts.
*
* @module @stdlib/utils/async/count-by
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
* var countByAsync = require( '@stdlib/utils/async/count-by' );
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
* }
*
* function indicator( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, 'nonreadable' );
*         }
*         next( null, 'readable' );
*     }
* }
*
* countByAsync( files, indicator, done );
*/

// MODULES //

var setReadOnly = require( './../../../define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
