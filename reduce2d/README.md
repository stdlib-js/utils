<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# reduce2d

> Reduce the number of dimensions by one of a two-dimensional nested array by applying a function against an accumulator and each element along the innermost dimension and returning the accumulation results as a one-dimensional array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reduce2d = require( '@stdlib/utils/reduce2d' );
```

#### reduce2d( arr, initial, fcn\[, thisArg] )

Reduces the number of dimensions by one of a two-dimensional nested array by applying a function against an accumulator and each element along the innermost dimension and returning the accumulation results as a one-dimensional array.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var add = require( '@stdlib/number/float64/base/add' );

var arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ]
];

var out = reduce2d( arr, [ 0, 0 ], naryFunction( add, 2 ) );
// returns [ 6, 15 ]
```

The applied function is provided the following arguments:

-   **accumulator**: accumulated value.
-   **value**: array element.
-   **indices**: current array element indices.
-   **arr**: input array.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var add = require( '@stdlib/number/float64/base/add' );

function fcn( acc, v ) {
    this.count += 1;
    return add( acc, v );
}

var arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ]
];

var ctx = {
    'count': 0
};

var out = reduce2d( arr, [ 0, 0 ], fcn, ctx );
// returns [ 6, 15 ]

var cnt = ctx.count;
// returns 6
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function **requires** an array-like object containing an `initial` value for the accumulator for each reduction. The number of `initial` values must equal the size of the outermost input array dimension.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var naryFunction = require( '@stdlib/utils/nary-function' );
var add = require( '@stdlib/number/float64/base/add' );
var zeros = require( '@stdlib/array/base/zeros' );
var reduce2d = require( '@stdlib/utils/reduce2d' );

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'float64', rand );
}

// Create a nested array of arrays:
var x = filledarrayBy( 10, 'generic', fill );

// Create an explicit binary function:
var f = naryFunction( add, 2 );

// Compute the sums along the innermost dimension...
var y = reduce2d( x, zeros( x.length ), f );

console.log( 'x:' );
console.log( x );

console.log( 'y:' );
console.log( y );
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

-   <span class="package-name">[`@stdlib/utils/map2d`][@stdlib/utils/map2d]</span><span class="delimiter">: </span><span class="description">apply a function to each nested element in an array of arrays and assign the result to a nested element in a new array of arrays.</span>
-   <span class="package-name">[`@stdlib/utils/reduce`][@stdlib/utils/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array and return the accumulated result.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/map2d]: https://github.com/stdlib-js/utils/tree/main/map2d

[@stdlib/utils/reduce]: https://github.com/stdlib-js/utils/tree/main/reduce

<!-- </related-links> -->

</section>

<!-- /.links -->
