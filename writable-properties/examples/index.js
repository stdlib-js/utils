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

var defineProperty = require( './../../define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var writableProperties = require( './../lib' );

var hasSymbols = hasSymbolSupport();

function Foo() {
	this.a = 'a';
	defineProperty( this, 'b', {
		'configurable': true,
		'enumerable': true,
		'writable': false,
		'value': 'b'
	});
	if ( hasSymbols ) {
		this[ Symbol( 'a' ) ] = 'a';
		defineProperty( this, Symbol( 'b' ), {
			'configurable': true,
			'enumerable': true,
			'writable': false,
			'value': 'b'
		});
	}
	return this;
}

Foo.prototype.c = 'c';
if ( hasSymbols ) {
	Foo.prototype[ Symbol( 'c' ) ] = 'c';
}

var obj = new Foo();
var props = writableProperties( obj );
console.log( props );
// => [ 'a', ... ]
