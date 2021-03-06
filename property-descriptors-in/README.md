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

# propertyDescriptorsIn

> Return an object's own and inherited [property descriptors][@stdlib/utils/property-descriptors].

<section class="usage">

## Usage

```javascript
var propertyDescriptorsIn = require( '@stdlib/utils/property-descriptors-in' );
```

#### propertyDescriptorsIn( obj )

Returns an object's own and inherited [property descriptors][@stdlib/utils/property-descriptors].

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var desc = propertyDescriptorsIn( obj );
// returns { 'a': {...}, 'b': {...}, ... }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the built-in `Object.getOwnPropertyDescriptors()`, if provided `null` or `undefined`, the function returns an empty `object`, rather than throwing an error.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var propertyDescriptorsIn = require( '@stdlib/utils/property-descriptors-in' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'value': 'qux',
        'configurable': true,
        'writable': true,
        'enumerable': false
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var desc = propertyDescriptorsIn( obj );

console.log( desc );
// => { 'beep': {...}, 'a': {...}, 'baz': {...}, 'foo': {...}, ... }
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/define-properties`][@stdlib/utils/define-properties]</span><span class="delimiter">: </span><span class="description">define (and/or modify) object properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-descriptor-in`][@stdlib/utils/property-descriptor-in]</span><span class="delimiter">: </span><span class="description">return a property descriptor for an object's own or inherited property.</span>
-   <span class="package-name">[`@stdlib/utils/property-descriptors`][@stdlib/utils/property-descriptors]</span><span class="delimiter">: </span><span class="description">return an object's own property descriptors.</span>
-   <span class="package-name">[`@stdlib/utils/property-names-in`][@stdlib/utils/property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/property-symbols-in`][@stdlib/utils/property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/define-properties]: https://github.com/stdlib-js/utils/tree/main/define-properties

[@stdlib/utils/property-descriptor-in]: https://github.com/stdlib-js/utils/tree/main/property-descriptor-in

[@stdlib/utils/property-descriptors]: https://github.com/stdlib-js/utils/tree/main/property-descriptors

[@stdlib/utils/property-names-in]: https://github.com/stdlib-js/utils/tree/main/property-names-in

[@stdlib/utils/property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/property-symbols-in

<!-- </related-links> -->

</section>

<!-- /.links -->
