# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-12-08)

<section class="packages">

### Packages

<section class="package" id="utils-unreleased">

#### [@stdlib/utils](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils)

<details>

<section class="features">

##### Features

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-dsv-base-unreleased">

#### [@stdlib/utils/dsv/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/dsv/base)

<details>

<section class="features">

##### Features

-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`eeb9d6f`](https://github.com/stdlib-js/stdlib/commit/eeb9d6fdc2e3faa3116c84f276e88737ba11196f) - remove unused imports

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`0a8192d`](https://github.com/stdlib-js/stdlib/commit/0a8192d68506a2abf4c3e52e1af9f1510e1660b4) - **docs:** update related packages sections [(#3370)](https://github.com/stdlib-js/stdlib/pull/3370) _(by stdlib-bot)_
-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - **feat:** update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259) _(by stdlib-bot, Philipp Burckhardt)_
-   [`eeb9d6f`](https://github.com/stdlib-js/stdlib/commit/eeb9d6fdc2e3faa3116c84f276e88737ba11196f) - **fix:** remove unused imports _(by Athan Reines)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="packages">

### Packages

<section class="package" id="utils-every-in-by-v0.3.2">

#### [@stdlib/utils/every-in-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/every-in-by)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`a59219e`](https://github.com/stdlib-js/stdlib/commit/a59219e11d1951ec26cb44a4972e7616e4d8087f) - update import path for collection type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map-arguments-v0.3.2">

#### [@stdlib/utils/map-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map-arguments)

<details>

<section class="features">

##### Features

-   [`b74a08a`](https://github.com/stdlib-js/stdlib/commit/b74a08ae1dfc859ac8b9704af27e3c3399ad2da5) - improve type declarations for `utils/map-arguments` [(#2050)](https://github.com/stdlib-js/stdlib/pull/2050)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`b74a08a`](https://github.com/stdlib-js/stdlib/commit/b74a08ae1dfc859ac8b9704af27e3c3399ad2da5): function signature and return type now more strictly typed

    -   The mapArguments function now uses generic types instead of 'Function', and its
        return type depends on thisArg presence. 
        Users should review and update their usage of mapArguments, particularly:
        -   Ensure provided functions match the new, stricter type requirements
        -   Update any type assertions or checks where mapArguments is used
        -   Pay special attention to contexts where this binding is significant

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1087](https://github.com/stdlib-js/stdlib/issues/1087)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-nary-function-v0.3.2">

#### [@stdlib/utils/nary-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/nary-function)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-until-v0.3.2">

#### [@stdlib/utils/until](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/until)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`506bdcc`](https://github.com/stdlib-js/stdlib/commit/506bdccd0841d8c1e56df5587de6c32c2c7ec498) - use correct parameter ordering in TS

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`b74a08a`](https://github.com/stdlib-js/stdlib/commit/b74a08ae1dfc859ac8b9704af27e3c3399ad2da5): function signature and return type now more strictly typed

    -   The mapArguments function now uses generic types instead of 'Function', and its
        return type depends on thisArg presence. 
        Users should review and update their usage of mapArguments, particularly:
        -   Ensure provided functions match the new, stricter type requirements
        -   Update any type assertions or checks where mapArguments is used
        -   Pay special attention to contexts where this binding is significant

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#1087](https://github.com/stdlib-js/stdlib/issues/1087)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Karthik Prakash
-   Philipp Burckhardt
-   Prajwal Kulkarni
-   Shubh Mehta

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`b74a08a`](https://github.com/stdlib-js/stdlib/commit/b74a08ae1dfc859ac8b9704af27e3c3399ad2da5) - **feat:** improve type declarations for `utils/map-arguments` [(#2050)](https://github.com/stdlib-js/stdlib/pull/2050) _(by Prajwal Kulkarni, Philipp Burckhardt, Prajwal Kulkarni)_
-   [`ec4730b`](https://github.com/stdlib-js/stdlib/commit/ec4730b90a45d2c968405a5d158d7a52b1389272) - **refactor:** improve type specificity for `utils/group-own` _(by Shubh Mehta, Philipp Burckhardt)_
-   [`2c4e5d8`](https://github.com/stdlib-js/stdlib/commit/2c4e5d824e0c5dc8fd536bf79ff565cee100ce46) - **build:** disable additional lint rule in TS tests _(by Philipp Burckhardt)_
-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`b89c97c`](https://github.com/stdlib-js/stdlib/commit/b89c97ce0b812ff0b2aab16b4d77969d44fe3e8c) - **docs:** resolve lint errors in TS declaration files _(by Philipp Burckhardt)_
-   [`a59219e`](https://github.com/stdlib-js/stdlib/commit/a59219e11d1951ec26cb44a4972e7616e4d8087f) - **fix:** update import path for collection type _(by Philipp Burckhardt)_
-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - **fix:** remove unused imports from TS declaration file _(by Philipp Burckhardt)_
-   [`ff9fa81`](https://github.com/stdlib-js/stdlib/commit/ff9fa81f917d539f1a11fba5580e1744991a8a11) - **docs:** fix TSDoc lint errors _(by Philipp Burckhardt)_
-   [`f477e26`](https://github.com/stdlib-js/stdlib/commit/f477e26a03e5e365f2e7c4035959a2fb789698a3) - **chore:** move functions to parent scope _(by Philipp Burckhardt)_
-   [`6e9f42e`](https://github.com/stdlib-js/stdlib/commit/6e9f42e4c912485d9896eaa16c88b70fd3688e97) - **docs:** harmonize list formatting in repl.txt and ensure starting newline _(by Philipp Burckhardt)_
-   [`506bdcc`](https://github.com/stdlib-js/stdlib/commit/506bdccd0841d8c1e56df5587de6c32c2c7ec498) - **fix:** use correct parameter ordering in TS _(by Philipp Burckhardt)_
-   [`5ef3b3d`](https://github.com/stdlib-js/stdlib/commit/5ef3b3d745c115edaa97125b6051a3613423a770) - **chore:** fix comment _(by Philipp Burckhardt)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_
-   [`31fd427`](https://github.com/stdlib-js/stdlib/commit/31fd42744ec5d7073041f97c6f72350b8005c0fc) - **style:** remove unwanted empty lines _(by Philipp Burckhardt)_
-   [`cadb613`](https://github.com/stdlib-js/stdlib/commit/cadb6131d6ce50338d11757e88e8a910a0367983) - **chore:** update argument documentation styling _(by Philipp Burckhardt)_
-   [`3c5fc0d`](https://github.com/stdlib-js/stdlib/commit/3c5fc0d3d544356489d3da56507766eadd556fd1) - **style:** replace tabs with spaces in examples indentation _(by Philipp Burckhardt)_
-   [`8edb71d`](https://github.com/stdlib-js/stdlib/commit/8edb71d3f64bdf44f51c35e24cfce3ff9932f844) - **test:** add tests to `utils/circular-buffer` _(by Karthik Prakash, Philipp Burckhardt, Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="packages">

### Packages

<section class="package" id="utils-any-in-by-v0.3.0">

#### [@stdlib/utils/any-in-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/any-in-by)

<details>

<section class="features">

##### Features

-   [`69c167d`](https://github.com/stdlib-js/stdlib/commit/69c167d7b5ad978f4e5507a48a8f8dc525464da5) - add `utils/any-in-by`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-any-own-by-v0.3.0">

#### [@stdlib/utils/any-own-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/any-own-by)

<details>

<section class="features">

##### Features

-   [`8c5698c`](https://github.com/stdlib-js/stdlib/commit/8c5698ce650800516279f9d90fabbc65a17cff52) - add `utils/any-own-by`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-if-else-v0.3.0">

#### [@stdlib/utils/async/if-else](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/if-else)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`19106ca`](https://github.com/stdlib-js/stdlib/commit/19106ca820dcd737e7fcf1b022d9b1b7346c5b52) - update unary predicate error type to include null
-   [`952ea72`](https://github.com/stdlib-js/stdlib/commit/952ea72db18b6ff6b06bf89a3559d9f99a69cae5) - properly type predicate error parameter

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-if-then-v0.3.0">

#### [@stdlib/utils/async/if-then](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/if-then)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`19106ca`](https://github.com/stdlib-js/stdlib/commit/19106ca820dcd737e7fcf1b022d9b1b7346c5b52) - update unary predicate error type to include null
-   [`952ea72`](https://github.com/stdlib-js/stdlib/commit/952ea72db18b6ff6b06bf89a3559d9f99a69cae5) - properly type predicate error parameter

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1096](https://github.com/stdlib-js/stdlib/issues/1096)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-parallel-v0.3.0">

#### [@stdlib/utils/async/parallel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/parallel)

<details>

<section class="features">

##### Features

-   [`294b868`](https://github.com/stdlib-js/stdlib/commit/294b868248299e6256454efe1853d98ab84ac3f2) - add `utils/async/parallel` [(#1896)](https://github.com/stdlib-js/stdlib/pull/1896)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1811](https://github.com/stdlib-js/stdlib/issues/1811)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-every-in-by-v0.3.0">

#### [@stdlib/utils/every-in-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/every-in-by)

<details>

<section class="features">

##### Features

-   [`87ec7c2`](https://github.com/stdlib-js/stdlib/commit/87ec7c2486b008c88a0b0846135240c1ae36e9f1) - add `utils/every-in-by`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-every-own-by-v0.3.0">

#### [@stdlib/utils/every-own-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/every-own-by)

<details>

<section class="features">

##### Features

-   [`52e479b`](https://github.com/stdlib-js/stdlib/commit/52e479b8430f04cfe0b861bd81f59c9125d7673b) - add `utils/every-own-by`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-group-v0.3.0">

#### [@stdlib/utils/group](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/group)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`e971001`](https://github.com/stdlib-js/stdlib/commit/e971001e2d17ca4c6e67e81aaba687f5001f0288) - improve type declarations by using generics in `utils/group` [(#1375)](https://github.com/stdlib-js/stdlib/pull/1375)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-none-in-by-v0.3.0">

#### [@stdlib/utils/none-in-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/none-in-by)

<details>

<section class="features">

##### Features

-   [`c9e1623`](https://github.com/stdlib-js/stdlib/commit/c9e1623e7c116d0d0afdf80dc22b19af81b3346b) - add `utils/none-in-by`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-none-own-by-v0.3.0">

#### [@stdlib/utils/none-own-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/none-own-by)

<details>

<section class="features">

##### Features

-   [`046d8c4`](https://github.com/stdlib-js/stdlib/commit/046d8c4f83ff9635764967406fb6c3b5c4554518) - add `utils/none-own-by`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-parse-ndjson-v0.3.0">

#### [@stdlib/utils/parse-ndjson](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/parse-ndjson)

<details>

<section class="features">

##### Features

-   [`8d6f33c`](https://github.com/stdlib-js/stdlib/commit/8d6f33c6b2162168d9855080d5cc261f4f9bfd9e) - add `utils/parse-ndjson`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-some-in-by-v0.3.0">

#### [@stdlib/utils/some-in-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/some-in-by)

<details>

<section class="features">

##### Features

-   [`2351845`](https://github.com/stdlib-js/stdlib/commit/2351845b933cc7b7368c42e4565b57149806e5f9) - add `utils/some-in-by`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-some-own-by-v0.3.0">

#### [@stdlib/utils/some-own-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/some-own-by)

<details>

<section class="features">

##### Features

-   [`80fdd70`](https://github.com/stdlib-js/stdlib/commit/80fdd7073fb324751656cadfc3ed190045fc1583) - add `utils/some-own-by`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="issues">

### Closed Issues

A total of 2 issues were closed in this release:

[#1096](https://github.com/stdlib-js/stdlib/issues/1096), [#1811](https://github.com/stdlib-js/stdlib/issues/1811)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 15 people contributed to this release. Thank you to the following contributors:

-   Ahmed Atwa
-   Athan Reines
-   Joel Mathew Koshy
-   Manik Sharma
-   Philipp Burckhardt
-   Prajwal Kulkarni
-   Pranav Goswami
-   Praneki
-   Pratik
-   Priyansh
-   Priyanshu Agarwal
-   Rutam Kathale
-   Sai Srikar Dumpeti
-   Shubham Mishra
-   Utkarsh Raj

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`0406147`](https://github.com/stdlib-js/stdlib/commit/04061476d1036e1b8b786736b1ba1653eddff1ef) - **refactor:** update paths _(by Athan Reines)_
-   [`b9703b5`](https://github.com/stdlib-js/stdlib/commit/b9703b569dc2f0a67e604e388a0d188b08138b48) - **refactor:** update paths _(by Athan Reines)_
-   [`32bbcb3`](https://github.com/stdlib-js/stdlib/commit/32bbcb3b3dae1f028fd18166ee7875a93d44d0ee) - **refactor:** update paths _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`a78f7d1`](https://github.com/stdlib-js/stdlib/commit/a78f7d1b859b6b1d7b0bc0ee4daf76789e3e0910) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`294b868`](https://github.com/stdlib-js/stdlib/commit/294b868248299e6256454efe1853d98ab84ac3f2) - **feat:** add `utils/async/parallel` [(#1896)](https://github.com/stdlib-js/stdlib/pull/1896) _(by Ahmed Atwa, Athan Reines, Philipp Burckhardt, stdlib-bot)_
-   [`09073da`](https://github.com/stdlib-js/stdlib/commit/09073dad351205baefa3e56125aa5002b8771f8f) - **chore:** update indentation and add newline _(by Philipp Burckhardt)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`f626b3d`](https://github.com/stdlib-js/stdlib/commit/f626b3d45c5fc4b55ff08dc53da094173a719732) - **docs:** update related packages sections [(#2255)](https://github.com/stdlib-js/stdlib/pull/2255) _(by stdlib-bot)_
-   [`53fd65d`](https://github.com/stdlib-js/stdlib/commit/53fd65de03a466f6cf3ca0752c0908a57ef151b1) - **docs:** update related packages sections [(#2240)](https://github.com/stdlib-js/stdlib/pull/2240) _(by stdlib-bot)_
-   [`aaa391a`](https://github.com/stdlib-js/stdlib/commit/aaa391a46214c21dca294506d06ac0b3d59512ce) - **chore:** fix typos _(by Philipp Burckhardt)_
-   [`326479a`](https://github.com/stdlib-js/stdlib/commit/326479a0533ad89929eac59ad1b122cd8cd9cc5f) - **refactor:** update `blas/ext/base/snansumors` to follow current project conventions _(by Pratik, Philipp Burckhardt)_
-   [`98ae85e`](https://github.com/stdlib-js/stdlib/commit/98ae85e1daf32d48a1d3173cfbcb229c722fc79c) - **docs:** update related packages sections [(#2107)](https://github.com/stdlib-js/stdlib/pull/2107) _(by stdlib-bot)_
-   [`f36cfab`](https://github.com/stdlib-js/stdlib/commit/f36cfab3875404fd9c58b6e2a6fedca5e04cb4d9) - **chore:** update package meta data [(#2014)](https://github.com/stdlib-js/stdlib/pull/2014) _(by stdlib-bot)_
-   [`8a88ec1`](https://github.com/stdlib-js/stdlib/commit/8a88ec1f450ddc7cc4e9004f94299fe864bf7acb) - **docs:** update related packages sections [(#2006)](https://github.com/stdlib-js/stdlib/pull/2006) _(by stdlib-bot)_
-   [`8c5698c`](https://github.com/stdlib-js/stdlib/commit/8c5698ce650800516279f9d90fabbc65a17cff52) - **feat:** add `utils/any-own-by` _(by Joel Mathew Koshy, Philipp Burckhardt)_
-   [`a3fbf67`](https://github.com/stdlib-js/stdlib/commit/a3fbf67720b3d1963b27c1097bd8144397ac0ec1) - **docs:** update related packages sections [(#1857)](https://github.com/stdlib-js/stdlib/pull/1857) _(by stdlib-bot)_
-   [`d40dbaf`](https://github.com/stdlib-js/stdlib/commit/d40dbafc25e3e10c8fa83f5b4203db97c289823c) - **chore:** update package meta data [(#1812)](https://github.com/stdlib-js/stdlib/pull/1812) _(by stdlib-bot)_
-   [`8d6f33c`](https://github.com/stdlib-js/stdlib/commit/8d6f33c6b2162168d9855080d5cc261f4f9bfd9e) - **feat:** add `utils/parse-ndjson` _(by Manik Sharma, stdlib-bot, Shubham Singh, Philipp Burckhardt, Athan Reines)_
-   [`80fdd70`](https://github.com/stdlib-js/stdlib/commit/80fdd7073fb324751656cadfc3ed190045fc1583) - **feat:** add `utils/some-own-by` _(by Rutam Kathale, Pranav, Philipp Burckhardt)_
-   [`69c167d`](https://github.com/stdlib-js/stdlib/commit/69c167d7b5ad978f4e5507a48a8f8dc525464da5) - **feat:** add `utils/any-in-by` _(by Priyansh)_
-   [`c9e1623`](https://github.com/stdlib-js/stdlib/commit/c9e1623e7c116d0d0afdf80dc22b19af81b3346b) - **feat:** add `utils/none-in-by` _(by Priyanshu Agarwal, Philipp Burckhardt)_
-   [`52e479b`](https://github.com/stdlib-js/stdlib/commit/52e479b8430f04cfe0b861bd81f59c9125d7673b) - **feat:** add `utils/every-own-by` _(by Praneki, Philipp Burckhardt)_
-   [`5cfd0a8`](https://github.com/stdlib-js/stdlib/commit/5cfd0a8712299d680aff7f9d8fca0c0ac69de56b) - **chore:** update package meta data [(#1462)](https://github.com/stdlib-js/stdlib/pull/1462) _(by stdlib-bot)_
-   [`87ec7c2`](https://github.com/stdlib-js/stdlib/commit/87ec7c2486b008c88a0b0846135240c1ae36e9f1) - **feat:** add `utils/every-in-by` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`e971001`](https://github.com/stdlib-js/stdlib/commit/e971001e2d17ca4c6e67e81aaba687f5001f0288) - **fix:** improve type declarations by using generics in `utils/group` [(#1375)](https://github.com/stdlib-js/stdlib/pull/1375) _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`046d8c4`](https://github.com/stdlib-js/stdlib/commit/046d8c4f83ff9635764967406fb6c3b5c4554518) - **feat:** add `utils/none-own-by` _(by Pratik, stdlib-bot, Philipp Burckhardt)_
-   [`2351845`](https://github.com/stdlib-js/stdlib/commit/2351845b933cc7b7368c42e4565b57149806e5f9) - **feat:** add `utils/some-in-by` _(by Rutam Kathale, Philipp Burckhardt)_
-   [`6941efb`](https://github.com/stdlib-js/stdlib/commit/6941efb41b8c7c108ec87b93bb82795584134753) - **refactor:** improve type definitions for async/if then [(#1381)](https://github.com/stdlib-js/stdlib/pull/1381) _(by Prajwal Kulkarni, Philipp Burckhardt)_
-   [`19106ca`](https://github.com/stdlib-js/stdlib/commit/19106ca820dcd737e7fcf1b022d9b1b7346c5b52) - **fix:** update unary predicate error type to include null _(by Philipp Burckhardt)_
-   [`952ea72`](https://github.com/stdlib-js/stdlib/commit/952ea72db18b6ff6b06bf89a3559d9f99a69cae5) - **fix:** properly type predicate error parameter _(by Philipp Burckhardt)_
-   [`174544f`](https://github.com/stdlib-js/stdlib/commit/174544f854a5dd7e839ecf9eb2c46095728f62dd) - **refactor:** use generics to improve type declarations for async/if then [(#1366)](https://github.com/stdlib-js/stdlib/pull/1366) _(by Prajwal Kulkarni)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="packages">

### Packages

<section class="package" id="utils-curry-v0.2.0">

#### [@stdlib/utils/curry](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/curry)

<details>

<section class="features">

##### Features

-   [`8904b41`](https://github.com/stdlib-js/stdlib/commit/8904b41fed1ab765d80190f1b066106e5ddeb627) - refactor TypeScript declarations to preserve type information

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-curry-right-v0.2.0">

#### [@stdlib/utils/curry-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/curry-right)

<details>

<section class="features">

##### Features

-   [`8904b41`](https://github.com/stdlib-js/stdlib/commit/8904b41fed1ab765d80190f1b066106e5ddeb627) - refactor TypeScript declarations to preserve type information

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-parallel-v0.2.0">

#### [@stdlib/utils/parallel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/parallel)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`541d333`](https://github.com/stdlib-js/stdlib/commit/541d33396f3cef0c017d7c67845a9072d6626be3) - disable code blocks due to runtime errors

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`97992ab`](https://github.com/stdlib-js/stdlib/commit/97992abedd7d2a3d6daf644c6b12e979642c6783) - **docs:** update related packages sections [(#1301)](https://github.com/stdlib-js/stdlib/pull/1301) _(by stdlib-bot)_
-   [`66f40ad`](https://github.com/stdlib-js/stdlib/commit/66f40ad4e91a8de67a4f631779e38902c3b5ab3e) - **refactor:** use base array utility _(by Athan Reines)_
-   [`026b390`](https://github.com/stdlib-js/stdlib/commit/026b390088c5ae24a264be607fb53de22fef452a) - **refactor:** use base array utility _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`8affb20`](https://github.com/stdlib-js/stdlib/commit/8affb20402cfd15cf33663a601541b36cc7edb56) - **docs:** update related packages sections [(#1248)](https://github.com/stdlib-js/stdlib/pull/1248) _(by stdlib-bot)_
-   [`8904b41`](https://github.com/stdlib-js/stdlib/commit/8904b41fed1ab765d80190f1b066106e5ddeb627) - **feat:** refactor TypeScript declarations to preserve type information _(by Philipp Burckhardt)_
-   [`d7fc769`](https://github.com/stdlib-js/stdlib/commit/d7fc76934a1cb2fda53ecf88d45c9fd9b9373e45) - **refactor:** use base array utilities _(by Athan Reines)_
-   [`45799c8`](https://github.com/stdlib-js/stdlib/commit/45799c897e9843534d4585d09dc2b078681a0a4f) - **refactor:** use base array utilities _(by Athan Reines)_
-   [`57d81e4`](https://github.com/stdlib-js/stdlib/commit/57d81e4c196065f6680f08f22aeccfdc6e590b8f) - **docs:** update related packages sections [(#1151)](https://github.com/stdlib-js/stdlib/pull/1151) _(by stdlib-bot)_
-   [`b0552be`](https://github.com/stdlib-js/stdlib/commit/b0552becf69910d31c63d3f9e7463e0d9d53fdb7) - **refactor:** use stdlib package to sum three numbers _(by Athan Reines)_
-   [`e82c983`](https://github.com/stdlib-js/stdlib/commit/e82c9835e5e3c3448ade23dde7b84f7f69d102e8) - **build:** remove tslint directive _(by Philipp Burckhardt)_
-   [`c0ccd8a`](https://github.com/stdlib-js/stdlib/commit/c0ccd8a6108431a4923fde7fad85ec823690b953) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`23114c6`](https://github.com/stdlib-js/stdlib/commit/23114c65f67ea8c17fc835e280408c39544dfa76) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`d1ea078`](https://github.com/stdlib-js/stdlib/commit/d1ea078e4075bd1c77fb27f7977b17a436fe940c) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`2059c81`](https://github.com/stdlib-js/stdlib/commit/2059c8111a9db5fc99bf51c0fcce7ca007edc20a) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`5497c40`](https://github.com/stdlib-js/stdlib/commit/5497c40ce46dfa7c4de64d15526ba794446487e2) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`8b7e032`](https://github.com/stdlib-js/stdlib/commit/8b7e0325d5c3040171114c332e23a1e932302cb7) - **build:** replace tslint directives _(by Philipp Burckhardt)_
-   [`d82aaaa`](https://github.com/stdlib-js/stdlib/commit/d82aaaad3db8f1c9f8d8e3181c0aec0643bddace) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`de93ae0`](https://github.com/stdlib-js/stdlib/commit/de93ae01f1d5e234696e02b9e778d3d71515f5b7) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`2ee04a1`](https://github.com/stdlib-js/stdlib/commit/2ee04a1a56367b9663698aa0d01c10dca8d716df) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`cacca61`](https://github.com/stdlib-js/stdlib/commit/cacca61bc884c5c1805716236733cf378d0ce955) - **docs:** update links _(by Athan Reines)_
-   [`12ce7e3`](https://github.com/stdlib-js/stdlib/commit/12ce7e3d1197f4171d6c7d1c5799c1b3dd40273e) - **style:** disable lint rule _(by Athan Reines)_
-   [`264b4f3`](https://github.com/stdlib-js/stdlib/commit/264b4f366df5c589ed924a78f33af1d6903b25ce) - **style:** disable lint rule _(by Athan Reines)_
-   [`4c357d8`](https://github.com/stdlib-js/stdlib/commit/4c357d8c0dd2fd2fd38a91534c1bb64f119bcee9) - **style:** disable lint rule _(by Athan Reines)_
-   [`537deec`](https://github.com/stdlib-js/stdlib/commit/537deeccd6ab0b5efa37735056356f2866541dba) - **style:** disable lint rule _(by Athan Reines)_
-   [`6959e96`](https://github.com/stdlib-js/stdlib/commit/6959e964dfbbfb76965a95893526668a85593e2d) - **style:** disable lint rule _(by Athan Reines)_
-   [`c406bac`](https://github.com/stdlib-js/stdlib/commit/c406bac5520b83ac38e2a56fe24e941b8ee7f99d) - **docs:** add workaround for linting _(by Athan Reines)_
-   [`85b0900`](https://github.com/stdlib-js/stdlib/commit/85b09002c274239c0524d3632ba7d8fcec9d91f6) - **docs:** resolve lint errors _(by Athan Reines)_
-   [`0505710`](https://github.com/stdlib-js/stdlib/commit/0505710f323e878aa26c1cf38f92fc2988414dea) - **style:** disable lint rule _(by Athan Reines)_
-   [`52f2fdc`](https://github.com/stdlib-js/stdlib/commit/52f2fdc34795d546032031c3dacbec7eb419a141) - **style:** disable lint rule _(by Athan Reines)_
-   [`155dae9`](https://github.com/stdlib-js/stdlib/commit/155dae99c9f66fcfa038c167cd52dce8ebfd2960) - **style:** disable lint rule _(by Athan Reines)_
-   [`541d333`](https://github.com/stdlib-js/stdlib/commit/541d33396f3cef0c017d7c67845a9072d6626be3) - **fix:** disable code blocks due to runtime errors _(by Athan Reines)_
-   [`50db6ab`](https://github.com/stdlib-js/stdlib/commit/50db6ab78f162e1d827477db6a78f7ccc775c14d) - **style:** disable lint rule _(by Athan Reines)_
-   [`d18ab3c`](https://github.com/stdlib-js/stdlib/commit/d18ab3c44e4149f43805a9418219a5c235cf29ec) - **style:** disable lint rule _(by Athan Reines)_
-   [`405e05b`](https://github.com/stdlib-js/stdlib/commit/405e05b0469a1c2c2fc76e134c11edca4503d8aa) - **style:** disable lint rule _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="packages">

### Packages

<section class="package" id="utils-v0.1.0">

#### [@stdlib/utils](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils)

<details>

<section class="features">

##### Features

-   [`e18b248`](https://github.com/stdlib-js/stdlib/commit/e18b248464425863019a841795a7e5fc7d01d0ea) - update namespace TypeScript declarations [(#1100)](https://github.com/stdlib-js/stdlib/pull/1100)
-   [`de73ae1`](https://github.com/stdlib-js/stdlib/commit/de73ae19f43cbad40036d25b1d46620b3c5113a9) - update namespace TypeScript declarations [(#1089)](https://github.com/stdlib-js/stdlib/pull/1089)
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-any-v0.1.0">

#### [@stdlib/utils/any](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/any)

<details>

<section class="features">

##### Features

-   [`ba454af`](https://github.com/stdlib-js/stdlib/commit/ba454af8b3a18ddb727d26613d97905fc2b115fd) - increase minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`a2a7714`](https://github.com/stdlib-js/stdlib/commit/a2a771469fb7ed35e48c034e1bf4a490449be15f) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ba454af`](https://github.com/stdlib-js/stdlib/commit/ba454af8b3a18ddb727d26613d97905fc2b115fd): increase minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-any-by-v0.1.0">

#### [@stdlib/utils/any-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/any-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`d390c4e`](https://github.com/stdlib-js/stdlib/commit/d390c4e96f0d98376392ca01a46614ce2d4e18a1) - add missing `this` parameter
-   [`789b322`](https://github.com/stdlib-js/stdlib/commit/789b322b20f2f9d035b3ac6d44b0e4beece9a50c) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-any-by-right-v0.1.0">

#### [@stdlib/utils/any-by-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/any-by-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`438c577`](https://github.com/stdlib-js/stdlib/commit/438c57782f4d29ddf7cd17ac49776d6717779be1) - add missing `this` parameter
-   [`a9970ee`](https://github.com/stdlib-js/stdlib/commit/a9970ee570c87272e72732555b7c3bd0da24cdbe) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-append-v0.1.0">

#### [@stdlib/utils/append](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/append)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`0f5ff18`](https://github.com/stdlib-js/stdlib/commit/0f5ff18ee50178bd11db8591f90e5486afd1dd41) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-argument-function-v0.1.0">

#### [@stdlib/utils/argument-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/argument-function)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-v0.1.0">

#### [@stdlib/utils/async](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async)

<details>

<section class="features">

##### Features

-   [`e18b248`](https://github.com/stdlib-js/stdlib/commit/e18b248464425863019a841795a7e5fc7d01d0ea) - update namespace TypeScript declarations [(#1100)](https://github.com/stdlib-js/stdlib/pull/1100)
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-any-by-v0.1.0">

#### [@stdlib/utils/async/any-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/any-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`e92aceb`](https://github.com/stdlib-js/stdlib/commit/e92aceb807c9ec3e442cf53e3495a66767772166) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-any-by-right-v0.1.0">

#### [@stdlib/utils/async/any-by-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/any-by-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`724d386`](https://github.com/stdlib-js/stdlib/commit/724d386fdb37a4ab05e0e332766a3d7b67f54ab2) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-bifurcate-by-v0.1.0">

#### [@stdlib/utils/async/bifurcate-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/bifurcate-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`447a49d`](https://github.com/stdlib-js/stdlib/commit/447a49da67d4cc03ab5106b815929731e3b418ec) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-compose-v0.1.0">

#### [@stdlib/utils/async/compose](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/compose)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-count-by-v0.1.0">

#### [@stdlib/utils/async/count-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/count-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`5573a67`](https://github.com/stdlib-js/stdlib/commit/5573a67ad26e964548a6cae27d4b85afb6e9909b) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-do-until-v0.1.0">

#### [@stdlib/utils/async/do-until](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/do-until)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-do-while-v0.1.0">

#### [@stdlib/utils/async/do-while](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/do-while)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-every-by-v0.1.0">

#### [@stdlib/utils/async/every-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/every-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`daa846c`](https://github.com/stdlib-js/stdlib/commit/daa846cf840517f2620160f9a7d638975fb0b069) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-every-by-right-v0.1.0">

#### [@stdlib/utils/async/every-by-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/every-by-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`d028a83`](https://github.com/stdlib-js/stdlib/commit/d028a837644d0451445424922f2f07a0f94e7b4d) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-for-each-v0.1.0">

#### [@stdlib/utils/async/for-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/for-each)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c234583`](https://github.com/stdlib-js/stdlib/commit/c2345831e7e99470d6519f7f548d1d130abe1591) - update import path for `Collection` type definition and refactor to use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-for-each-right-v0.1.0">

#### [@stdlib/utils/async/for-each-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/for-each-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`619fadc`](https://github.com/stdlib-js/stdlib/commit/619fadce92a34abdc7d02bad4ce6612f490791a9) - update import path for `Collection` type definition and refactor to use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-function-sequence-v0.1.0">

#### [@stdlib/utils/async/function-sequence](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/function-sequence)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-group-by-v0.1.0">

#### [@stdlib/utils/async/group-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/group-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`e9afc9f`](https://github.com/stdlib-js/stdlib/commit/e9afc9f088654d14858df809aa8ee52a51f024df) - update import path for `Collection` type definition and refactor to use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-if-else-v0.1.0">

#### [@stdlib/utils/async/if-else](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/if-else)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-if-then-v0.1.0">

#### [@stdlib/utils/async/if-then](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/if-then)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-inmap-v0.1.0">

#### [@stdlib/utils/async/inmap](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/inmap)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`feb0880`](https://github.com/stdlib-js/stdlib/commit/feb0880e539b786a1b27d20be28348249bf3f604) - update import path for `Collection` type definition and refactor to use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-inmap-right-v0.1.0">

#### [@stdlib/utils/async/inmap-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/inmap-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`030ddd0`](https://github.com/stdlib-js/stdlib/commit/030ddd076adeb08373b919fed9a133f06254662c) - update import path for `Collection` type definition and refactor to use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-map-function-v0.1.0">

#### [@stdlib/utils/async/map-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/map-function)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-map-keys-v0.1.0">

#### [@stdlib/utils/async/map-keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/map-keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-map-values-v0.1.0">

#### [@stdlib/utils/async/map-values](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/map-values)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-none-by-v0.1.0">

#### [@stdlib/utils/async/none-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/none-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c1e09e2`](https://github.com/stdlib-js/stdlib/commit/c1e09e2883cec812a2ee4c254cc89b34aeab2059) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-none-by-right-v0.1.0">

#### [@stdlib/utils/async/none-by-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/none-by-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`7de06d8`](https://github.com/stdlib-js/stdlib/commit/7de06d8787ac72365d3ba9d29ac70d8ccbb069a0) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-reduce-v0.1.0">

#### [@stdlib/utils/async/reduce](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/reduce)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`5c93dea`](https://github.com/stdlib-js/stdlib/commit/5c93deadb44fe8f5597326c412d3ec005547efb2) - update import path for `Collection` type definition and refactor to use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-reduce-right-v0.1.0">

#### [@stdlib/utils/async/reduce-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/reduce-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`4dc4968`](https://github.com/stdlib-js/stdlib/commit/4dc496854221dcd17d43cfd10d9520580b618ecb) - update import path for `Collection` type definition and refactor to use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-series-waterfall-v0.1.0">

#### [@stdlib/utils/async/series-waterfall](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/series-waterfall)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-some-by-v0.1.0">

#### [@stdlib/utils/async/some-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/some-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`33fb7ed`](https://github.com/stdlib-js/stdlib/commit/33fb7ed1579343f4bff1f79c6948c7bf5439a2d5) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-some-by-right-v0.1.0">

#### [@stdlib/utils/async/some-by-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/some-by-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`6b80df1`](https://github.com/stdlib-js/stdlib/commit/6b80df17ce5a19ad19690c691ce00b79768f6ea7) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-tabulate-by-v0.1.0">

#### [@stdlib/utils/async/tabulate-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/tabulate-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`bc9c722`](https://github.com/stdlib-js/stdlib/commit/bc9c72243e2971b04b486b222f18712dfbb12961) - update import path for `Collection` type definition and use generics

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-try-catch-v0.1.0">

#### [@stdlib/utils/async/try-catch](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/try-catch)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-try-then-v0.1.0">

#### [@stdlib/utils/async/try-then](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/try-then)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-until-v0.1.0">

#### [@stdlib/utils/async/until](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/until)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-async-while-v0.1.0">

#### [@stdlib/utils/async/while](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/async/while)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-bifurcate-v0.1.0">

#### [@stdlib/utils/bifurcate](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/bifurcate)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`33f4a75`](https://github.com/stdlib-js/stdlib/commit/33f4a75335d0b81a893acbf77678d3b651fcb6d0) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-bifurcate-by-v0.1.0">

#### [@stdlib/utils/bifurcate-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/bifurcate-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b45ab4c`](https://github.com/stdlib-js/stdlib/commit/b45ab4c20205d15c590d5fd7084fa74f00795a38) - add missing `this` parameter
-   [`29bce60`](https://github.com/stdlib-js/stdlib/commit/29bce60bb13947ca6d336c6970954b491013b1e1) - add missing support for omitting a `returns` option
-   [`fcfd703`](https://github.com/stdlib-js/stdlib/commit/fcfd7038263c02980f2f8e635526ca66273d2f67) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-bifurcate-in-v0.1.0">

#### [@stdlib/utils/bifurcate-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/bifurcate-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-bifurcate-own-v0.1.0">

#### [@stdlib/utils/bifurcate-own](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/bifurcate-own)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-capitalize-keys-v0.1.0">

#### [@stdlib/utils/capitalize-keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/capitalize-keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-circular-buffer-v0.1.0">

#### [@stdlib/utils/circular-buffer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/circular-buffer)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`cb8dd54`](https://github.com/stdlib-js/stdlib/commit/cb8dd5415c30229fa3eb70ef8669323eea8922a0) - update import path for `Collection` type definition and improve types

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-common-keys-v0.1.0">

#### [@stdlib/utils/common-keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/common-keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-common-keys-in-v0.1.0">

#### [@stdlib/utils/common-keys-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/common-keys-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-compact-adjacency-matrix-v0.1.0">

#### [@stdlib/utils/compact-adjacency-matrix](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/compact-adjacency-matrix)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-compose-v0.1.0">

#### [@stdlib/utils/compose](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/compose)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-constant-function-v0.1.0">

#### [@stdlib/utils/constant-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/constant-function)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version
-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277) - improve definitions for type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277): improve definitions for type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-constructor-name-v0.1.0">

#### [@stdlib/utils/constructor-name](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/constructor-name)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-convert-path-v0.1.0">

#### [@stdlib/utils/convert-path](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/convert-path)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-copy-v0.1.0">

#### [@stdlib/utils/copy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/copy)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-count-by-v0.1.0">

#### [@stdlib/utils/count-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/count-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`21cddc4`](https://github.com/stdlib-js/stdlib/commit/21cddc47d6cde04976608ca363fb7b937d7f5fb5) - add missing `this` parameter
-   [`63445cd`](https://github.com/stdlib-js/stdlib/commit/63445cdacf11308b7cfcddc48cb40d4497d061e1) - set missing default type value
-   [`1185b24`](https://github.com/stdlib-js/stdlib/commit/1185b24060765164e1c5da1967c18d9f7a7b1e0f) - enhance type for `this` context
-   [`a5bc25a`](https://github.com/stdlib-js/stdlib/commit/a5bc25a773ba6af924107c8322acf3b8b9b3f21a) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-curry-v0.1.0">

#### [@stdlib/utils/curry](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/curry)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-curry-right-v0.1.0">

#### [@stdlib/utils/curry-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/curry-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-decorate-after-v0.1.0">

#### [@stdlib/utils/decorate-after](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/decorate-after)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-deep-get-v0.1.0">

#### [@stdlib/utils/deep-get](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/deep-get)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-deep-pluck-v0.1.0">

#### [@stdlib/utils/deep-pluck](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/deep-pluck)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-deep-set-v0.1.0">

#### [@stdlib/utils/deep-set](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/deep-set)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-configurable-read-only-accessor-v0.1.0">

#### [@stdlib/utils/define-configurable-read-only-accessor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-configurable-read-only-accessor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-configurable-read-only-property-v0.1.0">

#### [@stdlib/utils/define-configurable-read-only-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-configurable-read-only-property)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-configurable-read-write-accessor-v0.1.0">

#### [@stdlib/utils/define-configurable-read-write-accessor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-configurable-read-write-accessor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-configurable-write-only-accessor-v0.1.0">

#### [@stdlib/utils/define-configurable-write-only-accessor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-configurable-write-only-accessor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-memoized-configurable-read-only-property-v0.1.0">

#### [@stdlib/utils/define-memoized-configurable-read-only-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-memoized-configurable-read-only-property)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-memoized-property-v0.1.0">

#### [@stdlib/utils/define-memoized-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-memoized-property)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-memoized-read-only-property-v0.1.0">

#### [@stdlib/utils/define-memoized-read-only-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-memoized-read-only-property)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-nonenumerable-property-v0.1.0">

#### [@stdlib/utils/define-nonenumerable-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-nonenumerable-property)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-nonenumerable-read-only-accessor-v0.1.0">

#### [@stdlib/utils/define-nonenumerable-read-only-accessor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-nonenumerable-read-only-accessor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-nonenumerable-read-only-property-v0.1.0">

#### [@stdlib/utils/define-nonenumerable-read-only-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-nonenumerable-read-only-property)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-nonenumerable-read-write-accessor-v0.1.0">

#### [@stdlib/utils/define-nonenumerable-read-write-accessor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-nonenumerable-read-write-accessor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-nonenumerable-write-only-accessor-v0.1.0">

#### [@stdlib/utils/define-nonenumerable-write-only-accessor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-nonenumerable-write-only-accessor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-properties-v0.1.0">

#### [@stdlib/utils/define-properties](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-properties)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-property-v0.1.0">

#### [@stdlib/utils/define-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-property)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-read-only-accessor-v0.1.0">

#### [@stdlib/utils/define-read-only-accessor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-read-only-accessor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-read-only-property-v0.1.0">

#### [@stdlib/utils/define-read-only-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-read-only-property)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-read-write-accessor-v0.1.0">

#### [@stdlib/utils/define-read-write-accessor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-read-write-accessor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-define-write-only-accessor-v0.1.0">

#### [@stdlib/utils/define-write-only-accessor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/define-write-only-accessor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-dirname-v0.1.0">

#### [@stdlib/utils/dirname](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/dirname)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-do-until-v0.1.0">

#### [@stdlib/utils/do-until](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/do-until)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-do-until-each-v0.1.0">

#### [@stdlib/utils/do-until-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/do-until-each)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`312caf3`](https://github.com/stdlib-js/stdlib/commit/312caf3929069173b1c574e54b7276f340601c9a) - add missing `this` parameter
-   [`0481deb`](https://github.com/stdlib-js/stdlib/commit/0481deb4ea65c04ef733c89464d8c875beb8bde0) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-do-until-each-right-v0.1.0">

#### [@stdlib/utils/do-until-each-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/do-until-each-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`312caf3`](https://github.com/stdlib-js/stdlib/commit/312caf3929069173b1c574e54b7276f340601c9a) - add missing `this` parameter
-   [`2cc76dd`](https://github.com/stdlib-js/stdlib/commit/2cc76dd32b4145469a439fbd761c442a1ceed461) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-do-while-v0.1.0">

#### [@stdlib/utils/do-while](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/do-while)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-do-while-each-v0.1.0">

#### [@stdlib/utils/do-while-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/do-while-each)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`312caf3`](https://github.com/stdlib-js/stdlib/commit/312caf3929069173b1c574e54b7276f340601c9a) - add missing `this` parameter
-   [`73b6076`](https://github.com/stdlib-js/stdlib/commit/73b60762aa8b90f40955041f5fe2425393997061) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-do-while-each-right-v0.1.0">

#### [@stdlib/utils/do-while-each-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/do-while-each-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`312caf3`](https://github.com/stdlib-js/stdlib/commit/312caf3929069173b1c574e54b7276f340601c9a) - add missing `this` parameter
-   [`a151e17`](https://github.com/stdlib-js/stdlib/commit/a151e17ad2eb24f65e4f5cda0db93c8287d1e416) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-doubly-linked-list-v0.1.0">

#### [@stdlib/utils/doubly-linked-list](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/doubly-linked-list)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-dsv-v0.1.0">

#### [@stdlib/utils/dsv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/dsv)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-dsv-base-v0.1.0">

#### [@stdlib/utils/dsv/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/dsv/base)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-dsv-base-parse-v0.1.0">

#### [@stdlib/utils/dsv/base/parse](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/dsv/base/parse)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`9212514`](https://github.com/stdlib-js/stdlib/commit/9212514cd0ba9a681c2ca86ebe2fd3b61f866b64) - set correct package names and descriptions

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-entries-v0.1.0">

#### [@stdlib/utils/entries](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/entries)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-entries-in-v0.1.0">

#### [@stdlib/utils/entries-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/entries-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-enumerable-properties-v0.1.0">

#### [@stdlib/utils/enumerable-properties](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/enumerable-properties)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-enumerable-properties-in-v0.1.0">

#### [@stdlib/utils/enumerable-properties-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/enumerable-properties-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-enumerable-property-symbols-v0.1.0">

#### [@stdlib/utils/enumerable-property-symbols](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/enumerable-property-symbols)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-enumerable-property-symbols-in-v0.1.0">

#### [@stdlib/utils/enumerable-property-symbols-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/enumerable-property-symbols-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-escape-regexp-string-v0.1.0">

#### [@stdlib/utils/escape-regexp-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/escape-regexp-string)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-eval-v0.1.0">

#### [@stdlib/utils/eval](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/eval)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-every-v0.1.0">

#### [@stdlib/utils/every](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/every)

<details>

<section class="features">

##### Features

-   [`04518a7`](https://github.com/stdlib-js/stdlib/commit/04518a70bd76be49c16d0cc70c93f0ff304362b5) - increase minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b95f8bc`](https://github.com/stdlib-js/stdlib/commit/b95f8bc7893459462ccb7a180cddbb8a07dc2a76) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`04518a7`](https://github.com/stdlib-js/stdlib/commit/04518a70bd76be49c16d0cc70c93f0ff304362b5): increase minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-every-by-v0.1.0">

#### [@stdlib/utils/every-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/every-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`a11b904`](https://github.com/stdlib-js/stdlib/commit/a11b904f72cea90a52038f27acac29eabdc94696) - add missing `this` parameter
-   [`eaa6bdd`](https://github.com/stdlib-js/stdlib/commit/eaa6bdd35b5f78e9dba25d51a04b3070617ac7f1) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-every-by-right-v0.1.0">

#### [@stdlib/utils/every-by-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/every-by-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`a11b904`](https://github.com/stdlib-js/stdlib/commit/a11b904f72cea90a52038f27acac29eabdc94696) - add missing `this` parameter
-   [`1ddd642`](https://github.com/stdlib-js/stdlib/commit/1ddd642d08f7ec5bb55b3b148fef71997def4e54) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-extname-v0.1.0">

#### [@stdlib/utils/extname](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/extname)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-fifo-v0.1.0">

#### [@stdlib/utils/fifo](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/fifo)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-filter-arguments-v0.1.0">

#### [@stdlib/utils/filter-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/filter-arguments)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-find-v0.1.0">

#### [@stdlib/utils/find](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/find)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`4a9ce10`](https://github.com/stdlib-js/stdlib/commit/4a9ce10522aff3ae6f099bcc867c5f3d30dddef8) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-flatten-array-v0.1.0">

#### [@stdlib/utils/flatten-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/flatten-array)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-flatten-object-v0.1.0">

#### [@stdlib/utils/flatten-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/flatten-object)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-for-each-v0.1.0">

#### [@stdlib/utils/for-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/for-each)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`71f0dcb`](https://github.com/stdlib-js/stdlib/commit/71f0dcb8a2fe76df584bfc23b1195d6e55e8557f) - add missing `this` parameter
-   [`43265b3`](https://github.com/stdlib-js/stdlib/commit/43265b30f6843258cfe15b7efd6306220a23c1a9) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-for-each-right-v0.1.0">

#### [@stdlib/utils/for-each-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/for-each-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`71f0dcb`](https://github.com/stdlib-js/stdlib/commit/71f0dcb8a2fe76df584bfc23b1195d6e55e8557f) - add missing `this` parameter
-   [`41a3c74`](https://github.com/stdlib-js/stdlib/commit/41a3c74e7d025bb804c773fe69d33bd79393ccb1) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-for-in-v0.1.0">

#### [@stdlib/utils/for-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/for-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-for-own-v0.1.0">

#### [@stdlib/utils/for-own](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/for-own)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-from-entries-v0.1.0">

#### [@stdlib/utils/from-entries](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/from-entries)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-function-name-v0.1.0">

#### [@stdlib/utils/function-name](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/function-name)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-function-sequence-v0.1.0">

#### [@stdlib/utils/function-sequence](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/function-sequence)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-get-prototype-of-v0.1.0">

#### [@stdlib/utils/get-prototype-of](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/get-prototype-of)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-global-v0.1.0">

#### [@stdlib/utils/global](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/global)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-group-v0.1.0">

#### [@stdlib/utils/group](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/group)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`54fc8e7`](https://github.com/stdlib-js/stdlib/commit/54fc8e7e4d109f1fdd2cd85b2c21e08794d4dbb1) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-group-by-v0.1.0">

#### [@stdlib/utils/group-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/group-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`aec2475`](https://github.com/stdlib-js/stdlib/commit/aec24756acf532d2565ef5561d5c7f9e67d8639a) - add missing `this` parameter
-   [`cbdc02b`](https://github.com/stdlib-js/stdlib/commit/cbdc02b1b3febae34e4df2358913fbf55d2365f2) - add missing support for omitting a `returns` option
-   [`1bf88f1`](https://github.com/stdlib-js/stdlib/commit/1bf88f1a75366df27e02072018699487680ab597) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-group-in-v0.1.0">

#### [@stdlib/utils/group-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/group-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-group-own-v0.1.0">

#### [@stdlib/utils/group-own](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/group-own)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-identity-function-v0.1.0">

#### [@stdlib/utils/identity-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/identity-function)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version
-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277) - improve definitions for type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277): improve definitions for type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-if-else-v0.1.0">

#### [@stdlib/utils/if-else](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/if-else)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version
-   [`d92d0a7`](https://github.com/stdlib-js/stdlib/commit/d92d0a71bb32d41bea354d0e3e3dc0bbd2cc9839) - improve definition for type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`d92d0a7`](https://github.com/stdlib-js/stdlib/commit/d92d0a71bb32d41bea354d0e3e3dc0bbd2cc9839): improve definition for type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-if-then-v0.1.0">

#### [@stdlib/utils/if-then](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/if-then)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version
-   [`becc613`](https://github.com/stdlib-js/stdlib/commit/becc613f1dd47053e3b5b100adfa4769402dc51f) - improve definition for type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`becc613`](https://github.com/stdlib-js/stdlib/commit/becc613f1dd47053e3b5b100adfa4769402dc51f): improve definition for type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-index-of-v0.1.0">

#### [@stdlib/utils/index-of](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/index-of)

<details>

<section class="features">

##### Features

-   [`3363cce`](https://github.com/stdlib-js/stdlib/commit/3363cce2161db6711181a527e124f34de49cf48d) - increase minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`4e1f4b3`](https://github.com/stdlib-js/stdlib/commit/4e1f4b3490e6df7ad9f06a1335d42a89623d03dc) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3363cce`](https://github.com/stdlib-js/stdlib/commit/3363cce2161db6711181a527e124f34de49cf48d): increase minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherit-v0.1.0">

#### [@stdlib/utils/inherit](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherit)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-enumerable-properties-v0.1.0">

#### [@stdlib/utils/inherited-enumerable-properties](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-enumerable-properties)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-enumerable-property-symbols-v0.1.0">

#### [@stdlib/utils/inherited-enumerable-property-symbols](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-enumerable-property-symbols)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-keys-v0.1.0">

#### [@stdlib/utils/inherited-keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-nonenumerable-properties-v0.1.0">

#### [@stdlib/utils/inherited-nonenumerable-properties](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-nonenumerable-properties)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-nonenumerable-property-names-v0.1.0">

#### [@stdlib/utils/inherited-nonenumerable-property-names](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-nonenumerable-property-names)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-nonenumerable-property-symbols-v0.1.0">

#### [@stdlib/utils/inherited-nonenumerable-property-symbols](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-nonenumerable-property-symbols)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-properties-v0.1.0">

#### [@stdlib/utils/inherited-properties](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-properties)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-property-descriptor-v0.1.0">

#### [@stdlib/utils/inherited-property-descriptor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-property-descriptor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-property-descriptors-v0.1.0">

#### [@stdlib/utils/inherited-property-descriptors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-property-descriptors)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-property-names-v0.1.0">

#### [@stdlib/utils/inherited-property-names](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-property-names)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-property-symbols-v0.1.0">

#### [@stdlib/utils/inherited-property-symbols](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-property-symbols)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-writable-properties-v0.1.0">

#### [@stdlib/utils/inherited-writable-properties](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-writable-properties)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-writable-property-names-v0.1.0">

#### [@stdlib/utils/inherited-writable-property-names](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-writable-property-names)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inherited-writable-property-symbols-v0.1.0">

#### [@stdlib/utils/inherited-writable-property-symbols](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inherited-writable-property-symbols)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inmap-v0.1.0">

#### [@stdlib/utils/inmap](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inmap)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`72357fb`](https://github.com/stdlib-js/stdlib/commit/72357fb30adaf6e00a4d176f0bd8a14f339e6370) - add missing `this` parameter
-   [`53723e9`](https://github.com/stdlib-js/stdlib/commit/53723e9e9a521c6b43893383a09433626f9a5d0e) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-inmap-right-v0.1.0">

#### [@stdlib/utils/inmap-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/inmap-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`72357fb`](https://github.com/stdlib-js/stdlib/commit/72357fb30adaf6e00a4d176f0bd8a14f339e6370) - add missing `this` parameter
-   [`f41e1b6`](https://github.com/stdlib-js/stdlib/commit/f41e1b68ded2c1e5d6c39028e32bd0f0c7e75e65) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-key-by-v0.1.0">

#### [@stdlib/utils/key-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/key-by)

<details>

<section class="features">

##### Features

-   [`701fffc`](https://github.com/stdlib-js/stdlib/commit/701fffc7e3ff3b63c1fc1ad3bafa78017ccaea6d) - switch order of generic input types
-   [`1147e6a`](https://github.com/stdlib-js/stdlib/commit/1147e6a6756955b23b9b3f0c12ca834d2b5b3273) - refactor for added type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`701fffc`](https://github.com/stdlib-js/stdlib/commit/701fffc7e3ff3b63c1fc1ad3bafa78017ccaea6d): switch order of generic input types

    -   To migrate, users should update their type definitions accordingly.

-   [`1147e6a`](https://github.com/stdlib-js/stdlib/commit/1147e6a6756955b23b9b3f0c12ca834d2b5b3273): refactor for added type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-key-by-right-v0.1.0">

#### [@stdlib/utils/key-by-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/key-by-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`a18bf17`](https://github.com/stdlib-js/stdlib/commit/a18bf17ecfd9d333f1705f7f5838b63efe8dfcbe) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-keys-v0.1.0">

#### [@stdlib/utils/keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-keys-in-v0.1.0">

#### [@stdlib/utils/keys-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/keys-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-linked-list-v0.1.0">

#### [@stdlib/utils/linked-list](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/linked-list)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-lowercase-keys-v0.1.0">

#### [@stdlib/utils/lowercase-keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/lowercase-keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map-v0.1.0">

#### [@stdlib/utils/map](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`99e61ba`](https://github.com/stdlib-js/stdlib/commit/99e61ba8044535dc5aec73c684a652bbab4541c4) - add missing `this` parameter
-   [`2654159`](https://github.com/stdlib-js/stdlib/commit/26541597a65d088b3141cdc1f1e9800fd3c47304) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map-arguments-v0.1.0">

#### [@stdlib/utils/map-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map-arguments)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map-function-v0.1.0">

#### [@stdlib/utils/map-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map-function)

<details>

<section class="features">

##### Features

-   [`b92f33c`](https://github.com/stdlib-js/stdlib/commit/b92f33c2acfe6732882688ecf98602f29149abbb) - improve type specificity
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`43949fc`](https://github.com/stdlib-js/stdlib/commit/43949fcc42c41a9b62f2136835afecea8b70e294) - add missing `this` parameter

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map-keys-v0.1.0">

#### [@stdlib/utils/map-keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map-keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map-reduce-v0.1.0">

#### [@stdlib/utils/map-reduce](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map-reduce)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`cb52e02`](https://github.com/stdlib-js/stdlib/commit/cb52e0271914a717355ba2b37c1b702771eb141a) - update import path for `Collection` type definition and improve type specificity

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map-reduce-right-v0.1.0">

#### [@stdlib/utils/map-reduce-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map-reduce-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`4ff0c5a`](https://github.com/stdlib-js/stdlib/commit/4ff0c5a46aaca21237522f26e030aaefb19bb7be) - update import path for `Collection` type definition and improve type specificity

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map-right-v0.1.0">

#### [@stdlib/utils/map-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ac2c729`](https://github.com/stdlib-js/stdlib/commit/ac2c7294915dce638395d1bf3aa405a55159049d) - add missing `this` parameter
-   [`ed797c1`](https://github.com/stdlib-js/stdlib/commit/ed797c100bfb7987175b2fc085be2e73b9fc9bf2) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map-values-v0.1.0">

#### [@stdlib/utils/map-values](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map-values)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map2-v0.1.0">

#### [@stdlib/utils/map2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map2)

<details>

<section class="features">

##### Features

-   [`762c44f`](https://github.com/stdlib-js/stdlib/commit/762c44f2d442ad099b10dae4635e8c29a5c6b328) - update callback signature
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`762c44f`](https://github.com/stdlib-js/stdlib/commit/762c44f2d442ad099b10dae4635e8c29a5c6b328): consolidate array arguments into a single argument

    -   To migrate, users should access the input arrays via the fourth
        argument, where the first element is the first input array and the
        second element is the second input array.

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map2-right-v0.1.0">

#### [@stdlib/utils/map2-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map2-right)

<details>

<section class="features">

##### Features

-   [`c1eaf9b`](https://github.com/stdlib-js/stdlib/commit/c1eaf9b48f73112af77d774084caf5a27e2d47e9) - update callback signature
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`c1eaf9b`](https://github.com/stdlib-js/stdlib/commit/c1eaf9b48f73112af77d774084caf5a27e2d47e9): consolidate array arguments into a single argument

    -   To migrate, users should access the input arrays via the fourth
        argument, where the first element is the first input array and the
        second element is the second input array.

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map2d-v0.1.0">

#### [@stdlib/utils/map2d](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map2d)

<details>

<section class="features">

##### Features

-   [`3a07602`](https://github.com/stdlib-js/stdlib/commit/3a0760275c57c5b61dd748cf825c7146b2b7d619) - consolidate callback arguments
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3a07602`](https://github.com/stdlib-js/stdlib/commit/3a0760275c57c5b61dd748cf825c7146b2b7d619): provide index arguments as an array

    -   To migrate, users should access the indices for the first and second
        dimension by accessing the respective elements in an index array
        argument, which is provided to the callback function upon invocation.

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map3d-v0.1.0">

#### [@stdlib/utils/map3d](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map3d)

<details>

<section class="features">

##### Features

-   [`a6be89b`](https://github.com/stdlib-js/stdlib/commit/a6be89ba51bb22516e4e10483bc0086be648d81b) - consolidate callback arguments
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`a6be89b`](https://github.com/stdlib-js/stdlib/commit/a6be89ba51bb22516e4e10483bc0086be648d81b): provide index arguments as an array

    -   To migrate, users should access the indices for the various dimensions
        by accessing the respective elements in an index array argument, which
        is provided to the callback function upon invocation.

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map4d-v0.1.0">

#### [@stdlib/utils/map4d](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map4d)

<details>

<section class="features">

##### Features

-   [`32a4165`](https://github.com/stdlib-js/stdlib/commit/32a4165d91ab7fc60dc843d619fb3ce472fb5618) - consolidate callback arguments
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`32a4165`](https://github.com/stdlib-js/stdlib/commit/32a4165d91ab7fc60dc843d619fb3ce472fb5618): provide index arguments as an array

    -   To migrate, users should access the indices for the various dimensions
        by accessing the respective elements in an index array argument, which
        is provided to the callback function upon invocation.

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-map5d-v0.1.0">

#### [@stdlib/utils/map5d](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/map5d)

<details>

<section class="features">

##### Features

-   [`6ba83db`](https://github.com/stdlib-js/stdlib/commit/6ba83db94da9a5611126becdd83d5a3a0c3b73d7) - consolidate callback arguments
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`6ba83db`](https://github.com/stdlib-js/stdlib/commit/6ba83db94da9a5611126becdd83d5a3a0c3b73d7): provide index arguments as an array

    -   To migrate, users should access the indices for the various dimensions
        by accessing the respective elements in an index array argument, which
        is provided to the callback function upon invocation.

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-mask-arguments-v0.1.0">

#### [@stdlib/utils/mask-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/mask-arguments)

<details>

<section class="features">

##### Features

-   [`e62998d`](https://github.com/stdlib-js/stdlib/commit/e62998da4db17224516ba67fdc0d04a4baec83c9) - increase minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`2de0332`](https://github.com/stdlib-js/stdlib/commit/2de03325135024e1a1922d8bb166a95d6efde18d) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`e62998d`](https://github.com/stdlib-js/stdlib/commit/e62998da4db17224516ba67fdc0d04a4baec83c9): increase minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-memoize-v0.1.0">

#### [@stdlib/utils/memoize](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/memoize)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-merge-v0.1.0">

#### [@stdlib/utils/merge](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/merge)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-move-property-v0.1.0">

#### [@stdlib/utils/move-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/move-property)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-named-typed-tuple-v0.1.0">

#### [@stdlib/utils/named-typed-tuple](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/named-typed-tuple)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-nary-function-v0.1.0">

#### [@stdlib/utils/nary-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/nary-function)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-native-class-v0.1.0">

#### [@stdlib/utils/native-class](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/native-class)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-next-tick-v0.1.0">

#### [@stdlib/utils/next-tick](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/next-tick)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-none-v0.1.0">

#### [@stdlib/utils/none](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/none)

<details>

<section class="features">

##### Features

-   [`136dea5`](https://github.com/stdlib-js/stdlib/commit/136dea56f5aed5bee2daa1b135afedd9f10ddb89) - increase minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`7e5ef6d`](https://github.com/stdlib-js/stdlib/commit/7e5ef6d515bec20acfba5b040442e95eda1f63b4) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`136dea5`](https://github.com/stdlib-js/stdlib/commit/136dea56f5aed5bee2daa1b135afedd9f10ddb89): increase minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-none-by-v0.1.0">

#### [@stdlib/utils/none-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/none-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`195a63e`](https://github.com/stdlib-js/stdlib/commit/195a63e3480cbda8994d60c69839343ddab652cb) - add missing `this` parameter
-   [`5b60a40`](https://github.com/stdlib-js/stdlib/commit/5b60a40c28a92651623f0274ae34bf53f82aef60) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-none-by-right-v0.1.0">

#### [@stdlib/utils/none-by-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/none-by-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`195a63e`](https://github.com/stdlib-js/stdlib/commit/195a63e3480cbda8994d60c69839343ddab652cb) - add missing `this` parameter
-   [`ceabc3b`](https://github.com/stdlib-js/stdlib/commit/ceabc3b509711945de3ecfe2348f54e25937b02b) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-nonenumerable-properties-v0.1.0">

#### [@stdlib/utils/nonenumerable-properties](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/nonenumerable-properties)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-nonenumerable-properties-in-v0.1.0">

#### [@stdlib/utils/nonenumerable-properties-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/nonenumerable-properties-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-nonenumerable-property-names-v0.1.0">

#### [@stdlib/utils/nonenumerable-property-names](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/nonenumerable-property-names)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-nonenumerable-property-names-in-v0.1.0">

#### [@stdlib/utils/nonenumerable-property-names-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/nonenumerable-property-names-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-nonenumerable-property-symbols-v0.1.0">

#### [@stdlib/utils/nonenumerable-property-symbols](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/nonenumerable-property-symbols)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-nonenumerable-property-symbols-in-v0.1.0">

#### [@stdlib/utils/nonenumerable-property-symbols-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/nonenumerable-property-symbols-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-nonindex-keys-v0.1.0">

#### [@stdlib/utils/nonindex-keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/nonindex-keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-noop-v0.1.0">

#### [@stdlib/utils/noop](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/noop)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-object-inverse-v0.1.0">

#### [@stdlib/utils/object-inverse](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/object-inverse)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-object-inverse-by-v0.1.0">

#### [@stdlib/utils/object-inverse-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/object-inverse-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-omit-v0.1.0">

#### [@stdlib/utils/omit](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/omit)

<details>

<section class="features">

##### Features

-   [`10ab1e7`](https://github.com/stdlib-js/stdlib/commit/10ab1e71cfce96df534b70874166890754b7d839) - refactor declaration for added type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`10ab1e7`](https://github.com/stdlib-js/stdlib/commit/10ab1e71cfce96df534b70874166890754b7d839): refactor declaration for added type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-omit-by-v0.1.0">

#### [@stdlib/utils/omit-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/omit-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version
-   [`5edaa45`](https://github.com/stdlib-js/stdlib/commit/5edaa451c3d0ec114eab2640bde05cb09e1d97d4) - refactor for added type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`5edaa45`](https://github.com/stdlib-js/stdlib/commit/5edaa451c3d0ec114eab2640bde05cb09e1d97d4): refactor for added type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-open-url-v0.1.0">

#### [@stdlib/utils/open-url](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/open-url)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-papply-v0.1.0">

#### [@stdlib/utils/papply](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/papply)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-papply-right-v0.1.0">

#### [@stdlib/utils/papply-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/papply-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-parallel-v0.1.0">

#### [@stdlib/utils/parallel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/parallel)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-parse-json-v0.1.0">

#### [@stdlib/utils/parse-json](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/parse-json)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-pick-v0.1.0">

#### [@stdlib/utils/pick](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/pick)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-pick-arguments-v0.1.0">

#### [@stdlib/utils/pick-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/pick-arguments)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-pick-by-v0.1.0">

#### [@stdlib/utils/pick-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/pick-by)

<details>

<section class="features">

##### Features

-   [`5c70f69`](https://github.com/stdlib-js/stdlib/commit/5c70f699fe056e550029f30f6c8a12c26200c1df) - use generics for type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5c70f69`](https://github.com/stdlib-js/stdlib/commit/5c70f699fe056e550029f30f6c8a12c26200c1df): use generics for type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-pluck-v0.1.0">

#### [@stdlib/utils/pluck](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/pluck)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-pop-v0.1.0">

#### [@stdlib/utils/pop](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/pop)

<details>

<section class="features">

##### Features

-   [`2558991`](https://github.com/stdlib-js/stdlib/commit/255899189d60b13e6c55b6457f14e70cebe2efef) - increase minimum TypeScript version
-   [`0fff7dc`](https://github.com/stdlib-js/stdlib/commit/0fff7dc03ced4c21e7bf7c5e164f50a28f6ab5e4) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c069f30`](https://github.com/stdlib-js/stdlib/commit/c069f30d1d208589c8a06d164e3545edeee98b37) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`2558991`](https://github.com/stdlib-js/stdlib/commit/255899189d60b13e6c55b6457f14e70cebe2efef): increase minimum TypeScript version
-   [`0fff7dc`](https://github.com/stdlib-js/stdlib/commit/0fff7dc03ced4c21e7bf7c5e164f50a28f6ab5e4): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-prepend-v0.1.0">

#### [@stdlib/utils/prepend](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/prepend)

<details>

<section class="features">

##### Features

-   [`609eec4`](https://github.com/stdlib-js/stdlib/commit/609eec4bab7ae96c8b733046e97c724eb55fdd71) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`d5b607b`](https://github.com/stdlib-js/stdlib/commit/d5b607b0518407e3e1924723fba67497b003d2f4) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`609eec4`](https://github.com/stdlib-js/stdlib/commit/609eec4bab7ae96c8b733046e97c724eb55fdd71): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-properties-v0.1.0">

#### [@stdlib/utils/properties](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/properties)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-properties-in-v0.1.0">

#### [@stdlib/utils/properties-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/properties-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-property-descriptor-v0.1.0">

#### [@stdlib/utils/property-descriptor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/property-descriptor)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-property-descriptor-in-v0.1.0">

#### [@stdlib/utils/property-descriptor-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/property-descriptor-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-property-descriptors-v0.1.0">

#### [@stdlib/utils/property-descriptors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/property-descriptors)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-property-descriptors-in-v0.1.0">

#### [@stdlib/utils/property-descriptors-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/property-descriptors-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-property-names-v0.1.0">

#### [@stdlib/utils/property-names](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/property-names)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-property-names-in-v0.1.0">

#### [@stdlib/utils/property-names-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/property-names-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-property-symbols-v0.1.0">

#### [@stdlib/utils/property-symbols](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/property-symbols)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-property-symbols-in-v0.1.0">

#### [@stdlib/utils/property-symbols-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/property-symbols-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-push-v0.1.0">

#### [@stdlib/utils/push](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/push)

<details>

<section class="features">

##### Features

-   [`8029fec`](https://github.com/stdlib-js/stdlib/commit/8029fec506ed2a501af25e63f724ca08ad12a615) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`7a8ca35`](https://github.com/stdlib-js/stdlib/commit/7a8ca35382cabcd7ea1b3541ec46620aa727013d) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8029fec`](https://github.com/stdlib-js/stdlib/commit/8029fec506ed2a501af25e63f724ca08ad12a615): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-real-max-v0.1.0">

#### [@stdlib/utils/real-max](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/real-max)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-real-min-v0.1.0">

#### [@stdlib/utils/real-min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/real-min)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-reduce-v0.1.0">

#### [@stdlib/utils/reduce](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/reduce)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`90b28d6`](https://github.com/stdlib-js/stdlib/commit/90b28d6e257dc731e846a16029768d3af57d1082) - update import path for `Collection` type definition and improve type specificity

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-reduce-right-v0.1.0">

#### [@stdlib/utils/reduce-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/reduce-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`67b5d37`](https://github.com/stdlib-js/stdlib/commit/67b5d37284f61bb52b53ebf3f30ed64c3436870d) - update import path for `Collection` type definition and improve type specificity

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-reduce2d-v0.1.0">

#### [@stdlib/utils/reduce2d](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/reduce2d)

<details>

<section class="features">

##### Features

-   [`f270c07`](https://github.com/stdlib-js/stdlib/commit/f270c078cd4394120cb3cf2d92a9b02892052fe8) - update callback signature
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`f270c07`](https://github.com/stdlib-js/stdlib/commit/f270c078cd4394120cb3cf2d92a9b02892052fe8): consolidate index arguments into a single argument

    -   To migrate, users should access the array element indices via the third
        argument, where the first element is the first array dimension index and the
        second element is the second array dimension index.

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-regexp-from-string-v0.1.0">

#### [@stdlib/utils/regexp-from-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/regexp-from-string)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-reject-arguments-v0.1.0">

#### [@stdlib/utils/reject-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/reject-arguments)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-reorder-arguments-v0.1.0">

#### [@stdlib/utils/reorder-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/reorder-arguments)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-reverse-arguments-v0.1.0">

#### [@stdlib/utils/reverse-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/reverse-arguments)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-safe-int-max-v0.1.0">

#### [@stdlib/utils/safe-int-max](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/safe-int-max)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-safe-int-min-v0.1.0">

#### [@stdlib/utils/safe-int-min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/safe-int-min)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-shift-v0.1.0">

#### [@stdlib/utils/shift](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/shift)

<details>

<section class="features">

##### Features

-   [`6fe818a`](https://github.com/stdlib-js/stdlib/commit/6fe818a2c2704f86939ca37c178ecaaaa7cb7118) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff4c195`](https://github.com/stdlib-js/stdlib/commit/ff4c1957c999b16635d7388fe37299f8b94f7e5c) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`6fe818a`](https://github.com/stdlib-js/stdlib/commit/6fe818a2c2704f86939ca37c178ecaaaa7cb7118): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-size-of-v0.1.0">

#### [@stdlib/utils/size-of](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/size-of)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-some-v0.1.0">

#### [@stdlib/utils/some](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/some)

<details>

<section class="features">

##### Features

-   [`3959f83`](https://github.com/stdlib-js/stdlib/commit/3959f834656eeeab8a21397b360e93ccfaaa7721) - increase minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c7f71aa`](https://github.com/stdlib-js/stdlib/commit/c7f71aa3fbe517bdbbc7a7fa017597f46938c85e) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3959f83`](https://github.com/stdlib-js/stdlib/commit/3959f834656eeeab8a21397b360e93ccfaaa7721): increase minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-some-by-v0.1.0">

#### [@stdlib/utils/some-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/some-by)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`3a20d0d`](https://github.com/stdlib-js/stdlib/commit/3a20d0d370d4a956adf22835076a5420e54af364) - add missing `this` parameter
-   [`ad90d49`](https://github.com/stdlib-js/stdlib/commit/ad90d49a0b23da4df7dade0b8e5b4e50b10a580a) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-some-by-right-v0.1.0">

#### [@stdlib/utils/some-by-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/some-by-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`3a20d0d`](https://github.com/stdlib-js/stdlib/commit/3a20d0d370d4a956adf22835076a5420e54af364) - add missing `this` parameter
-   [`b423df5`](https://github.com/stdlib-js/stdlib/commit/b423df535144d071f50f8ffde064840fe38cf130) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-stack-v0.1.0">

#### [@stdlib/utils/stack](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/stack)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-tabulate-v0.1.0">

#### [@stdlib/utils/tabulate](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/tabulate)

<details>

<section class="features">

##### Features

-   [`4d4c295`](https://github.com/stdlib-js/stdlib/commit/4d4c29512a4d6eb3ba12e76aa266ea47822e82cc) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`71dd315`](https://github.com/stdlib-js/stdlib/commit/71dd31521048ed99b8ed50a4e181fa93a75f0d07) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`4d4c295`](https://github.com/stdlib-js/stdlib/commit/4d4c29512a4d6eb3ba12e76aa266ea47822e82cc): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-tabulate-by-v0.1.0">

#### [@stdlib/utils/tabulate-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/tabulate-by)

<details>

<section class="features">

##### Features

-   [`33b1a9e`](https://github.com/stdlib-js/stdlib/commit/33b1a9eebbfdae2784f5a49be9c56b8b8fc9bc65) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c5cfac0`](https://github.com/stdlib-js/stdlib/commit/c5cfac0c621b13d7d6b2f15380d36726f861045d) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`33b1a9e`](https://github.com/stdlib-js/stdlib/commit/33b1a9eebbfdae2784f5a49be9c56b8b8fc9bc65): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-thunk-v0.1.0">

#### [@stdlib/utils/thunk](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/thunk)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-timeit-v0.1.0">

#### [@stdlib/utils/timeit](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/timeit)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-try-catch-v0.1.0">

#### [@stdlib/utils/try-catch](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/try-catch)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version
-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277) - improve definitions for type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277): improve definitions for type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-try-function-v0.1.0">

#### [@stdlib/utils/try-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/try-function)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-try-require-v0.1.0">

#### [@stdlib/utils/try-require](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/try-require)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-try-then-v0.1.0">

#### [@stdlib/utils/try-then](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/try-then)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version
-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277) - improve definitions for type safety

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`d2c1aee`](https://github.com/stdlib-js/stdlib/commit/d2c1aee465676ae680d4c055e5a4f6d288ed4eef) - allow type of error handler return value to differ

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277): improve definitions for type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-type-max-v0.1.0">

#### [@stdlib/utils/type-max](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/type-max)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-type-min-v0.1.0">

#### [@stdlib/utils/type-min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/type-min)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-type-of-v0.1.0">

#### [@stdlib/utils/type-of](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/type-of)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-uncapitalize-keys-v0.1.0">

#### [@stdlib/utils/uncapitalize-keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/uncapitalize-keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-uncurry-v0.1.0">

#### [@stdlib/utils/uncurry](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/uncurry)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-uncurry-right-v0.1.0">

#### [@stdlib/utils/uncurry-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/uncurry-right)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-unshift-v0.1.0">

#### [@stdlib/utils/unshift](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/unshift)

<details>

<section class="features">

##### Features

-   [`5238516`](https://github.com/stdlib-js/stdlib/commit/52385165887a527340ca95059ba3ee4502af9b42) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c96c6e0`](https://github.com/stdlib-js/stdlib/commit/c96c6e08ce946cef9b820ee8de3cb5c38cbb3c79) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5238516`](https://github.com/stdlib-js/stdlib/commit/52385165887a527340ca95059ba3ee4502af9b42): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-until-v0.1.0">

#### [@stdlib/utils/until](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/until)

<details>

<section class="features">

##### Features

-   [`2bb4efe`](https://github.com/stdlib-js/stdlib/commit/2bb4efeeed71045d67f599a65eb5edc493ab849e) - improve type specificity for `thisArg`
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-until-each-v0.1.0">

#### [@stdlib/utils/until-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/until-each)

<details>

<section class="features">

##### Features

-   [`069c10d`](https://github.com/stdlib-js/stdlib/commit/069c10d99850d8ec51e7764d2266ed34405ff542) - increase minimum TypeScript version
-   [`5cf30d1`](https://github.com/stdlib-js/stdlib/commit/5cf30d1a059e3fd6fdafa0e327a148d64f9d002e) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`3f58bf9`](https://github.com/stdlib-js/stdlib/commit/3f58bf96d366a7c2dd0e70813f52cc5e22fa83c1) - add missing `this` parameter
-   [`e91b8c5`](https://github.com/stdlib-js/stdlib/commit/e91b8c59c2b088959b0233b2f62a9b340989e817) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`069c10d`](https://github.com/stdlib-js/stdlib/commit/069c10d99850d8ec51e7764d2266ed34405ff542): increase minimum TypeScript version
-   [`5cf30d1`](https://github.com/stdlib-js/stdlib/commit/5cf30d1a059e3fd6fdafa0e327a148d64f9d002e): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-until-each-right-v0.1.0">

#### [@stdlib/utils/until-each-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/until-each-right)

<details>

<section class="features">

##### Features

-   [`11dfa3a`](https://github.com/stdlib-js/stdlib/commit/11dfa3ad7fc6619b73e5a79ffa0c509f94170203) - increase minimum TypeScript version
-   [`c928438`](https://github.com/stdlib-js/stdlib/commit/c928438efd2dcb945212f8ff96d0a4595f0a35b8) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`3f58bf9`](https://github.com/stdlib-js/stdlib/commit/3f58bf96d366a7c2dd0e70813f52cc5e22fa83c1) - add missing `this` parameter
-   [`ccc993b`](https://github.com/stdlib-js/stdlib/commit/ccc993b3aed2401eb4fd94d49da2e27631c9c0e1) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`11dfa3a`](https://github.com/stdlib-js/stdlib/commit/11dfa3ad7fc6619b73e5a79ffa0c509f94170203): increase minimum TypeScript version
-   [`c928438`](https://github.com/stdlib-js/stdlib/commit/c928438efd2dcb945212f8ff96d0a4595f0a35b8): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-unzip-v0.1.0">

#### [@stdlib/utils/unzip](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/unzip)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-uppercase-keys-v0.1.0">

#### [@stdlib/utils/uppercase-keys](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/uppercase-keys)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-values-v0.1.0">

#### [@stdlib/utils/values](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/values)

<details>

<section class="features">

##### Features

-   [`a23de41`](https://github.com/stdlib-js/stdlib/commit/a23de41de4280e8d1291a87c50af5c07e9b5ae54) - refactor declaration for added type safety

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`a23de41`](https://github.com/stdlib-js/stdlib/commit/a23de41de4280e8d1291a87c50af5c07e9b5ae54): refactor declaration for added type safety

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-values-in-v0.1.0">

#### [@stdlib/utils/values-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/values-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-while-v0.1.0">

#### [@stdlib/utils/while](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/while)

<details>

<section class="features">

##### Features

-   [`d97df70`](https://github.com/stdlib-js/stdlib/commit/d97df70e5296503247dcab0485e1e6b58929cb61) - fix parameter order and ensure type safety of this context

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`d97df70`](https://github.com/stdlib-js/stdlib/commit/d97df70e5296503247dcab0485e1e6b58929cb61): fix parameter order and ensure type safety of this context

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-while-each-v0.1.0">

#### [@stdlib/utils/while-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/while-each)

<details>

<section class="features">

##### Features

-   [`79c74b3`](https://github.com/stdlib-js/stdlib/commit/79c74b361f7032a948481650a8b9b21644783415) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`0216d80`](https://github.com/stdlib-js/stdlib/commit/0216d80f92d2a52741d2243c3bf759f1c82d0f1a) - add missing `this` parameter
-   [`1fc4de2`](https://github.com/stdlib-js/stdlib/commit/1fc4de2f10bfe2a24b14a6326658bbb5d93fe65a) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`79c74b3`](https://github.com/stdlib-js/stdlib/commit/79c74b361f7032a948481650a8b9b21644783415): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-while-each-right-v0.1.0">

#### [@stdlib/utils/while-each-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/while-each-right)

<details>

<section class="features">

##### Features

-   [`97b7144`](https://github.com/stdlib-js/stdlib/commit/97b7144bdcd3c520688549a483601f67491066ea) - increase minimum TypeScript version
-   [`26f6fb2`](https://github.com/stdlib-js/stdlib/commit/26f6fb251d4612dbaa5c3f67b65ec006bddc10db) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`0216d80`](https://github.com/stdlib-js/stdlib/commit/0216d80f92d2a52741d2243c3bf759f1c82d0f1a) - add missing `this` parameter
-   [`e92f470`](https://github.com/stdlib-js/stdlib/commit/e92f4707c25e7272845551f3daae70b3d86591b6) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`97b7144`](https://github.com/stdlib-js/stdlib/commit/97b7144bdcd3c520688549a483601f67491066ea): increase minimum TypeScript version
-   [`26f6fb2`](https://github.com/stdlib-js/stdlib/commit/26f6fb251d4612dbaa5c3f67b65ec006bddc10db): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-writable-properties-v0.1.0">

#### [@stdlib/utils/writable-properties](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/writable-properties)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-writable-properties-in-v0.1.0">

#### [@stdlib/utils/writable-properties-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/writable-properties-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-writable-property-names-v0.1.0">

#### [@stdlib/utils/writable-property-names](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/writable-property-names)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-writable-property-names-in-v0.1.0">

#### [@stdlib/utils/writable-property-names-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/writable-property-names-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-writable-property-symbols-v0.1.0">

#### [@stdlib/utils/writable-property-symbols](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/writable-property-symbols)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-writable-property-symbols-in-v0.1.0">

#### [@stdlib/utils/writable-property-symbols-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/writable-property-symbols-in)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="utils-zip-v0.1.0">

#### [@stdlib/utils/zip](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/zip)

<details>

<section class="features">

##### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`6ba83db`](https://github.com/stdlib-js/stdlib/commit/6ba83db94da9a5611126becdd83d5a3a0c3b73d7): provide index arguments as an array

    -   To migrate, users should access the indices for the various dimensions
        by accessing the respective elements in an index array argument, which
        is provided to the callback function upon invocation.

-   [`32a4165`](https://github.com/stdlib-js/stdlib/commit/32a4165d91ab7fc60dc843d619fb3ce472fb5618): provide index arguments as an array

    -   To migrate, users should access the indices for the various dimensions
        by accessing the respective elements in an index array argument, which
        is provided to the callback function upon invocation.

-   [`a6be89b`](https://github.com/stdlib-js/stdlib/commit/a6be89ba51bb22516e4e10483bc0086be648d81b): provide index arguments as an array

    -   To migrate, users should access the indices for the various dimensions
        by accessing the respective elements in an index array argument, which
        is provided to the callback function upon invocation.

-   [`3a07602`](https://github.com/stdlib-js/stdlib/commit/3a0760275c57c5b61dd748cf825c7146b2b7d619): provide index arguments as an array

    -   To migrate, users should access the indices for the first and second
        dimension by accessing the respective elements in an index array
        argument, which is provided to the callback function upon invocation.

-   [`f270c07`](https://github.com/stdlib-js/stdlib/commit/f270c078cd4394120cb3cf2d92a9b02892052fe8): consolidate index arguments into a single argument

    -   To migrate, users should access the array element indices via the third
        argument, where the first element is the first array dimension index and the
        second element is the second array dimension index.

-   [`c1eaf9b`](https://github.com/stdlib-js/stdlib/commit/c1eaf9b48f73112af77d774084caf5a27e2d47e9): consolidate array arguments into a single argument

    -   To migrate, users should access the input arrays via the fourth
        argument, where the first element is the first input array and the
        second element is the second input array.

-   [`762c44f`](https://github.com/stdlib-js/stdlib/commit/762c44f2d442ad099b10dae4635e8c29a5c6b328): consolidate array arguments into a single argument

    -   To migrate, users should access the input arrays via the fourth
        argument, where the first element is the first input array and the
        second element is the second input array.

-   [`701fffc`](https://github.com/stdlib-js/stdlib/commit/701fffc7e3ff3b63c1fc1ad3bafa78017ccaea6d): switch order of generic input types

    -   To migrate, users should update their type definitions accordingly.

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`1147e6a`](https://github.com/stdlib-js/stdlib/commit/1147e6a6756955b23b9b3f0c12ca834d2b5b3273): refactor for added type safety
-   [`5edaa45`](https://github.com/stdlib-js/stdlib/commit/5edaa451c3d0ec114eab2640bde05cb09e1d97d4): refactor for added type safety
-   [`d97df70`](https://github.com/stdlib-js/stdlib/commit/d97df70e5296503247dcab0485e1e6b58929cb61): fix parameter order and ensure type safety of this context
-   [`5c70f69`](https://github.com/stdlib-js/stdlib/commit/5c70f699fe056e550029f30f6c8a12c26200c1df): use generics for type safety
-   [`a23de41`](https://github.com/stdlib-js/stdlib/commit/a23de41de4280e8d1291a87c50af5c07e9b5ae54): refactor declaration for added type safety
-   [`10ab1e7`](https://github.com/stdlib-js/stdlib/commit/10ab1e71cfce96df534b70874166890754b7d839): refactor declaration for added type safety
-   [`ba454af`](https://github.com/stdlib-js/stdlib/commit/ba454af8b3a18ddb727d26613d97905fc2b115fd): increase minimum TypeScript version
-   [`04518a7`](https://github.com/stdlib-js/stdlib/commit/04518a70bd76be49c16d0cc70c93f0ff304362b5): increase minimum TypeScript version
-   [`3363cce`](https://github.com/stdlib-js/stdlib/commit/3363cce2161db6711181a527e124f34de49cf48d): increase minimum TypeScript version
-   [`e62998d`](https://github.com/stdlib-js/stdlib/commit/e62998da4db17224516ba67fdc0d04a4baec83c9): increase minimum TypeScript version
-   [`3959f83`](https://github.com/stdlib-js/stdlib/commit/3959f834656eeeab8a21397b360e93ccfaaa7721): increase minimum TypeScript version
-   [`136dea5`](https://github.com/stdlib-js/stdlib/commit/136dea56f5aed5bee2daa1b135afedd9f10ddb89): increase minimum TypeScript version
-   [`6fe818a`](https://github.com/stdlib-js/stdlib/commit/6fe818a2c2704f86939ca37c178ecaaaa7cb7118): refactor declarations to use generics
-   [`8029fec`](https://github.com/stdlib-js/stdlib/commit/8029fec506ed2a501af25e63f724ca08ad12a615): refactor declarations to use generics
-   [`609eec4`](https://github.com/stdlib-js/stdlib/commit/609eec4bab7ae96c8b733046e97c724eb55fdd71): refactor declarations to use generics
-   [`2558991`](https://github.com/stdlib-js/stdlib/commit/255899189d60b13e6c55b6457f14e70cebe2efef): increase minimum TypeScript version
-   [`0fff7dc`](https://github.com/stdlib-js/stdlib/commit/0fff7dc03ced4c21e7bf7c5e164f50a28f6ab5e4): refactor declarations to use generics
-   [`4d4c295`](https://github.com/stdlib-js/stdlib/commit/4d4c29512a4d6eb3ba12e76aa266ea47822e82cc): refactor declarations to use generics
-   [`33b1a9e`](https://github.com/stdlib-js/stdlib/commit/33b1a9eebbfdae2784f5a49be9c56b8b8fc9bc65): refactor declarations to use generics
-   [`5238516`](https://github.com/stdlib-js/stdlib/commit/52385165887a527340ca95059ba3ee4502af9b42): refactor declarations to use generics
-   [`11dfa3a`](https://github.com/stdlib-js/stdlib/commit/11dfa3ad7fc6619b73e5a79ffa0c509f94170203): increase minimum TypeScript version
-   [`069c10d`](https://github.com/stdlib-js/stdlib/commit/069c10d99850d8ec51e7764d2266ed34405ff542): increase minimum TypeScript version
-   [`5cf30d1`](https://github.com/stdlib-js/stdlib/commit/5cf30d1a059e3fd6fdafa0e327a148d64f9d002e): refactor declarations to use generics
-   [`c928438`](https://github.com/stdlib-js/stdlib/commit/c928438efd2dcb945212f8ff96d0a4595f0a35b8): refactor declarations to use generics
-   [`79c74b3`](https://github.com/stdlib-js/stdlib/commit/79c74b361f7032a948481650a8b9b21644783415): refactor declarations to use generics
-   [`97b7144`](https://github.com/stdlib-js/stdlib/commit/97b7144bdcd3c520688549a483601f67491066ea): increase minimum TypeScript version
-   [`26f6fb2`](https://github.com/stdlib-js/stdlib/commit/26f6fb251d4612dbaa5c3f67b65ec006bddc10db): refactor declarations to use generics
-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277): improve definitions for type safety
-   [`becc613`](https://github.com/stdlib-js/stdlib/commit/becc613f1dd47053e3b5b100adfa4769402dc51f): improve definition for type safety
-   [`d92d0a7`](https://github.com/stdlib-js/stdlib/commit/d92d0a71bb32d41bea354d0e3e3dc0bbd2cc9839): improve definition for type safety

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`3653808`](https://github.com/stdlib-js/stdlib/commit/3653808823106dcfc1b033a8bd054f4250b12e11) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`bf2cf8b`](https://github.com/stdlib-js/stdlib/commit/bf2cf8b0424e608a4e3abb6d18a8b44d790aa99c) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - **fix:** make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e18b248`](https://github.com/stdlib-js/stdlib/commit/e18b248464425863019a841795a7e5fc7d01d0ea) - **feat:** update namespace TypeScript declarations [(#1100)](https://github.com/stdlib-js/stdlib/pull/1100) _(by stdlib-bot, Athan Reines)_
-   [`4dc4968`](https://github.com/stdlib-js/stdlib/commit/4dc496854221dcd17d43cfd10d9520580b618ecb) - **fix:** update import path for `Collection` type definition and refactor to use generics _(by Athan Reines)_
-   [`5c93dea`](https://github.com/stdlib-js/stdlib/commit/5c93deadb44fe8f5597326c412d3ec005547efb2) - **fix:** update import path for `Collection` type definition and refactor to use generics _(by Athan Reines)_
-   [`030ddd0`](https://github.com/stdlib-js/stdlib/commit/030ddd076adeb08373b919fed9a133f06254662c) - **fix:** update import path for `Collection` type definition and refactor to use generics _(by Athan Reines)_
-   [`feb0880`](https://github.com/stdlib-js/stdlib/commit/feb0880e539b786a1b27d20be28348249bf3f604) - **fix:** update import path for `Collection` type definition and refactor to use generics _(by Athan Reines)_
-   [`619fadc`](https://github.com/stdlib-js/stdlib/commit/619fadce92a34abdc7d02bad4ce6612f490791a9) - **fix:** update import path for `Collection` type definition and refactor to use generics _(by Athan Reines)_
-   [`6691029`](https://github.com/stdlib-js/stdlib/commit/6691029ca0eeb5e792c2cb3188e6160cd21f4757) - **docs:** fix descriptions _(by Athan Reines)_
-   [`c234583`](https://github.com/stdlib-js/stdlib/commit/c2345831e7e99470d6519f7f548d1d130abe1591) - **fix:** update import path for `Collection` type definition and refactor to use generics _(by Athan Reines)_
-   [`e9afc9f`](https://github.com/stdlib-js/stdlib/commit/e9afc9f088654d14858df809aa8ee52a51f024df) - **fix:** update import path for `Collection` type definition and refactor to use generics _(by Athan Reines)_
-   [`9369212`](https://github.com/stdlib-js/stdlib/commit/9369212a921cf0f1e9ffbefa6a1bb37687129df2) - **docs:** fix descriptions _(by Athan Reines)_
-   [`bc9c722`](https://github.com/stdlib-js/stdlib/commit/bc9c72243e2971b04b486b222f18712dfbb12961) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`5573a67`](https://github.com/stdlib-js/stdlib/commit/5573a67ad26e964548a6cae27d4b85afb6e9909b) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`447a49d`](https://github.com/stdlib-js/stdlib/commit/447a49da67d4cc03ab5106b815929731e3b418ec) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`6b80df1`](https://github.com/stdlib-js/stdlib/commit/6b80df17ce5a19ad19690c691ce00b79768f6ea7) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`33fb7ed`](https://github.com/stdlib-js/stdlib/commit/33fb7ed1579343f4bff1f79c6948c7bf5439a2d5) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`b404a23`](https://github.com/stdlib-js/stdlib/commit/b404a23da6bc07cd0e4e30d8a01920bde89c76d3) - **docs:** fix option description and return annotations _(by Athan Reines)_
-   [`988b4d0`](https://github.com/stdlib-js/stdlib/commit/988b4d043fd4cfc68e3bed46c732c8e589ebd1a4) - **docs:** fix option description and return annotations _(by Athan Reines)_
-   [`c440ee0`](https://github.com/stdlib-js/stdlib/commit/c440ee02e84eeccfa4030ea5f0479a0bba3e3048) - **style:** fix missing linebreak _(by Athan Reines)_
-   [`7de06d8`](https://github.com/stdlib-js/stdlib/commit/7de06d8787ac72365d3ba9d29ac70d8ccbb069a0) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`c1e09e2`](https://github.com/stdlib-js/stdlib/commit/c1e09e2883cec812a2ee4c254cc89b34aeab2059) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`507b0e8`](https://github.com/stdlib-js/stdlib/commit/507b0e89339baa30c0ad2cdbcfd68c42bac4a2ac) - **docs:** fix option description and return annotations _(by Athan Reines)_
-   [`6850db6`](https://github.com/stdlib-js/stdlib/commit/6850db68d9b9e75d8f8989051cc5a056bb8cd772) - **docs:** fix option description and return annotations _(by Athan Reines)_
-   [`d028a83`](https://github.com/stdlib-js/stdlib/commit/d028a837644d0451445424922f2f07a0f94e7b4d) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`daa846c`](https://github.com/stdlib-js/stdlib/commit/daa846cf840517f2620160f9a7d638975fb0b069) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`7752bb9`](https://github.com/stdlib-js/stdlib/commit/7752bb93a161bb0cc0329b399b0470d9fdb25426) - **docs:** fix option description and return annotations _(by Athan Reines)_
-   [`711998f`](https://github.com/stdlib-js/stdlib/commit/711998f816028c04b742e13451cc9436fd307ebe) - **docs:** fix option description and returns annotations _(by Athan Reines)_
-   [`724d386`](https://github.com/stdlib-js/stdlib/commit/724d386fdb37a4ab05e0e332766a3d7b67f54ab2) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`e92aceb`](https://github.com/stdlib-js/stdlib/commit/e92aceb807c9ec3e442cf53e3495a66767772166) - **fix:** update import path for `Collection` type definition and use generics _(by Athan Reines)_
-   [`fedeb91`](https://github.com/stdlib-js/stdlib/commit/fedeb91c59208dc5779763ee37ab7ada124b9a59) - **docs:** fix option description and return annotations _(by Athan Reines)_
-   [`9002507`](https://github.com/stdlib-js/stdlib/commit/90025078df0d08c1d45b9dc26d177134c4fdd247) - **docs:** fix option description and return annotations _(by Athan Reines)_
-   [`da4ce34`](https://github.com/stdlib-js/stdlib/commit/da4ce346628ef46868ca46a9b18a90ab50a3544a) - **bench:** fix array creation _(by Athan Reines)_
-   [`8a8ddcf`](https://github.com/stdlib-js/stdlib/commit/8a8ddcff1055634f2b5d12d8b2a48c6d81bde26e) - **bench:** fix array creation _(by Athan Reines)_
-   [`269b3e6`](https://github.com/stdlib-js/stdlib/commit/269b3e6a92a95425efab6e80e53e3f2700980d8d) - **bench:** fix array creation _(by Athan Reines)_
-   [`6ba83db`](https://github.com/stdlib-js/stdlib/commit/6ba83db94da9a5611126becdd83d5a3a0c3b73d7) - **feat:** consolidate callback arguments _(by Athan Reines)_
-   [`32a4165`](https://github.com/stdlib-js/stdlib/commit/32a4165d91ab7fc60dc843d619fb3ce472fb5618) - **feat:** consolidate callback arguments _(by Athan Reines)_
-   [`a6be89b`](https://github.com/stdlib-js/stdlib/commit/a6be89ba51bb22516e4e10483bc0086be648d81b) - **feat:** consolidate callback arguments _(by Athan Reines)_
-   [`6f2e8bf`](https://github.com/stdlib-js/stdlib/commit/6f2e8bf3206c0319e5699011d6c13e5c133f9c7b) - **refactor:** use type alias to simplify defn _(by Athan Reines)_
-   [`3a07602`](https://github.com/stdlib-js/stdlib/commit/3a0760275c57c5b61dd748cf825c7146b2b7d619) - **feat:** consolidate callback arguments _(by Athan Reines)_
-   [`f270c07`](https://github.com/stdlib-js/stdlib/commit/f270c078cd4394120cb3cf2d92a9b02892052fe8) - **feat:** update callback signature _(by Athan Reines)_
-   [`c1eaf9b`](https://github.com/stdlib-js/stdlib/commit/c1eaf9b48f73112af77d774084caf5a27e2d47e9) - **feat:** update callback signature _(by Athan Reines)_
-   [`762c44f`](https://github.com/stdlib-js/stdlib/commit/762c44f2d442ad099b10dae4635e8c29a5c6b328) - **feat:** update callback signature _(by Athan Reines)_
-   [`67b5d37`](https://github.com/stdlib-js/stdlib/commit/67b5d37284f61bb52b53ebf3f30ed64c3436870d) - **fix:** update import path for `Collection` type definition and improve type specificity _(by Athan Reines)_
-   [`90b28d6`](https://github.com/stdlib-js/stdlib/commit/90b28d6e257dc731e846a16029768d3af57d1082) - **fix:** update import path for `Collection` type definition and improve type specificity _(by Athan Reines)_
-   [`4ff0c5a`](https://github.com/stdlib-js/stdlib/commit/4ff0c5a46aaca21237522f26e030aaefb19bb7be) - **fix:** update import path for `Collection` type definition and improve type specificity _(by Athan Reines)_
-   [`cb52e02`](https://github.com/stdlib-js/stdlib/commit/cb52e0271914a717355ba2b37c1b702771eb141a) - **fix:** update import path for `Collection` type definition and improve type specificity _(by Athan Reines)_
-   [`de73ae1`](https://github.com/stdlib-js/stdlib/commit/de73ae19f43cbad40036d25b1d46620b3c5113a9) - **feat:** update namespace TypeScript declarations [(#1089)](https://github.com/stdlib-js/stdlib/pull/1089) _(by stdlib-bot, Athan Reines, Philipp Burckhardt)_
-   [`ac2c729`](https://github.com/stdlib-js/stdlib/commit/ac2c7294915dce638395d1bf3aa405a55159049d) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`99e61ba`](https://github.com/stdlib-js/stdlib/commit/99e61ba8044535dc5aec73c684a652bbab4541c4) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`312caf3`](https://github.com/stdlib-js/stdlib/commit/312caf3929069173b1c574e54b7276f340601c9a) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`aec2475`](https://github.com/stdlib-js/stdlib/commit/aec24756acf532d2565ef5561d5c7f9e67d8639a) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`72357fb`](https://github.com/stdlib-js/stdlib/commit/72357fb30adaf6e00a4d176f0bd8a14f339e6370) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`71f0dcb`](https://github.com/stdlib-js/stdlib/commit/71f0dcb8a2fe76df584bfc23b1195d6e55e8557f) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`0216d80`](https://github.com/stdlib-js/stdlib/commit/0216d80f92d2a52741d2243c3bf759f1c82d0f1a) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`3f58bf9`](https://github.com/stdlib-js/stdlib/commit/3f58bf96d366a7c2dd0e70813f52cc5e22fa83c1) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`2bb4efe`](https://github.com/stdlib-js/stdlib/commit/2bb4efeeed71045d67f599a65eb5edc493ab849e) - **feat:** improve type specificity for `thisArg` _(by Athan Reines)_
-   [`83b8979`](https://github.com/stdlib-js/stdlib/commit/83b8979e5b2d0687f9bd6b7205509dfb18539add) - **style:** remove comment _(by Athan Reines)_
-   [`3a20d0d`](https://github.com/stdlib-js/stdlib/commit/3a20d0d370d4a956adf22835076a5420e54af364) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`195a63e`](https://github.com/stdlib-js/stdlib/commit/195a63e3480cbda8994d60c69839343ddab652cb) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`43949fc`](https://github.com/stdlib-js/stdlib/commit/43949fcc42c41a9b62f2136835afecea8b70e294) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`a11b904`](https://github.com/stdlib-js/stdlib/commit/a11b904f72cea90a52038f27acac29eabdc94696) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`21cddc4`](https://github.com/stdlib-js/stdlib/commit/21cddc47d6cde04976608ca363fb7b937d7f5fb5) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`b45ab4c`](https://github.com/stdlib-js/stdlib/commit/b45ab4c20205d15c590d5fd7084fa74f00795a38) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`438c577`](https://github.com/stdlib-js/stdlib/commit/438c57782f4d29ddf7cd17ac49776d6717779be1) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`d390c4e`](https://github.com/stdlib-js/stdlib/commit/d390c4e96f0d98376392ca01a46614ce2d4e18a1) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`a18bf17`](https://github.com/stdlib-js/stdlib/commit/a18bf17ecfd9d333f1705f7f5838b63efe8dfcbe) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`701fffc`](https://github.com/stdlib-js/stdlib/commit/701fffc7e3ff3b63c1fc1ad3bafa78017ccaea6d) - **feat:** switch order of generic input types _(by Athan Reines)_
-   [`ed797c1`](https://github.com/stdlib-js/stdlib/commit/ed797c100bfb7987175b2fc085be2e73b9fc9bf2) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`2654159`](https://github.com/stdlib-js/stdlib/commit/26541597a65d088b3141cdc1f1e9800fd3c47304) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`b92f33c`](https://github.com/stdlib-js/stdlib/commit/b92f33c2acfe6732882688ecf98602f29149abbb) - **feat:** improve type specificity _(by Athan Reines)_
-   [`f41e1b6`](https://github.com/stdlib-js/stdlib/commit/f41e1b68ded2c1e5d6c39028e32bd0f0c7e75e65) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`53723e9`](https://github.com/stdlib-js/stdlib/commit/53723e9e9a521c6b43893383a09433626f9a5d0e) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`e92f470`](https://github.com/stdlib-js/stdlib/commit/e92f4707c25e7272845551f3daae70b3d86591b6) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`1fc4de2`](https://github.com/stdlib-js/stdlib/commit/1fc4de2f10bfe2a24b14a6326658bbb5d93fe65a) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`ccc993b`](https://github.com/stdlib-js/stdlib/commit/ccc993b3aed2401eb4fd94d49da2e27631c9c0e1) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`e91b8c5`](https://github.com/stdlib-js/stdlib/commit/e91b8c59c2b088959b0233b2f62a9b340989e817) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`41a3c74`](https://github.com/stdlib-js/stdlib/commit/41a3c74e7d025bb804c773fe69d33bd79393ccb1) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`43265b3`](https://github.com/stdlib-js/stdlib/commit/43265b30f6843258cfe15b7efd6306220a23c1a9) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`a151e17`](https://github.com/stdlib-js/stdlib/commit/a151e17ad2eb24f65e4f5cda0db93c8287d1e416) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`73b6076`](https://github.com/stdlib-js/stdlib/commit/73b60762aa8b90f40955041f5fe2425393997061) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`2cc76dd`](https://github.com/stdlib-js/stdlib/commit/2cc76dd32b4145469a439fbd761c442a1ceed461) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`0481deb`](https://github.com/stdlib-js/stdlib/commit/0481deb4ea65c04ef733c89464d8c875beb8bde0) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`c5cfac0`](https://github.com/stdlib-js/stdlib/commit/c5cfac0c621b13d7d6b2f15380d36726f861045d) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`4a9ce10`](https://github.com/stdlib-js/stdlib/commit/4a9ce10522aff3ae6f099bcc867c5f3d30dddef8) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`29bce60`](https://github.com/stdlib-js/stdlib/commit/29bce60bb13947ca6d336c6970954b491013b1e1) - **fix:** add missing support for omitting a `returns` option _(by Athan Reines)_
-   [`cbdc02b`](https://github.com/stdlib-js/stdlib/commit/cbdc02b1b3febae34e4df2358913fbf55d2365f2) - **fix:** add missing support for omitting a `returns` option _(by Athan Reines)_
-   [`1bf88f1`](https://github.com/stdlib-js/stdlib/commit/1bf88f1a75366df27e02072018699487680ab597) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`63445cd`](https://github.com/stdlib-js/stdlib/commit/63445cdacf11308b7cfcddc48cb40d4497d061e1) - **fix:** set missing default type value _(by Athan Reines)_
-   [`fcfd703`](https://github.com/stdlib-js/stdlib/commit/fcfd7038263c02980f2f8e635526ca66273d2f67) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`1185b24`](https://github.com/stdlib-js/stdlib/commit/1185b24060765164e1c5da1967c18d9f7a7b1e0f) - **fix:** enhance type for `this` context _(by Athan Reines)_
-   [`a5bc25a`](https://github.com/stdlib-js/stdlib/commit/a5bc25a773ba6af924107c8322acf3b8b9b3f21a) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`b423df5`](https://github.com/stdlib-js/stdlib/commit/b423df535144d071f50f8ffde064840fe38cf130) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`ad90d49`](https://github.com/stdlib-js/stdlib/commit/ad90d49a0b23da4df7dade0b8e5b4e50b10a580a) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`ceabc3b`](https://github.com/stdlib-js/stdlib/commit/ceabc3b509711945de3ecfe2348f54e25937b02b) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`5b60a40`](https://github.com/stdlib-js/stdlib/commit/5b60a40c28a92651623f0274ae34bf53f82aef60) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`1ddd642`](https://github.com/stdlib-js/stdlib/commit/1ddd642d08f7ec5bb55b3b148fef71997def4e54) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`eaa6bdd`](https://github.com/stdlib-js/stdlib/commit/eaa6bdd35b5f78e9dba25d51a04b3070617ac7f1) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`a9970ee`](https://github.com/stdlib-js/stdlib/commit/a9970ee570c87272e72732555b7c3bd0da24cdbe) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`789b322`](https://github.com/stdlib-js/stdlib/commit/789b322b20f2f9d035b3ac6d44b0e4beece9a50c) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`c96c6e0`](https://github.com/stdlib-js/stdlib/commit/c96c6e08ce946cef9b820ee8de3cb5c38cbb3c79) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`71dd315`](https://github.com/stdlib-js/stdlib/commit/71dd31521048ed99b8ed50a4e181fa93a75f0d07) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`ff4c195`](https://github.com/stdlib-js/stdlib/commit/ff4c1957c999b16635d7388fe37299f8b94f7e5c) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`c7f71aa`](https://github.com/stdlib-js/stdlib/commit/c7f71aa3fbe517bdbbc7a7fa017597f46938c85e) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`7a8ca35`](https://github.com/stdlib-js/stdlib/commit/7a8ca35382cabcd7ea1b3541ec46620aa727013d) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`d5b607b`](https://github.com/stdlib-js/stdlib/commit/d5b607b0518407e3e1924723fba67497b003d2f4) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`c069f30`](https://github.com/stdlib-js/stdlib/commit/c069f30d1d208589c8a06d164e3545edeee98b37) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`7e5ef6d`](https://github.com/stdlib-js/stdlib/commit/7e5ef6d515bec20acfba5b040442e95eda1f63b4) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`2de0332`](https://github.com/stdlib-js/stdlib/commit/2de03325135024e1a1922d8bb166a95d6efde18d) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`4e1f4b3`](https://github.com/stdlib-js/stdlib/commit/4e1f4b3490e6df7ad9f06a1335d42a89623d03dc) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`54fc8e7`](https://github.com/stdlib-js/stdlib/commit/54fc8e7e4d109f1fdd2cd85b2c21e08794d4dbb1) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`b95f8bc`](https://github.com/stdlib-js/stdlib/commit/b95f8bc7893459462ccb7a180cddbb8a07dc2a76) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`cb8dd54`](https://github.com/stdlib-js/stdlib/commit/cb8dd5415c30229fa3eb70ef8669323eea8922a0) - **fix:** update import path for `Collection` type definition and improve types _(by Athan Reines)_
-   [`33f4a75`](https://github.com/stdlib-js/stdlib/commit/33f4a75335d0b81a893acbf77678d3b651fcb6d0) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`0f5ff18`](https://github.com/stdlib-js/stdlib/commit/0f5ff18ee50178bd11db8591f90e5486afd1dd41) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`a2a7714`](https://github.com/stdlib-js/stdlib/commit/a2a771469fb7ed35e48c034e1bf4a490449be15f) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`238c3f8`](https://github.com/stdlib-js/stdlib/commit/238c3f8ef2d03b010e8d3b4a18be183a3899c7c0) - **build:** update checkout settings and push URL _(by Philipp Burckhardt)_
-   [`27f5f34`](https://github.com/stdlib-js/stdlib/commit/27f5f3470df02e65665b818bd8043f9b4efcbba3) - **build:** omit actor in push URL _(by Philipp Burckhardt)_
-   [`3fcbd78`](https://github.com/stdlib-js/stdlib/commit/3fcbd783b73ff9c3e88067e639721d7aa0f8762d) - **build:** set environment variable _(by Philipp Burckhardt)_
-   [`4aac11c`](https://github.com/stdlib-js/stdlib/commit/4aac11c5b40be67961223ae8164b442e6fb531e6) - **build:** set identity in repo dir _(by Philipp Burckhardt)_
-   [`7ae2a48`](https://github.com/stdlib-js/stdlib/commit/7ae2a482a409753eebc2a5bda2e0bf94e5d5f58d) - **docs:** remove empty lines _(by Philipp Burckhardt)_
-   [`ad751be`](https://github.com/stdlib-js/stdlib/commit/ad751be30e90c8c0ba63d885433a01790496f17c) - **docs:** remove empty lines _(by Philipp Burckhardt)_
-   [`9212514`](https://github.com/stdlib-js/stdlib/commit/9212514cd0ba9a681c2ca86ebe2fd3b61f866b64) - **fix:** set correct package names and descriptions _(by Philipp Burckhardt)_
-   [`55866ea`](https://github.com/stdlib-js/stdlib/commit/55866ea8ef1282528b839fd9ce9c43c6a80056f8) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`2e197bc`](https://github.com/stdlib-js/stdlib/commit/2e197bc4bab1c252c283ff512d82610648368598) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`43b454e`](https://github.com/stdlib-js/stdlib/commit/43b454ef52b9aba92242d95e05d82c3952715368) - **refactor:** avoid usage of utils/copy _(by Philipp Burckhardt)_
-   [`1147e6a`](https://github.com/stdlib-js/stdlib/commit/1147e6a6756955b23b9b3f0c12ca834d2b5b3273) - **feat:** refactor for added type safety _(by Philipp Burckhardt)_
-   [`5edaa45`](https://github.com/stdlib-js/stdlib/commit/5edaa451c3d0ec114eab2640bde05cb09e1d97d4) - **feat:** refactor for added type safety _(by Philipp Burckhardt)_
-   [`d97df70`](https://github.com/stdlib-js/stdlib/commit/d97df70e5296503247dcab0485e1e6b58929cb61) - **feat:** fix parameter order and ensure type safety of this context _(by Philipp Burckhardt)_
-   [`5c70f69`](https://github.com/stdlib-js/stdlib/commit/5c70f699fe056e550029f30f6c8a12c26200c1df) - **feat:** use generics for type safety _(by Philipp Burckhardt)_
-   [`d2c1aee`](https://github.com/stdlib-js/stdlib/commit/d2c1aee465676ae680d4c055e5a4f6d288ed4eef) - **fix:** allow type of error handler return value to differ _(by Philipp Burckhardt)_
-   [`a23de41`](https://github.com/stdlib-js/stdlib/commit/a23de41de4280e8d1291a87c50af5c07e9b5ae54) - **feat:** refactor declaration for added type safety _(by Philipp Burckhardt)_
-   [`10ab1e7`](https://github.com/stdlib-js/stdlib/commit/10ab1e71cfce96df534b70874166890754b7d839) - **feat:** refactor declaration for added type safety _(by Philipp Burckhardt)_
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - **feat:** update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044) _(by stdlib-bot, Athan Reines)_
-   [`ba454af`](https://github.com/stdlib-js/stdlib/commit/ba454af8b3a18ddb727d26613d97905fc2b115fd) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`04518a7`](https://github.com/stdlib-js/stdlib/commit/04518a70bd76be49c16d0cc70c93f0ff304362b5) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`3363cce`](https://github.com/stdlib-js/stdlib/commit/3363cce2161db6711181a527e124f34de49cf48d) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`e62998d`](https://github.com/stdlib-js/stdlib/commit/e62998da4db17224516ba67fdc0d04a4baec83c9) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`3959f83`](https://github.com/stdlib-js/stdlib/commit/3959f834656eeeab8a21397b360e93ccfaaa7721) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`136dea5`](https://github.com/stdlib-js/stdlib/commit/136dea56f5aed5bee2daa1b135afedd9f10ddb89) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`6fe818a`](https://github.com/stdlib-js/stdlib/commit/6fe818a2c2704f86939ca37c178ecaaaa7cb7118) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`8029fec`](https://github.com/stdlib-js/stdlib/commit/8029fec506ed2a501af25e63f724ca08ad12a615) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`609eec4`](https://github.com/stdlib-js/stdlib/commit/609eec4bab7ae96c8b733046e97c724eb55fdd71) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`2558991`](https://github.com/stdlib-js/stdlib/commit/255899189d60b13e6c55b6457f14e70cebe2efef) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`0fff7dc`](https://github.com/stdlib-js/stdlib/commit/0fff7dc03ced4c21e7bf7c5e164f50a28f6ab5e4) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`4d4c295`](https://github.com/stdlib-js/stdlib/commit/4d4c29512a4d6eb3ba12e76aa266ea47822e82cc) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`33b1a9e`](https://github.com/stdlib-js/stdlib/commit/33b1a9eebbfdae2784f5a49be9c56b8b8fc9bc65) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`5238516`](https://github.com/stdlib-js/stdlib/commit/52385165887a527340ca95059ba3ee4502af9b42) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`11dfa3a`](https://github.com/stdlib-js/stdlib/commit/11dfa3ad7fc6619b73e5a79ffa0c509f94170203) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`069c10d`](https://github.com/stdlib-js/stdlib/commit/069c10d99850d8ec51e7764d2266ed34405ff542) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`5cf30d1`](https://github.com/stdlib-js/stdlib/commit/5cf30d1a059e3fd6fdafa0e327a148d64f9d002e) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`c928438`](https://github.com/stdlib-js/stdlib/commit/c928438efd2dcb945212f8ff96d0a4595f0a35b8) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`3ac4344`](https://github.com/stdlib-js/stdlib/commit/3ac4344d46c5fe553787fc0a390eb707ebbf79a6) - **test:** use function declarations _(by Athan Reines)_
-   [`79c74b3`](https://github.com/stdlib-js/stdlib/commit/79c74b361f7032a948481650a8b9b21644783415) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`97b7144`](https://github.com/stdlib-js/stdlib/commit/97b7144bdcd3c520688549a483601f67491066ea) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`26f6fb2`](https://github.com/stdlib-js/stdlib/commit/26f6fb251d4612dbaa5c3f67b65ec006bddc10db) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277) - **feat:** improve definitions for type safety _(by Philipp Burckhardt)_
-   [`becc613`](https://github.com/stdlib-js/stdlib/commit/becc613f1dd47053e3b5b100adfa4769402dc51f) - **feat:** improve definition for type safety _(by Philipp Burckhardt)_
-   [`d92d0a7`](https://github.com/stdlib-js/stdlib/commit/d92d0a71bb32d41bea354d0e3e3dc0bbd2cc9839) - **feat:** improve definition for type safety _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.12">

## 0.0.12 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2021-07-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-13)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

