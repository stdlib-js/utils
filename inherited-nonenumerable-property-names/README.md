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

# inheritedNonEnumerablePropertyNames

> Return an array of an object's inherited non-enumerable property names.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedNonEnumerablePropertyNames = require( '@stdlib/utils/inherited-nonenumerable-property-names' );
```

#### inheritedNonEnumerablePropertyNames( obj\[, level] )

Returns an `array` of an object's inherited non-enumerable property names.

<!-- eslint-disable id-length -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

function Foo() {
    this.a = 'b';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

var f = new Foo();
var keys = inheritedNonEnumerablePropertyNames( f );
// e.g., returns [ 'beep', ... ]
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

<!-- eslint-disable id-length -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var inherit = require( '@stdlib/utils/inherit' );

function Bar() {
    return this;
}

defineProperty( Bar.prototype, 'boop', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'beep'
});

function Foo() {
    Bar.call( this );
    this.a = 'b';
    return this;
}

inherit( Foo, Bar );

defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

var f = new Foo();
var keys = inheritedNonEnumerablePropertyNames( f, 1 );
// e.g., returns [ 'beep', ... ]
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

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var inheritedNonEnumerablePropertyNames = require( '@stdlib/utils/inherited-nonenumerable-property-names' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'qux'
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bop'
});

var obj = new Foo();
var keys = inheritedNonEnumerablePropertyNames( obj );

console.log( keys );
// e.g., => [ 'bip', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/inherited-nonenumerable-properties`][@stdlib/utils/inherited-nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-nonenumerable-property-symbols`][@stdlib/utils/inherited-nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/keys`][@stdlib/utils/keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-property-names`][@stdlib/utils/nonenumerable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-property-names-in`][@stdlib/utils/nonenumerable-property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-property-symbols`][@stdlib/utils/nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-names`][@stdlib/utils/property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/inherited-nonenumerable-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-nonenumerable-properties

[@stdlib/utils/inherited-nonenumerable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/inherited-nonenumerable-property-symbols

[@stdlib/utils/keys]: https://github.com/stdlib-js/utils/tree/main/keys

[@stdlib/utils/nonenumerable-property-names]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-names

[@stdlib/utils/nonenumerable-property-names-in]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-names-in

[@stdlib/utils/nonenumerable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-symbols

[@stdlib/utils/property-names]: https://github.com/stdlib-js/utils/tree/main/property-names

<!-- </related-links> -->

</section>

<!-- /.links -->
