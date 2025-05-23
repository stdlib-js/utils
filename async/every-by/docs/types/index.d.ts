/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/**
* Interface defining function options.
*/
interface Options<T, V> {
	/**
	* The maximum number of pending invocations at any one time.
	*/
	limit?: number;

	/**
	* Boolean indicating whether to sequentially invoke the `predicate` function for each `collection` element. If `true`, the function sets `options.limit=1`.
	*/
	series?: boolean;

	/**
	* Execution context.
	*/
	thisArg?: ThisParameterType<Predicate<T, V>>;
}

/**
* Callback function.
*/
type Nullary = () => void;

/**
* Callback function.
*
* @param error - encountered error or null
*/
type Unary = ( error: Error | null ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param result - test result
*/
type Binary = ( error: Error | null, result: boolean ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param result - test result
*/
type Callback = Nullary | Unary | Binary;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param next - callback which should be called once the predicate function has finished processing a collection value
*/
type BinaryPredicate<T, V> = ( this: V, value: T, next: Callback ) => void;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param next - callback which should be called once the `predicate` function has finished processing a collection `value`
*/
type TernaryPredicate<T, V> = ( this: V, value: T, index: number, next: Callback ) => void;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - callback which should be called once the `predicate` function has finished processing a collection `value`
*/
type QuaternaryPredicate<T, V> = ( this: V, value: T, index: number, collection: Collection<T>, next: Callback ) => void;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - callback which should be called once the `predicate` function has finished processing a collection `value`
*/
type Predicate<T, V> = BinaryPredicate<T, V> | TernaryPredicate<T, V> | QuaternaryPredicate<T, V>;

/**
* Tests whether all elements in a collection passes a test implemented by a predicate function.
*
* @param collection - input collection
* @param done - function to invoke upon completion
*/
type FactoryFunction<T> = ( collection: Collection<T>, done: Callback ) => void;

/**
* Interface for `everyByAsync`.
*/
interface EveryByAsync {
	/**
	* Tests whether all elements in a collection pass a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param collection - input collection
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param predicate - predicate function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( '@stdlib/fs/read-file' );
	*
	* function done( error, bool ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     if ( bool ) {
	*         console.log( 'Successfully read all files.' );
	*     } else {
	*         console.log( 'Was unable to read all files.' );
	*     }
	* }
	*
	* function predicate( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, false );
	*         }
	*         next( null, true );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* everyByAsync( files, predicate, done );
	*/
	<T = unknown, V = unknown>( collection: Collection<T>, options: Options<T, V>, predicate: Predicate<T, V>, done: Callback ): void;

	/**
	* Tests whether all elements in a collection pass a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param collection - input collection
	* @param predicate - predicate function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( '@stdlib/fs/read-file' );
	*
	* function done( error, bool ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     if ( bool ) {
	*         console.log( 'Successfully read all files.' );
	*     } else {
	*         console.log( 'Was unable to read all files.' );
	*     }
	* }
	*
	* function predicate( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, false );
	*         }
	*         next( null, true );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* everyByAsync( files, predicate, done );
	*/
	<T = unknown, V = unknown>( collection: Collection<T>, predicate: Predicate<T, V>, done: Callback ): void;

	/**
	* Returns a function for testing whether all elements in a collection pass a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param predicate - predicate function to invoke for each element in a collection
	* @throws must provide valid options
	* @returns function which invokes the predicate function once for each element in a collection
	*
	* @example
	* var readFile = require( '@stdlib/fs/read-file' );
	*
	* function predicate( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, false );
	*         }
	*         next( null, true );
	*     }
	* }
	*
	* var opts = {
	*     'series': true
	* };
	*
	* // Create an `everyByAsync` function which invokes the predicate function for each collection element sequentially:
	* var everyByAsync = factory( opts, predicate );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles results:
	* function done( error, bool ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     if ( bool ) {
	*         console.log( 'Successfully read all files.' );
	*     } else {
	*         console.log( 'Was unable to read all files.' );
	*     }
	* }
	*
	* // Try to read each element in `files`:
	* everyByAsync( files, done );
	*/
	factory<T = unknown, V = unknown>( options: Options<T, V>, predicate: Predicate<T, V> ): FactoryFunction<T>;

	/**
	* Returns a function for testing whether all elements in a collection pass a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param predicate - predicate function to invoke for each element in a collection
	* @throws must provide valid options
	* @returns function which invokes the predicate function once for each element in a collection
	*
	* @example
	* var readFile = require( '@stdlib/fs/read-file' );
	*
	* function predicate( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, false );
	*         }
	*         next( null, true );
	*     }
	* }
	*
	* var opts = {
	*     'series': true
	* };
	*
	* // Create an `everyByAsync` function which invokes the predicate function for each collection element sequentially:
	* var everyByAsync = factory( opts, predicate );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles results:
	* function done( error, bool ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     if ( bool ) {
	*         console.log( 'Successfully read all files.' );
	*     } else {
	*         console.log( 'Was unable to read all files.' );
	*     }
	* }
	*
	* // Try to read each element in `files`:
	* everyByAsync( files, done );
	*/
	factory<T = unknown, V = unknown>( predicate: Predicate<T, V> ): FactoryFunction<T>;
}

/**
* Tests whether all elements in a collection pass a test implemented by a predicate function.
*
* ## Notes
*
* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
* @param collection - input collection
* @param options - function options
* @param options.thisArg - execution context
* @param options.limit - maximum number of pending invocations at any one time
* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
* @param predicate - predicate function to invoke for each element in a collection
* @param done - function to invoke upon completion
* @throws must provide valid options
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
*
* function done( error, bool ) {
*     if ( error ) {
*         throw error;
*     }
*     if ( bool ) {
*         console.log( 'Successfully read all files.' );
*     } else {
*         console.log( 'Was unable to read all files.' );
*     }
* }
*
* function predicate( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, false );
*         }
*         next( null, true );
*     }
* }
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* everyByAsync( files, predicate, done );
*/
declare var everyByAsync: EveryByAsync;


// EXPORTS //

export = everyByAsync;
