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
* Merge and extend objects.
*
* @module @stdlib/utils/merge
*
* @example
* var merge = require( '@stdlib/utils/merge' );
*
* var target = {
*     'a': 'beep'
* };
* var source = {
*     'a': 'boop',
*     'b': 'bap'
* };
*
* var out = merge( target, source );
* // returns {'a':'boop', 'b':'bap'}
*
* @example
* var factory = require( '@stdlib/utils/merge' ).factory;
*
* var opts = {
*     'level': 100,
*     'copy': true,
*     'override': true,
*     'extend': true
* };
*
* var merge = factory( opts );
* // returns <Function>
*/

// MODULES //

var setReadOnly = require( './../../define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
