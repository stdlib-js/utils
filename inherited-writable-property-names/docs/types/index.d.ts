/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Returns an array of an object's inherited writable property names.
*
* ## Notes
*
* -   Name order is not guaranteed, as object key enumeration is not specified according to the ECMAScript specification. In practice, however, most engines use insertion order to sort an object's keys, thus allowing for deterministic extraction.
* -   If provided `null` or `undefined`, the function returns an empty array.
*
* @param value - input object
* @param level - inheritance level
* @throws second argument must be a positive integer
* @returns a list of inherited writable property names
*
* @example
* var keys = inheritedWritablePropertyNames( {} );
*/
declare function inheritedWritablePropertyNames( value: any, level?: number ): Array<string>;


// EXPORTS //

export = inheritedWritablePropertyNames;
