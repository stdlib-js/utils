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

# pickArguments

> Create a function that invokes a provided function with specified arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var pickArguments = require( '@stdlib/utils/pick-arguments' );
```

#### pickArguments( fcn, indices\[, thisArg] )

Returns a `function` that invokes a provided function with specified arguments.

```javascript
function foo( a, b ) {
    return [ a, b ];
}

var bar = pickArguments( foo, [ 0, 2 ] );

var out = bar( 1, 2, 3 );
// returns [ 1, 3 ]
```

To set the `this` context when invoking the provided function, provide a `thisArg`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function Foo() {
    this.x = 1;
    this.y = 2;
}

Foo.prototype.scale = function scale( a, b ) {
    return [ this.x*a, this.y*b ];
};

var ctx = {
    'x': 10,
    'y': 20
};

var foo = new Foo();

var bar = pickArguments( foo.scale, [ 0, 2 ], ctx );

var out = bar( 1, 2, 3 );
// returns [ 10, 60 ]
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
var add = require( '@stdlib/number/float64/base/add' );
var pickArguments = require( '@stdlib/utils/pick-arguments' );

function fill( i ) {
    return i;
}

// Create a data array:
var x = filledarrayBy( 10, 'float64', fill );

// Compute the sum of consecutive elements...
var f;
var i;
for ( i = 1; i < x.length; i++ ) {
    f = pickArguments( add, [ i-1, i ] );
    console.log( 'sum(x_%d, x_%d) = %d', i-1, i, f.apply( null, x ) );
}
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

-   <span class="package-name">[`@stdlib/utils/reorder-arguments`][@stdlib/utils/reorder-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function with reordered arguments.</span>
-   <span class="package-name">[`@stdlib/utils/reverse-arguments`][@stdlib/utils/reverse-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function with arguments in reverse order.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/reorder-arguments]: https://github.com/stdlib-js/utils/tree/main/reorder-arguments

[@stdlib/utils/reverse-arguments]: https://github.com/stdlib-js/utils/tree/main/reverse-arguments

<!-- </related-links> -->

</section>

<!-- /.links -->
