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

# writablePropertySymbolsIn

> Return an array of an object's own and inherited writable symbol properties.

<section class="usage">

## Usage

```javascript
var writablePropertySymbolsIn = require( '@stdlib/utils/writable-property-symbols-in' );
```

#### writablePropertySymbolsIn( obj )

Returns an `array` of an object's own and inherited writable symbol properties.

```javascript
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {};

if ( hasSymbolSupport() ) {
    defineProperty( obj, Symbol( 'a' ), {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
}

var symbols = writablePropertySymbolsIn( obj );
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
var writablePropertySymbolsIn = require( '@stdlib/utils/writable-property-symbols-in' );

var hasSymbols = hasSymbolSupport();
var symbols;
var obj;

function Foo() {
    if ( hasSymbols ) {
        defineProperty( this, Symbol( 'baz' ), {
            'configurable': false,
            'enumerable': false,
            'writable': true,
            'value': 'qux'
        });
    }
    return this;
}

if ( hasSymbols ) {
    defineProperty( Foo.prototype, Symbol( 'bip' ), {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'bop'
    });
}

obj = new Foo();
symbols = writablePropertySymbolsIn( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/inherited-writable-property-symbols`][@stdlib/utils/inherited-writable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/writable-properties-in`][@stdlib/utils/writable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/writable-property-names-in`][@stdlib/utils/writable-property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable property names.</span>
-   <span class="package-name">[`@stdlib/utils/writable-property-symbols`][@stdlib/utils/writable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-symbols-in`][@stdlib/utils/property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/inherited-writable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/inherited-writable-property-symbols

[@stdlib/utils/writable-properties-in]: https://github.com/stdlib-js/utils/tree/main/writable-properties-in

[@stdlib/utils/writable-property-names-in]: https://github.com/stdlib-js/utils/tree/main/writable-property-names-in

[@stdlib/utils/writable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/writable-property-symbols

[@stdlib/utils/property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/property-symbols-in

<!-- </related-links> -->

</section>

<!-- /.links -->
