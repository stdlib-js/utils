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

# Memoized Read-Only

> [Define][mdn-define-property] a memoized **read-only** object property.

<section class="usage">

## Usage

```javascript
var setMemoizedReadOnly = require( '@stdlib/utils/define-memoized-read-only-property' );
```

#### setMemoizedReadOnly( obj, prop, fcn )

[Defines][mdn-define-property] a memoized **read-only** object property.

```javascript
var obj = {};

function foo() {
    return 'bar';
}

setMemoizedReadOnly( obj, 'foo', foo );

var v = obj.foo;
// returns 'bar'
```

The last argument should be a synchronous function whose return value will be memoized and set as the property value.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A **read-only** property is **enumerable** and **non-configurable**; however, until deferred evaluation, an object property is **configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fibonacci = require( '@stdlib/math/base/special/fibonacci' );
var setMemoizedReadOnly = require( '@stdlib/utils/define-memoized-read-only-property' );

function Foo() {
    var self;
    if ( !(this instanceof Foo) ) {
        return new Foo();
    }
    self = this;
    this.count = 0;
    setMemoizedReadOnly( this, 'fibo', fibo );
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

-   <span class="package-name">[`@stdlib/utils/define-memoized-property`][@stdlib/utils/define-memoized-property]</span><span class="delimiter">: </span><span class="description">define a memoized object property.</span>
-   <span class="package-name">[`@stdlib/utils/define-read-only-property`][@stdlib/utils/define-read-only-property]</span><span class="delimiter">: </span><span class="description">define a read-only property.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

<!-- <related-links> -->

[@stdlib/utils/define-memoized-property]: https://github.com/stdlib-js/utils/tree/main/define-memoized-property

[@stdlib/utils/define-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-read-only-property

<!-- </related-links> -->

</section>

<!-- /.links -->
