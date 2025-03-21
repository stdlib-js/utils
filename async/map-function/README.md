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

# mapFunAsync

> Invoke a function `n` times and return an array of accumulated function return values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mapFunAsync = require( '@stdlib/utils/async/map-function' );
```

#### mapFunAsync( fcn, n, \[options,] done )

Invokes a function `n` times and returns an `array` of accumulated function return values.

```javascript
function fcn( i, next ) {
    var t = 300 - (i*50);
    setTimeout( onTimeout, t );
    function onTimeout() {
        console.log( i );
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
}

mapFunAsync( fcn, 5, done );
/* =>
    4
    3
    2
    1
    0
    [ 0, 1, 2, 3, 4 ]
*/
```

For each iteration, the provided function is invoked with two arguments:

-   `index`: invocation index (starting from zero).
-   `next`: callback to be invoked upon function completion.

The `next` callback accepts two arguments:

-   `error`: error argument.
-   `result`: function result.

The function accepts the following `options`:

-   `limit`: the maximum number of pending invocations at any one time. Default: `infinity`.
-   `series`: `boolean` indicating whether to sequentially invoke `fcn`. If `true`, the function sets `options.limit=1`. Default: `false`.
-   `thisArg`: the execution context for `fcn`.

By default, all invocations are performed concurrently, which means that the function does **not** guarantee completion order. To invoke a function such that only one invocation is pending at any one time, set the `series` option to `true`.

```javascript
function fcn( i, next ) {
    var t = 300 - (i*50);
    setTimeout( onTimeout, t );
    function onTimeout() {
        console.log( i );
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
}

var opts = {
    'series': true
};

mapFunAsync( fcn, 5, opts, done );
/* =>
    0
    1
    2
    3
    4
    [ 0, 1, 2, 3, 4 ]
*/
```

To limit the maximum number of pending function invocations, set the `limit` option.

```javascript
var delays = [ 300, 250, 225, 150, 100 ];

function fcn( i, next ) {
    setTimeout( onTimeout, delays[ i ] );
    function onTimeout() {
        console.log( i );
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
}

var opts = {
    'limit': 2
};

mapFunAsync( fcn, 5, opts, done );
/* =>
    1
    0
    3
    2
    4
    [ 0, 1, 2, 3, 4 ]
*/
```

To set the execution context of `fcn`, set the `thisArg` option.

<!-- eslint-disable no-invalid-this -->

```javascript
function fcn( i, next ) {
    this.count += 1;
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
    // => [ 0, 1, 2, 3, 4 ]
}

var ctx = {
    'count': 0
};
var opts = {
    'thisArg': ctx
};

mapFunAsync( fcn, 5, opts, done );
```

#### mapFunAsync.factory( \[options,] fcn )

Returns a `function` which invokes a function `n` times and returns an `array` of accumulated function return values.

```javascript
function fcn( i, next ) {
    var t = 300 - (i*50);
    setTimeout( onTimeout, t );
    function onTimeout() {
        console.log( i );
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
}

var opts = {
    'series': true
};

var f = mapFunAsync.factory( opts, fcn );

f( 5, done );
/* =>
    0
    1
    2
    3
    4
    [ 0, 1, 2, 3, 4 ]
*/

f( 2, done );
/* =>
    0
    1
    [ 0, 1 ]
*/
```

The function accepts the same `options` as `mapFunAsync()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a provided function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   **Neither** `mapFunAsync` nor the function returned by the `factory` method **guarantee** asynchronous execution. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var mapFunAsync = require( '@stdlib/utils/async/map-function' );

function rand( i, next ) {
    var t = randu() * i;
    setTimeout( onTimeout, t );
    function onTimeout() {
        next( null, t );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
}

mapFunAsync( rand, 10, done );
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

-   <span class="package-name">[`@stdlib/utils/map-function`][@stdlib/utils/map-function]</span><span class="delimiter">: </span><span class="description">invoke a function n times and return an array of accumulated function return values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/map-function]: https://github.com/stdlib-js/utils/tree/main/map-function

<!-- </related-links> -->

</section>

<!-- /.links -->
