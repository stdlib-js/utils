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

# Deep Pluck

> Extract a nested property value from each element of an object array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var deepPluck = require( '@stdlib/utils/deep-pluck' );
```

#### deepPluck( arr, path\[, options] )

Extracts a nested property value from each element of an object `array` based on a key `path`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': { 'b': { 'c': 1 } } },
    { 'a': { 'b': { 'c': 2 } } }
];

var out = deepPluck( arr, 'a.b.c' );
// returns [ 1, 2 ]
```

A key `path` may be specified as either a `string` or as an `array`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': [ 0, 1, 2 ] },
    { 'a': [ 3, 4, 5 ] }
];

var out = deepPluck( arr, [ 'a', 1 ] );
// returns [ 1, 4 ]
```

The function accepts the following `options`:

-   **copy**: `boolean` indicating whether to return a new data structure. Default: `true`.
-   **sep**: key path [separator][@stdlib/utils/deep-get]. Default: `'.'`.

By default, the function returns a new data structure. To mutate the input data structure (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': { 'b': { 'c': 1 } } },
    { 'a': { 'b': { 'c': 2 } } }
];

var out = deepPluck( arr, 'a.b.c', { 'copy': false } );
// returns [ 1, 2 ]

var bool = ( arr[ 0 ] === out[ 0 ] );
// returns true
```

The default key `path` separator is `.`. To specify an alternative separator, set the `sep` option.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': { 'b': { 'c': 1 } } },
    { 'a': { 'b': { 'c': 2 } } }
];

var out = deepPluck( arr, 'a|b|c', { 'sep': '|' } );
// returns [ 1, 2 ]
```

</section>

<!-- /.usage -->

<section class="notes">

-   If a key path does **not** exist, the function sets the plucked value as `undefined`.

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var arr = [
        { 'a': { 'b': { 'c': 1 } } },
        null,
        void 0,
        { 'a': { 'b': { 'c': 2 } } }
    ];

    var out = deepPluck( arr, 'a.b.c' );
    // returns [ 1, undefined, undefined, 2 ]
    ```

-   Extracted values are **not** cloned.

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var arr = [
        { 'a': { 'b': { 'c': 2 } } },
        { 'a': { 'b': { 'c': 3 } } }
    ];

    var out = deepPluck( arr, 'a.b' );
    // returns [ { 'c': 2 }, { 'c': 3 } ]

    var bool = ( arr[ 0 ].a.b === out[ 0 ] );
    // returns true
    ```

    To prevent subsequent unintended mutation, use [copy][@stdlib/utils/copy].

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var copy = require( '@stdlib/utils/copy' );

    var arr = [
        { 'a': { 'b': { 'c': 2 } } },
        { 'a': { 'b': { 'c': 3 } } }
    ];

    var out = deepPluck( arr, 'a.b' );
    // returns [ { 'c': 2 }, { 'c': 3 } ]

    // Perform a deep copy:
    out = copy( out );

    var bool = ( arr[ 0 ].a.b === out[ 0 ] );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var deepPluck = require( '@stdlib/utils/deep-pluck' );

var arr;
var out;
var tmp;
var i;

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    tmp = {
        'a': {
            'b': {
                'c': {
                    'd': null
                }
            }
        }
    };
    tmp.a.b.c.d = round( randu()*100.0 );
    arr[ i ] = tmp;
}

// Pluck the deeply nested values:
out = deepPluck( arr, 'a.b.c.d' );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/deep-get`][@stdlib/utils/deep-get]</span><span class="delimiter">: </span><span class="description">get a nested property value.</span>
-   <span class="package-name">[`@stdlib/utils/deep-set`][@stdlib/utils/deep-set]</span><span class="delimiter">: </span><span class="description">set a nested property value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils/tree/main/copy

<!-- <related-links> -->

[@stdlib/utils/deep-get]: https://github.com/stdlib-js/utils/tree/main/deep-get

[@stdlib/utils/deep-set]: https://github.com/stdlib-js/utils/tree/main/deep-set

<!-- </related-links> -->

</section>

<!-- /.links -->
