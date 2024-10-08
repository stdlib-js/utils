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

/**
* Decorate a provided function such that the function's return value is provided as an argument to another function.
*
* @module @stdlib/utils/decorate-after
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
* var decorateAfter = require( '@stdlib/utils/decorate-after' );
*
* function negate( v ) {
*     return -v;
* }
*
* var f = decorateAfter( abs, 1, negate );
* // returns <Function>
*
* var v = f( -5 );
* // returns -5
*
* v = f( 5 );
* // returns -5
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
* var decorateAfter = require( '@stdlib/utils/decorate-after' );
*
* function log( v ) {
*     console.log( v );
* }
*
* var f = decorateAfter( abs, 1, log );
* // returns <Function>
*
* var v = f( -5 );
* // returns 5
*
* v = f( 5 );
* // returns 5
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
* var decorateAfter = require( '@stdlib/utils/decorate-after' );
*
* function counter() {
*     this.count += 1;
* }
*
* var ctx = {
*     'count': 0
* };
*
* var f = decorateAfter( abs, 1, counter, ctx );
* // returns <Function>
*
* var v = f( -5 );
* // returns 5
*
* v = f( 5 );
* // returns 5
*
* var count = ctx.count;
* // returns 2
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
* var decorateAfter = require( '@stdlib/utils/decorate-after' );
*
* function negate( v ) {
*     return -v;
* }
*
* var f = decorateAfter.factory( abs, 1, negate );
* // returns <Function>
*
* var v = f( -5 );
* // returns -5
*
* v = f( 5 );
* // returns -5
*/

// MODULES //

var setReadOnly = require( './../../define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
