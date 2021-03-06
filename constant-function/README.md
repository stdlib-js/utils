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

# Constant Function

> Constant function.

<section class="intro">

A [constant function][constant-function] is a `function` whose output value is the same for every input value.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var constantFunction = require( '@stdlib/utils/constant-function' );
```

#### constantFunction( x )

Returns a [constant function][constant-function] which always returns `x`.

```javascript
var fcn = constantFunction( 'beep' );
// returns <Function>

var v = fcn();
// returns 'beep'

v = fcn();
// returns 'beep'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When provided an object reference, the returned `function` always returns the same reference.

    ```javascript
    var obj = {};
    var fcn = constantFunction( obj );

    var bool = ( fcn() === obj );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var constantFunction = require( '@stdlib/utils/constant-function' );

var bool;
var fcn;
var arr;
var v;
var i;

fcn = constantFunction( 3.14 );
for ( i = 0; i < 10; i++ ) {
    v = fcn();
    // returns 3.14
}

arr = [ 1, 2, 3 ];
fcn = constantFunction( arr );
for ( i = 0; i < 10; i++ ) {
    v = fcn();
    bool = ( v === arr );
    // returns true
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/argument-function`][@stdlib/utils/argument-function]</span><span class="delimiter">: </span><span class="description">argument function.</span>
-   <span class="package-name">[`@stdlib/utils/identity-function`][@stdlib/utils/identity-function]</span><span class="delimiter">: </span><span class="description">identity function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[constant-function]: https://en.wikipedia.org/wiki/Constant_function

<!-- <related-links> -->

[@stdlib/utils/argument-function]: https://github.com/stdlib-js/utils/tree/main/argument-function

[@stdlib/utils/identity-function]: https://github.com/stdlib-js/utils/tree/main/identity-function

<!-- </related-links> -->

</section>

<!-- /.links -->
