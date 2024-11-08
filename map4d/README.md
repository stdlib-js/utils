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

# map4d

> Apply a function to each nested element in a four-dimensional nested array and assign the result to a nested element in a new four-dimensional nested array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var map4d = require( '@stdlib/utils/map4d' );
```

#### map4d( arr, fcn\[, thisArg] )

Applies a function to each nested element in a four-dimensional nested array and assigns the result to a nested element in a new four-dimensional nested array.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );

var arr = [
    [ [ [ -1, -2, -3 ] ] ],
    [ [ [ -4, -5, -6 ] ] ]
];

var out = map4d( arr, naryFunction( abs, 1 ) );
// returns [ [ [ [ 1, 2, 3 ] ] ], [ [ [ 4, 5, 6 ] ] ] ]
```

The applied function is provided the following arguments:

-   **value**: array element.
-   **indices**: current array element indices.
-   **arr**: input array.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

function fcn( v ) {
    this.count += 1;
    return abs( v );
}

var arr = [
    [ [ [ -1, -2, -3 ] ] ],
    [ [ [ -4, -5, -6 ] ] ]
];

var ctx = {
    'count': 0
};

var out = map4d( arr, fcn, ctx );
// returns [ [ [ [ 1, 2, 3 ] ] ], [ [ [ 4, 5, 6 ] ] ] ]

var cnt = ctx.count;
// returns 6
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

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
var abs2 = require( '@stdlib/math/base/special/abs2' );
var map4d = require( '@stdlib/utils/map4d' );

function fill( n ) {
    if ( n > 0 ) {
        return array;
    }
    return values;

    function array() {
        return filledarrayBy( 2, 'generic', fill( n-1 ) );
    }

    function values( i ) {
        var rand = discreteUniform( -10*(i+1), 10*(i+1) );
        return filledarrayBy( 10, 'generic', rand );
    }
}

// Create a four-dimensional nested array:
var x = filledarrayBy( 2, 'generic', fill( 2 ) );

// Create an explicit unary function:
var f = naryFunction( abs2, 1 );

// Compute the element-wise squared absolute value...
var y = map4d( x, f );

console.log( 'x:' );
console.log( JSON.stringify( x, null, '  ' ) );

console.log( 'y:' );
console.log( JSON.stringify( y, null, '  ' ) );
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

-   <span class="package-name">[`@stdlib/utils/map`][@stdlib/utils/map]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array.</span>
-   <span class="package-name">[`@stdlib/utils/map2d`][@stdlib/utils/map2d]</span><span class="delimiter">: </span><span class="description">apply a function to each nested element in an array of arrays and assign the result to a nested element in a new array of arrays.</span>
-   <span class="package-name">[`@stdlib/utils/map3d`][@stdlib/utils/map3d]</span><span class="delimiter">: </span><span class="description">apply a function to each nested element in a three-dimensional nested array and assign the result to a nested element in a new three-dimensional nested array.</span>
-   <span class="package-name">[`@stdlib/utils/map5d`][@stdlib/utils/map5d]</span><span class="delimiter">: </span><span class="description">apply a function to each nested element in a five-dimensional nested array and assign the result to a nested element in a new five-dimensional nested array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/map]: https://github.com/stdlib-js/utils/tree/main/map

[@stdlib/utils/map2d]: https://github.com/stdlib-js/utils/tree/main/map2d

[@stdlib/utils/map3d]: https://github.com/stdlib-js/utils/tree/main/map3d

[@stdlib/utils/map5d]: https://github.com/stdlib-js/utils/tree/main/map5d

<!-- </related-links> -->

</section>

<!-- /.links -->
