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

# trythenAsync

> If a function does not return an error, invoke a callback with the function result; otherwise, invoke a second function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var trythenAsync = require( '@stdlib/utils/async/try-then' );
```

#### trythenAsync( x, y, done )

If a function `x` does not return an error, invokes a `done` callback with the function result; otherwise, invokes a second function `y`.

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

trythenAsync( x, y, done );
```

The function `x` is provided a single argument:

-   `clbk`: callback to invoke upon function completion.

The callback function accepts any number of arguments, with the first argument reserved for providing an error. If the error argument is falsy, the `done` callback is invoked with its first argument as `null` and all other provided arguments.

```javascript
var randu = require( '@stdlib/random/base/randu' );

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

trythenAsync( x, y, done );
```

If the error argument is truthy, the function invokes `y`. The number of arguments provided to `y` depends on the function's `length`. If `y` is a unary function, `y` is provided a single argument:

-   `clbk`: callback to invoke upon function completion.

Otherwise, `y` is provided two arguments:

-   `error`: the error from `x`.
-   `clbk`: callback to invoke upon function completion.

The callback function accepts any number of arguments, with the first argument reserved for providing an error. If the error argument is falsy, the `done` callback is invoked with its first argument equal to `null` and all other provided arguments. If the error argument is truthy, the `done` callback is invoked with only the error argument provided by `y`.

```javascript
var randu = require( '@stdlib/random/base/randu' );

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        if ( randu() > 0.5 ) {
            return clbk( null, 1.0, 2.0, 3.0 );
        }
        clbk( new Error( 'beep' ) );
    }
}

function y( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        if ( randu() > 0.5 ) {
            return clbk( null, 4.0, 5.0, 6.0 );
        }
        clbk( new Error( 'boop' ) );
    }
}

function done( error, a, b, c ) {
    if ( error ) {
        console.error( error.message );
    }
    console.log( a, b, c );
}

trythenAsync( x, y, done );
```

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
var ceil = require( '@stdlib/math/base/special/ceil' );
var repeatString = require( '@stdlib/string/repeat' );
var trythenAsync = require( '@stdlib/utils/async/try-then' );

var i;

function next() {
    trythenAsync( x, y, done );
}

function x( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        if ( randu() > 0.9 ) {
            return clbk( null, repeatString( 'BOOP', ceil( randu()*3.0 ) ) );
        }
        clbk( new Error( 'oops' ) );
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

-   <span class="package-name">[`@stdlib/utils/async/try-catch`][@stdlib/utils/async/try-catch]</span><span class="delimiter">: </span><span class="description">if a function does not return an error, invoke a callback with the function result; otherwise, invoke a callback with a value `y`.</span>
-   <span class="package-name">[`@stdlib/utils/try-then`][@stdlib/utils/try-then]</span><span class="delimiter">: </span><span class="description">if a function does not throw, return the function return value; otherwise, return the return value of a second function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/async/try-catch]: https://github.com/stdlib-js/utils/tree/main/async/try-catch

[@stdlib/utils/try-then]: https://github.com/stdlib-js/utils/tree/main/try-then

<!-- </related-links> -->

</section>

<!-- /.links -->
