/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Callback invoked for each array element.
*
* @returns result
*/
type Nullary<U, V> = ( this: V ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @returns result
*/
type Unary<T, U, V> = ( this: V, value: T ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @returns result
*/
type Binary<T, U, V> = ( this: V, value: T, index: number ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type Ternary<T, U, V> = ( this: V, value: T, index: number, arr: typedndarray<T> ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type ArrayTernary<T, U, V> = ( this: V, value: T, index: number, arr: Collection<T> ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type Callback<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary<T, U, V>;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type ArrayCallback<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | ArrayTernary<T, U, V>;

/**
* Interface describing the main export.
*/
interface Routine {
	// NOTE: signature order matters here, as an ndarray is an array-like object...

	/**
	* Applies a function to each element in an array and assigns the result to an element in a new array, iterating from right to left.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **index**: element index.
	*     -   **arr**: input array.
	*
	* @param arr - input array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	* var array = require( `@stdlib/ndarray/array` );
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
	*/
	<T = unknown, U = unknown, V = unknown>( arr: typedndarray<T>, fcn: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): typedndarray<U>;

	/**
	* Applies a function to each element in an array and assigns the result to an element in a new array, iterating from right to left.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **index**: element index.
	*     -   **arr**: input array.
	*
	* @param arr - input array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* var arr = [ -1, -2, -3, -4, -5, -6 ];
	*
	* var out = mapRight( arr, naryFunction( abs, 1 ) );
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*/
	<T = unknown, U = unknown, V = unknown>( arr: Collection<T>, fcn: ArrayCallback<T, U, V>, thisArg?: ThisParameterType<ArrayCallback<T, U, V>> ): Array<U>;

	/**
	* Applies a function to each element in an array and assigns the result to an element in an output array, iterating from right to left.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **index**: element index.
	*     -   **arr**: input array.
	*
	* @param arr - input array
	* @param out - output array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	* var array = require( `@stdlib/ndarray/array` );
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
	assign<T = unknown, U = unknown, V = unknown>( arr: typedndarray<T>, out: typedndarray<U>, fcn: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): typedndarray<U>;

	/**
	* Applies a function to each element in an array and assigns the result to an element in an output array, iterating from right to left.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **index**: element index.
	*     -   **arr**: input array.
	*
	* @param arr - input array
	* @param out - output array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* var arr = [ -1, -2, -3, -4, -5, -6 ];
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* mapRight.assign( arr, out, naryFunction( abs, 1 ) );
	*
	* console.log( out );
	* // => [ 1, 2, 3, 4, 5, 6 ]
	*/
	assign<T = unknown, U = unknown, V = unknown>( arr: Collection<T>, out: Collection<U>, fcn: ArrayCallback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Collection<U>;
}

/**
* Applies a function to each element in an array and assigns the result to an element in a new array, iterating from right to left.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **value**: array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* @param arr - input array
* @param fcn - function to apply
* @param thisArg - input function context
* @returns output array
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var abs = require( `@stdlib/math/base/special/abs` );
*
* var arr = [ -1, -2, -3, -4, -5, -6 ];
*
* var out = mapRight( arr, naryFunction( abs, 1 ) );
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var abs = require( `@stdlib/math/base/special/abs` );
* var array = require( `@stdlib/ndarray/array` );
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
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var abs = require( `@stdlib/math/base/special/abs` );
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
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var abs = require( `@stdlib/math/base/special/abs` );
* var array = require( `@stdlib/ndarray/array` );
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
declare var mapRight: Routine;


// EXPORTS //

export = mapRight;
