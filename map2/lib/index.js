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
* Apply a function to elements in two input arrays and assign the results to an output array.
*
* @module @stdlib/utils/map2
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var map2 = require( '@stdlib/utils/map2' );
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
* var y = [ 1, 1, 1, 1, 1, 1 ];
*
* var out = map2( x, y, naryFunction( add, 2 ) );
* // returns [ 2, 3, 4, 5, 6, 7 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var array = require( '@stdlib/ndarray/array' );
* var map2 = require( '@stdlib/utils/map2' );
*
* var opts = {
*     'dtype': 'generic'
* };
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
* var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
*
* var out = map2( x, y. naryFunction( add, 2 ) );
* // returns <ndarray>
*
* var data = out.data;
* // returns [ 2, 3, 4, 5, 6, 7 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var map2 = require( '@stdlib/utils/map2' );
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
* var y = [ 1, 1, 1, 1, 1, 1 ];
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* map2.assign( x, y, out, naryFunction( add, 2 ) );
*
* console.log( out );
* // => [ 2, 3, 4, 5, 6, 7 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var array = require( '@stdlib/ndarray/array' );
* var map2 = require( '@stdlib/utils/map2' );
*
* var opts = {
*     'dtype': 'generic',
*     'shape': [ 2, 3 ]
* };
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
* var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
* var out = array( opts );
*
* map2.assign( x, y, out, naryFunction( add, 2 ) );
*
* var data = out.data;
* // returns [ 2, 3, 4, 5, 6, 7 ]
*/

// MODULES //

var setReadOnly = require( './../../define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
