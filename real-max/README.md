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

# realmax

> Return the maximum finite value capable of being represented by a numeric real type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var realmax = require( '@stdlib/utils/real-max' );
```

#### realmax( dtype )

Returns the maximum **finite** value capable of being represented by a numeric **real** type.

```javascript
var m = realmax( 'float64' );
// returns 1.7976931348623157e+308
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
var realmax = require( '@stdlib/utils/real-max' );

var m = realmax( 'float64' );
// returns 1.7976931348623157e+308

m = realmax( 'float32' );
// returns 3.4028234663852886e+38

m = realmax( 'float16' );
// returns 65504.0
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
Usage: realmax [options] <dtype>

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
$ realmax float16
65504.0
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

-   <span class="package-name">[`@stdlib/utils/real-min`][@stdlib/utils/real-min]</span><span class="delimiter">: </span><span class="description">return the smallest positive normal value capable of being represented by a numeric real type.</span>
-   <span class="package-name">[`@stdlib/utils/type-max`][@stdlib/utils/type-max]</span><span class="delimiter">: </span><span class="description">return the maximum value of a specified numeric type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/real-min]: https://github.com/stdlib-js/utils/tree/main/real-min

[@stdlib/utils/type-max]: https://github.com/stdlib-js/utils/tree/main/type-max

<!-- </related-links> -->

</section>

<!-- /.links -->
