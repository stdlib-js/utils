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

# ifthenAsync

> If a predicate function returns a truthy value, invoke `x`; otherwise, invoke `y`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ifthenAsync = require( '@stdlib/utils/async/if-then' );
```

#### ifthenAsync( predicate, x, y, done )

If a `predicate` function returns a truthy value, invokes `x`; otherwise, invokes `y`.

```javascript
var randu = require( '@stdlib/random/base/randu' );

function predicate( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, randu() > 0.5 );
    }
}

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 1.0 );
    }
}

function y( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, -1.0 );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

ifthenAsync( predicate, x, y, done );
```

The `predicate` function is provided a single argument:

-   `clbk`: callback to invoke upon `predicate` function completion.

The callback accepts two arguments:

-   `error`: error object.
-   `bool`: condition used to determine whether to invoke `x` or `y`.

Both `x` and `y` are provided a single argument:

-   `clbk`: callback to invoke upon function completion.

The callback function accepts any number of arguments, with the first argument reserved for providing an error. If the error argument is falsy, the `done` callback is invoked with its first argument as `null` and all other provided arguments. If the error argument is truthy, the `done` callback is invoked with only an error argument.

```javascript
var randu = require( '@stdlib/random/base/randu' );

function predicate( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, randu() > 0.5 );
    }
}

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 1.0, 2.0, 3.0 );
    }
}

function y( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 4.0, 5.0, 6.0 );
    }
}

function done( error, a, b, c ) {
    if ( error ) {
        throw error;
    }
    console.log( a, b, c );
}

ifthenAsync( predicate, x, y, done );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function is similar to [`ifelseAsync()`][@stdlib/utils/async/if-else], but allows deferred argument evaluation.
-   Execution is **not** guaranteed to be asynchronous. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable callback-return -->

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var repeatString = require( '@stdlib/string/repeat' );
var ifthenAsync = require( '@stdlib/utils/async/if-then' );

var i;

function next() {
    ifthenAsync( predicate, x, y, done );
}

function predicate( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, randu() > 0.9 );
    }
}

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, repeatString( 'BOOP', ceil( randu()*3.0 ) ) );
    }
}

function y( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, repeatString( 'beep', ceil( randu()*5.0 ) ) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
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

-   <span class="package-name">[`@stdlib/utils/async/if-else`][@stdlib/utils/async/if-else]</span><span class="delimiter">: </span><span class="description">if a predicate function returns a truthy value, return `x`; otherwise, return `y`.</span>
-   <span class="package-name">[`@stdlib/utils/if-then`][@stdlib/utils/if-then]</span><span class="delimiter">: </span><span class="description">if a condition is truthy, invoke `x`; otherwise, invoke `y`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/async/if-else]: https://github.com/stdlib-js/utils/tree/main/async/if-else

<!-- <related-links> -->

[@stdlib/utils/if-then]: https://github.com/stdlib-js/utils/tree/main/if-then

<!-- </related-links> -->

</section>

<!-- /.links -->
