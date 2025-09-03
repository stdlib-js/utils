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

var hasClassSupport = require( '@stdlib/assert/has-class-support' );
var evil = require( './../lib' );

var hasClass = hasClassSupport();
var ctors;
var fcn;
var i;

function compile( ctor ) {
	var name;
	var str;

	name = ctor.match( /^(\w*)Array$/ )[ 1 ];
	name += 'DataArray';

	str = '';
	str += '(function create(){';
	str += '"use strict";';

	if ( hasClass ) {
		str += 'class '+name+' extends '+ctor+'{';
		str += 'constructor(x){';
		str += 'super(x);';
		str += '}';
		str += '}';
	} else {
		str += 'function '+name+'(){';
		str += 'if (!(this instanceof '+name+')){';
		str += 'return new '+name+'();';
		str += '}';
		str += 'ctor.call(this);';
		str += 'return this;';
		str += '}';
		str += name+'.prototype = Object.create('+ctor+'.prototype);';
		str += name+'.prototype.constructor = '+name+';';
	}
	str += 'return '+name+';';
	str += '})();';
	return str;
}

ctors = [
	'Int8Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Int16Array',
	'Uint16Array',
	'Int32Array',
	'Uint32Array',
	'Float32Array',
	'Float64Array',
	'Array'
];

for ( i = 0; i < ctors.length; i++ ) {
	fcn = evil( compile( ctors[i] ) );
	console.log( fcn.toString() );
}
