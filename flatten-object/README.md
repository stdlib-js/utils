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

# Flatten Object

> Flatten an object.

<section class="usage">

## Usage

```javascript
var flattenObject = require( '@stdlib/utils/flatten-object' );
```

<a name="flatten-object"></a>

#### flattenObject( obj\[, options] )

Flattens an `object`.

```javascript
var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flattenObject( obj );
// returns { 'a.b.c': 'd' }
```

The function accepts the following `options`:

-   **depth**: maximum depth to flatten.
-   **copy**: `boolean` indicating whether to deep [copy][@stdlib/utils/copy] property values. Default: `false`.
-   **delimiter**: key path delimiter. Default: `'.'`.
-   **flattenArrays**: `boolean` indicating whether to flatten `arrays`. Default: `false`.

To flatten to a specified depth, set the `depth` option.

```javascript
var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flattenObject( obj, {
    'depth': 1
});
// returns { 'a.b': {'c': 'd'} }

var bool = ( obj.a.b === out['a.b'] );
// returns true
```

To deep [copy][@stdlib/utils/copy] property values, set the `copy` option to `true`.

```javascript
var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flattenObject( obj, {
    'depth': 1,
    'copy': true
});
// returns { 'a.b': { 'c': 'd' } }

var bool = ( obj.a.b === out['a.b'] );
// returns false
```

To specify a custom key path delimiter, set the `delimiter` option.

```javascript
var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flattenObject( obj, {
    'delimiter': '-|-'
});
// returns { 'a-|-b-|-c': 'd' }
```

By default, the function does **not** flatten `arrays`. To flatten `arrays`, set the `flattenArrays` option to `true`.

```javascript
var obj = {
    'a': {
        'b': [ 1, 2, 3 ]
    }
};

var out = flattenObject( obj, {
    'flattenArrays': true
});
// returns { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3 }
```

#### flattenObject.factory( options )

Returns a `function` to flatten an `object`.

```javascript
var flatten = flattenObject.factory({
    'delimiter': '|',
    'flattenArrays': true
});

var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flatten( obj );
// returns { 'a|b|c': 'd' }

obj = {
    'a': {
        'b': [ 1, 2, 3 ]
    }
};
out = flatten( obj );
// returns { 'a|b|0': 1, 'a|b|1': 2, 'a|b|2': 3 }
```

The function accepts the same `options` as [`flattenObject()`](#flatten-object).

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: update once Buffer wrapper -->

<!-- eslint no-undef: "error" -->

<!-- eslint-disable no-buffer-constructor -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var flattenObject = require( '@stdlib/utils/flatten-object' );

function noop() {
    // Do nothing...
}

var obj = {
    'a': {
        'b': {
            'beep': 'boop',
            'foo': 'bar'
        },
        'c': [ 1, 2, 3 ],
        'd': true,
        'e': null,
        'f': 3.14,
        'g': new Date(),
        'h': {
            'bip': 6,
            'bop': [ 4, 5, 6 ]
        },
        'i': [ null, true, {} ],
        'j': /.*/,
        'k': noop,
        'l': NaN,
        'm': [],
        'n': string2buffer( 'hello' ),
        'o': {
            'data': new Float64Array( 10 )
        },
        'p': {
            '1': {
                '2': {
                    '3': {}
                }
            }
        }
    }
};

var out = flattenObject( obj, {
    'depth': 5,
    'copy': true,
    'flattenArrays': false,
    'delimiter': '-|-'
});
/* returns
    {
        'a-|-b-|-beep': 'boop',
        'a-|-b-|-foo': 'bar',
        'a-|-c': [1,2,3],
        'a-|-d': true,
        'a-|-e': null,
        'a-|-f': 3.14,
        'a-|-g': <Date>,
        'a-|-h-|-bip': 6,
        'a-|-h-|-bop': [4,5,6],
        'a-|-i': [null,true,{}],
        'a-|-j': <RegExp>,
        'a-|-k': <Function>,
        'a-|-l': NaN,
        'a-|-m': [],
        'a-|-n': <Buffer>,
        'a-|-o-|-data': <Float64Array>,
        'a-|-p-|-1-|-2-|-3': {}
    }
*/
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/flatten-array`][@stdlib/utils/flatten-array]</span><span class="delimiter">: </span><span class="description">flatten an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils/tree/main/copy

<!-- <related-links> -->

[@stdlib/utils/flatten-array]: https://github.com/stdlib-js/utils/tree/main/flatten-array

<!-- </related-links> -->

</section>

<!-- /.links -->
