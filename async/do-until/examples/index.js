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

var repeatString = require( '@stdlib/string/repeat' );
var doUntilAsync = require( './../lib' );

function fcn( i, next ) {
	setTimeout( onTimeout, 0 );
	function onTimeout() {
		next( null, repeatString( 'beep', i+1 ) );
	}
}

function predicate( i, clbk ) {
	setTimeout( onTimeout, 0 );
	function onTimeout() {
		clbk( null, i >= 5 );
	}
}

function done( error, result ) {
	if ( error ) {
		throw error;
	}
	console.log( result );
}

doUntilAsync( fcn, predicate, done );
