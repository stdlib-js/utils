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

/* eslint-disable vars-on-top, no-new-wrappers */

'use strict';

var hasSetSupport = require( '@stdlib/assert/has-set-support' );
var hasMapSupport = require( '@stdlib/assert/has-map-support' );
var Buffer = require( '@stdlib/buffer/ctor' );
var array2buffer = require( '@stdlib/buffer/from-array' );
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var defineProperty = require( './../../../define-property' );
var noop = require( './../../../noop' );

function Foo() {
	this._data = [ 1, 2, 3, 4 ];
	this._name = 'bar';
	return this;
}
Foo.prototype.beep = 'boop';
module.exports.Foo = Foo;

function Bar() {
	defineProperty( this, 'baz', {
		'get': get
	});
	return this;

	function get() {
		return 1;
	}
}
module.exports.Bar = Bar;

var set;
if ( hasSetSupport() ) {
	set = new Set( [ 1, 2, 3, 4 ] );
}
module.exports.set = set;

var map;
if ( hasMapSupport() ) {
	map = new Map();
	map.set( 'beep', 'boop' );
}
module.exports.map = map;

var foo = new Foo();
module.exports.foo = foo;

var bar = new Bar();
Object.preventExtensions( bar );
Object.seal( bar );
Object.freeze( bar );
module.exports.bar = bar;

var date = new Date();
module.exports.date = date;

var re = /.*/;
module.exports.re = re;

var bool = new Boolean( true );
module.exports.bool = bool;

var str = new String( 'beep' );
module.exports.str = str;

var num = new Number( 3.14 );
module.exports.num = num;

var fcn = noop;
module.exports.fcn = fcn;

var buffer = array2buffer( [ 10, 20, 30, 40 ] );
module.exports.buffer = buffer;

var cbuffer = new Buffer( buffer );
module.exports.cbuffer = cbuffer;

var int8arr = new Int8Array( [ 1, 2, 3, 4 ] );
module.exports.int8arr = int8arr;

var uint8arr = new Uint8Array( [ 5, 6, 7, 8 ] );
module.exports.uint8arr = uint8arr;

var uint8carr = new Uint8ClampedArray( [ 9, 10, 11, 12 ] );
module.exports.uint8carr = uint8carr;

var int16arr = new Int16Array( [ 256, 257, 258 ] );
module.exports.int16arr = int16arr;

var uint16arr = new Uint16Array( [ 259, 260, 261 ] );
module.exports.uint16arr = uint16arr;

var int32arr = new Int32Array( [ 65537, 65538 ] );
module.exports.int32arr = int32arr;

var uint32arr = new Uint32Array( [ 65539, 65540 ] );
module.exports.uint32arr = uint32arr;

var float32arr = new Float32Array( [ 3.14 ] );
module.exports.float32arr = float32arr;

var float64arr = new Float64Array( [ 3.14 ] );
module.exports.float64arr = float64arr;

var err = new Error( 'beep' );
module.exports.err = err;

var terr = new TypeError( 'boop' );
module.exports.terr = terr;

var cantExtend = {
	'beep': 'boop'
};
Object.preventExtensions( cantExtend );
module.exports.cantExtend = cantExtend;

var sealed = [ 1, 2, 3 ];
Object.seal( sealed );
module.exports.sealed = sealed;

var frozen = {
	'a': {
		'b': 'c'
	}
};
Object.freeze( frozen );
module.exports.frozen = frozen;

module.exports.arr = [
	[
		{
			'bool': bool,
			'str': str,
			'num': num,
			'date': date,
			're': re,
			'n': 3.14,
			'null': null,
			'int8arr': int8arr,
			'obj': {
				'uint16arr': uint16arr
			},
			'fcn': fcn,
			'err': err,
			'terr': terr
		},
		bool,
		str,
		num,
		date,
		re,
		3.14,
		null,
		float64arr,
		err,
		terr,
		fcn,
		buffer,
		foo,
		bar
	],
	{
		'bool': bool,
		'uint32arr': uint32arr,
		'str': 'beepboop',
		'arr': [
			float32arr,
			date
		]
	},
	bool,
	str,
	num,
	date,
	re,
	fcn,
	null,
	void 0,
	NaN,
	3.14,
	'boop',
	int8arr,
	uint8arr,
	uint8carr,
	int16arr,
	uint16arr,
	int32arr,
	uint32arr,
	float32arr,
	float64arr,
	err,
	terr
];

module.exports.expectedArray = [
	[
		{
			'bool': true,
			'str': 'beep',
			'num': 3.14,
			'date': new Date( +date ),
			're': /.*/,
			'n': 3.14,
			'null': null,
			'int8arr': new Int8Array( int8arr ),
			'obj': {
				'uint16arr': new Uint16Array( uint16arr )
			},
			'fcn': fcn,
			'err': new Error( 'beep' ),
			'terr': new TypeError( 'boop' )
		},
		true,
		'beep',
		3.14,
		new Date( +date ),
		/.*/,
		3.14,
		null,
		new Float64Array( float64arr ),
		new Error( 'beep' ),
		new TypeError( 'boop' ),
		fcn,
		cbuffer,
		new Foo(),
		new Bar()
	],
	{
		'bool': true,
		'uint32arr': new Uint32Array( uint32arr ),
		'str': 'beepboop',
		'arr': [
			new Float32Array( float32arr ),
			new Date( +date )
		]
	},
	true,
	'beep',
	3.14,
	new Date( +date ),
	/.*/,
	fcn,
	null,
	void 0,
	NaN,
	3.14,
	'boop',
	new Int8Array( int8arr ),
	new Uint8Array( uint8arr ),
	new Uint8ClampedArray( uint8carr ),
	new Int16Array( int16arr ),
	new Uint16Array( uint16arr ),
	new Int32Array( int32arr ),
	new Uint32Array( uint32arr ),
	new Float32Array( float32arr ),
	new Float64Array( float64arr ),
	new Error( 'beep' ),
	new TypeError( 'boop' )
];

module.exports.emptyArr = [];
module.exports.expectedEmptyArray = [];

module.exports.sparseArr = new Array( 100 );
module.exports.expectedSparseArray = new Array( 100 );

var obj = {
	'bool': bool,
	'uint8carr': uint8carr,
	'arr': [
		'a',
		'b',
		'c'
	],
	'obj': {
		'a': {
			'b': 'c'
		},
		'bool': true
	}
};
module.exports.obj = obj;
module.exports.expectedObj0 = obj;

module.exports.expectedObj1 = {
	'bool': bool,
	'uint8carr': uint8carr,
	'arr': obj.arr,
	'obj': obj.obj
};

module.exports.expectedObj2 = {
	'bool': true,
	'uint8carr': new Uint8ClampedArray( uint8carr ),
	'arr': [ 'a', 'b', 'c' ],
	'obj': {
		'a': obj.obj.a,
		'bool': true
	}
};

module.exports.emptyObj = {};
module.exports.expectedEmptyObj = {};
