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

// MODULES //

var resolve = require( 'path' ).resolve;
var exec = require( 'child_process' ).exec;
var tape = require( 'tape' );
var replace = require( '@stdlib/string/replace' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var EXEC_PATH = require( '@stdlib/process/exec-path' );


// VARIABLES //

var fpath = resolve( __dirname, '..', 'bin', 'cli' );
var opts = {
	'skip': IS_BROWSER || IS_WINDOWS
};


// FIXTURES //

var PKG_VERSION = require( './../package.json' ).version;


// TESTS //

tape( 'command-line interface', function test( t ) {
	t.ok( true, __filename );
	t.end();
});

tape( 'when invoked with a `--help` flag, the command-line interface prints the help text to `stderr`', opts, function test( t ) {
	var expected;
	var cmd;

	expected = readFileSync( resolve( __dirname, '..', 'docs', 'usage.txt' ), {
		'encoding': 'utf8'
	});
	cmd = [
		EXEC_PATH,
		fpath,
		'--help'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), expected+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'when invoked with a `-h` flag, the command-line interface prints the help text to `stderr`', opts, function test( t ) {
	var expected;
	var cmd;

	expected = readFileSync( resolve( __dirname, '..', 'docs', 'usage.txt' ), {
		'encoding': 'utf8'
	});
	cmd = [
		EXEC_PATH,
		fpath,
		'-h'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), expected+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'when invoked with a `--version` flag, the command-line interface prints the version to `stderr`', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'--version'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), PKG_VERSION+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'when invoked with a `-V` flag, the command-line interface prints the version to `stderr`', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'-V'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), PKG_VERSION+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'the command-line interface converts a POSIX path to a Windows path and prints it', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'--out=win32\'; process.argv[ 3 ] = \'/foo/bar\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			t.strictEqual( str === '\\foo\\bar\n', true, 'prints expected value to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface converts a POSIX path to a POSIX path and prints it', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'--out=posix\'; process.argv[ 3 ] = \'./foo/bar\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			t.strictEqual( str === './foo/bar\n', true, 'prints expected value to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface converts a Windows path to a POSIX path and prints it', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'--out=posix\'; process.argv[ 3 ] = \'C:\\\\\\foo\\\\\\bar\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			t.strictEqual( str === '/c/foo/bar\n', true, 'prints expected value to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface converts a Windows path to a Windows path and prints it', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'--out=win32\'; process.argv[ 3 ] = \'C:\\\\\\foo\\\\\\bar\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			t.strictEqual( str === 'C:\\foo\\bar\n', true, 'prints expected value to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface converts a Windows path to a mixed path and prints it', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'--out=mixed\'; process.argv[ 3 ] = \'C:\\\\\\foo\\\\\\bar\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			t.strictEqual( str === 'C:/foo/bar\n', true, 'prints expected value to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface converts a POSIX path to a mixed path and prints it', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'--out=mixed\'; process.argv[ 3 ] = \'./foo/bar\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			t.strictEqual( str === './foo/bar\n', true, 'prints expected value to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface converts a mixed path to a mixed path and prints it', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'--out=mixed\'; process.argv[ 3 ] = \'/foo/bar/\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			t.strictEqual( str === '/foo/bar/\n', true, 'prints expected value to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface converts a mixed path to a POSIX path and prints it', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'--out=posix\'; process.argv[ 3 ] = \'c:/foo/bar\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			t.strictEqual( str === '/c/foo/bar\n', true, 'prints expected value to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface converts a mixed path to a Windows path and prints it', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		'-e',
		'"process.stdin.isTTY = true; process.argv[ 2 ] = \'--out=win32\'; process.argv[ 3 ] = \'c:/foo/bar\'; require( \''+fpath+'\' );"'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		if ( error ) {
			t.fail( error.message );
		} else {
			str = stdout.toString();
			t.strictEqual( str === 'c:\\foo\\bar\n', true, 'prints expected value to `stdout`' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface supports use as a standard stream', opts, function test( t ) {
	var cmd = [
		'printf "./docs/eslint"',
		'|',
		EXEC_PATH,
		fpath,
		'--out=win32'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '.\\docs\\eslint\n', 'expected value' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface supports specifying a custom delimiter when used as a standard stream (string)', opts, function test( t ) {
	var cmd = [
		'printf \'c:/foo/bar\t./docs/eslint\'',
		'|',
		EXEC_PATH,
		fpath,
		'--out=win32',
		'--split \'\t\''
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), 'c:\\foo\\bar\n.\\docs\\eslint\n', 'expected value' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface supports specifying a custom delimiter when used as a standard stream (regexp)', opts, function test( t ) {
	var cmd = [
		'printf \'c:/foo/bar\t./docs/eslint\'',
		'|',
		EXEC_PATH,
		fpath,
		'--out=win32',
		'--split=/\\\\t/'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), 'c:\\foo\\bar\n.\\docs\\eslint\n', 'expected value' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'when used as a standard stream, if an error is encountered when reading from `stdin`, the command-line interface prints an error and sets a non-zero exit code', opts, function test( t ) {
	var script;
	var opts;
	var cmd;

	script = readFileSync( resolve( __dirname, 'fixtures', 'stdin_error.js.txt' ), {
		'encoding': 'utf8'
	});

	// Replace single quotes with double quotes:
	script = replace( script, '\'', '"' );

	cmd = [
		EXEC_PATH,
		'-e',
		'\''+script+'\''
	];

	opts = {
		'cwd': __dirname
	};

	exec( cmd.join( ' ' ), opts, done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.pass( error.message );
			t.strictEqual( error.code, 1, 'expected exit code' );
		}
		t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
		t.strictEqual( stderr.toString(), 'Error: beep\n', 'expected value' );
		t.end();
	}
});
