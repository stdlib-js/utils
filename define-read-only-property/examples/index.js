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

var setReadOnly = require( './../lib' );

function Foo( name ) {
	if ( !(this instanceof Foo) ) {
		return new Foo( name );
	}
	setReadOnly( this, 'name', name );
	return this;
}

var foo = new Foo( 'beep' );

try {
	foo.name = 'boop';
} catch ( err ) {
	console.error( err.message );
}
