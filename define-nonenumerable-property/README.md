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

# Non-Enumerable Property

> [Define][@stdlib/utils/define-property] a **non-enumerable** property.

<section class="usage">

## Usage

```javascript
var setNonEnumerableProperty = require( '@stdlib/utils/define-nonenumerable-property' );
```

#### setNonEnumerableProperty( obj, prop, value )

[Defines][@stdlib/utils/define-property] a **non-enumerable** property.

```javascript
var obj = {};

setNonEnumerableProperty( obj, 'foo', 'bar' );

var v = obj.foo;
// returns 'bar'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Non-enumerable properties are **writable** and **configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var setNonEnumerableProperty = require( '@stdlib/utils/define-nonenumerable-property' );

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setNonEnumerableProperty( this, 'name', name );
    return this;
}

var foo = new Foo( 'beep' );

var v = foo.name;
// returns 'beep'

var keys = objectKeys( foo );
// returns []
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/define-nonenumerable-read-only-accessor`][@stdlib/utils/define-nonenumerable-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-nonenumerable-read-only-property`][@stdlib/utils/define-nonenumerable-read-only-property]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-only property.</span>
-   <span class="package-name">[`@stdlib/utils/define-nonenumerable-read-write-accessor`][@stdlib/utils/define-nonenumerable-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-write accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-nonenumerable-write-only-accessor`][@stdlib/utils/define-nonenumerable-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable write-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-read-only-property`][@stdlib/utils/define-read-only-property]</span><span class="delimiter">: </span><span class="description">define a read-only property.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

<!-- <related-links> -->

[@stdlib/utils/define-nonenumerable-read-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-nonenumerable-read-only-accessor

[@stdlib/utils/define-nonenumerable-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-nonenumerable-read-only-property

[@stdlib/utils/define-nonenumerable-read-write-accessor]: https://github.com/stdlib-js/utils/tree/main/define-nonenumerable-read-write-accessor

[@stdlib/utils/define-nonenumerable-write-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-nonenumerable-write-only-accessor

[@stdlib/utils/define-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-read-only-property

<!-- </related-links> -->

</section>

<!-- /.links -->
