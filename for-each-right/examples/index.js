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

var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
var forEachRight = require( './../lib' );

var arr;
var i;

function log( value, index, collection ) {
	console.log( '%s: %d', index, value );
	i += 1;
	if ( isEven( i ) ) {
		collection.pop();
	} else {
		collection.unshift( i+1 );
	}
}

arr = new Array( 100 );
for ( i = arr.length-1; i >= 0; i-- ) {
	arr[ i ] = i;
}

i = 0;
forEachRight( arr, log );
