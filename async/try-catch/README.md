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

# trycatchAsync

> If a function does not return an error, invoke a callback with the function result; otherwise, invoke a callback with a value `y`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var trycatchAsync = require( '@stdlib/utils/async/try-catch' );
```

#### trycatchAsync( x, y, done )

If a function `x` does not return an error, invokes a `done` callback with the function result; otherwise, invokes a `done` callback with a value `y`.

```javascript
var randu = require( '@stdlib/random/base/randu' );

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        if ( randu() > 0.5 ) {
            return clbk( null, 1.0 );
        }
        clbk( new Error( 'oops' ) );
    }
}

function done( error, result ) {
    if ( error ) {
        console.log( error.message );
    }
    console.log( result );
}

trycatchAsync( x, -1.0, done );
```

The function `x` is provided a single argument:

-   `clbk`: callback to invoke upon function completion.

The callback accepts two arguments:

-   `error`: error object.
-   `result`: function result.

The `done` callback is invoked upon function completion and is provided two arguments:

-   `error`: error object.
-   `result`: either the result of `x` or the provided value `y`.

If the function `x` does not return a truthy `error` argument, the `error` argument provided to the `done` callback is `null`. If `x` does return a truthy `error` argument, the `done` callback is invoked with both the `error` and the provided value `y`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Execution is **not** guaranteed to be asynchronous. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var trycatchAsync = require( '@stdlib/utils/async/try-catch' );

var i;

function next() {
    trycatchAsync( x, 'beep', done );
}

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        if ( randu() > 0.9 ) {
            return clbk( null, 'BOOP' );
        }
        clbk( new Error( 'oops' ) );
    }
}

function done( error, result ) {
    if ( error ) {
        console.log( error.message );
    }
    i += 1;
    console.log( result );
    if ( i < 100 ) {
        return next();
    }
}

i = 0;
next();
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
