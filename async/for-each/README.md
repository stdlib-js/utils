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

# forEachAsync

> Invoke a function once for each element in a collection.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var forEachAsync = require( '@stdlib/utils/async/for-each' );
```

#### forEachAsync( collection, \[options,] fcn, done )

Invokes a function once for each element in a `collection`.

```javascript
function onDuration( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next();
    }
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

var arr = [ 3000, 2500, 1000 ];

forEachAsync( arr, onDuration, done );
/* =>
    1000
    2500
    3000
*/
```

The function accepts the following `options`:

-   **limit**: the maximum number of pending invocations at any one time. Default: `infinity`.
-   **series**: boolean indicating whether to sequentially invoke `fcn` for each `collection` element. If `true`, the function sets `options.limit=1`. Default: `false`.
-   **thisArg**: the execution context for `fcn`.

By default, all elements are processed concurrently, which means that the function does **not** guarantee completion order. To process each `collection` element sequentially, set the `series` option to `true`.

```javascript
function onDuration( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next();
    }
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

var arr = [ 3000, 2500, 1000 ];

var opts = {
    'series': true
};

forEachAsync( arr, opts, onDuration, done );
/* =>
    3000
    2500
    1000
*/
```

To limit the maximum number of pending function invocations, set the `limit` option.

```javascript
function onDuration( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next();
    }
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

var arr = [ 3000, 2500, 1000 ];

var opts = {
    'limit': 2
};

forEachAsync( arr, opts, onDuration, done );
/* =>
    2500
    3000
    1000
*/
```

To set the execution context of `fcn`, set the `thisArg` option.

```javascript
function onDuration( value, next ) {
    this.count += 1;
    setTimeout( onTimeout, value );
    function onTimeout() {
        next();
    }
}

var arr = [ 3000, 2500, 1000 ];

var context = {
    'count': 0
};

var opts = {
    'thisArg': context
};

forEachAsync( arr, opts, onDuration, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( context.count );
    // => 3
}
```

When invoked, `fcn` is provided a maximum of four arguments:

-   **value**: collection value.
-   **index**: collection index.
-   **collection**: the input `collection`.
-   **next**: a callback which should be called once `fcn` has finished processing a collection `value`.

The actual number of provided arguments depends on function `length`. If `fcn` accepts two arguments, `fcn` is provided `value` and `next`. If `fcn` accepts three arguments, `fcn` is provided `value`, `index`, and `next`. For every other `fcn` signature, `fcn` is provided all four arguments.

```javascript
function onDuration( value, i, collection, next ) {
    console.log( 'collection: %s. %d: %d', collection.join( ',' ), i, value );
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next();
    }
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

var arr = [ 3000, 2500, 1000 ];

forEachAsync( arr, onDuration, done );
/* =>
    collection: 3000,2500,1000. 0: 3000
    collection: 3000,2500,1000. 1: 2500
    collection: 3000,2500,1000. 2: 1000
    1000
    2500
    3000
*/
```

#### forEachAsync.factory( \[options,] fcn )

Returns a function which invokes a function once for each element in a `collection`.

```javascript
function onDuration( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next();
    }
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

var f = forEachAsync.factory( onDuration );

var arr1 = [ 3000, 2500, 1000 ];

f( arr1, done );
/* =>
    1000
    2500
    3000
*/

var arr2 = [ 300, 250, 100 ];

f( arr2, done );
/* =>
    100
    250
    300
*/
```

The function accepts the same `options` as `forEachAsync()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   If a provided function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   The function does **not** support dynamic `collection` resizing.
-   The function does **not** skip `undefined` elements.
-   **Neither** `forEachAsync` nor the function returned by the `factory` method **guarantee** asynchronous execution. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var resolve = require( 'path' ).resolve;
var readFile = require( '@stdlib/fs/read-file' );
var forEachAsync = require( '@stdlib/utils/async/for-each' );

var files = [
    resolve( __dirname, 'package.json' ),
    resolve( __dirname, 'README.md' )
];

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Successfully read all files.' );
}

function read( file, next ) {
    var opts = {
        'encoding': 'utf8'
    };
    readFile( file, opts, onFile );

    function onFile( error ) {
        if ( error ) {
            error = new Error( 'unable to read file: '+file );
            return next( error );
        }
        console.log( 'Successfully read file: %s', file );
        next();
    }
}

forEachAsync( files, read, done );
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

-   <span class="package-name">[`@stdlib/utils/for-each`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils/async/for-each-right`][@stdlib/utils/async/for-each-right]</span><span class="delimiter">: </span><span class="description">invoke a function once for each element in a collection, iterating from right to left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils/tree/main/for-each

[@stdlib/utils/async/for-each-right]: https://github.com/stdlib-js/utils/tree/main/async/for-each-right

<!-- </related-links> -->

</section>

<!-- /.links -->
