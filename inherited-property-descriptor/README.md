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

# inheritedPropertyDescriptor

> Return a property descriptor for an object's inherited property.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedPropertyDescriptor = require( '@stdlib/utils/inherited-property-descriptor' );
```

#### inheritedPropertyDescriptor( obj, property\[, level] )

Returns a property descriptor for an object's inherited property.

<!-- eslint-disable id-length -->

```javascript
function Foo() {
    return this;
}

Foo.prototype.bar = 'foo';

var obj = new Foo();

var desc = inheritedPropertyDescriptor( obj, 'bar' );
// returns {'configurable':true,'enumerable':true,'writable':true,'value':'foo'}
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

<!-- eslint-disable id-length -->

```javascript
var inherit = require( '@stdlib/utils/inherit' );

function Bar() {
    return this;
}

Bar.prototype.beep = 'boop';

function Foo() {
    Bar.call( this );
    return this;
}

inherit( Foo, Bar );

var f = new Foo();
var desc = inheritedPropertyDescriptor( f, 'beep', 1 );
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function differs from the built-in `Object.getOwnPropertyDescriptor()` as follows:

    -   If provided `null` or `undefined`, the function returns `null`, rather than throwing an error.
    -   If an object does not have a provided inherited property, the function returns `null`, rather than `undefined`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var inheritedPropertyDescriptor = require( '@stdlib/utils/inherited-property-descriptor' );

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
var desc = inheritedPropertyDescriptor( obj, 'foo' );

console.log( desc );
// => {'configurable':true,'enumerable':true,'writable':true,'value':['bar']}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/property-descriptor`][@stdlib/utils/property-descriptor]</span><span class="delimiter">: </span><span class="description">return a property descriptor for an object's own property.</span>
-   <span class="package-name">[`@stdlib/utils/property-descriptor-in`][@stdlib/utils/property-descriptor-in]</span><span class="delimiter">: </span><span class="description">return a property descriptor for an object's own or inherited property.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-keys`][@stdlib/utils/inherited-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-descriptors`][@stdlib/utils/inherited-property-descriptors]</span><span class="delimiter">: </span><span class="description">return an object's inherited property descriptors.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-names`][@stdlib/utils/inherited-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-symbols`][@stdlib/utils/inherited-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/property-descriptor]: https://github.com/stdlib-js/utils/tree/main/property-descriptor

[@stdlib/utils/property-descriptor-in]: https://github.com/stdlib-js/utils/tree/main/property-descriptor-in

[@stdlib/utils/inherited-keys]: https://github.com/stdlib-js/utils/tree/main/inherited-keys

[@stdlib/utils/inherited-property-descriptors]: https://github.com/stdlib-js/utils/tree/main/inherited-property-descriptors

[@stdlib/utils/inherited-property-names]: https://github.com/stdlib-js/utils/tree/main/inherited-property-names

[@stdlib/utils/inherited-property-symbols]: https://github.com/stdlib-js/utils/tree/main/inherited-property-symbols

<!-- </related-links> -->

</section>

<!-- /.links -->
