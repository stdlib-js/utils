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

# Configurable Write-Only Accessor

> [Define][@stdlib/utils/define-property] a configurable **write-only** accessor.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var setConfigurableWriteOnlyAccessor = require( '@stdlib/utils/define-configurable-write-only-accessor' );
```

#### setConfigurableWriteOnlyAccessor( obj, prop, setter )

[Defines][@stdlib/utils/define-property] a configurable **write-only** accessor.

<!-- eslint-disable id-length -->

```javascript
var obj = {};
var val = '';

function setter( v ) {
    val = v;
}

setConfigurableWriteOnlyAccessor( obj, 'foo', setter );

obj.foo = 'boop';

var bool = ( val === 'boop' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Configurable write-only accessors are **enumerable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var setConfigurableWriteOnlyAccessor = require( '@stdlib/utils/define-configurable-write-only-accessor' );

function Foo( secret ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( secret );
    }
    setConfigurableWriteOnlyAccessor( this, 'secret', setter );
    return this;

    function setter( v ) {
        secret = v;
    }
}

var foo = new Foo( 'beep' );

foo.secret = 'boop';
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/define-configurable-read-only-property`][@stdlib/utils/define-configurable-read-only-property]</span><span class="delimiter">: </span><span class="description">define a configurable read-only property.</span>
-   <span class="package-name">[`@stdlib/utils/define-configurable-read-only-accessor`][@stdlib/utils/define-configurable-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a configurable read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-configurable-read-write-accessor`][@stdlib/utils/define-configurable-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a configurable read-write accessor.</span>
-   <span class="package-name">[`@stdlib/utils/define-property`][@stdlib/utils/define-property]</span><span class="delimiter">: </span><span class="description">define (or modify) an object property.</span>
-   <span class="package-name">[`@stdlib/utils/define-write-only-accessor`][@stdlib/utils/define-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a write-only accessor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/define-configurable-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-only-property

[@stdlib/utils/define-configurable-read-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-only-accessor

[@stdlib/utils/define-configurable-read-write-accessor]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-write-accessor

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

[@stdlib/utils/define-write-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-write-only-accessor

<!-- </related-links> -->

</section>

<!-- /.links -->
