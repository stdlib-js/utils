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

# every

> Test whether all elements in a collection are truthy.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var every = require( '@stdlib/utils/every' );
```

#### every( collection )

Tests whether all elements in a `collection` are truthy.

```javascript
var arr = [ 1, 1, 1, 1, 1 ];

var bool = every( arr );
// returns true
```

If provided an empty `collection`, the function returns `true`.

```javascript
var bool = every( [] );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   The function does **not** skip `undefined` elements and is thus not optimized for sparse collections.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var every = require( '@stdlib/utils/every' );

var bool;
var arr;
var i;

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = ( randu() < 0.95 );
}

bool = every( arr );
// returns <boolean>
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

-   <span class="package-name">[`@stdlib/utils/any`][@stdlib/utils/any]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection is truthy.</span>
-   <span class="package-name">[`@stdlib/utils/every-by`][@stdlib/utils/every-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/for-each`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils/none`][@stdlib/utils/none]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection are falsy.</span>
-   <span class="package-name">[`@stdlib/utils/some`][@stdlib/utils/some]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which are truthy.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/any]: https://github.com/stdlib-js/utils/tree/main/any

[@stdlib/utils/every-by]: https://github.com/stdlib-js/utils/tree/main/every-by

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils/tree/main/for-each

[@stdlib/utils/none]: https://github.com/stdlib-js/utils/tree/main/none

[@stdlib/utils/some]: https://github.com/stdlib-js/utils/tree/main/some

<!-- </related-links> -->

</section>

<!-- /.links -->
