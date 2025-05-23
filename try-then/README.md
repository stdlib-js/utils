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

# trythen

> If a function does not throw, return the function return value; otherwise, return the return value of a second function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var trythen = require( '@stdlib/utils/try-then' );
```

#### trythen( x, y )

If a function `x` does not throw, returns the return value of `x`; otherwise, returns the return value of a second function `y`.

```javascript
function x1() {
    return 1.0;
}

function x2() {
    throw new Error( 'beep' );
}

function y() {
    return -1.0;
}

var z = trythen( x1, y );
// returns 1.0

z = trythen( x2, y );
// returns -1.0
```

The function `y` is provided a single argument:

-   **error**: the error thrown by `x`.

```javascript
var randu = require( '@stdlib/random/base/randu' );

function x() {
    if ( randu() < 0.5 ) {
        throw new Error( 'beep' );
    }
    throw new TypeError( 'boop' );
}

function y( err ) {
    if ( err instanceof TypeError ) {
        return 'boops';
    }
    return 'beeps';
}

var z = trythen( x, y );
// returns <string>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

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
var trythen = require( '@stdlib/utils/try-then' );

var z;
var i;

function x() {
    if ( randu() < 0.9 ) {
        throw new Error( 'BOOP' );
    }
    return repeatString( 'BOOP', ceil( randu()*3.0 ) );
}

function y() {
    return repeatString( 'beep', ceil( randu()*5.0 ) );
}

for ( i = 0; i < 100; i++ ) {
    z = trythen( x, y );
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

-   <span class="package-name">[`@stdlib/utils/try-catch`][@stdlib/utils/try-catch]</span><span class="delimiter">: </span><span class="description">if a function does not throw, return the function return value; otherwise, return `y`.</span>
-   <span class="package-name">[`@stdlib/utils/async/try-then`][@stdlib/utils/async/try-then]</span><span class="delimiter">: </span><span class="description">if a function does not return an error, invoke a callback with the function result; otherwise, invoke a second function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/try-catch]: https://github.com/stdlib-js/utils/tree/main/try-catch

[@stdlib/utils/async/try-then]: https://github.com/stdlib-js/utils/tree/main/async/try-then

<!-- </related-links> -->

</section>

<!-- /.links -->
