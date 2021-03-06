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

# papplyRight

> Partially apply function arguments from the right.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var papplyRight = require( '@stdlib/utils/papply-right' );
```

#### papplyRight( fcn\[, ...args] )

Partially applies function arguments from the right.

```javascript
function say( text, name ) {
    return text + ', ' + name + '.';
}

var toSusan = papplyRight( say, 'Susan B. Anthony' );

var str = toSusan( 'Thank you' );
// returns 'Thank you, Susan B. Anthony.'

str = toSusan( 'Never forget' );
// returns 'Never forget, Susan B. Anthony.'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The implementation does **not** set the `length` of the returned function. Accordingly, the returned function `length` is **always** `0`.
-   The evaluation context is **always** `null`.
-   The difference between this function and [`papply`][@stdlib/utils/papply] is the order in which arguments are applied. This function fixes the rightmost arguments.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var papplyRight = require( '@stdlib/utils/papply-right' );

var fcn;
var x;
var y;
var z;
var v;
var i;

function add( x, y, z, w, t, s ) {
    return x + y + z + w + t + s;
}

fcn = papplyRight( add, 5, 4, 3 );

for ( i = 0; i < 100; i++ ) {
    x = floor( randu() * 5 );
    y = floor( randu() * 10 );
    z = floor( randu() * 15 );
    v = fcn( x, y, z );
    console.log( '%d+%d+%d+5+4+3 = %d', x, y, z, v );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/papply`][@stdlib/utils/papply]</span><span class="delimiter">: </span><span class="description">partially apply function arguments.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/papply]: https://github.com/stdlib-js/utils/tree/main/papply

<!-- </related-links> -->

</section>

<!-- /.links -->
