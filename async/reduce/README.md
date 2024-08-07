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

# reduceAsync

> Apply a function against an accumulator and each element in a collection and return the accumulated result.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reduceAsync = require( '@stdlib/utils/async/reduce' );
```

#### reduceAsync( collection, initial, \[options,] reducer, done )

Applies a function against an accumulator and each element in a `collection` and returns the accumulated result.

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var arr = [ 3000, 2500, 1000 ];
var acc = {
    'sum': 0
};
reduceAsync( arr, acc, reducer, done );
/*
    3000
    2500
    1000
    6500
*/
```

The `next` callback accepts two arguments: `error` and `accumulator`. The second argument to the `next` callback is passed as the first argument to the provided `reducer`.

<!-- eslint-disable no-use-before-define -->

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, acc );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out === acc );
    // => true
}

var arr = [ 3000, 2500, 1000 ];
var acc = {};

reduceAsync( arr, acc, reducer, done );
```

The function accepts the following `options`:

-   **limit**: the maximum number of pending invocations at any one time. If provided, the function sets `options.series=false`. Default: `infinity`.
-   **series**: boolean indicating whether to sequentially invoke `reducer` for each `collection` element. If `true`, the function sets `options.limit=1`. Default: `true`.
-   **thisArg**: the execution context for `reducer`.

By default, all elements are processed **sequentially**, which means that the function **does** guarantee completion order. To process each `collection` element concurrently, set the `series` option to `false`.

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var arr = [ 3000, 2500, 1000 ];

var acc = {
    'sum': 0
};

var opts = {
    'series': false
};

reduceAsync( arr, acc, opts, reducer, done );
/* =>
    1000
    2500
    3000
    6500
*/
```

To limit the maximum number of pending function invocations, set the `limit` option.

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var arr = [ 3000, 2500, 1000 ];

var acc = {
    'sum': 0
};

var opts = {
    'limit': 2
};

reduceAsync( arr, acc, opts, reducer, done );
/* =>
    2500
    3000
    1000
    6500
*/
```

To set the execution context of `reducer`, set the `thisArg` option.

```javascript
function reducer( acc, value, index, next ) {
    this.count += 1;
    setTimeout( onTimeout, value );
    function onTimeout() {
        acc.sum += value;
        next( null, acc );
    }
}

var arr = [ 3000, 2500, 1000 ];

var acc = {
    'sum': 0
};

var context = {
    'count': 0
};

var opts = {
    'thisArg': context
};

reduceAsync( arr, acc, opts, reducer, done );

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
    // => 6500

    console.log( context.count );
    // => 3
}
```

When invoked, `reducer` is provided a maximum of five arguments:

-   **accumulator**: accumulated value.
-   **value**: collection value.
-   **index**: collection index.
-   **collection**: the input `collection`.
-   **next**: a callback which should be called once `reducer` has finished processing a collection `value`.

The actual number of provided arguments depends on function `length`. If `reducer` accepts three arguments, `reducer` is provided `accumulator`, `value` and `next`. If `reducer` accepts four arguments, `reducer` is provided `accumulator`, `value`, `index`, and `next`. For every other `reducer` signature, `reducer` is provided all five arguments.

```javascript
function reducer( acc, value, i, collection, next ) {
    console.log( 'collection: %s. %d: %d', collection.join( ',' ), i, value );
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var arr = [ 3000, 2500, 1000 ];

var acc = {
    'sum': 0
};

reduceAsync( arr, acc, reducer, done );
/* =>
    collection: 3000,2500,1000. 0: 3000
    collection: 3000,2500,1000. 1: 2500
    collection: 3000,2500,1000. 2: 1000
    3000
    2500
    1000
    6500
*/
```

#### reduceAsync.factory( \[options,] reducer )

Returns a function which invokes a function once for each element in a `collection`.

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var f = reduceAsync.factory( reducer );

var arr1 = [ 3000, 2500, 1000 ];

var acc1 = {
    'sum': 0
};

f( arr1, acc1, done );
/* =>
    3000
    2500
    1000
    6500
*/

var arr2 = [ 300, 250, 100 ];

var acc2 = {
    'sum': 0
};

f( arr2, acc2, done );
/* =>
    300
    250
    100
    650
*/
```

The function accepts the same `options` as `reduceAsync()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   If a provided function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   The function invokes the `done` callback with the `accumulator` provided as the second argument. If provided an empty `collection`, the function invokes the `done` callback with the `initial` value as the second argument.
-   The function does **not** support dynamic `collection` resizing.
-   The function does **not** skip `undefined` elements.
-   When processing `collection` elements concurrently, **beware** of race conditions when updating an accumulator. This is especially true when an accumulator is a primitive (e.g., a `number`). In general, prefer `object` accumulators, as objects are passed by reference, not by value.
-   **Neither** `reduceAsync` nor the function returned by the `factory` method **guarantee** asynchronous execution. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var resolve = require( 'path' ).resolve;
var readFile = require( '@stdlib/fs/read-file' );
var reduceAsync = require( '@stdlib/utils/async/reduce' );

var files = [
    resolve( __dirname, 'package.json' ),
    resolve( __dirname, 'README.md' )
];

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.count );
}

function read( acc, file, next ) {
    var opts = {
        'encoding': 'utf8'
    };
    readFile( file, opts, onFile );

    function onFile( error ) {
        if ( error ) {
            return next( null, acc );
        }
        acc.count += 1;
        next( null, acc );
    }
}

var acc = {
    'count': 0
};
reduceAsync( files, acc, read, done );
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

-   <span class="package-name">[`@stdlib/utils/async/for-each`][@stdlib/utils/async/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function once for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils/reduce`][@stdlib/utils/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array and return the accumulated result.</span>
-   <span class="package-name">[`@stdlib/utils/async/reduce-right`][@stdlib/utils/async/reduce-right]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in a collection and return the accumulated result, iterating from right to left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/async/for-each]: https://github.com/stdlib-js/utils/tree/main/async/for-each

[@stdlib/utils/reduce]: https://github.com/stdlib-js/utils/tree/main/reduce

[@stdlib/utils/async/reduce-right]: https://github.com/stdlib-js/utils/tree/main/async/reduce-right

<!-- </related-links> -->

</section>

<!-- /.links -->
