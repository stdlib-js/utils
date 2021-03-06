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

# omitBy

> Return a partial object copy excluding properties for which a predicate (function) returns a truthy value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var omitBy = require( '@stdlib/utils/omit-by' );
```

#### omitBy( obj, predicate )

Returns a partial object copy excluding properties for which a `predicate` returns a truthy value.

```javascript
function predicate( key, value ) {
    return ( value > 1 );
}

var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
};

var obj2 = omitBy( obj1, predicate );
// returns { 'a': 1 }
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns a **shallow** copy.
-   The function **only** copies **own** properties. Hence, the function never copies inherited properties.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var omitBy = require( '@stdlib/utils/omit-by' );

function predicate( key, value ) {
    return ( typeof value === 'number' );
}

var obj1 = {
    'a': '1',
    'b': 2,
    'c': NaN,
    'd': null
};

var obj2 = omitBy( obj1, predicate );
// returns { 'a': '1', 'd': null }
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

-   <span class="package-name">[`@stdlib/utils/omit`][@stdlib/utils/omit]</span><span class="delimiter">: </span><span class="description">return a partial object copy excluding specified keys.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/omit]: https://github.com/stdlib-js/utils/tree/main/omit

<!-- </related-links> -->

</section>

<!-- /.links -->
