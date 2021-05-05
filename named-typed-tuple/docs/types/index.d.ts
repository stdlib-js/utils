/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Interface defining options.
*/
interface Options {
	/**
	* Default data type (default: 'float64').
	*/
	dtype?: string;

	/**
	* Tuple name (default: 'tuple').
	*/
	name?: string;
}

/**
* Named typed tuple.
*/
interface Tuple {
	/**
	* Size (in bytes) of each tuple element.
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* var nbytes = tuple.BYTES_PER_ELEMENT;
	* // returns 8
	*/
	readonly BYTES_PER_ELEMENT: number;

	#### tuple.buffer

	Pointer to the underlying data buffer.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	var buf = tuple.buffer;
	// returns <ArrayBuffer>
	```

	#### tuple.byteLength

	Length (in bytes) of the tuple.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	var nbytes = tuple.byteLength;
	// returns 16
	```

	#### tuple.byteOffset

	Offset (in bytes) of a tuple from the start of its underlying [`ArrayBuffer`][@stdlib/array/buffer].

	```javascript
	var ArrayBuffer = require( '@stdlib/array/buffer' );

	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	var offset = tuple.byteOffset;
	// returns 0

	var buf = new ArrayBuffer( 64 );
	tuple = factory( buf, 32 );

	offset = tuple.byteOffset;
	// returns 32
	```

	#### tuple.length

	Number of tuple elements.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	var len = tuple.length;
	// returns 2
	```

	#### tuple.name

	Tuple name.

	```javascript
	// Create a tuple factory which generates tuples having the default tuple name:
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	var n = tuple.name;
	// returns 'tuple'

	// Create a tuple factory which generates tuples having a custom tuple name:
	var opts = {
		'name': 'Point'
	};
	factory = namedtypedtuple( [ 'x', 'y' ], opts );

	tuple = factory( [ 1.0, -1.0 ] );

	n = tuple.name;
	// returns 'Point'
	```

	#### tuple.fields

	Returns the list of tuple fields.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	var fields = tuple.fields;
	// returns [ 'x', 'y' ]
	```

	#### tuple.orderedFields

	Returns the list of tuple fields in index order.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	// Sort tuple elements in ascending order:
	tuple.sort();

	// Get the list of tuple fields:
	var fields = tuple.fields;
	// returns [ 'x', 'y' ]

	// Get the list of tuple fields in index order:
	fields = tuple.orderedFields;
	// returns [ 'y', 'x' ]
	```

	#### tuple.copyWithin( target, start\[, end] )

	Copies a sequence of elements within the tuple starting at `start` and ending at `end` (non-inclusive) to the position starting at `target`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );

	var tuple = factory( [ 2.0, -2.0, 1.0, -1.0, 1.0 ] );

	var x = tuple.x;
	// returns 2.0

	var y = tuple.y;
	// returns -2.0

	// Copy the last two elements to the first two elements:
	tuple.copyWithin( 0, 3 );

	x = tuple.x;
	// returns -1.0

	y = tuple.y;
	// returns 1.0
	```

	By default, `end` equals the number of tuple elements (i.e., one more than the last tuple index). To limit the sequence length, provide an `end` argument.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );

	var tuple = factory( [ 2.0, -2.0, 1.0, -1.0, 1.0 ] );

	var w = tuple.w;
	// returns -1.0

	var v = tuple.v;
	// returns 1.0

	// Copy the first two elements to the last two elements:
	tuple.copyWithin( 3, 0, 2 );

	w = tuple.w;
	// returns 2.0

	v = tuple.v;
	// returns -2.0
	```

	When a `target`, `start`, and/or `end` index is negative, the respective index is determined relative to the last tuple element. The following example achieves the same behavior as the previous example:

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );

	var tuple = factory( [ 2.0, -2.0, 1.0, -1.0, 1.0 ] );

	var w = tuple.w;
	// returns -1.0

	var v = tuple.v;
	// returns 1.0

	// Copy the first two elements to the last two elements:
	tuple.copyWithin( -2, -5, -3 );

	w = tuple.w;
	// returns 2.0

	v = tuple.v;
	// returns -2.0
	```

	#### tuple.entries()

	Returns an iterator for iterating over tuple key-value pairs.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	// Create an iterator:
	var it = tuple.entries();

	// Iterate over key-value pairs...
	var v = it.next().value;
	// returns [ 0, 'x', 1.0 ]

	v = it.next().value;
	// returns [ 1, 'y', -1.0 ]

	var bool = it.next().done;
	// returns true
	```

	#### tuple.every( predicate\[, thisArg] )

	Tests whether all tuple elements pass a test implemented by a `predicate` function.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	function predicate( v ) {
		return ( v >= 0.0 );
	}

	var bool = tuple.every( predicate );
	// returns false
	```

	A `predicate` function is provided four arguments:

	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	To set the callback execution context, provide a `thisArg`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, 1.0 ] );

	function predicate( v ) {
		this.count += 1;
		return ( v >= 0.0 );
	}

	var ctx = {
		'count': 0
	};

	var bool = tuple.every( predicate, ctx );
	// returns true

	var n = ctx.count;
	// returns 2
	```

	#### tuple.fieldOf( searchElement\[, fromIndex] )

	Returns the field of the first tuple element strictly equal to a search element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var field = tuple.fieldOf( -1.0 );
	// returns 'z'

	field = tuple.fieldOf( 2.0 );
	// returns undefined
	```

	By default, the method searches the entire tuple (`fromIndex = 0`). To begin searching from a specific tuple index, provide a `fromIndex`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var field = tuple.fieldOf( 1.0, 1 );
	// returns undefined
	```

	When a `fromIndex` is negative, the starting index is resolved relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var field = tuple.fieldOf( 1.0, -2 );
	// returns undefined
	```

	The method does **not** distinguish between signed and unsigned zero.

	<a name="method-fill"></a>

	#### tuple.fill( value\[, start\[, end]] )

	Fills a tuple from a `start` index to an `end` index (non-inclusive) with a provided `value`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory();

	// Set all tuple elements to the same value:
	tuple.fill( 2.0 );

	var x = tuple.x;
	// returns 2.0

	var y = tuple.y;
	// returns 2.0

	// Set all tuple elements starting from the first index to the same value:
	tuple.fill( 3.0, 1 );

	x = tuple.x;
	// returns 2.0

	y = tuple.y;
	// returns 3.0

	// Set all tuple elements, except the last element, to the same value:
	tuple.fill( 4.0, 0, tuple.length-1 );

	x = tuple.x;
	// returns 4.0

	y = tuple.y;
	// returns 3.0
	```

	When a `start` and/or `end` index is negative, the respective index is determined relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory();

	// Set all tuple elements, except the last element, to the same value:
	tuple.fill( 2.0, -tuple.length, -1 );

	var x = tuple.x;
	// returns 2.0

	var y = tuple.y;
	// returns 0.0
	```

	#### tuple.filter( predicate\[, thisArg] )

	Creates a new tuple (of the same data type as the host tuple) which includes those elements for which a `predicate` function returns a truthy value.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		return ( v >= 0.0 );
	}

	var p2 = p1.filter( predicate );

	var f = p2.fields;
	// returns [ 'x', 'y' ]
	```

	If a `predicate` function does not return a truthy value for any tuple element, the method returns `null`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		return ( v >= 10.0 );
	}

	var p2 = p1.filter( predicate );
	// returns null
	```

	A `predicate` function is provided four arguments:

	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	To set the callback execution context, provide a `thisArg`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		this.count += 1;
		return ( v >= 0.0 );
	}

	var ctx = {
		'count': 0
	};

	var p2 = p1.filter( predicate, ctx );

	var n = ctx.count;
	// returns 3
	```

	<a name="method-find"></a>

	#### tuple.find( predicate\[, thisArg] )

	Returns the first tuple element for which a provided `predicate` function returns a truthy value.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		return ( v < 0.0 );
	}

	var v = tuple.find( predicate );
	// returns -1.0
	```

	If a `predicate` function does not return a truthy value for any tuple element, the method returns `undefined`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		return ( v < -10.0 );
	}

	var v = tuple.find( predicate );
	// returns undefined
	```

	A `predicate` function is provided four arguments:

	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	To set the callback execution context, provide a `thisArg`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		this.count += 1;
		return ( v < 0.0 );
	}

	var ctx = {
		'count': 0
	};

	var v = tuple.find( predicate, ctx );
	// returns -1.0

	var n = ctx.count;
	// returns 3
	```

	<a name="method-find-field"></a>

	#### tuple.findField( predicate\[, thisArg] )

	Returns the field of the first tuple element for which a provided `predicate` function returns a truthy value.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		return ( v < 0.0 );
	}

	var field = tuple.findField( predicate );
	// returns 'z'
	```

	If a `predicate` function does not return a truthy value for any tuple element, the method returns `undefined`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		return ( v < -10.0 );
	}

	var field = tuple.findField( predicate );
	// returns undefined
	```

	A `predicate` function is provided four arguments:

	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	To set the callback execution context, provide a `thisArg`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		this.count += 1;
		return ( v < 0.0 );
	}

	var ctx = {
		'count': 0
	};

	var field = tuple.findField( predicate, ctx );
	// returns 'z'

	var n = ctx.count;
	// returns 3
	```

	#### tuple.findIndex( predicate\[, thisArg] )

	Returns the index of the first tuple element for which a provided `predicate` function returns a truthy value.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		return ( v < 0.0 );
	}

	var idx = tuple.findIndex( predicate );
	// returns 2
	```

	If a `predicate` function does not return a truthy value for any tuple element, the method returns `-1`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		return ( v < -10.0 );
	}

	var idx = tuple.findIndex( predicate );
	// returns -1
	```

	A `predicate` function is provided four arguments:

	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	To set the callback execution context, provide a `thisArg`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	function predicate( v ) {
		this.count += 1;
		return ( v < 0.0 );
	}

	var ctx = {
		'count': 0
	};

	var idx = tuple.findIndex( predicate, ctx );
	// returns 2

	var n = ctx.count;
	// returns 3
	```

	#### tuple.forEach( fcn\[, thisArg] )

	Invokes a callback for each tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );

	var str = '';

	function fcn( v, i, f ) {
		str += f + '=' + v;
		if ( i < tuple.length-1 ) {
			str += ' ';
		}
	}

	tuple.forEach( fcn );

	console.log( str );
	// => 'x=1 y=0 z=-1'
	```

	The callback is provided four arguments:

	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	To set the callback execution context, provide a `thisArg`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );

	function fcn() {
		this.count += 1;
	}

	var ctx = {
		'count': 0
	};

	tuple.forEach( fcn, ctx );

	var n = ctx.count;
	// returns 3
	```

	#### tuple.includes( searchElement\[, fromIndex] )

	Returns a `boolean` indicating whether a tuple includes a search element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var bool = tuple.includes( -1.0 );
	// returns true

	bool = tuple.includes( 2.0 );
	// returns false
	```

	By default, the method searches the entire tuple (`fromIndex = 0`). To begin searching from a specific tuple index, provide a `fromIndex`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var bool = tuple.includes( 1.0, 1 );
	// returns false
	```

	When a `fromIndex` is negative, the starting index is resolved relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	bool = tuple.includes( 1.0, -2 );
	// returns false
	```

	The method does **not** distinguish between signed and unsigned zero.

	<a name="method-index-of"></a>

	#### tuple.indexOf( searchElement\[, fromIndex] )

	Returns the index of the first tuple element strictly equal to a search element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var idx = tuple.indexOf( -1.0 );
	// returns 2

	idx = tuple.indexOf( 2.0 );
	// returns -1
	```

	By default, the method searches the entire tuple (`fromIndex = 0`). To begin searching from a specific tuple index, provide a `fromIndex`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var idx = tuple.indexOf( 1.0, 1 );
	// returns -1
	```

	When a `fromIndex` is negative, the starting index is resolved relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var idx = tuple.indexOf( 1.0, -2 );
	// returns -1
	```

	The method does **not** distinguish between signed and unsigned zero.

	#### tuple.ind2key( ind )

	Converts a tuple index to a field name.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var field = tuple.ind2key( 1 );
	// returns 'y'

	field = tuple.ind2key( 100 );
	// returns undefined
	```

	If provided a negative index, the method resolves the index relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var field = tuple.ind2key( -2 );
	// returns 'y'
	```

	#### tuple.join( \[separator] )

	Serializes a tuple by joining all tuple elements as a string.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );

	var str = tuple.join();
	// returns '1,0,-1'
	```

	By default, the method delineates tuple elements using a comma `,`. To specify a custom separator, provide a `separator` string.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );

	var str = tuple.join( '|' );
	// returns '1|0|-1'
	```

	#### tuple.keys()

	Returns an iterator for iterating over tuple keys.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	// Create an iterator:
	var it = tuple.keys();

	// Iterate over keys...
	var v = it.next().value;
	// returns [ 0, 'x' ]

	v = it.next().value;
	// returns [ 1, 'y' ]

	var bool = it.next().done;
	// returns true
	```

	#### tuple.key2ind( field )

	Converts a field name to a tuple index.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var idx = tuple.key2ind( 'y' );
	// returns 1

	idx = tuple.key2ind( 'foo' );
	// returns -1
	```

	#### tuple.lastFieldOf( searchElement\[, fromIndex] )

	Returns the field of the last tuple element strictly equal to a search element, iterating from right to left.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0, 0.0, 1.0 ] );

	var field = tuple.lastFieldOf( 0.0 );
	// returns 'w'

	field = tuple.lastFieldOf( 2.0 );
	// returns undefined
	```

	By default, the method searches the entire tuple (`fromIndex = -1`). To begin searching from a specific tuple index, provide a `fromIndex`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0, 0.0, 1.0 ] );

	var field = tuple.lastFieldOf( 0.0, 2 );
	// returns 'y'
	```

	When a `fromIndex` is negative, the starting index is resolved relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0, 0.0, 1.0 ] );

	var field = tuple.lastFieldOf( 0.0, -3 );
	// returns 'y'
	```

	The method does **not** distinguish between signed and unsigned zero.

	#### tuple.lastIndexOf( searchElement\[, fromIndex] )

	Returns the index of the last tuple element strictly equal to a search element, iterating from right to left.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0, 0.0, 1.0 ] );

	var idx = tuple.lastIndexOf( 0.0 );
	// returns 3

	idx = tuple.lastIndexOf( 2.0 );
	// returns -1
	```

	By default, the method searches the entire tuple (`fromIndex = -1`). To begin searching from a specific tuple index, provide a `fromIndex`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0, 0.0, 1.0 ] );

	var idx = tuple.lastIndexOf( 0.0, 2 );
	// returns 1
	```

	When a `fromIndex` is negative, the starting index is resolved relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z', 'w', 'v' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0, 0.0, 1.0 ] );

	var idx = tuple.lastIndexOf( 0.0, -3 );
	// returns 1
	```

	The method does **not** distinguish between signed and unsigned zero.

	#### tuple.map( fcn\[, thisArg] )

	Maps each tuple element to an element in a new tuple having the same data type as the host tuple.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	function fcn( v ) {
		return v * 2.0;
	}

	var p2 = p1.map( fcn );

	var x = p2.x;
	// returns 2.0

	var y = p2.y;
	// returns 0.0

	var z = p2.z;
	// returns -2.0
	```

	A callback is provided four arguments:

	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	To set the callback execution context, provide a `thisArg`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	function fcn( v ) {
		this.count += 1;
		return v * 2.0;
	}

	var ctx = {
		'count': 0
	};

	var p2 = p1.map( fcn );

	var n = ctx.count;
	// returns 3
	```

	#### tuple.reduce( fcn\[, initialValue] )

	Applies a function against an accumulator and each element in a tuple and returns the accumulated result.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 2.0, 0.0, -3.0 ] );

	function fcn( acc, v ) {
		return acc + ( v*v );
	}

	var v = tuple.reduce( fcn );
	// returns 9.0
	```

	If not provided an initial value, the method invokes a provided function with the first tuple element as the first argument and the second tuple element as the second argument.

	If provided an initial value, the method invokes a provided function with the initial value as the first argument and the first tuple element as the second argument.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 2.0, 0.0, -3.0 ] );

	function fcn( acc, v ) {
		return acc + ( v*v );
	}

	var v = tuple.reduce( fcn, 0.0 );
	// returns 13.0
	```

	A callback is provided five arguments:

	-   `acc`: accumulated result
	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	<a name="method-reduce-right"></a>

	#### tuple.reduceRight( fcn\[, initialValue] )

	Applies a function against an accumulator and each element in a tuple and returns the accumulated result, iterating from right to left.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 2.0, 0.0, -3.0 ] );

	function fcn( acc, v ) {
		return acc + ( v*v );
	}

	var v = tuple.reduce( fcn );
	// returns 4.0
	```

	If not provided an initial value, the method invokes a provided function with the last tuple element as the first argument and the second-to-last tuple element as the second argument.

	If provided an initial value, the method invokes a provided function with the initial value as the first argument and the last tuple element as the second argument.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 2.0, 0.0, -3.0 ] );

	function fcn( acc, v ) {
		return acc + ( v*v );
	}

	var v = tuple.reduce( fcn, 0.0 );
	// returns 13.0
	```

	A callback is provided five arguments:

	-   `acc`: accumulated result
	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	<a name="method-reverse"></a>

	#### tuple.reverse()

	Reverses a tuple **in-place** (thus mutating the tuple on which the method is invoked).

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 2.0, 0.0, -3.0 ] );

	var x = tuple[ 0 ];
	// returns 2.0

	x = tuple.x;
	// returns 2.0

	// Reverse the tuple:
	tuple.reverse();

	var fields = tuple.orderedFields;
	// returns [ 'z', 'y', 'x' ]

	var z = tuple[ 0 ];
	// returns -3.0

	// Tuple field assignments do NOT change:
	x = tuple.x;
	// returns 2.0
	```

	Invoking this method does **not** affect tuple field assignments.

	#### tuple.set( arr\[, offset] )

	Sets tuple elements.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var y = tuple[ 1 ];
	// returns 0.0

	y = tuple.y;
	// returns 0.0

	// Set the first two tuple elements:
	tuple.set( [ -2.0, 2.0 ] );

	var x = tuple[ 0 ];
	// returns -2.0

	x = tuple.x;
	// returns -2.0

	y = tuple[ 1 ];
	// returns 2.0

	y = tuple.y;
	// returns 2.0
	```

	By default, the method starts writing values at the first tuple index. To specify an alternative index, provide an index `offset`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var y = tuple[ 1 ];
	// returns 0.0

	y = tuple.y;
	// returns 0.0

	// Set the last two tuple elements:
	tuple.set( [ -2.0, 2.0 ], 1 );

	var x = tuple[ 0 ];
	// returns 1.0

	x = tuple.x;
	// returns 1.0

	y = tuple[ 1 ];
	// returns -2.0

	y = tuple.y;
	// returns -2.0

	var z = tuple[ 2 ];
	// returns 2.0

	z = tuple.z;
	// returns 2.0
	```

	#### tuple.slice( \[begin\[, end]] )

	Copies tuple elements to a new tuple with the same underlying data type as the host tuple.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	var p2 = p1.slice();

	var bool = ( p1 === p2 );
	// returns false

	bool = ( p1.buffer === p2.buffer );
	// returns false

	var x = p2.x;
	// returns 1.0

	var y = p2.y;
	// returns 0.0

	var z = p2.z;
	// returns -1.0
	```

	By default, the method copies elements beginning with the first tuple element. To specify an alternative tuple index at which to begin copying, provide a `begin` index (inclusive).

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	var p2 = p1.slice( 1 );

	var fields = p2.fields;
	// returns [ 'y', 'z' ]

	var y = p2.y;
	// returns 0.0

	var z = p2.z;
	// returns -1.0
	```

	By default, the method copies all tuple elements after `begin`. To specify an alternative tuple index at which to end copying, provide an `end` index (exclusive).

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	var p2 = p1.slice( 0, 2 );

	var fields = p2.fields;
	// returns [ 'x', 'y' ]

	var x = p2.x;
	// returns 1.0

	var y = p2.y;
	// returns 0.0
	```

	When a `begin` and/or `end` index is negative, the respective index is determined relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	var p2 = p1.slice( -p1.length, -1 );

	var fields = p2.fields;
	// returns [ 'x', 'y' ]

	var x = p2.x;
	// returns 1.0

	var y = p2.y;
	// returns 0.0
	```

	#### tuple.some( predicate\[, thisArg] )

	Tests whether at least one tuple element passes a test implemented by a `predicate` function.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, -1.0 ] );

	function predicate( v ) {
		return ( v < 0.0 );
	}

	var bool = tuple.some( predicate );
	// returns true
	```

	A `predicate` function is provided four arguments:

	-   `value`: tuple element
	-   `index`: tuple index
	-   `field`: tuple field name
	-   `tuple`: tuple on which the method is invoked

	To set the callback execution context, provide a `thisArg`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y' ] );

	var tuple = factory( [ 1.0, 1.0 ] );

	function predicate( v ) {
		this.count += 1;
		return ( v < 0.0 );
	}

	var ctx = {
		'count': 0
	};

	var bool = tuple.some( predicate, ctx );
	// returns false

	var n = ctx.count;
	// returns 2
	```

	#### tuple.sort( \[compareFunction] )

	Sorts a tuple **in-place** (thus mutating the tuple on which the method is invoked).

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 2.0, -3.0, 0.0 ] );

	var x = tuple[ 0 ];
	// returns 2.0

	x = tuple.x;
	// returns 2.0

	// Sort the tuple (in ascending order):
	tuple.sort();

	var fields = tuple.orderedFields;
	// returns [ 'y', 'z', 'x' ]

	var y = tuple[ 0 ];
	// returns -3.0

	// Tuple field assignments do NOT change:
	x = tuple.x;
	// returns 2.0
	```

	By default, the method sorts tuple elements in ascending order. To impose a custom order, provide a `compareFunction`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 2.0, -3.0, 0.0 ] );

	var x = tuple[ 0 ];
	// returns 2.0

	x = tuple.x;
	// returns 2.0

	function descending( a, b ) {
		return b - a;
	}

	// Sort the tuple (in descending order):
	tuple.sort( descending );

	var fields = tuple.orderedFields;
	// returns [ 'x', 'z', 'y' ]

	var z = tuple[ 1 ];
	// returns 0.0

	// Tuple field assignments do NOT change:
	y = tuple.y;
	// returns -3.0
	```

	The comparison function is provided two tuple elements, `a` and `b`, per invocation, and its return value determines the sort order as follows:

	-   If the comparison function returns a value **less** than zero, then the method sorts `a` to an index lower than `b` (i.e., `a` should come **before** `b`).
	-   If the comparison function returns a value **greater** than zero, then the method sorts `a` to an index higher than `b` (i.e., `b` should come **before** `a`).
	-   If the comparison function returns **zero**, then the relative order of `a` and `b` _should_ remain unchanged.

	Invoking this method does **not** affect tuple field assignments.

	#### tuple.subarray( \[begin\[, end]] )

	Creates a new [typed array][@stdlib/array/typed] over the same underlying [`ArrayBuffer`][@stdlib/array/buffer] and with the same underlying data type as the host tuple.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var arr = tuple.subarray();
	// returns <Float64Array>[ 1.0, 0.0, -1.0 ]
	```

	By default, the method creates a [typed array][@stdlib/array/typed] view beginning with the first tuple element. To specify an alternative tuple index at which to begin, provide a `begin` index (inclusive).

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var arr = tuple.subarray( 1 );
	// returns <Float64Array>[ 0.0, -1.0 ]
	```

	By default, the method creates a [typed array][@stdlib/array/typed] view which includes all tuple elements after `begin`. To limit the number of tuple elements after `begin`, provide an `end` index (exclusive).

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var arr = tuple.subarray( 0, 2 );
	// returns <Float64Array>[ 1.0, 0.0 ]
	```

	When a `begin` and/or `end` index is negative, the respective index is determined relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var arr = tuple.subarray( -tuple.length, -1 );
	// returns <Float64Array>[ 1.0, 0.0 ]
	```

	If the method is unable to resolve indices to a non-empty tuple subsequence, the method returns an empty [typed array][@stdlib/array/typed].

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var arr = tuple.subarray( 10, -1 );
	// returns <Float64Array>[]
	```

	#### tuple.subtuple( \[begin\[, end]] )

	Creates a new named typed tuple over the same underlying [`ArrayBuffer`][@stdlib/array/buffer] and with the same underlying data type as the host tuple.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	var p2 = p1.subtuple();

	var bool = ( p1 === p2 );
	// returns false

	bool = ( p1.buffer === p2.buffer );
	// returns true

	var len = p2.length;
	// returns 3

	var x = p2.x;
	// returns 1.0

	var y = p2.y;
	// returns 0.0

	var z = p2.z;
	// returns -1.0
	```

	By default, the method creates a new tuple beginning with the first tuple element. To specify an alternative tuple index at which to begin, provide a `begin` index (inclusive).

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	var p2 = p1.subtuple( 1 );

	var len = p2.length;
	// returns 2

	var fields = p2.fields;
	// returns [ 'y', 'z' ]

	var y = p2.y;
	// returns 0.0

	var z = p2.z;
	// returns -1.0
	```

	By default, the method creates a new tuple which includes all tuple elements after `begin`. To limit the number of tuple elements after `begin`, provide an `end` index (exclusive).

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	var p2 = p1.subtuple( 0, 2 );

	var len = p2.length;
	// returns 2

	var fields = p2.fields;
	// returns [ 'x', 'y' ]

	var x = p2.x;
	// returns 1.0

	var y = p2.y;
	// returns 0.0
	```

	When a `begin` and/or `end` index is negative, the respective index is determined relative to the last tuple element.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	var p2 = p1.subtuple( -p1.length, -1 );

	var len = p2.length;
	// returns 2

	var fields = p2.fields;
	// returns [ 'x', 'y' ]

	var x = p2.x;
	// returns 1.0

	var y = p2.y;
	// returns 0.0
	```

	If the method is unable to resolve indices to a non-empty tuple subsequence, the method returns `null`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var p1 = factory( [ 1.0, 0.0, -1.0 ] );

	var p2 = p1.subtuple( 10, -1 );
	// returns null
	```

	#### tuple.toJSON()

	Serializes a tuple as [JSON][json].

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ] );

	var obj = tuple.toJSON();
	// reutrns { 'x': 1.0, 'y': 0.0, 'z': -1.0 }
	```

	<a name="method-to-locale-string"></a>

	#### tuple.toLocaleString( \[locales\[, options]] )

	Serializes a tuple as a locale-specific `string`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );

	var str = tuple.toLocaleString();
	// returns '1,0,-1'
	```

	#### tuple.toString()

	Serializes a tuple as a `string`.

	```javascript
	var factory = namedtypedtuple( [ 'x', 'y', 'z' ] );

	var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );

	var str = tuple.toString();
	// returns 'tuple(x=1, y=0, z=-1)'
	```

	The returned `string` uses the tuple `name` as specified when creating a tuple factory.

	```javascript
	var opts = {
		'name': 'Point'
	};

	var factory = namedtypedtuple( [ 'x', 'y', 'z' ], opts );

	var tuple = factory( [ 1.0, 0.0, -1.0 ], 'int32' );

	var str = tuple.toString();
	// returns 'Point(x=1, y=0, z=-1)'
	```

	/**
	* Returns an iterator for iterating over tuple elements.
	*
	* @example
	* var factory = namedtypedtuple( [ 'x', 'y' ] );
	*
	* var tuple = factory( [ 1.0, -1.0 ] );
	*
	* // Create an iterator:
	* var it = tuple.values();
	*
	* // Iterate over tuple elements...
	* var v = it.next().value;
	* // returns 1.0
	*
	* v = it.next().value;
	* // returns -1.0
	*
	* var bool = it.next().done;
	* // returns true
	*/
	values();
}

declare function FactoryFunction( );

/**
* Returns a named typed tuple factory.
*
* @param names - field (property) names
* @param options - options
* @param options.dtype - default data type (default: 'float64')
* @param options.name - tuple name (default: 'tuple')
* @throws must provide distinct field names
* @throws cannot provide a reserved field (property) name
* @throws must provide valid options
* @throws must provide a recognized data type
* @returns factory function
*
* @example
* var point = namedtypedtuple( [ 'x', 'y' ] );
*
* var p = point( [ 1.0, -1.0 ] );
*
* var x = p[ 0 ];
* // returns 1.0
*
* x = p.x;
* // returns 1.0
*
* var y = p[ 1 ];
* // returns -1.0
*
* y = p.y;
* // returns -1.0
*/
declare function namedtypedtuple( names: Array<string>, options?: Options ): FactoryFunction; // tslint-disable-line max-line-length

// EXPORTS //

export = namedtypedtuple;
