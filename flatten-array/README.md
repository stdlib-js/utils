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

# flattenArray

> Flatten an array.

<section class="usage">

## Usage

```javascript
var flattenArray = require( '@stdlib/utils/flatten-array' );
```

#### flattenArray( arr\[, options] )

Flattens an array.

```javascript
var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

var out = flattenArray( arr );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

The function accepts the following `options`:

-   **depth**: maximum depth to flatten.
-   **copy**: `boolean` indicating whether to deep [copy][@stdlib/utils/copy] array elements. Default: `false`.

To flatten to a specified depth, set the `depth` option.

```javascript
var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

var out = flattenArray( arr, {
    'depth': 2
});
// returns [ 1, 2, 3, [4, [5], 6], 7, 8, 9 ]

var bool = ( arr[1][1][1] === out[3] );
// returns true
```

To deep [copy][@stdlib/utils/copy] array elements, set the `copy` option to `true`.

```javascript
var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

var out = flattenArray( arr, {
    'depth': 2,
    'copy': true
});
// returns [ 1, 2, 3, [4, [5], 6], 7, 8, 9 ]

var bool = ( arr[1][1][1] === out[3] );
// returns false
```

#### flattenArray.factory( dims\[, options] )

Returns a `function` optimized for flattening arrays having specified dimensions.

```javascript
var flatten = flattenArray.factory( [ 3, 3 ] );

var arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];

var out = flatten( arr );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

arr = [
    [ 11, 12, 13 ],
    [ 14, 15, 16 ],
    [ 17, 18, 19 ]
];

out = flatten( arr );
// returns [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
```

The function accepts the following `options`:

-   **copy**: `boolean` indicating whether to deep [copy][@stdlib/utils/copy] array elements. Default: `false`.

To deep [copy][@stdlib/utils/copy] array elements, set the `copy` option to `true`.

<!-- eslint-disable object-curly-newline -->

```javascript
var flatten = flattenArray.factory( [ 3, 3 ], {
    'copy': true
});

var arr = [
    [ 1, 2, 3 ],
    [ 4, { 'x': 5 }, 6 ],
    [ 7, 8, 9 ]
];

var out = flatten( arr );
// returns [ 1, 2, 3, 4, {'x':5}, 6, 7, 8, 9 ]

var bool = ( arr[1][1] === out[4] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A flatten `function` returned by the factory method does **not** validate that input `arrays` actually have the specified dimensions.
-   The `factory` method uses code evaluation, which may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable array-bracket-spacing -->

<!-- eslint no-undef: "error" -->

```javascript
var flattenArray = require( '@stdlib/utils/flatten-array' );

function tensor( N, M, L ) {
    var tmp1;
    var tmp2;
    var out;
    var i;
    var j;
    var k;

    out = [];
    for ( i = 0; i < N; i++ ) {
        tmp1 = [];
        for ( j = 0; j < M; j++ ) {
            tmp2 = [];
            for ( k = 0; k < L; k++ ) {
                tmp2.push( (M*L*i) + (j*L) + k + 1 );
            }
            tmp1.push( tmp2 );
        }
        out.push( tmp1 );
    }
    return out;
}

// Define array dimensions:
var N = 1000;
var M = 100;
var L = 10;

// Create a 3-dimensional nested array:
var data = tensor( N, M, L );

// Create a flattened (strided) array from a 3-dimensional nested array:
var arr = flattenArray( data );

// To access the data[4][20][2] element...
var xStride = M * L;
var yStride = L;
var zStride = 1;
var v = arr[ (4*xStride) + (20*yStride) + (2*zStride) ];
// returns 4203

var bool = ( data[4][20][2] === v );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/flatten-object`][@stdlib/utils/flatten-object]</span><span class="delimiter">: </span><span class="description">flatten an object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils/tree/main/copy

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

<!-- <related-links> -->

[@stdlib/utils/flatten-object]: https://github.com/stdlib-js/utils/tree/main/flatten-object

<!-- </related-links> -->

</section>

<!-- /.links -->
