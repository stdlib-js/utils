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

# safeintmin

> Return the minimum safe integer capable of being represented by a numeric real type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var safeintmin = require( '@stdlib/utils/safe-int-min' );
```

#### safeintmin( dtype )

Returns the minimum **safe** integer capable of being represented by a numeric **real** type.

```javascript
var m = safeintmin( 'float64' );
// returns -9007199254740991
```

The following numeric **real** types are supported:

-   `float64`: double-precision floating-point numbers
-   `float32`: single-precision floating-point numbers
-   `float16`: half-precision floating-point numbers

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var safeintmin = require( '@stdlib/utils/safe-int-min' );

var m = safeintmin( 'float64' );
// returns -9007199254740991

m = safeintmin( 'float32' );
// returns -16777215

m = safeintmin( 'float16' );
// returns -2047
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: safeintmin [options] <dtype>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ safeintmin float16
-2047
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/safe-int-max`][@stdlib/utils/safe-int-max]</span><span class="delimiter">: </span><span class="description">return the maximum safe integer capable of being represented by a numeric real type.</span>
-   <span class="package-name">[`@stdlib/utils/real-min`][@stdlib/utils/real-min]</span><span class="delimiter">: </span><span class="description">return the smallest positive normal value capable of being represented by a numeric real type.</span>
-   <span class="package-name">[`@stdlib/utils/type-min`][@stdlib/utils/type-min]</span><span class="delimiter">: </span><span class="description">return the minimum value of a specified numeric type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/safe-int-max]: https://github.com/stdlib-js/utils/tree/main/safe-int-max

[@stdlib/utils/real-min]: https://github.com/stdlib-js/utils/tree/main/real-min

[@stdlib/utils/type-min]: https://github.com/stdlib-js/utils/tree/main/type-min

<!-- </related-links> -->

</section>

<!-- /.links -->
