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

var bench = require( '@stdlib/bench' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var pkg = require( './../package.json' ).name;
var shift = require( './../lib' );


// MAIN //

bench( pkg+'::float64array', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Float64Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::float32array', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Float32Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::int32array', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Int32Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::uint32array', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Uint32Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::int16array', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Int16Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::uint16array', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Uint16Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::int8array', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Int8Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::uint8array', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Uint8Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::uint8clampedarray', function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Uint8ClampedArray( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
