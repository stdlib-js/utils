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

/**
* Interface defining function options.
*/
interface Options<T, V> {
	/**
	* Execution context.
	*/
	thisArg?: ThisParameterType<Fcn<T, V>>;

	/**
	* The maximum number of pending invocations at any one time.
	*/
	limit?: number;

	/**
	* Boolean indicating whether to sequentially invoke the provided function for each `collection` element. If `true`, the function sets `options.limit=1`. Default: false.
	*/
	series?: boolean;
}

/**
* Callback function.
*/
type Nullary = () => void;

/**
* Callback function.
*
* @param error - encountered error
*/
type Unary = ( error: Error ) => void;

/**
* Callback function.
*
* @param error - encountered error
*/
type Callback = Nullary | Unary;

/**
* Callback function to invoke once the provided function has finished processing a collection value.
*
* @param error - encountered error
*/
type Next = Nullary | Unary;

/**
* Function invoked for each element in a collection.
*
* @param value - collection value
* @param next - a callback to be invoked after processing a collection `value`
*/
type BinaryFcn<T, V> = ( this: V, value: T, next: Next ) => void;

/**
* Function invoked for each element in a collection.
*
* @param value - collection value
* @param index - collection index
* @param next - a callback to be invoked after processing a collection `value`
*/
type TernaryFcn<T, V> = ( this: V, value: T, index: number, next: Next ) => void;

/**
* Function invoked for each element in a collection.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type QuaternaryFcn<T, V> = ( this: V, value: T, index: number, collection: Collection<T>, next: Next ) => void;

/**
* Function invoked for each element in a collection.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type Fcn<T, V> = BinaryFcn<T, V> | TernaryFcn<T, V> | QuaternaryFcn<T, V>;

/**
* Function which invokes the provided function once for each element in a collection.
*
* @param collection - input collection
* @param done - function to invoke upon completion
*/
type FactoryFunction = ( collection: Collection, done: Callback ) => void;

/**
* Interface for `forEachRightAsync`.
*/
interface ForEachRightAsync {
	/**
	* Invokes a function once for each element in a collection.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param collection - input collection
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param fcn - function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( '@stdlib/fs/read-file' );
	*
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( 'Successfully read all files.' );
	* }
	*
	* function read( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( error );
	*         }
	*         console.log( 'Successfully read file: %s', file );
	*         next();
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* forEachRightAsync( files, read, done );
	*/
	<T = unknown, V = unknown>( collection: Collection<T>, options: Options<T, V>, fcn: Fcn<T, V>, done: Callback ): void;

	/**
	* Invokes a function once for each element in a collection.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param collection - input collection
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param fcn - function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( '@stdlib/fs/read-file' );
	*
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( 'Successfully read all files.' );
	* }
	*
	* function read( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( error );
	*         }
	*         console.log( 'Successfully read file: %s', file );
	*         next();
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* forEachRightAsync( files, read, done );
	*/
	<T = unknown, V = unknown>( collection: Collection<T>, fcn: Fcn<T, V>, done: Callback ): void;

	/**
	* Returns a function to invoke a function once for each element in a collection.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param fcn - function to invoke for each element in a collection
	* @throws must provide valid options
	* @returns function which invokes the provided function once for each element in a collection
	*
	* @example
	* var readFile = require( '@stdlib/fs/read-file' );
	*
	* function read( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( error );
	*         }
	*         console.log( 'Successfully read file: %s', file );
	*         next();
	*     }
	* }
	*
	* var opts = {
	*     'series': true
	* };
	*
	* // Create a `forEachRightAsync` function which invokes `read` for each collection element sequentially:
	* var forEachRightAsync = factory( opts, read );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles errors:
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( 'Successfully read all files.' );
	* }
	*
	* // Run `read` for each element in `files`:
	* forEachRightAsync( files, done );
	*/
	factory<T = unknown, V = unknown>( options: Options<T, V>, fcn: Fcn<T, V> ): FactoryFunction;

	/**
	* Returns a function to invoke a function once for each element in a collection.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param fcn - function to invoke for each element in a collection
	* @returns function which invokes the provided function once for each element in a collection
	*
	* @example
	* var readFile = require( '@stdlib/fs/read-file' );
	*
	* function read( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( error );
	*         }
	*         console.log( 'Successfully read file: %s', file );
	*         next();
	*     }
	* }
	*
	* // Create a `forEachRightAsync` function which invokes `read` for each collection element sequentially:
	* var forEachRightAsync = factory( read );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles errors:
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( 'Successfully read all files.' );
	* }
	*
	* // Run `read` for each element in `files`:
	* forEachRightAsync( files, done );
	*/
	factory<T = unknown, V = unknown>( fcn: Fcn<T, V> ): FactoryFunction;
}

/**
* Invokes a function once for each element in a collection.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
* @param collection - input collection
* @param options - function options
* @param options.thisArg - execution context
* @param options.limit - maximum number of pending invocations at any one time
* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
* @param fcn - function to invoke for each element in a collection
* @param done - function to invoke upon completion
* @throws must provide valid options
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( 'Successfully read all files.' );
* }
*
* function read( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( error );
*         }
*         console.log( 'Successfully read file: %s', file );
*         next();
*     }
* }
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* forEachRightAsync( files, read, done );
*/
declare var forEachRightAsync: ForEachRightAsync;


// EXPORTS //

export = forEachRightAsync;
