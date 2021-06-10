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

var defineProperty = require( '@stdlib/utils/define-property' );
var inheritedNonEnumerablePropertyNames = require( './../lib' ); // eslint-disable-line id-length

function Foo() {
	this.beep = 'boop';
	this.a = {
		'b': 'c'
	};
	defineProperty( this, 'baz', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': 'qux'
	});
	return this;
}

Foo.prototype.foo = [ 'bar' ];
defineProperty( Foo.prototype, 'bip', {
	'configurable': false,
	'enumerable': false,
	'writable': false,
	'value': 'bop'
});

var obj = new Foo();
var keys = inheritedNonEnumerablePropertyNames( obj );

console.log( keys );
// e.g., => [ 'bip', ... ]
