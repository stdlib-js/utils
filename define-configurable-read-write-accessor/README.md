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

# Configurable Read-Write Accessor

> [Define][@stdlib/utils/define-property] a configurable **read-write** accessor.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var setConfigurableReadWriteAccessor = require( '@stdlib/utils/define-configurable-read-write-accessor' );
```

#### setConfigurableReadWriteAccessor( obj, prop, getter, setter )

[Defines][@stdlib/utils/define-property] a configurable **read-write** accessor.

<!-- eslint-disable id-length -->

```javascript
var word = 'bar';
var obj = {};

function getter() {
    return word + ' foo';
}

function setter( v ) {
    word = v;
}

setConfigurableReadWriteAccessor( obj, 'foo', getter, setter );

var v = obj.foo;
// returns 'bar foo'

obj.foo = 'beep';

v = obj.foo;
// returns 'beep foo'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Configurable read-write accessors are **enumerable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var setConfigurableReadWriteAccessor = require( '@stdlib/utils/define-configurable-read-write-accessor' );

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setConfigurableReadWriteAccessor( this, 'name', getName, setName );
    return this;

    function getName() {
        return 'Hello, ' + name;
    }

    function setName( v ) {
        name = v;
    }
}

var foo = new Foo( 'Grace' );
console.log( foo.name );

foo.name = 'Ada';
console.log( foo.name );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/define-configurable-read-only-property`][@stdlib/utils/define-configurable-read-only-property]</span><span class="delimiter">: </span><span class="description">define a configurable read-only property.</span>
-   <span class="package-name">[`@stdlib/utils/define-configurable-read-only-accessor`][@stdlib/utils/define-configurable-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a configurable read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-configurable-write-only-accessor`][@stdlib/utils/define-configurable-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a configurable write-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-property`][@stdlib/utils/define-property]</span><span class="delimiter">: </span><span class="description">define (or modify) an object property.</span>
-   <span class="package-name">[`@stdlib/utils/define-read-write-accessor`][@stdlib/utils/define-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a read-write accessor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

<!-- <related-links> -->

[@stdlib/utils/define-configurable-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-only-property

[@stdlib/utils/define-configurable-read-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-only-accessor

[@stdlib/utils/define-configurable-write-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-configurable-write-only-accessor

[@stdlib/utils/define-read-write-accessor]: https://github.com/stdlib-js/utils/tree/main/define-read-write-accessor

<!-- </related-links> -->

</section>

<!-- /.links -->
