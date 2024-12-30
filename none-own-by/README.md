<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# noneOwnBy

> Tests whether every own property of an object fails a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var noneOwnBy = require( '@stdlib/utils/none-own-by' );
```

#### noneOwnBy( object, predicate\[, thisArg ] )

Tests whether every `own` property of an object fails a test implemented by a `predicate` function.

```javascript
function isUnderage( age ) {
    return ( age < 18 );
}

var obj = {
    'a': 28,
    'b': 22,
    'c': 25
};

var bool = noneOwnBy( obj, isUnderage );
// returns true
```

If a `predicate` function returns a truthy value, the function **immediately** returns `false`.

```javascript
function isUnderage( age ) {
    return ( age < 18 );
}

var obj = {
    'a': 12,
    'b': 22,
    'c': 25
};

var bool = noneOwnBy( obj, isUnderage );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the 1st argument is not an object or the second argument is not a fuction , the function throws a Type Error.

-   If provided an empty object, the function returns `true`.

    ```javascript
    function truthy() {
        return true;
    }
    var bool = noneOwnBy( {}, truthy );
    // returns true
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var noneOwnBy = require( '@stdlib/utils/none-own-by' );

function isUnderage( age ) {
    return age < 18;
}

var obj = {
    'a': 26,
    'b': 20,
    'c': 25
};

var bool = noneOwnBy( obj, isUnderage );
// returns true
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

-   <span class="package-name">[`@stdlib/utils/any-own-by`][@stdlib/utils/any-own-by]</span><span class="delimiter">: </span><span class="description">test whether whether any 'own' property of a provided object satisfies a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/every-own-by`][@stdlib/utils/every-own-by]</span><span class="delimiter">: </span><span class="description">test whether all own properties of an object pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/for-own`][@stdlib/utils/for-own]</span><span class="delimiter">: </span><span class="description">invoke a function for each own enumerable property of an object.</span>
-   <span class="package-name">[`@stdlib/utils/none-by`][@stdlib/utils/none-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection fail a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/some-own-by`][@stdlib/utils/some-own-by]</span><span class="delimiter">: </span><span class="description">test whether some `own` properties of a provided object satisfy a predicate function for at least `n` properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/any-own-by]: https://github.com/stdlib-js/utils/tree/main/any-own-by

[@stdlib/utils/every-own-by]: https://github.com/stdlib-js/utils/tree/main/every-own-by

[@stdlib/utils/for-own]: https://github.com/stdlib-js/utils/tree/main/for-own

[@stdlib/utils/none-by]: https://github.com/stdlib-js/utils/tree/main/none-by

[@stdlib/utils/some-own-by]: https://github.com/stdlib-js/utils/tree/main/some-own-by

<!-- </related-links> -->

</section>

<!-- /.links -->
