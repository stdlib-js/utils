<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Unzip

> Unzip a [zipped array][@stdlib/utils/zip] (i.e., a nested array of tuples).

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var unzip = require( '@stdlib/utils/unzip' );
```

#### unzip( arr\[, idx] )

Unzips a [zipped array][@stdlib/utils/zip] (i.e., a nested `array` of tuples).

```javascript
var arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];

var out = unzip( arr );
// returns [ [ 1, 2 ], [ 'a', 'b' ], [ 3, 4 ] ];
```

To unzip specific tuple elements, you can provide an `array` of indices as an optional second argument.

```javascript
var arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];

var out = unzip( arr, [ 0, 2 ] );
// returns [ [ 1, 2 ], [ 3, 4 ] ];
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var unzip = require( '@stdlib/utils/unzip' );
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var pow = require( '@stdlib/math/base/special/pow' );

var arr = new Array( 100 );
var len = 5;

var i;
var j;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = new Array( len );
    for ( j = 0; j < len; j++ ) {
        arr[ i ][ j ] = round( randu() * pow(10, j) );
    }
}
var out = unzip( arr );

console.dir( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/zip`][@stdlib/utils/zip]</span><span class="delimiter">: </span><span class="description">generate array tuples from input arrays.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/zip]: https://github.com/stdlib-js/utils/tree/main/zip

<!-- </related-links> -->

</section>

<!-- /.links -->
