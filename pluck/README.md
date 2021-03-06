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

# Pluck

> Extract a property value from each element of an object array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pluck = require( '@stdlib/utils/pluck' );
```

#### pluck( arr, prop\[, options] )

Extracts a property value from each element of an object `array`.

<!-- eslint-disable object-curly-newline, object-property-newline -->

```javascript
var arr = [
    { 'a': 1, 'b': 2 },
    { 'a': 0.5, 'b': 3 }
];

var out = pluck( arr, 'a' );
// returns [ 1, 0.5 ]
```

The function accepts the following `options`:

-   **copy**: `boolean` indicating whether to return a new data structure. Default: `true`.

By default, the function returns a new data structure. To mutate the input data structure (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

<!-- eslint-disable object-curly-newline, object-property-newline -->

```javascript
var arr = [
    { 'a': 1, 'b': 2 },
    { 'a': 0.5, 'b': 3 }
];

var out = pluck( arr, 'a', { 'copy': false } );
// returns [ 1, 0.5 ]

var bool = ( arr[ 0 ] === out[ 0 ] );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function skips `null` and `undefined` array elements.

    <!-- eslint-disable object-curly-newline, object-property-newline -->

    ```javascript
    var arr = [
        { 'a': 1, 'b': 2 },
        null,
        void 0,
        { 'a': 0.5, 'b': 3 }
    ];

    var out = pluck( arr, 'a' );
    // returns [ 1, , , 0.5 ]
    ```

-   Extracted values are **not** cloned.

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var arr = [
        { 'a': { 'b': 2 } },
        { 'a': { 'b': 3 } }
    ];

    var out = pluck( arr, 'a' );
    // returns [ { 'b': 2 }, { 'b': 3 } ]

    var bool = ( arr[ 0 ].a === out[ 0 ] );
    // returns true
    ```

    To prevent unintended mutation, use [copy][@stdlib/utils/copy].

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var copy = require( '@stdlib/utils/copy' );

    var arr = [
        { 'a': { 'b': 2 } },
        { 'a': { 'b': 3 } }
    ];

    var out = pluck( arr, 'a' );
    // returns [ { 'b': 2 }, { 'b': 3 } ]

    // Perform a deep copy:
    out = copy( out );

    var bool = ( arr[ 0 ].a === out[ 0 ] );
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
var pluck = require( '@stdlib/utils/pluck' );

var arr;
var tmp;
var out;
var i;
var j;

// Generate a 100x5 2d-array...
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    tmp = new Array( 5 );
    for ( j = 0; j < tmp.length; j++ ) {
        tmp[ j ] = round( randu()*100.0*(j+1.0) );
    }
    arr[ i ] = tmp;
}
// Pluck the 3rd column:
out = pluck( arr, 2 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/deep-pluck`][@stdlib/utils/deep-pluck]</span><span class="delimiter">: </span><span class="description">extract a nested property value from each element of an object array.</span>
-   <span class="package-name">[`@stdlib/utils/pick`][@stdlib/utils/pick]</span><span class="delimiter">: </span><span class="description">return a partial object copy containing only specified keys.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils/tree/main/copy

<!-- <related-links> -->

[@stdlib/utils/deep-pluck]: https://github.com/stdlib-js/utils/tree/main/deep-pluck

[@stdlib/utils/pick]: https://github.com/stdlib-js/utils/tree/main/pick

<!-- </related-links> -->

</section>

<!-- /.links -->
