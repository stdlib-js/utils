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

var objectKeys = require( '@stdlib/utils/keys' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var invertBy = require( './../lib' );

var keys;
var arr;
var out;
var i;

function transform( key, value ) {
	return value;
}

// Create an array of random integers...
arr = new Array( 1000 );
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = round( randu()*100.0 );
}
// Invert the array to determine value frequency...
out = invertBy( arr, transform );
keys = objectKeys( out );
for ( i = 0; i < keys.length; i++ ) {
	if ( out[ i ] ) {
		out[ i ] = out[ i ].length;
	} else {
		out[ i ] = 0;
	}
}
console.dir( out );
