/**
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

'use strict';

var fibonacci = require( '@stdlib/math/base/special/fibonacci' );
var setMemoizedConfigurableReadOnly = require( './../lib' ); // eslint-disable-line id-length

function Foo() {
	var self;
	if ( !(this instanceof Foo) ) {
		return new Foo();
	}
	self = this;
	this.count = 0;
	setMemoizedConfigurableReadOnly( this, 'fibo', fibo );
	return this;

	function fibo() {
		self.count += 1;
		return fibonacci( 73 );
	}
}

var foo = new Foo();

var i;
for ( i = 0; i < 10; i++ ) {
	console.log( 'F: %d. Count: %d.', foo.fibo, foo.count );
}
