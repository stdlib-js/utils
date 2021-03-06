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

# Zip

> Generate array tuples from input arrays.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var zip = require( '@stdlib/utils/zip' );
```

#### zip( arr1, arr2,...\[, opts] )

Returns an `array` of `arrays`, where the ith element (tuple) in the returned `array` contains the ith elements of the input `arrays`.

```javascript
var zipped = zip( [ 1, 2 ], [ 'a', 'b' ] );
// returns [ [ 1, 'a' ], [ 2, 'b' ] ]
```

By default, the returned `array` length is the length of the shortest input `array`.

```javascript
var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ] );
// returns [ [ 1, 'a' ], [ 2, 'b' ] ]
```

The function accepts an `options` object with optional properties:

-   **trunc**: `boolean` specifying whether the returned `array` should truncate `arrays` longer than the shortest `array`. Default: `true`.
-   **fill**: fill value used for unequal length `arrays`. Default: `null`.
-   **arrays**: `boolean` specifying whether, when provided a single input `array`, the function should interpret the argument as a list of `arrays` to be zipped (i.e., behavior similar to `zip.apply(null, arr)`). Default: `false`.

To turn off truncation,

```javascript
var opts = {
    'trunc': false
};

var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
// returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, null ] ]
```

A fill value is included in each tuple for each `array` which does not have an element at the ith index. By default, the fill value is `null`. To specify a different fill value, set the `fill` option.

```javascript
var opts = {
    'trunc': false,
    'fill': ''
};

var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
// returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, '' ] ]
```

If the function should interpret a single input `array` as an `array` of `arrays` to be zipped,

<!-- eslint-disable object-curly-newline -->

```javascript
var arr = [ [ 1, 2 ], [ 'a', 'b' ] ];

// Default behavior:
var zipped = zip( arr );
// returns [ [ [ 1, 2 ] ], [ [ 'a', 'b' ] ] ]

// Array of arrays:
zipped = zip( arr, { 'arrays': true } );
// returns [ [ 1, 'a' ], [ 2, 'b' ] ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var zip = require( '@stdlib/utils/zip' );

var x = [];
var y1 = [];
var y2 = [];
var y3 = [];

// Simulate some data...
var i;
for ( i = 0; i < 100; i++ ) {
    x.push( Date.now() );
    y1.push( randu() * 100 );
    y2.push( randu() * 100 );
    y3.push( randu() );
}

var zipped = zip( x, y1, y2, y3 );

console.log( zipped.join( '\n' ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/unzip`][@stdlib/utils/unzip]</span><span class="delimiter">: </span><span class="description">unzip a zipped array (i.e., a nested array of tuples).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/unzip]: https://github.com/stdlib-js/utils/tree/main/unzip

<!-- </related-links> -->

</section>

<!-- /.links -->
