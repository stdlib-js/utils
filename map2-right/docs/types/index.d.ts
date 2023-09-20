/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Callback invoked for each pair of array elements.
*
* @returns result
*/
type Nullary<V, W> = ( this: W ) => V;

/**
* Callback invoked for each pair of array elements.
*
* @param v1 - element from the first input array
* @returns result
*/
type Unary<T, V, W> = ( this: W, v1: T ) => V;

/**
* Callback invoked for each pair of array elements.
*
* @param v1 - element from the first input array
* @param v2 - element from the second input array
* @returns result
*/
type Binary<T, U, V, W> = ( this: W, v1: T, v2: U ) => V;

/**
* Callback invoked for each pair of array elements.
*
* @param v1 - element from the first input array
* @param v2 - element from the second input array
* @param index - element index
* @returns result
*/
type Ternary<T, U, V, W> = ( this: W, v1: T, v2: U, index: number ) => V;

/**
* Callback invoked for each pair of array elements.
*
* @param v1 - element from the first input array
* @param v2 - element from the second input array
* @param index - element index
* @param arrays - input arrays
* @returns result
*/
type Quaternary<T, U, V, W> = ( this: W, v1: T, v2: U, index: number, arrays: [ typedndarray<T>, typedndarray<U> ] ) => V;

/**
* Callback invoked for each pair of array elements.
*
* @param v1 - element from the first input array
* @param v2 - element from the second input array
* @param index - element index
* @param arrays - input arrays
* @returns result
*/
type ArrayQuaternary<T, U, V, W> = ( this: W, v1: T, v2: U, index: number, arrays: [ Collection<T>, Collection<U> ] ) => V;

/**
* Callback invoked for each pair of array elements.
*
* @param v1 - element from the first input array
* @param v2 - element from the second input array
* @param index - element index
* @param x - first input array
* @param y - second input array
* @returns result
*/
type Callback<T, U, V, W> = Nullary<V, W> | Unary<T, V, W> | Binary<T, U, V, W> | Ternary<T, U, V, W> | Quaternary<T, U, V, W>;

/**
* Callback invoked for each pair of array elements.
*
* @param v1 - element from the first input array
* @param v2 - element from the second input array
* @param index - element index
* @param x - first input array
* @param y - second input array
* @returns result
*/
type ArrayCallback<T, U, V, W> = Nullary<V, W> | Unary<T, V, W> | Binary<T, U, V, W> | Ternary<T, U, V, W> | ArrayQuaternary<T, U, V, W>;

/**
* Interface describing the main export.
*/
interface Routine {
	// NOTE: signature order matters here, as an ndarray is an array-like object...

	/**
	* Applies a function to elements in two input arrays while iterating from right to left and assigns the results to a new array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **v1**: element from first input array.
	*     -   **v2**: element from second input array.
	*     -   **idx**: element index.
	*     -   **arrays**: input arrays.
	*
	* @param x - first input array
	* @param y - second input array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var add = require( `@stdlib/math/base/ops/add` );
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
	* var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
	*
	* var out = map2Right( x, y, naryFunction( add, 2 ) );
	* // returns <ndarray>
	*
	* var data = out.data;
	* // returns [ 2, 3, 4, 5, 6, 7 ]
	*/
	<T = unknown, U = unknown, V = unknown, W = unknown>( x: typedndarray<T>, y: typedndarray<U>, fcn: Callback<T, U, V, W>, thisArg?: ThisParameterType<Callback<T, U, V, W>> ): typedndarray<V>;

	/**
	* Applies a function to elements in two input arrays while iterating from right to left and assigns the results to a new array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **v1**: element from first input array.
	*     -   **v2**: element from second input array.
	*     -   **idx**: element index.
	*     -   **arrays**: input arrays.
	*
	* @param x - first input array
	* @param y - second input array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var add = require( `@stdlib/math/base/ops/add` );
	*
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	* var y = [ 1, 1, 1, 1, 1, 1 ];
	*
	* var out = map2Right( x, y, naryFunction( add, 2 ) );
	* // returns [ 2, 3, 4, 5, 6, 7 ]
	*/
	<T = unknown, U = unknown, V = unknown, W = unknown>( x: Collection<T>, y: Collection<U>, fcn: ArrayCallback<T, U, V, W>, thisArg?: ThisParameterType<ArrayCallback<T, U, V, W>> ): Collection<V>;

	/**
	* Applies a function to elements in two input arrays while iterating from right to left and assigns the results to an output array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **v1**: element from first input array.
	*     -   **v2**: element from second input array.
	*     -   **idx**: element index.
	*     -   **arrays**: input arrays.
	*
	* @param x - first input array
	* @param y - second input array
	* @param out - output array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var add = require( `@stdlib/math/base/ops/add` );
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var opts = {
	*     'dtype': 'generic',
	*     'shape': [ 2, 3 ]
	* };
	* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
	* var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
	* var out = array( opts );
	*
	* map2Right.assign( x, y, out, naryFunction( add, 2 ) );
	*
	* var data = out.data;
	* // returns [ 2, 3, 4, 5, 6, 7 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: typedndarray<T>, y: typedndarray<U>, out: typedndarray<V>, fcn: Callback<T, U, V, W>, thisArg?: ThisParameterType<Callback<T, U, V, W>> ): typedndarray<V>;

	/**
	* Applies a function to elements in two input arrays while iterating from right to left and assigns the results to an output array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **v1**: element from first input array.
	*     -   **v2**: element from second input array.
	*     -   **idx**: element index.
	*     -   **arrays**: input arrays.
	*
	* @param x - first input array
	* @param y - second input array
	* @param out - output array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var add = require( `@stdlib/math/base/ops/add` );
	*
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	* var y = [ 1, 1, 1, 1, 1, 1 ];
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* map2Right.assign( x, y, out, naryFunction( add, 2 ) );
	*
	* console.log( out );
	* // => [ 2, 3, 4, 5, 6, 7 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Collection<T>, y: Collection<U>, out: Collection<V>, fcn: ArrayCallback<T, U, V, W>, thisArg?: ThisParameterType<ArrayCallback<T, U, V, W>> ): Collection<V>;
}

/**
* Applies a function to elements in two input arrays while iterating from right to left and assigns the results to a new array.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **v1**: element from first input array.
*     -   **v2**: element from second input array.
*     -   **idx**: element index.
*     -   **arrays**: input arrays.
*
* @param x - first input array
* @param y - second input array
* @param fcn - function to apply
* @param thisArg - input function context
* @returns output array
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var add = require( `@stdlib/math/base/ops/add` );
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
* var y = [ 1, 1, 1, 1, 1, 1 ];
*
* var out = map2Right( x, y, naryFunction( add, 2 ) );
* // returns [ 2, 3, 4, 5, 6, 7 ]
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var add = require( `@stdlib/math/base/ops/add` );
* var array = require( `@stdlib/ndarray/array` );
*
* var opts = {
*     'dtype': 'generic'
* };
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
* var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
*
* var out = map2Right( x, y, naryFunction( add, 2 ) );
* // returns <ndarray>
*
* var data = out.data;
* // returns [ 2, 3, 4, 5, 6, 7 ]
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var add = require( `@stdlib/math/base/ops/add` );
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
* var y = [ 1, 1, 1, 1, 1, 1 ];
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* map2Right.assign( x, y, out, naryFunction( add, 2 ) );
*
* console.log( out );
* // => [ 2, 3, 4, 5, 6, 7 ]
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var add = require( `@stdlib/math/base/ops/add` );
* var array = require( `@stdlib/ndarray/array` );
*
* var opts = {
*     'dtype': 'generic',
*     'shape': [ 2, 3 ]
* };
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
* var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
* var out = array( opts );
*
* map2Right.assign( x, y, out, naryFunction( add, 2 ) );
*
* var data = out.data;
* // returns [ 2, 3, 4, 5, 6, 7 ]
*/
declare var map2Right: Routine;


// EXPORTS //

export = map2Right;
