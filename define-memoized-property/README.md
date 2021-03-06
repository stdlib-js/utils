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

# Define Memoized Property

> [Define][mdn-define-property] a memoized object property.

<section class="usage">

## Usage

```javascript
var defineMemoizedProperty = require( '@stdlib/utils/define-memoized-property' );
```

#### defineMemoizedProperty( obj, prop, descriptor )

[Defines][mdn-define-property] a memoized object property.

```javascript
var obj = {};

function foo() {
    return 'bar';
}

defineMemoizedProperty( obj, 'foo', {
    'configurable': false,
    'enumerable': true,
    'writable': false,
    'value': foo
});

var v = obj.foo;
// returns 'bar'
```

A property `descriptor` has the following required properties:

-   **value**: synchronous function whose return value will be memoized and set as the property value.

A property `descriptor` has the following optional properties:

-   **configurable**: `boolean` indicating if property descriptor can be changed and if the property can be deleted from the provided object. Default: `false`.
-   **enumerable**: `boolean` indicating if the property shows up when enumerating object properties. Default: `false`.
-   **writable**: `boolean` indicating if the value associated with the property can be changed with an assignment operator. Default: `false`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Until deferred evaluation, an object property is **configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fibonacci = require( '@stdlib/math/base/special/fibonacci' );
var defineMemoizedProperty = require( '@stdlib/utils/define-memoized-property' );

function Foo() {
    var self;
    if ( !(this instanceof Foo) ) {
        return new Foo();
    }
    self = this;
    this.count = 0;
    defineMemoizedProperty( this, 'fibo', {
        'value': fibo
    });
    return this;

    function fibo() {
        self.count += 1;
        return fibonacci( 73 );
    }
}

var foo = new Foo();

var i;
for ( i = 0; i < 10; i++ ) {
    console.log( 'F: %d. Count: %d.', foo.fibo, foo.count );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/define-memoized-read-only-property`][@stdlib/utils/define-memoized-read-only-property]</span><span class="delimiter">: </span><span class="description">define a memoized read-only object property.</span>
-   <span class="package-name">[`@stdlib/utils/define-property`][@stdlib/utils/define-property]</span><span class="delimiter">: </span><span class="description">define (or modify) an object property.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

<!-- <related-links> -->

[@stdlib/utils/define-memoized-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-memoized-read-only-property

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

<!-- </related-links> -->

</section>

<!-- /.links -->
