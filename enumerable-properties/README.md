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

# enumerableProperties

> Return an array of an object's own enumerable property names and symbols.

<section class="usage">

## Usage

```javascript
var enumerableProperties = require( '@stdlib/utils/enumerable-properties' );
```

#### enumerableProperties( obj )

Returns an `array` of an object's own enumerable property names and symbols.

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var props = enumerableProperties( obj );
// e.g., returns [ 'a', 'b' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var enumerableProperties = require( '@stdlib/utils/enumerable-properties' );

var hasSymbols = hasSymbolSupport();
var props;
var obj;

function Foo() {
    this.a = 'a';
    defineProperty( this, 'b', {
        'configurable': true,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'a';
        defineProperty( this, Symbol( 'b' ), {
            'configurable': true,
            'enumerable': false,
            'writable': true,
            'value': 'b'
        });
    }
    return this;
}

Foo.prototype.c = 'c';
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'c';
}

obj = new Foo();
props = enumerableProperties( obj );

console.log( props );
// e.g., => [ 'a', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/enumerable-properties-in`][@stdlib/utils/enumerable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/enumerable-property-symbols`][@stdlib/utils/enumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-enumerable-properties`][@stdlib/utils/inherited-enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/keys`][@stdlib/utils/keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-properties`][@stdlib/utils/nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/properties`][@stdlib/utils/properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/enumerable-properties-in]: https://github.com/stdlib-js/utils/tree/main/enumerable-properties-in

[@stdlib/utils/enumerable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/enumerable-property-symbols

[@stdlib/utils/inherited-enumerable-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-enumerable-properties

[@stdlib/utils/keys]: https://github.com/stdlib-js/utils/tree/main/keys

[@stdlib/utils/nonenumerable-properties]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-properties

[@stdlib/utils/properties]: https://github.com/stdlib-js/utils/tree/main/properties

<!-- </related-links> -->

</section>

<!-- /.links -->
