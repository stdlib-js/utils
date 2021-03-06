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

# propertyDescriptors

> Return an object's own [property descriptors][@stdlib/utils/property-descriptor].

<section class="usage">

## Usage

```javascript
var propertyDescriptors = require( '@stdlib/utils/property-descriptors' );
```

#### propertyDescriptors( obj )

Returns an object's own [property descriptors][@stdlib/utils/property-descriptor].

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var desc = propertyDescriptors( obj );
// returns { 'a': {...}, 'b': {...} }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function differs from the built-in `Object.getOwnPropertyDescriptors()` as follows:

    -   If provided `null` or `undefined`, the function returns an empty `object`, rather than throwing an error.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var propertyDescriptors = require( '@stdlib/utils/property-descriptors' );

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
var desc = propertyDescriptors( obj );

console.log( desc );
// => { 'beep': {...}, 'a': {...}, 'baz': {...} }
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/define-property`][@stdlib/utils/define-property]</span><span class="delimiter">: </span><span class="description">define (or modify) an object property.</span>
-   <span class="package-name">[`@stdlib/utils/define-properties`][@stdlib/utils/define-properties]</span><span class="delimiter">: </span><span class="description">define (and/or modify) object properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-descriptor`][@stdlib/utils/property-descriptor]</span><span class="delimiter">: </span><span class="description">return a property descriptor for an object's own property.</span>
-   <span class="package-name">[`@stdlib/utils/property-descriptors-in`][@stdlib/utils/property-descriptors-in]</span><span class="delimiter">: </span><span class="description">return an object's own and inherited property descriptors.</span>
-   <span class="package-name">[`@stdlib/utils/property-names`][@stdlib/utils/property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/property-symbols`][@stdlib/utils/property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

[@stdlib/utils/define-properties]: https://github.com/stdlib-js/utils/tree/main/define-properties

[@stdlib/utils/property-descriptor]: https://github.com/stdlib-js/utils/tree/main/property-descriptor

[@stdlib/utils/property-descriptors-in]: https://github.com/stdlib-js/utils/tree/main/property-descriptors-in

[@stdlib/utils/property-names]: https://github.com/stdlib-js/utils/tree/main/property-names

[@stdlib/utils/property-symbols]: https://github.com/stdlib-js/utils/tree/main/property-symbols

<!-- </related-links> -->

</section>

<!-- /.links -->
