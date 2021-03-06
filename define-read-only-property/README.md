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

# Read-Only

> [Define][@stdlib/utils/define-property] a **read-only** property.

<section class="usage">

## Usage

```javascript
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
```

#### setReadOnly( obj, prop, value )

[Defines][@stdlib/utils/define-property] a **read-only** property.

<!-- run throws: true -->

```javascript
var obj = {};

setReadOnly( obj, 'foo', 'bar' );

obj.foo = 'boop';
// throws <Error>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Read-only properties are **enumerable** and **non-configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setReadOnly( this, 'name', name );
    return this;
}

var foo = new Foo( 'beep' );

try {
    foo.name = 'boop';
} catch ( err ) {
    console.error( err.message );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/define-read-only-accessor`][@stdlib/utils/define-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-read-write-accessor`][@stdlib/utils/define-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a read-write accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-write-only-accessor`][@stdlib/utils/define-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a write-only accessor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

<!-- <related-links> -->

[@stdlib/utils/define-read-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-read-only-accessor

[@stdlib/utils/define-read-write-accessor]: https://github.com/stdlib-js/utils/tree/main/define-read-write-accessor

[@stdlib/utils/define-write-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-write-only-accessor

<!-- </related-links> -->

</section>

<!-- /.links -->
