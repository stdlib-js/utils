<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# Configurable Read-Only

> [Define][@stdlib/utils/define-property] a configurable **read-only** property.

<section class="usage">

## Usage

```javascript
var setConfigurableReadOnly = require( '@stdlib/utils/define-configurable-read-only-property' );
```

#### setConfigurableReadOnly( obj, prop, value )

[Defines][@stdlib/utils/define-property] a configurable **read-only** property.

<!-- run throws: true -->

```javascript
var obj = {};

setConfigurableReadOnly( obj, 'foo', 'bar' );

obj.foo = 'boop';
// throws <Error>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Configurable read-only properties are **enumerable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var setConfigurableReadOnly = require( '@stdlib/utils/define-configurable-read-only-property' );

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setConfigurableReadOnly( this, 'name', name );
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

-   <span class="package-name">[`@stdlib/utils/define-configurable-read-only-accessor`][@stdlib/utils/define-configurable-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a configurable read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-configurable-read-write-accessor`][@stdlib/utils/define-configurable-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a configurable read-write accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-property`][@stdlib/utils/define-property]</span><span class="delimiter">: </span><span class="description">define (or modify) an object property.</span>
-   <span class="package-name">[`@stdlib/utils/define-read-only-property`][@stdlib/utils/define-read-only-property]</span><span class="delimiter">: </span><span class="description">define a read-only property.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/define-configurable-read-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-only-accessor

[@stdlib/utils/define-configurable-read-write-accessor]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-write-accessor

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

[@stdlib/utils/define-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-read-only-property

<!-- </related-links> -->

</section>

<!-- /.links -->
