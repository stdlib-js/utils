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

# untilAsync

> Invoke a function until a test condition is true.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var untilAsync = require( '@stdlib/utils/async/until' );
```

#### untilAsync( predicate, fcn, done\[, thisArg ] )

Invokes a `function` until a `predicate` function returns `true`.

```javascript
function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        console.log( 'beep: %d', i );
        next();
    }
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

untilAsync( predicate, fcn, done );
/* =>
    beep: 0
    beep: 1
    beep: 2
    beep: 3
    beep: 4
*/
```

The `predicate` function is provided two arguments:

-   `i`: iteration number (starting from zero).
-   `clbk`: a callback indicating whether to invoke `fcn`.

The `clbk` function accepts two arguments:

-   `error`: error object.
-   `bool`: test result.

If the test result is falsy, the function invokes `fcn`; otherwise, the function invokes the `done` callback.

The function to invoke is provided two arguments:

-   `i`: iteration number (starting from zero).
-   `next`: a callback which must be invoked before proceeding to the next iteration.

The first argument of both `clbk` and `next` is an `error` argument. If either function is called with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.

```javascript
function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( new Error( 'beep' ) );
    }
}

function done( error ) {
    console.error( error.message );
    // => beep
}

untilAsync( predicate, fcn, done );
```

The `done` callback is invoked with an `error` argument and any arguments passed to the final `next` callback.

```javascript
function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, i );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 4
}

untilAsync( predicate, fcn, done );
```

To set the function execution context for the invoked function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function fcn( i, next ) {
    this.count += 1;
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next();
    }
}

var context = {
    'count': 0
};

untilAsync( predicate, fcn, done, context );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( context.count );
    // => 5
}
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
var repeatString = require( '@stdlib/string/repeat' );
var untilAsync = require( '@stdlib/utils/async/until' );

function predicate( i, clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, i >= 5 );
    }
}

function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, repeatString( 'beep', i+1 ) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

untilAsync( predicate, fcn, done );
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

-   <span class="package-name">[`@stdlib/utils/async/do-until`][@stdlib/utils/async/do-until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/async/do-while`][@stdlib/utils/async/do-while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/until`][@stdlib/utils/until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/async/while`][@stdlib/utils/async/while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/async/do-until]: https://github.com/stdlib-js/utils/tree/main/async/do-until

[@stdlib/utils/async/do-while]: https://github.com/stdlib-js/utils/tree/main/async/do-while

[@stdlib/utils/until]: https://github.com/stdlib-js/utils/tree/main/until

[@stdlib/utils/async/while]: https://github.com/stdlib-js/utils/tree/main/async/while

<!-- </related-links> -->

</section>

<!-- /.links -->
