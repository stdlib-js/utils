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

# bifurcateIn

> Split an object's **own** and **inherited** property values into two groups according to a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var bifurcateIn = require( '@stdlib/utils/bifurcate-in' );
```

#### bifurcateIn( obj, \[options,] predicate )

Splits an object's **own** and **inherited** property values into two groups according to a `predicate` function, which specifies which group a value in the input `object` belongs to. If a `predicate` function returns a truthy value, a value belongs to the first group; otherwise, a value belongs to the second group.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}

function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var out = bifurcateIn( obj, predicate );
// e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

A `predicate` function is provided two arguments:

-   **value**: object value.
-   **key**: object index.

```javascript
function predicate( v, k ) {
    console.log( '%s: %s', k, v );
    return v[ 0 ] === 'b';
}
function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var out = bifurcateIn( obj, predicate );
// e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

The function accepts the following `options`:

-   **returns**: specifies the output format. If the option equals `'values'`, the function outputs values. If the option equals `'keys'`, the function outputs keys. If the option equals `'*'`, the function outputs both keys and values. Default: `'values'`.
-   **thisArg**: execution context.

By default, the function returns object values. To return object keys, set the `returns` option to `'keys'`.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var opts = {
    'returns': 'keys'
};
var out = bifurcateIn( obj, opts, predicate );
// e.g., returns [ [ 'a', 'b', 'd' ], [ 'c' ] ]
```

To return key-value pairs, set the `returns` option to `'*'`.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var opts = {
    'returns': '*'
};
var out = bifurcateIn( obj, opts, predicate );
// e.g., returns [ [ [ 'a', 'beep' ], [ 'b', 'boop ], [ 'd', 'bar' ] ], [ [ 'c', 'foo' ] ] ]
```

To set the `predicate` execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return v[ 0 ] === 'b';
}

function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var context = {
    'count': 0
};
var opts = {
    'thisArg': context
};
var out = bifurcateIn( obj, opts, predicate );
// e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]

console.log( context.count );
// => 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Iteration order is **not** guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic iteration.
-   Because iteration order is **not** guaranteed, result order is **not** guaranteed.
-   The function determines the list of own **and** inherited enumerable properties **before** invoking the provided function. Hence, any modifications made to the input `object` **after** calling this function (such as adding and removing properties) will **not** affect the list of visited properties.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var bifurcateIn = require( '@stdlib/utils/bifurcate-in' );

var opts;
var key;
var obj;
var out;
var i;

function Foo() {
    var key;
    var i;
    for ( i = 0; i < 50; i++ ) {
        key = fromCodePoint( 147+i );
        this[ key ] = randu();
    }
    return this;
}

Foo.prototype = Object.create( null );
for ( i = 0; i < 50; i++ ) {
    key = fromCodePoint( 97+i );
    Foo.prototype[ key ] = randu();
}

// Generate a random object:
obj = new Foo();

// Compute the groups...
function predicate( v ) {
    return ( v < 0.5 );
}
opts = {
    'returns': '*'
};
out = bifurcateIn( obj, opts, predicate );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/bifurcate`][@stdlib/utils/bifurcate]</span><span class="delimiter">: </span><span class="description">split values into two groups.</span>
-   <span class="package-name">[`@stdlib/utils/bifurcate-by`][@stdlib/utils/bifurcate-by]</span><span class="delimiter">: </span><span class="description">split values into two groups according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/bifurcate-own`][@stdlib/utils/bifurcate-own]</span><span class="delimiter">: </span><span class="description">split an object's own property values into two groups according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils/group-in`][@stdlib/utils/group-in]</span><span class="delimiter">: </span><span class="description">group an object's own and inherited property values according to an indicator function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/bifurcate]: https://github.com/stdlib-js/utils/tree/main/bifurcate

[@stdlib/utils/bifurcate-by]: https://github.com/stdlib-js/utils/tree/main/bifurcate-by

[@stdlib/utils/bifurcate-own]: https://github.com/stdlib-js/utils/tree/main/bifurcate-own

[@stdlib/utils/group-in]: https://github.com/stdlib-js/utils/tree/main/group-in

<!-- </related-links> -->

</section>

<!-- /.links -->
