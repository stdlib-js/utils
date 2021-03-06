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

# Read-Write Accessor

> [Define][@stdlib/utils/define-property] a **read-write** accessor.

<section class="usage">

## Usage

```javascript
var setReadWriteAccessor = require( '@stdlib/utils/define-read-write-accessor' );
```

#### setReadWriteAccessor( obj, prop, getter, setter )

[Defines][@stdlib/utils/define-property] a **read-write** accessor.

```javascript
var word = 'bar';
var obj = {};

function getter() {
    return word + ' foo';
}

function setter( v ) {
    word = v;
}

setReadWriteAccessor( obj, 'foo', getter, setter );

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

-   Read-write accessors are **enumerable** and **non-configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var setReadWriteAccessor = require( '@stdlib/utils/define-read-write-accessor' );

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setReadWriteAccessor( this, 'name', getName, setName );
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

-   <span class="package-name">[`@stdlib/utils/define-read-only-property`][@stdlib/utils/define-read-only-property]</span><span class="delimiter">: </span><span class="description">define a read-only property.</span>
-   <span class="package-name">[`@stdlib/utils/define-read-only-accessor`][@stdlib/utils/define-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-write-only-accessor`][@stdlib/utils/define-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a write-only accessor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

<!-- <related-links> -->

[@stdlib/utils/define-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-read-only-property

[@stdlib/utils/define-read-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-read-only-accessor

[@stdlib/utils/define-write-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-write-only-accessor

<!-- </related-links> -->

</section>

<!-- /.links -->
