/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/**
* Interface defining function options.
*/
interface Options<T> {
	/**
	* The maximum number of pending invocations at any one time.
	*/
	limit?: number;

	/**
	* Execution context.
	*/
	thisArg?: ThisParameterType<Callback<T>>;
}

/**
* Callback invoked upon completion.
*/
type Nullary = () => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error
*/
type Unary = ( error: Error ) => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error
* @param out - output results
*/
type Binary<T> = ( error: Error | null, out: Array<T> ) => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error
* @param out - output results
*/
type Callback<T> = Nullary | Unary | Binary<T>;

/**
* Executes a set of functions in parallel.
*/
type ParallelFunction<T> = ( done: Callback<T> ) => void;

/**
* Interface for `parallel`.
*/
interface Parallel {
	/**
	* Executes a set of functions in parallel.
	*
	* @param fcns - array of functions
	* @param options - function options
	* @param options.thisArg - function context
	* @param options.limit - number of functions to execute concurrently
	* @param clbk - callback to invoke upon completion
	*
	* @example
	* var parallel = require( './../../../../async/parallel' );
	*
	* function foo( clbk ) {
	*     setTimeout( onTimeout, 300 );
	*     function onTimeout() {
	*         clbk( null, 'one' );
	*     }
	* }
	*
	* function bar( clbk ) {
	*     setTimeout( onTimeout, 100 );
	*     function onTimeout() {
	*         clbk( null, 'two' );
	*     }
	* }
	*
	* function done( error, results ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( results );
	*     // => [ 'one', 'two' ]
	* }
	*
	* var fcns = [ foo, bar ];
	*
	* var opts = {
	*     'thisArg': {},
	*     'limit': 2
	* }
	*
	* parallel( fcns, opts, done );
	*/
	<T = unknown>( fcns: ArrayLike<Function>, options: Options<T>, clbk: Callback<T> ): void;

	/**
	* Executes a set of functions in parallel.
	*
	* @param fcns - array of functions
	* @param clbk - callback to invoke upon completion
	*
	* @example
	* var parallel = require( './../../../../async/parallel' );
	*
	* function foo( clbk ) {
	*     setTimeout( onTimeout, 300 );
	*     function onTimeout() {
	*         clbk( null, 'one' );
	*     }
	* }
	*
	* function bar( clbk ) {
	*     setTimeout( onTimeout, 100 );
	*     function onTimeout() {
	*         clbk( null, 'two' );
	*     }
	* }
	*
	* function done( error, results ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( results );
	*     // => [ 'one', 'two' ]
	* }
	*
	* var fcns = [ foo, bar ];
	*
	* parallel( fcns, done );
	*/
	<T = unknown>( fcns: ArrayLike<Function>, clbk: Callback<T> ): void;

	/**
	* Returns a reusable parallel function.
	*
	* @param fcns - array of functions
	* @param options - function options
	* @param options.thisArg - function context
	* @param options.limit - number of functions to execute concurrently
	* @param clbk - callback to invoke upon completion
	* @returns parallel function
	*
	* @example
	* function a( clbk ) {
	*     setTimeout( onTimeout, 0 );
	*     function onTimeout() {
	*         clbk( null, 2 );
	*     }
	* }
	*
	* function b( clbk ) {
	*     setTimeout( onTimeout, 0 );
	*     function onTimeout() {
	*         clbk( null, 4 );
	*     }
	* }
	*
	* function done( error, out ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( out );
	*     // => [ 2, 4 ]
	* }
	*
	* var fcns = [ a, b ];
	* var run = parallel.factory( fcns );
	*
	* // ...
	*
	* run( done );
	*
	* @example
	* function a( clbk ) {
	*     setTimeout( onTimeout, 0 );
	*     function onTimeout() {
	*         clbk( null, 2 );
	*     }
	* }
	*
	* function b( clbk ) {
	*     setTimeout( onTimeout, 0 );
	*     function onTimeout() {
	*         clbk( null, 4 );
	*     }
	* }
	*
	* function done( error, out ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( out );
	*     // => [ 2, 4 ]
	* }
	*
	* var fcns = [ a, b ];
	*
	* var opts = {
	*     'thisArg': {},
	*     'limit': 2
	* }
	*
	* var run = parallel.factory( fcns, opts );
	*
	* // ...
	*
	* run( done );
	*/
	factory<T = unknown>( fcns: ArrayLike<Function>, options?: Options<T> ): ParallelFunction<T>;
}

/**
* Executes a set of functions in parallel and passes the results of all functions to a provided callback.
*
* ## Notes
*
* -   This function is intended to start asynchronous tasks so that execution of each task runs concurrently. If provided a function which does not perform asynchronous tasks, the function will execute synchronously.
* -   The function executes provided functions in the same thread. Accordingly, the function does **not** spawn new threads.
*
* @param fcns - array of functions
* @param options - function options
* @param options.thisArg - function context
* @param options.limit - number of functions to execute concurrently
* @param clbk - callback to invoke upon completion
*
* @example
* var parallel = require( '@stdlib/utils/async/parallel' );
*
* function foo( clbk ) {
*     setTimeout( onTimeout, 300 );
*     function onTimeout() {
*         clbk( null, 'one' );
*     }
* }
*
* function bar( clbk ) {
*     setTimeout( onTimeout, 100 );
*     function onTimeout() {
*         clbk( null, 'two' );
*     }
* }
*
* function done( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( results );
*     // => [ 'one', 'two' ]
* }
*
* var fcns = [ foo, bar ];
*
* parallel( fcns, done );
*
* @example
* function a( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, 2 );
*     }
* }
*
* function b( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, 4 );
*     }
* }
*
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( out );
*     // => [ 2, 4 ]
* }
*
* var fcns = [ a, b ];
* var run = parallel.factory( fcns );
*
* // ...
*
* run( done );
*/
declare var parallel: Parallel;


// EXPORTS //

export = parallel;
