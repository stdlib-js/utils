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

# writablePropertyNamesIn

> Return an array of an object's own and inherited writable property names.

<section class="usage">

## Usage

```javascript
var writablePropertyNamesIn = require( '@stdlib/utils/writable-property-names-in' );
```

#### writablePropertyNamesIn( obj )

Returns an `array` of an object's own and inherited writable property names.

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'a': 'b'
};

defineProperty( obj, 'c', {
    'configurable': true,
    'enumerable': true,
    'writable': false,
    'value': 'd'
});

var keys = writablePropertyNamesIn( obj );
// e.g., returns [ 'a', ... ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Name order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var writablePropertyNamesIn = require( '@stdlib/utils/writable-property-names-in' );

function Foo() {
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': true,
        'enumerable': true,
        'writable': false,
        'value': 'qux'
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];
defineProperty( Foo.prototype, 'bip', {
    'configurable': true,
    'enumerable': true,
    'writable': false,
    'value': 'bop'
});

var obj = new Foo();
var keys = writablePropertyNamesIn( obj );

console.log( keys );
// e.g., => [ 'a', 'foo', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/inherited-writable-property-names`][@stdlib/utils/inherited-writable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable property names.</span>
-   <span class="package-name">[`@stdlib/utils/writable-properties-in`][@stdlib/utils/writable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/writable-property-names`][@stdlib/utils/writable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable property names.</span>
-   <span class="package-name">[`@stdlib/utils/writable-property-symbols-in`][@stdlib/utils/writable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-names-in`][@stdlib/utils/property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable and non-enumerable property names.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/inherited-writable-property-names]: https://github.com/stdlib-js/utils/tree/main/inherited-writable-property-names

[@stdlib/utils/writable-properties-in]: https://github.com/stdlib-js/utils/tree/main/writable-properties-in

[@stdlib/utils/writable-property-names]: https://github.com/stdlib-js/utils/tree/main/writable-property-names

[@stdlib/utils/writable-property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/writable-property-symbols-in

[@stdlib/utils/property-names-in]: https://github.com/stdlib-js/utils/tree/main/property-names-in

<!-- </related-links> -->

</section>

<!-- /.links -->
