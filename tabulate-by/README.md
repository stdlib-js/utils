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

# tabulateBy

> Generate a frequency table according to an indicator function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var tabulateBy = require( '@stdlib/utils/tabulate-by' );
```

#### tabulateBy( collection\[, options,] indicator )

Generates a frequency table according to an `indicator` function, i.e., a function which specifies how to categorize an element in the input `collection`.

```javascript
function indicator( v ) {
    return v[ 0 ];
}
var arr = [ 'beep', 'boop', 'foo', 'beep' ];

var out = tabulateBy( arr, indicator );
// returns [ [ 'b', 3, 0.75 ], [ 'f', 1, 0.25 ] ]
```

An `indicator` function is provided two arguments:

-   `value`: collection element.
-   `index`: collection index.

```javascript
function indicator( v, i ) {
    console.log( '%d: %s', i, v );
    return v[ 0 ];
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = tabulateBy( arr, indicator );
// returns [ [ 'b', 3, 0.75 ], [ 'f', 1, 0.25 ] ]
```

The function accepts the following `options`:

-   `thisArg`: execution context.

To set the `indicator` execution context, provide a `thisArg`.

```javascript
function indicator( v ) {
    this.count += 1;
    return v[ 0 ];
}
var context = {
    'count': 0
};
var opts = {
    'thisArg': context
};
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = tabulateBy( arr, opts, indicator );
// returns [ [ 'b', 3, 0.75 ], [ 'f', 1, 0.25 ] ]

console.log( context.count );
// => 4
```

The returned frequency table is an `array` of `arrays`. Each sub-array corresponds to a unique value in the input `collection` and is structured as follows:

-   `0`: unique value.
-   `1`: value count.
-   `2`: frequency percentage.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var tabulateBy = require( '@stdlib/utils/tabulate-by' );

var vals;
var arr;
var out;
var i;
var j;

function indicator( value ) {
    return value[ 0 ];
}

vals = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Generate a random collection...
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    j = floor( randu()*vals.length );
    arr[ i ] = vals[ j ];
}

// Generate a frequency table:
out = tabulateBy( arr, indicator );
console.log( out );
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

-   <span class="package-name">[`@stdlib/utils/count-by`][@stdlib/utils/count-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function and return group counts.</span>
-   <span class="package-name">[`@stdlib/utils/group-by`][@stdlib/utils/group-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function.</span>
-   <span class="package-name">[`@stdlib/utils/tabulate`][@stdlib/utils/tabulate]</span><span class="delimiter">: </span><span class="description">generate a frequency table.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/count-by]: https://github.com/stdlib-js/utils/tree/main/count-by

[@stdlib/utils/group-by]: https://github.com/stdlib-js/utils/tree/main/group-by

[@stdlib/utils/tabulate]: https://github.com/stdlib-js/utils/tree/main/tabulate

<!-- </related-links> -->

</section>

<!-- /.links -->
