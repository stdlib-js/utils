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

# ifthen

> If a condition is truthy, invoke `x`; otherwise, invoke `y`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ifthen = require( '@stdlib/utils/if-then' );
```

#### ifthen( bool, x, y )

If a condition is truthy, invokes `x`; otherwise, invokes `y`.

```javascript
function x() {
    return 1.0;
}

function y() {
    return -1.0;
}

var z = ifthen( true, x, y );
// returns 1.0

z = ifthen( false, x, y );
// returns -1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function is similar to [`ifelse()`][@stdlib/utils/if-else], but allows deferred argument evaluation.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var repeatString = require( '@stdlib/string/repeat' );
var ifthen = require( '@stdlib/utils/if-then' );

var z;
var i;

function x() {
    return repeatString( 'BOOP', ceil( randu()*3.0 ) );
}

function y() {
    return repeatString( 'beep', ceil( randu()*5.0 ) );
}

for ( i = 0; i < 100; i++ ) {
    z = ifthen( randu() > 0.9, x, y );
    console.log( z );
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

-   <span class="package-name">[`@stdlib/utils/async/if-then`][@stdlib/utils/async/if-then]</span><span class="delimiter">: </span><span class="description">if a predicate function returns a truthy value, invoke `x`; otherwise, invoke `y`.</span>
-   <span class="package-name">[`@stdlib/utils/if-else`][@stdlib/utils/if-else]</span><span class="delimiter">: </span><span class="description">if a condition is truthy, return `x`; otherwise, return `y`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/async/if-then]: https://github.com/stdlib-js/utils/tree/main/async/if-then

[@stdlib/utils/if-else]: https://github.com/stdlib-js/utils/tree/main/if-else

<!-- </related-links> -->

</section>

<!-- /.links -->
