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

# Filename Extension

> Return a filename extension.

<section class="usage">

## Usage

```javascript
var extname = require( '@stdlib/utils/extname' );
```

#### extname( filename )

Returns a filename extension.

```javascript
var ext = extname( 'index.js' );
// returns '.js'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable node/no-sync -->

<!-- eslint no-undef: "error" -->

```javascript
var statSync = require( 'fs' ).statSync;
var path = require( 'path' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var extname = require( '@stdlib/utils/extname' );

var files;
var fpath;
var base;
var stat;
var ext;
var i;

base = path.resolve( __dirname, '..' );
files = readDir( base );

for ( i = 0; i < files.length; i++ ) {
    fpath = path.join( base, files[ i ] );
    stat = statSync( fpath );
    if ( !stat.isDirectory() ) {
        ext = extname( fpath );
        console.log( '%s --> %s', fpath, ext || '(no ext)' );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/dirname`][@stdlib/utils/dirname]</span><span class="delimiter">: </span><span class="description">return a directory name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/dirname]: https://github.com/stdlib-js/utils/tree/main/dirname

<!-- </related-links> -->

</section>

<!-- /.links -->
