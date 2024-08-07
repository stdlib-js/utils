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
* Flatten an object.
*
* @module @stdlib/utils/flatten-object
*
* @example
* var flattenObject = require( '@stdlib/utils/flatten-object' );
*
* var obj = {'a':{'b':{'c':'d'}}};
*
* var out = flattenObject( obj );
* // returns {'a.b.c':'d'}
*
* @example
* var flattenObject = require( '@stdlib/utils/flatten-object' );
*
* var flatten = flattenObject.factory({
*     'depth': 2,
*     'copy': true,
*     'delimiter': '|'
* });
*
* var obj = {'a':{'b':{'c':'d'}}};
*
* var out = flatten( obj );
* // returns {'a|b':{'c':'d'}}
*/

// MODULES //

var setReadOnly = require( './../../define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
