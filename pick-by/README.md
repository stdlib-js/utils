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

# pickBy

> Return a partial object copy containing properties for which a predicate (function) returns a truthy value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var pickBy = require( '@stdlib/utils/pick-by' );
```

#### pickBy( obj, predicate )

Returns a partial object copy containing properties for which a `predicate` returns a truthy value.

```javascript
function predicate( key, value ) {
    return ( value > 1 );
}

var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
};

var obj2 = pickBy( obj1, predicate );
// returns { 'b': 2, 'c': 3 }
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
var pickBy = require( '@stdlib/utils/pick-by' );

function predicate( key, value ) {
    return ( typeof value === 'number' );
}

var obj1 = {
    'a': '1',
    'b': 2,
    'c': NaN,
    'd': null
};

var obj2 = pickBy( obj1, predicate );
// returns { 'b': 2, 'c': NaN }
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

-   <span class="package-name">[`@stdlib/utils/pick`][@stdlib/utils/pick]</span><span class="delimiter">: </span><span class="description">return a partial object copy containing only specified keys.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/pick]: https://github.com/stdlib-js/utils/tree/main/pick

<!-- </related-links> -->

</section>

<!-- /.links -->
