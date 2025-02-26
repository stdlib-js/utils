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

/**
* Callback function.
*
* @param error - encountered error or null
* @param result - `x` or `y`
*/
type Callback<T> = ( error: Error | null, result: T ) => void;

/**
* Predicate callback function.
*/
type PredicateNullary = () => void;

/**
* Predicate callback function.
*
* @param error - error object
*/
type PredicateUnary = ( error: Error | null ) => void;

/**
* Predicate callback function.
*
* @param error - error object
* @param bool - condition used to determine whether to invoke callback with `x` or `y`
*/
type PredicateBinary = ( error: Error | null, bool: boolean ) => void;

/**
* Predicate callback function.
*
* @param error - error object
* @param bool - condition used to determine whether to invoke callback with `x` or `y`
*/
type PredicateCallback =  PredicateNullary | PredicateUnary | PredicateBinary;

/**
* Predicate function.
*
* @param clbk - callback to invoke upon predicate function completion
*/
type Predicate = ( clbk: PredicateCallback ) => void;

/**
* Determines the relationship between two types `T` and `U`, and returns:
*
* -   `T` if `T` is assignable to `U`,
* -   `U` if `U` is assignable to `T`,
* -    A union of `U | T` as a fallback.
*/
type ResultFunction<T, U> = T extends U ? T : U extends T ? U : U | T;

/**
* If a predicate function returns a truthy value, returns `x`; otherwise, returns `y`.
*
* @param predicate - predicate function
* @param x - value to return if a condition is truthy
* @param y - value to return if a condition is falsy
* @param done - callback to invoke upon completion
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
*
* function predicate( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, randu() > 0.5 );
*     }
* }
*
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
* }
* ifelseAsync( predicate, 1.0, -1.0, done );
*/
declare function ifelseAsync<T, U = T>( predicate: Predicate, x: T, y: U, done: Callback<ResultFunction<T, U>> ): void;


// EXPORTS //

export = ifelseAsync;
