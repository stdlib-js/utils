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

# Object Keys

> Return an array of an object's own enumerable property names.

<section class="usage">

## Usage

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
```

#### objectKeys( obj )

Returns an `array` of an object's own enumerable property names.

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var keys = objectKeys( obj );
// e.g., returns [ 'a', 'b' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Name order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic extraction.
-   In contrast to the built-in `Object.keys()`, if provided `null` or `undefined`, the function returns an empty `array`, rather than throwing an error.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var keys = objectKeys( obj );

console.log( keys );
// e.g., => [ 'beep', 'a' ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/entries`][@stdlib/utils/entries]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property key-value pairs.</span>
-   <span class="package-name">[`@stdlib/utils/keys-in`][@stdlib/utils/keys-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonindex-keys`][@stdlib/utils/nonindex-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names which are not integer indices.</span>
-   <span class="package-name">[`@stdlib/utils/values`][@stdlib/utils/values]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/entries]: https://github.com/stdlib-js/utils/tree/main/entries

[@stdlib/utils/keys-in]: https://github.com/stdlib-js/utils/tree/main/keys-in

[@stdlib/utils/nonindex-keys]: https://github.com/stdlib-js/utils/tree/main/nonindex-keys

[@stdlib/utils/values]: https://github.com/stdlib-js/utils/tree/main/values

<!-- </related-links> -->

</section>

<!-- /.links -->
