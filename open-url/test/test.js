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

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var noop = require( './../../noop' );
var openURL = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof openURL, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a valid URI', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'',
		'///boop',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			openURL( value );
		};
	}
});

tape( 'if the platform is `Darwin`, the function invokes the `open` command', opts, function test( t ) {
	var openURL;
	var url;

	openURL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-darwin': true,
		'@stdlib/assert/is-windows': false,
		'child_process': {
			'spawn': spawn
		}
	});

	url = 'https://google.com';
	openURL( url );

	t.end();

	function spawn( cmd, args ) {
		t.equal( cmd, 'open', 'calls `spawn` with `open` command' );
		t.equal( args[0], url, 'equal URL' );
		return proc();
	}
	function proc() {
		return {
			'unref': noop
		};
	}
});

tape( 'if the platform is `Windows`, the function invokes the `cmd` command', opts, function test( t ) {
	var openURL;
	var url;

	openURL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-darwin': false,
		'@stdlib/assert/is-windows': true,
		'child_process': {
			'spawn': spawn
		}
	});

	url = 'https://google.com?q=beep&b=boop';
	openURL( url );

	t.end();

	function spawn( cmd, args ) {
		t.equal( cmd, 'cmd', 'calls `spawn` with `open` command' );
		t.equal( args[0], '/c', 'first arg is `/c`' );
		t.equal( args[1], 'start', 'second arg is `start`' );
		t.equal( args[2], '""', 'empty title' );
		t.equal( args[3], 'https://google.com?q=beep^&b=boop', 'escaped ampersands' );
		return proc();
	}
	function proc() {
		return {
			'unref': noop
		};
	}
});

tape( 'if the platform is neither `Darwin` or `Windows`, the function invokes the `xdg-open` command', opts, function test( t ) {
	var openURL;
	var url;

	openURL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-darwin': false,
		'@stdlib/assert/is-windows': false,
		'child_process': {
			'spawn': spawn
		}
	});

	url = 'https://google.com';
	openURL( url );

	t.end();

	function spawn( cmd, args ) {
		t.equal( cmd, 'xdg-open', 'calls `spawn` with `xdg-open` command' );
		t.equal( args[0], url, 'equal URL' );
		return proc();
	}
	function proc() {
		return {
			'unref': noop
		};
	}
});
