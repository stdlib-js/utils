/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Apply a function to each element in an array and assign the result to an element in an output array, iterating from right to left.
*
* @module @stdlib/utils/map-right
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var mapRight = require( '@stdlib/utils/map-right' );
*
* var arr = [ -1, -2, -3, -4, -5, -6 ];
*
* var out = mapRight( arr, naryFunction( abs, 1 ) );
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var array = require( '@stdlib/ndarray/array' );
* var mapRight = require( '@stdlib/utils/map-right' );
*
* var opts = {
*     'dtype': 'generic'
* };
* var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
*
* var out = mapRight( arr, naryFunction( abs, 1 ) );
* // returns <ndarray>
*
* var data = out.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var mapRight = require( '@stdlib/utils/map-right' );
*
* var arr = [ -1, -2, -3, -4, -5, -6 ];
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* mapRight.assign( arr, out, naryFunction( abs, 1 ) );
*
* console.log( out );
* // => [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var array = require( '@stdlib/ndarray/array' );
* var mapRight = require( '@stdlib/utils/map-right' );
*
* var opts = {
*     'dtype': 'generic',
*     'shape': [ 2, 3 ]
* };
* var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
* var out = array( opts );
*
* mapRight.assign( arr, out, naryFunction( abs, 1 ) );
*
* var data = out.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*/

// MODULES //

var setReadOnly = require( './../../define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
