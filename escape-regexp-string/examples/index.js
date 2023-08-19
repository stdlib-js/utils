/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var rescape = require( './../lib' );

console.log( rescape( '/beep/' ) );
// => '/beep/'

console.log( rescape( 'beep' ) );
// => 'beep'

console.log( rescape( '/[A-Z]*/' ) );
// => '/\\[A\\-Z\\]\\*/'

console.log( rescape( '[A-Z]*' ) );
// => '\\[A\\-Z\\]\\*'

console.log( rescape( '/\\\//ig' ) ); // eslint-disable-line no-useless-escape
// => '/\\\\\\\//ig'

console.log( rescape( '\\\/' ) ); // eslint-disable-line no-useless-escape
// => '\\\\\\\/'

console.log( rescape( '/[A-Z]{0,}/' ) );
// => '/\\[A\\-Z\\]\\{0,\\}/'

console.log( rescape( '[A-Z]{0,}' ) );
// => '\\[A\\-Z\\]\\{0,\\}'

console.log( rescape( '/^boop$/' ) );
// => '/\\^boop\\$/'

console.log( rescape( '^boop$' ) );
// => '\\^boop\\$'

console.log( rescape( '/(?:.*)/' ) );
// => '/\\(\\?:\\.\\*\\)/'

console.log( rescape( '(?:.*)' ) );
// => '\\(\\?:\\.\\*\\)'

console.log( rescape( '/(?:beep|boop)/' ) );
// => '/\\(\\?:beep\\|boop\\)/'

console.log( rescape( '(?:beep|boop)' ) );
// => '\\(\\?:beep\\|boop\\)'
