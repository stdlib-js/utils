# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-12-02)

<section class="features">

### Features

-   [`36058e8`](https://github.com/stdlib-js/stdlib/commit/36058e893ce3a1606f454f3054b14afb8f88438b) - update `utils` TypeScript declarations
-   [`6b4c40d`](https://github.com/stdlib-js/stdlib/commit/6b4c40ddf5581abcc2a1b33c566455ea57b56bc5) - update `utils/async` TypeScript declarations
-   [`18b2372`](https://github.com/stdlib-js/stdlib/commit/18b2372476178bcaa6bd7ddc69396f0e87dc93f2) - add missing exports to namespaces
-   [`0bc9823`](https://github.com/stdlib-js/stdlib/commit/0bc98238e0d5e4991912848ef6069a753343eaa1) - add missing exports to `utils` namespace
-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259)
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`1b9a036`](https://github.com/stdlib-js/stdlib/commit/1b9a036d676b247bf502c4ede08635b99fa611ca) - allow correct values for `returns` option
-   [`eeb9d6f`](https://github.com/stdlib-js/stdlib/commit/eeb9d6fdc2e3faa3116c84f276e88737ba11196f) - remove unused imports

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8653809`](https://github.com/stdlib-js/stdlib/commit/8653809bec91a38db812e64847db9adf4d429602): remove `utils/none-own-by`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/object/none-own-by` which provides the same API and implementation.

-   [`3d7187a`](https://github.com/stdlib-js/stdlib/commit/3d7187a634c8b5882e34522c608d4d4def321038): remove `noneOwnBy`

    -   To migrate, users should access the same symbol via the
        `@stdlib/object` namespace.

-   [`412d1de`](https://github.com/stdlib-js/stdlib/commit/412d1deb27ab20764d4096c5531c72964cae282c): remove `anyInBy`

    -   To migrate, users should access the same symbol via the
        `@stdlib/object` namespace.

-   [`c04a8bc`](https://github.com/stdlib-js/stdlib/commit/c04a8bc15913cb8d3130e255eea3078a82276e4e): remove `utils/any-own-by`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/objects/any-own-by` which provides the same API and implementation.

-   [`e3ff363`](https://github.com/stdlib-js/stdlib/commit/e3ff363a73067533e3479ba237d8e3d1cd76c45b): remove `any-own-by`

    -   To migrate, users should access the same symbol via the
        `@stdlib/object` namespace.

-   [`0beaf3c`](https://github.com/stdlib-js/stdlib/commit/0beaf3c1da2264b6964b0f04d639571e95a73a31): remove `utils/any-in-by`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/object/any-in-by` which provides the same API and implementation.

-   [`d27d963`](https://github.com/stdlib-js/stdlib/commit/d27d963735240594f5b51a460c68e31493370a4a): remove `utils/some-in-by`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/object/some-in-by` which provides the same API and implementation.

-   [`68445e7`](https://github.com/stdlib-js/stdlib/commit/68445e7c04b7c9fdd09e6b10fc72a9e5cb33bd39): remove `utils/none-in-by`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/object/none-in-by` which provides the same API and implementation.

-   [`4817aff`](https://github.com/stdlib-js/stdlib/commit/4817affe594ef1e952c523e8d3aa0911e8fa0983): remove `utils/every-own-by`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/object/every-own-by` which provides the same API and implementation.

-   [`81f72df`](https://github.com/stdlib-js/stdlib/commit/81f72df6f72639f05f25466ae294e59a4a44d36d): remove `utils/every-in-by`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/object/every-in-by` which provides the same API and implementation.

-   [`b6624d0`](https://github.com/stdlib-js/stdlib/commit/b6624d072e58c6843fdcfd95d326c66f3975c501): remove `utils/thunk`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/function/thunk` which provides the same API and implementation.

-   [`4b44dd3`](https://github.com/stdlib-js/stdlib/commit/4b44dd34e543a964b5493b1bfed83a1e058d6f69): remove `thunk`

    -   To migrate, users should access the same symbol via the
        `@stdlib/function` namespace.

-   [`a4fdfa1`](https://github.com/stdlib-js/stdlib/commit/a4fdfa1aa900faccbe5719f735824d27565ddefe): remove `@stdlib/utils/stack`

    -   To migrate, users should use `@stdlib/dstructs/stack` which provides
        the same API and behavior as `@stdlib/utils/stack`.

-   [`0d4af05`](https://github.com/stdlib-js/stdlib/commit/0d4af053c017bb5e285857de4d6ca1bfecf7f582): remove `@stdlib/utils/named-typed-tuple`

    -   To migrate, users should use `@stdlib/dstructs/named-typed-tuple` which provides
        the same API and behavior as `@stdlib/utils/named-typed-tuple`.

-   [`29798aa`](https://github.com/stdlib-js/stdlib/commit/29798aa3e282144dce5067836254645764ca1ff9): remove `@stdlib/utils/linked-list`

    -   To migrate, users should use `@stdlib/dstructs/linked-list` which provides
        the same API and behavior as `@stdlib/utils/linked-list`.

-   [`732ec99`](https://github.com/stdlib-js/stdlib/commit/732ec9996eeb03e1fea62d005714855b05daab76): remove `@stdlib/utils/fifo`

    -   To migrate, users should use `@stdlib/dstructs/fifo` which provides
        the same API and behavior as `@stdlib/utils/fifo`.

-   [`f4c805b`](https://github.com/stdlib-js/stdlib/commit/f4c805bef2ea5092e4e8bb13cdfb2070428478e3): remove `@stdlib/utils/doubly-linked-list`

    -   To migrate, users should use `@stdlib/dstructs/doubly-linked-list` which provides
        the same API and behavior as `@stdlib/utils/doubly-linked-list`.

-   [`10a63a7`](https://github.com/stdlib-js/stdlib/commit/10a63a745f0491ed71e6ea35d426a953b63edee0): remove `@stdlib/utils/compact-adjacency-matrix`

    -   To migrate, users should use `@stdlib/dstructs/compact-adjacency-matrix` which provides
        the same API and behavior as `@stdlib/utils/compact-adjacency-matrix`.

-   [`5a6b123`](https://github.com/stdlib-js/stdlib/commit/5a6b12371d4f2ab3ecf5d2fcce2d7fe125b8ab0f): remove `@stdlib/utils/circular-buffer`

    -   To migrate, users should use `@stdlib/dstructs/circular-buffer` which provides
        the same API and behavior as `@stdlib/utils/circular-buffer`.

-   [`6dd093d`](https://github.com/stdlib-js/stdlib/commit/6dd093dfb217f9fe5ef4c15f096502a441910c1f): remove `Stack` from namespace

    -   To migrate, users should access the same symbol via the `@stdlib/dstructs`
        namespace.

-   [`0603f13`](https://github.com/stdlib-js/stdlib/commit/0603f137f2e3c128a2258dc7a2c124d537df8c72): remove `namedtypedtuple` from namespace

    -   To migrate, users should access the same symbol via the `@stdlib/dstructs`
        namespace.

-   [`4f59553`](https://github.com/stdlib-js/stdlib/commit/4f59553db77a6aa5b50fa9bd31012692460ddd45): remove `LinkedList` from namespace

    -   To migrate, users should access the same symbol via the `@stdlib/dstructs`
        namespace.

-   [`cd22c5b`](https://github.com/stdlib-js/stdlib/commit/cd22c5b64bc31bbaa5a170a950bfc26f81bdf725): remove `FIFO` from namespace

    -   To migrate, users should access the same symbol via the `@stdlib/dstructs`
        namespace.

-   [`8e31984`](https://github.com/stdlib-js/stdlib/commit/8e31984810c1fb204605e8f23922fcd74edc0d64): remove `DoublyLinkedList` from namespace

    -   To migrate, users should access the same symbol via the `@stdlib/dstructs`
        namespace.

-   [`7b73654`](https://github.com/stdlib-js/stdlib/commit/7b73654dc56e65ca98a3fdf7f369f1d89bb11ace): remove `compactAdjacencyMatrix` from namespace

    -   To migrate, users should access the same symbol via the `@stdlib/dstructs`
        namespace.

-   [`35d2b7c`](https://github.com/stdlib-js/stdlib/commit/35d2b7ccb121b45a7df51b483a95889a665f4fea): remove `circularBuffer`

    -   To migrate, users should access `circularBuffer` in the `@stdlib/dstructs`
        namespace.

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 22 issues were closed in this release:

[#6004](https://github.com/stdlib-js/stdlib/issues/6004), [#6786](https://github.com/stdlib-js/stdlib/issues/6786), [#6800](https://github.com/stdlib-js/stdlib/issues/6800), [#7060](https://github.com/stdlib-js/stdlib/issues/7060), [#7350](https://github.com/stdlib-js/stdlib/issues/7350), [#7694](https://github.com/stdlib-js/stdlib/issues/7694), [#7914](https://github.com/stdlib-js/stdlib/issues/7914), [#8000](https://github.com/stdlib-js/stdlib/issues/8000), [#8043](https://github.com/stdlib-js/stdlib/issues/8043), [#8061](https://github.com/stdlib-js/stdlib/issues/8061), [#8140](https://github.com/stdlib-js/stdlib/issues/8140), [#8155](https://github.com/stdlib-js/stdlib/issues/8155), [#8169](https://github.com/stdlib-js/stdlib/issues/8169), [#8183](https://github.com/stdlib-js/stdlib/issues/8183), [#8227](https://github.com/stdlib-js/stdlib/issues/8227), [#8241](https://github.com/stdlib-js/stdlib/issues/8241), [#8260](https://github.com/stdlib-js/stdlib/issues/8260), [#8268](https://github.com/stdlib-js/stdlib/issues/8268), [#8390](https://github.com/stdlib-js/stdlib/issues/8390), [#8577](https://github.com/stdlib-js/stdlib/issues/8577), [#8670](https://github.com/stdlib-js/stdlib/issues/8670), [#8701](https://github.com/stdlib-js/stdlib/issues/8701)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`92dc7c2`](https://github.com/stdlib-js/stdlib/commit/92dc7c2bea09a0f1d6d12d9048381cc8bcc99fe3) - **docs:** fix TSDoc return annotation values and example code _(by Philipp Burckhardt)_
-   [`2e44271`](https://github.com/stdlib-js/stdlib/commit/2e44271c52942b2140d235372d2247335894b40d) - **chore:** fix JavaScript lint errors [(#8705)](https://github.com/stdlib-js/stdlib/pull/8705) _(by Rohit R Bhat, Athan Reines)_
-   [`ff45992`](https://github.com/stdlib-js/stdlib/commit/ff45992200d325437e5216d0e7738ee812c661dc) - **docs:** update namespace table of contents [(#8704)](https://github.com/stdlib-js/stdlib/pull/8704) _(by stdlib-bot)_
-   [`bdee45c`](https://github.com/stdlib-js/stdlib/commit/bdee45c142a6e5a8d9dea6d28861900585fc3ac6) - **chore:** fix JavaScript lint errors [(#8686)](https://github.com/stdlib-js/stdlib/pull/8686) _(by Rohit R Bhat, Athan Reines)_
-   [`8653809`](https://github.com/stdlib-js/stdlib/commit/8653809bec91a38db812e64847db9adf4d429602) - **remove:** remove `utils/none-own-by` _(by Neeraj Pathak)_
-   [`3d7187a`](https://github.com/stdlib-js/stdlib/commit/3d7187a634c8b5882e34522c608d4d4def321038) - **remove:** remove `noneOwnBy` from namespace _(by Neeraj Pathak)_
-   [`412d1de`](https://github.com/stdlib-js/stdlib/commit/412d1deb27ab20764d4096c5531c72964cae282c) - **remove:** remove `anyInBy` from namespace  _(by Athan Reines)_
-   [`c04a8bc`](https://github.com/stdlib-js/stdlib/commit/c04a8bc15913cb8d3130e255eea3078a82276e4e) - **remove:** remove `utils/any-own-by` _(by Neeraj Pathak)_
-   [`0b449a3`](https://github.com/stdlib-js/stdlib/commit/0b449a38d1f623ac56b4cec10626cd022c299c87) - **refactor:** update paths _(by Neeraj Pathak)_
-   [`e3ff363`](https://github.com/stdlib-js/stdlib/commit/e3ff363a73067533e3479ba237d8e3d1cd76c45b) - **remove:** remove `any-own-by` from namespace _(by Neeraj Pathak)_
-   [`e65c0c3`](https://github.com/stdlib-js/stdlib/commit/e65c0c3498a0b6236197286e973e1df620067f28) - **chore:** address lint failure by disabling lint rule _(by Philipp Burckhardt)_
-   [`dedae83`](https://github.com/stdlib-js/stdlib/commit/dedae83e63f14730064d5f4af8271dce8175f4e7) - **docs:** replace example given this context is not bound for clbk but fcn _(by Philipp Burckhardt)_
-   [`4ebbd97`](https://github.com/stdlib-js/stdlib/commit/4ebbd97f55188dd986e9b98b26972c3729b1f6e4) - **docs:** fix TypeScript declarations doctest lint errors _(by Philipp Burckhardt)_
-   [`e63bbbd`](https://github.com/stdlib-js/stdlib/commit/e63bbbd535150fb694d287d97adbb5d606bd42fe) - **docs:** update namespace table of contents [(#8639)](https://github.com/stdlib-js/stdlib/pull/8639) _(by stdlib-bot)_
-   [`272e9da`](https://github.com/stdlib-js/stdlib/commit/272e9dabe6ef320417a6fcada1337fb5c074dc80) - **chore:** fix README lint errors _(by Neeraj Pathak)_
-   [`6499a10`](https://github.com/stdlib-js/stdlib/commit/6499a10c943fbdbcae8099366fe612d8aa527ddf) - **chore:** fix README lint errors _(by Neeraj Pathak)_
-   [`0beaf3c`](https://github.com/stdlib-js/stdlib/commit/0beaf3c1da2264b6964b0f04d639571e95a73a31) - **remove:** remove `utils/any-in-by` _(by Neeraj Pathak)_
-   [`6ea3fff`](https://github.com/stdlib-js/stdlib/commit/6ea3fff1850167852dc0ea18003c1e0209d70335) - **refactor:** update paths _(by Neeraj Pathak)_
-   [`54f9e1b`](https://github.com/stdlib-js/stdlib/commit/54f9e1b148a5b28618ff25e2b49fa2bd7dc8e946) - **chore:** fix JavaScript lint errors [(#8582)](https://github.com/stdlib-js/stdlib/pull/8582) _(by kaushal-kumar-it)_
-   [`7849e6f`](https://github.com/stdlib-js/stdlib/commit/7849e6ffba5b1734a5314c5ded28602dd75e0f3c) - **style:** remove semicolons after function declarations _(by Philipp Burckhardt)_
-   [`c8faa25`](https://github.com/stdlib-js/stdlib/commit/c8faa25f77167844cb222e101f584dda14f82fd8) - **chore:** fix JavaScript lint errors [(#8424)](https://github.com/stdlib-js/stdlib/pull/8424) _(by kaushal-kumar-it, Athan Reines)_
-   [`b9b8bcf`](https://github.com/stdlib-js/stdlib/commit/b9b8bcfd9708edd2b7b6c867bdfdde60f8e2b27b) - **chore:** resolve lint error in `utils/async/while` [(#8269)](https://github.com/stdlib-js/stdlib/pull/8269) _(by Suyash Pathak, Athan Reines)_
-   [`5f5bb2d`](https://github.com/stdlib-js/stdlib/commit/5f5bb2d4277a24000b57fb07bc28d821500cd7e8) - **docs:** update namespace table of contents [(#8425)](https://github.com/stdlib-js/stdlib/pull/8425) _(by stdlib-bot, Athan Reines)_
-   [`7e82b0c`](https://github.com/stdlib-js/stdlib/commit/7e82b0ca1438082723d163849d06b76ed335a883) - **chore:** fix JavaScript lint errors [(#8400)](https://github.com/stdlib-js/stdlib/pull/8400) _(by Rasim Bhat, Athan Reines)_
-   [`67a57a2`](https://github.com/stdlib-js/stdlib/commit/67a57a2861401202eb362b67971cf023ecf1518b) - **docs:** refactor example to use array PRNG  [(#8233)](https://github.com/stdlib-js/stdlib/pull/8233) _(by Udit Agarwal, Athan Reines)_
-   [`de7f81a`](https://github.com/stdlib-js/stdlib/commit/de7f81a291cbabdd093f465844316bdff3a363b9) - **chore:** fix JavaScript lint errors [(#8261)](https://github.com/stdlib-js/stdlib/pull/8261) _(by Payal Goswami)_
-   [`c08b5f1`](https://github.com/stdlib-js/stdlib/commit/c08b5f1e9ab95ed8f8710a9002b48578959e220a) - **chore:** fix JavaScript lint errors [(#8243)](https://github.com/stdlib-js/stdlib/pull/8243) _(by Mohsin)_
-   [`447a1ea`](https://github.com/stdlib-js/stdlib/commit/447a1ea0a03fa642d8193bdefd6bcb2533f99148) - **chore:** fix JavaScript lint errors [(#8222)](https://github.com/stdlib-js/stdlib/pull/8222) _(by youzi-forge)_
-   [`eebec21`](https://github.com/stdlib-js/stdlib/commit/eebec2173891b678ab5e419eec8d6ab3651ed9aa) - **chore:** fix lint errors [(#8184)](https://github.com/stdlib-js/stdlib/pull/8184) _(by Payal Goswami, Athan Reines)_
-   [`78351b3`](https://github.com/stdlib-js/stdlib/commit/78351b361d25d1abd7741df7a2c68f42968a3247) - **chore:** fix JavaScript lint errors [(#8176)](https://github.com/stdlib-js/stdlib/pull/8176) _(by Payal Goswami, Philipp Burckhardt)_
-   [`586b535`](https://github.com/stdlib-js/stdlib/commit/586b5355d0ef01720adc2a4f6549bacf63f2432d) - **docs:** update extended description [(#8167)](https://github.com/stdlib-js/stdlib/pull/8167) _(by stdlib-bot)_
-   [`e00e353`](https://github.com/stdlib-js/stdlib/commit/e00e353d8e5861c42098e0322f7ba11ee784529d) - **chore:** resolve javascript lint errors [(#8158)](https://github.com/stdlib-js/stdlib/pull/8158) _(by Zuhair Ahmad, Athan Reines)_
-   [`d94514b`](https://github.com/stdlib-js/stdlib/commit/d94514bc9418f5b42df6233204d5005d53af00ca) - **docs:** clean-up TSDoc declaration comments _(by Philipp Burckhardt)_
-   [`07459d3`](https://github.com/stdlib-js/stdlib/commit/07459d3be48a57aac6cc018cbb456749fad79f6a) - **chore:** remove private annotations _(by Philipp Burckhardt)_
-   [`b7c2031`](https://github.com/stdlib-js/stdlib/commit/b7c20312491bdcf54ffc681e5fe489b9ba3d059c) - **docs:** clean-up TSDoc declaration comments _(by Philipp Burckhardt)_
-   [`36058e8`](https://github.com/stdlib-js/stdlib/commit/36058e893ce3a1606f454f3054b14afb8f88438b) - **feat:** update `utils` TypeScript declarations _(by Philipp Burckhardt)_
-   [`6b4c40d`](https://github.com/stdlib-js/stdlib/commit/6b4c40ddf5581abcc2a1b33c566455ea57b56bc5) - **feat:** update `utils/async` TypeScript declarations _(by Philipp Burckhardt)_
-   [`47678cb`](https://github.com/stdlib-js/stdlib/commit/47678cbfcb7f1475f8eea7cc39dc9675fdfc3984) - **chore:** fix JavaScript lint errors [(#8075)](https://github.com/stdlib-js/stdlib/pull/8075) _(by Vara Rahul Rajana, Athan Reines)_
-   [`e9406ad`](https://github.com/stdlib-js/stdlib/commit/e9406adc483d1626e3fa6a61abc9c99ed78b306e) - **chore:** fix JavaScript lint errors [(#8062)](https://github.com/stdlib-js/stdlib/pull/8062) _(by Tyson Cung)_
-   [`c4bf225`](https://github.com/stdlib-js/stdlib/commit/c4bf22523ecfbab88fc1c6bc72468c859e1836e9) - **docs:** remove example _(by Philipp Burckhardt)_
-   [`1b9a036`](https://github.com/stdlib-js/stdlib/commit/1b9a036d676b247bf502c4ede08635b99fa611ca) - **fix:** allow correct values for `returns` option _(by Philipp Burckhardt)_
-   [`5feedbc`](https://github.com/stdlib-js/stdlib/commit/5feedbcf7d1de8ab6259c96fa39a2fdc50e2c895) - **docs:** do not pass in options object to avoid cast error _(by Philipp Burckhardt)_
-   [`6bb3c64`](https://github.com/stdlib-js/stdlib/commit/6bb3c64c915bb33715e5256fa8073e46b9a4d443) - **docs:** update examples in TSDoc comments in `utils/async` for doctesting _(by Philipp Burckhardt)_
-   [`18b2372`](https://github.com/stdlib-js/stdlib/commit/18b2372476178bcaa6bd7ddc69396f0e87dc93f2) - **feat:** add missing exports to namespaces _(by Philipp Burckhardt)_
-   [`57b828d`](https://github.com/stdlib-js/stdlib/commit/57b828d10a9b20f3003482557132723a79d27c66) - **chore:** fix JavaScript lint errors [(#8003)](https://github.com/stdlib-js/stdlib/pull/8003) _(by Dudhat Hemil Pravinkumar, Athan Reines)_
-   [`0bc9823`](https://github.com/stdlib-js/stdlib/commit/0bc98238e0d5e4991912848ef6069a753343eaa1) - **feat:** add missing exports to `utils` namespace _(by Philipp Burckhardt)_
-   [`8a6dbd7`](https://github.com/stdlib-js/stdlib/commit/8a6dbd7bf692bcd9ce166a7370eda0a7410da3b0) - **docs:** fix example code and return annotation values _(by Philipp Burckhardt)_
-   [`d2b9b0c`](https://github.com/stdlib-js/stdlib/commit/d2b9b0c10f35487713f6925c360b504a1f9e0a14) - **chore:** address commit comments for commit `1acd7fc` [(#7917)](https://github.com/stdlib-js/stdlib/pull/7917) _(by Srinivas Batthula, Philipp Burckhardt)_
-   [`e9c5955`](https://github.com/stdlib-js/stdlib/commit/e9c5955756fe9c633f6f67e42882394cc7c50148) - **docs:** update annotation to convey there may be inherited props _(by Philipp Burckhardt)_
-   [`bef0f69`](https://github.com/stdlib-js/stdlib/commit/bef0f69a3c1007126ef264c4148c41497079eaad) - **docs:** re-order requires _(by Philipp Burckhardt)_
-   [`1acd7fc`](https://github.com/stdlib-js/stdlib/commit/1acd7fc7114fcbef1b80ab506f6f47d3532d6ea8) - **docs:** fix example code _(by Philipp Burckhardt)_
-   [`1f1c5d8`](https://github.com/stdlib-js/stdlib/commit/1f1c5d8bc3bdc88c03da5fd93ca7ef5606ada63d) - **docs:** fix variable name of main export in example code _(by Philipp Burckhardt)_
-   [`4c33ef4`](https://github.com/stdlib-js/stdlib/commit/4c33ef4cf6c629ed8129bd67c137755a7b75f920) - **chore:** re-order requires _(by Philipp Burckhardt)_
-   [`6f85067`](https://github.com/stdlib-js/stdlib/commit/6f8506775cdf2b3edf740216340ff7a0a82677dc) - **test:** fix malformed test descriptions from strictEqual migration _(by Philipp Burckhardt)_
-   [`97f0e11`](https://github.com/stdlib-js/stdlib/commit/97f0e11fad5ac045777328c45d2ff595f568a5e0) - **chore:** use canonical format for JSDoc union types _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`a147b7d`](https://github.com/stdlib-js/stdlib/commit/a147b7d6ef754925120fcc7bdec2b40842a3615a) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_
-   [`77867ac`](https://github.com/stdlib-js/stdlib/commit/77867ac1767a186023f633dea30ddf860962aaed) - **docs:** remove trailing whitespace _(by Philipp Burckhardt)_
-   [`153c9c1`](https://github.com/stdlib-js/stdlib/commit/153c9c19e7e5bc138e18500cea598365d6df55d8) - **style:** fix indentation in JSON files _(by Philipp Burckhardt)_
-   [`4baa837`](https://github.com/stdlib-js/stdlib/commit/4baa837fde6fbe176add7b35f1f95f2e3b476ac0) - **chore:** fix EditorConfig lint errors [(#7696)](https://github.com/stdlib-js/stdlib/pull/7696) _(by Satyajeet Chavan, Athan Reines)_
-   [`708320e`](https://github.com/stdlib-js/stdlib/commit/708320e43d505cd6f390bf6014d58cb5e092cbaf) - **docs:** update related packages sections [(#7647)](https://github.com/stdlib-js/stdlib/pull/7647) _(by stdlib-bot, Philipp Burckhardt)_
-   [`d27d963`](https://github.com/stdlib-js/stdlib/commit/d27d963735240594f5b51a460c68e31493370a4a) - **remove:** remove `utils/some-in-by` _(by Neeraj Pathak)_
-   [`edef1e2`](https://github.com/stdlib-js/stdlib/commit/edef1e298a551ed453c4edc3d769746baf5dbde1) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`379c3c6`](https://github.com/stdlib-js/stdlib/commit/379c3c63f58517995deb3367e26c6f10bdf6f2eb) - **chore:** fix JavaScript lint errors [(#7355)](https://github.com/stdlib-js/stdlib/pull/7355) _(by Lokesh Ranjan, Athan Reines)_
-   [`b81fb3c`](https://github.com/stdlib-js/stdlib/commit/b81fb3cdb78fb07ec80ad7daf3503f769557508d) - **chore:** fix JavaScript lint errors [(#7065)](https://github.com/stdlib-js/stdlib/pull/7065) _(by Uday Kakade, Philipp Burckhardt)_
-   [`b904782`](https://github.com/stdlib-js/stdlib/commit/b90478256da0e1c56a9c30788996ff2f5e085f8e) - **chore:** fix JavaScript lint errors [(#6900)](https://github.com/stdlib-js/stdlib/pull/6900) _(by Geo Daoyu)_
-   [`66d1218`](https://github.com/stdlib-js/stdlib/commit/66d12182461dcd60d7168c47e4697f4d3421302f) - **chore:** fix JavaScript lint errors [(#6899)](https://github.com/stdlib-js/stdlib/pull/6899) _(by Geo Daoyu)_
-   [`805f439`](https://github.com/stdlib-js/stdlib/commit/805f439579204a004b3ff7cb040d5dca166c3205) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`ed9a036`](https://github.com/stdlib-js/stdlib/commit/ed9a036b50dd520e8090f047928e6e45611d0b46) - **docs:** fix typo _(by Philipp Burckhardt)_
-   [`5f73301`](https://github.com/stdlib-js/stdlib/commit/5f73301a8509cc423a06b02140c4e316fd02ff49) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`68445e7`](https://github.com/stdlib-js/stdlib/commit/68445e7c04b7c9fdd09e6b10fc72a9e5cb33bd39) - **remove:** remove `utils/none-in-by` _(by Neeraj Pathak)_
-   [`4817aff`](https://github.com/stdlib-js/stdlib/commit/4817affe594ef1e952c523e8d3aa0911e8fa0983) - **remove:** remove `utils/every-own-by` _(by Neeraj Pathak)_
-   [`35b2819`](https://github.com/stdlib-js/stdlib/commit/35b281999025fcd8236f7ca446cf44572cbb00f5) - **refactor:** update paths _(by Neeraj Pathak)_
-   [`878adf9`](https://github.com/stdlib-js/stdlib/commit/878adf9c25bc91bcacbe564234de5d1893402f5d) - **chore:** fix README lint error _(by Neeraj Pathak)_
-   [`81f72df`](https://github.com/stdlib-js/stdlib/commit/81f72df6f72639f05f25466ae294e59a4a44d36d) - **remove:** remove `utils/every-in-by` _(by Neeraj Pathak)_
-   [`cdd16a5`](https://github.com/stdlib-js/stdlib/commit/cdd16a535943832d7f227215467826e0924546ce) - **refactor:** update paths _(by Neeraj Pathak)_
-   [`09d4050`](https://github.com/stdlib-js/stdlib/commit/09d405085b87aaab8081380f12abd727bd20e310) - **chore:** fix JavaScript lint errors [(#6029)](https://github.com/stdlib-js/stdlib/pull/6029) _(by Jay Soni, Athan Reines)_
-   [`c9769bb`](https://github.com/stdlib-js/stdlib/commit/c9769bb2e805d85c3f004959d0728f6f249fe318) - **test:** add missing file printout _(by Philipp Burckhardt)_
-   [`69d4f4b`](https://github.com/stdlib-js/stdlib/commit/69d4f4b2d8f0a6f077c153b065edb403738a6f8b) - **docs:** update namespace table of contents [(#5489)](https://github.com/stdlib-js/stdlib/pull/5489) _(by stdlib-bot)_
-   [`b6624d0`](https://github.com/stdlib-js/stdlib/commit/b6624d072e58c6843fdcfd95d326c66f3975c501) - **remove:** remove `utils/thunk` _(by Neeraj Pathak)_
-   [`4b44dd3`](https://github.com/stdlib-js/stdlib/commit/4b44dd34e543a964b5493b1bfed83a1e058d6f69) - **remove:** remove `thunk` from namespace _(by Neeraj Pathak)_
-   [`3772f8f`](https://github.com/stdlib-js/stdlib/commit/3772f8f53a07408b72cf4ec3e8334758f9aded0d) - **docs:** update namespace table of contents [(#5366)](https://github.com/stdlib-js/stdlib/pull/5366) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a4fdfa1`](https://github.com/stdlib-js/stdlib/commit/a4fdfa1aa900faccbe5719f735824d27565ddefe) - **remove:** remove `utils/stack` _(by Athan Reines)_
-   [`0d4af05`](https://github.com/stdlib-js/stdlib/commit/0d4af053c017bb5e285857de4d6ca1bfecf7f582) - **remove:** remove `utils/named-typed-tuple` _(by Athan Reines)_
-   [`29798aa`](https://github.com/stdlib-js/stdlib/commit/29798aa3e282144dce5067836254645764ca1ff9) - **remove:** remove `utils/linked-list` _(by Athan Reines)_
-   [`732ec99`](https://github.com/stdlib-js/stdlib/commit/732ec9996eeb03e1fea62d005714855b05daab76) - **remove:** remove `utils/fifo` _(by Athan Reines)_
-   [`f4c805b`](https://github.com/stdlib-js/stdlib/commit/f4c805bef2ea5092e4e8bb13cdfb2070428478e3) - **remove:** remove `utils/doubly-linked-list` _(by Athan Reines)_
-   [`10a63a7`](https://github.com/stdlib-js/stdlib/commit/10a63a745f0491ed71e6ea35d426a953b63edee0) - **remove:** remove `utils/compact-adjacency-matrix` _(by Athan Reines)_
-   [`5a6b123`](https://github.com/stdlib-js/stdlib/commit/5a6b12371d4f2ab3ecf5d2fcce2d7fe125b8ab0f) - **remove:** remove `utils/circular-buffer` _(by Athan Reines)_
-   [`6dd093d`](https://github.com/stdlib-js/stdlib/commit/6dd093dfb217f9fe5ef4c15f096502a441910c1f) - **remove:** remove `Stack` from namespace _(by Athan Reines)_
-   [`0603f13`](https://github.com/stdlib-js/stdlib/commit/0603f137f2e3c128a2258dc7a2c124d537df8c72) - **remove:** remove `namedtypedtuple` from namespace _(by Athan Reines)_
-   [`4f59553`](https://github.com/stdlib-js/stdlib/commit/4f59553db77a6aa5b50fa9bd31012692460ddd45) - **remove:** remove `LinkedList` from namespace _(by Athan Reines)_
-   [`cd22c5b`](https://github.com/stdlib-js/stdlib/commit/cd22c5b64bc31bbaa5a170a950bfc26f81bdf725) - **remove:** remove `FIFO` from namespace _(by Athan Reines)_
-   [`8e31984`](https://github.com/stdlib-js/stdlib/commit/8e31984810c1fb204605e8f23922fcd74edc0d64) - **remove:** remove `DoublyLinkedList` from namespace _(by Athan Reines)_
-   [`7b73654`](https://github.com/stdlib-js/stdlib/commit/7b73654dc56e65ca98a3fdf7f369f1d89bb11ace) - **remove:** remove `compactAdjacencyMatrix` from namespace _(by Athan Reines)_
-   [`35d2b7c`](https://github.com/stdlib-js/stdlib/commit/35d2b7ccb121b45a7df51b483a95889a665f4fea) - **remove:** remove `circularBuffer` from namespace _(by Athan Reines)_
-   [`8da0e78`](https://github.com/stdlib-js/stdlib/commit/8da0e787b914f30db9bafcd1c0804ae2f1a99e36) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`836170d`](https://github.com/stdlib-js/stdlib/commit/836170decec14309639deb41ae3a3c22256d68af) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`321e49e`](https://github.com/stdlib-js/stdlib/commit/321e49e9965648f1b5eb6a840fe454959af0ec49) - **docs:** add missing periods to list items _(by Philipp Burckhardt)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`2965f8f`](https://github.com/stdlib-js/stdlib/commit/2965f8f4d1469ed76c7d9c150b39a87b62d73fbd) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`a1b543a`](https://github.com/stdlib-js/stdlib/commit/a1b543a2a1bdf4d1fb9438bd4a13cb971af62063) - **docs:** update related packages sections [(#4009)](https://github.com/stdlib-js/stdlib/pull/4009) _(by stdlib-bot, Philipp Burckhardt)_
-   [`32deb11`](https://github.com/stdlib-js/stdlib/commit/32deb11c6a2453748d8db9554b6bb3fdb73a077f) - **docs:** update related packages sections [(#3976)](https://github.com/stdlib-js/stdlib/pull/3976) _(by stdlib-bot)_
-   [`b20a9e6`](https://github.com/stdlib-js/stdlib/commit/b20a9e616e5d04cfc3e5bc71bd557e15af738050) - **docs:** update related packages sections [(#3936)](https://github.com/stdlib-js/stdlib/pull/3936) _(by stdlib-bot)_
-   [`1c56b73`](https://github.com/stdlib-js/stdlib/commit/1c56b737ec018cc818cebf19e5c7947fa684e126) - **docs:** update related packages sections [(#3380)](https://github.com/stdlib-js/stdlib/pull/3380) _(by stdlib-bot)_
-   [`0a8192d`](https://github.com/stdlib-js/stdlib/commit/0a8192d68506a2abf4c3e52e1af9f1510e1660b4) - **docs:** update related packages sections [(#3370)](https://github.com/stdlib-js/stdlib/pull/3370) _(by stdlib-bot)_
-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - **feat:** update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259) _(by stdlib-bot, Philipp Burckhardt)_
-   [`eeb9d6f`](https://github.com/stdlib-js/stdlib/commit/eeb9d6fdc2e3faa3116c84f276e88737ba11196f) - **fix:** remove unused imports _(by Athan Reines)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 22 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Dudhat Hemil Pravinkumar
-   Geo Daoyu
-   Gururaj Gurram
-   Jay Soni
-   Lokesh Ranjan
-   Mohsin
-   Neeraj Pathak
-   Payal Goswami
-   Philipp Burckhardt
-   Rasim Bhat
-   Rohit R Bhat
-   Satyajeet Chavan
-   Srinivas Batthula
-   Suyash Pathak
-   Tyson Cung
-   Uday Kakade
-   Udit Agarwal
-   Vara Rahul Rajana
-   Zuhair Ahmad
-   kaushal-kumar-it
-   youzi-forge

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="features">

### Features

-   [`b74a08a`](https://github.com/stdlib-js/stdlib/commit/b74a08ae1dfc859ac8b9704af27e3c3399ad2da5) - improve type declarations for `utils/map-arguments` [(#2050)](https://github.com/stdlib-js/stdlib/pull/2050)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`a59219e`](https://github.com/stdlib-js/stdlib/commit/a59219e11d1951ec26cb44a4972e7616e4d8087f) - update import path for collection type
-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file
-   [`506bdcc`](https://github.com/stdlib-js/stdlib/commit/506bdccd0841d8c1e56df5587de6c32c2c7ec498) - use correct parameter ordering in TS

</section>

<!-- /.bug-fixes -->

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

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="features">

### Features

-   [`294b868`](https://github.com/stdlib-js/stdlib/commit/294b868248299e6256454efe1853d98ab84ac3f2) - add `utils/async/parallel` [(#1896)](https://github.com/stdlib-js/stdlib/pull/1896)
-   [`8c5698c`](https://github.com/stdlib-js/stdlib/commit/8c5698ce650800516279f9d90fabbc65a17cff52) - add `utils/any-own-by`
-   [`8d6f33c`](https://github.com/stdlib-js/stdlib/commit/8d6f33c6b2162168d9855080d5cc261f4f9bfd9e) - add `utils/parse-ndjson`
-   [`80fdd70`](https://github.com/stdlib-js/stdlib/commit/80fdd7073fb324751656cadfc3ed190045fc1583) - add `utils/some-own-by`
-   [`69c167d`](https://github.com/stdlib-js/stdlib/commit/69c167d7b5ad978f4e5507a48a8f8dc525464da5) - add `utils/any-in-by`
-   [`c9e1623`](https://github.com/stdlib-js/stdlib/commit/c9e1623e7c116d0d0afdf80dc22b19af81b3346b) - add `utils/none-in-by`
-   [`52e479b`](https://github.com/stdlib-js/stdlib/commit/52e479b8430f04cfe0b861bd81f59c9125d7673b) - add `utils/every-own-by`
-   [`87ec7c2`](https://github.com/stdlib-js/stdlib/commit/87ec7c2486b008c88a0b0846135240c1ae36e9f1) - add `utils/every-in-by`
-   [`046d8c4`](https://github.com/stdlib-js/stdlib/commit/046d8c4f83ff9635764967406fb6c3b5c4554518) - add `utils/none-own-by`
-   [`2351845`](https://github.com/stdlib-js/stdlib/commit/2351845b933cc7b7368c42e4565b57149806e5f9) - add `utils/some-in-by`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`e971001`](https://github.com/stdlib-js/stdlib/commit/e971001e2d17ca4c6e67e81aaba687f5001f0288) - improve type declarations by using generics in `utils/group` [(#1375)](https://github.com/stdlib-js/stdlib/pull/1375)
-   [`19106ca`](https://github.com/stdlib-js/stdlib/commit/19106ca820dcd737e7fcf1b022d9b1b7346c5b52) - update unary predicate error type to include null
-   [`952ea72`](https://github.com/stdlib-js/stdlib/commit/952ea72db18b6ff6b06bf89a3559d9f99a69cae5) - properly type predicate error parameter

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 2 issues were closed in this release:

[#1096](https://github.com/stdlib-js/stdlib/issues/1096), [#1811](https://github.com/stdlib-js/stdlib/issues/1811)

</section>

<!-- /.issues -->

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
-   [`326479a`](https://github.com/stdlib-js/stdlib/commit/326479a0533ad89929eac59ad1b122cd8cd9cc5f) - **refactor:** update `blas/ext/base/snansumors` to follow current project conventions _(by Pratik Singh, Philipp Burckhardt)_
-   [`98ae85e`](https://github.com/stdlib-js/stdlib/commit/98ae85e1daf32d48a1d3173cfbcb229c722fc79c) - **docs:** update related packages sections [(#2107)](https://github.com/stdlib-js/stdlib/pull/2107) _(by stdlib-bot)_
-   [`f36cfab`](https://github.com/stdlib-js/stdlib/commit/f36cfab3875404fd9c58b6e2a6fedca5e04cb4d9) - **chore:** update package meta data [(#2014)](https://github.com/stdlib-js/stdlib/pull/2014) _(by stdlib-bot)_
-   [`8a88ec1`](https://github.com/stdlib-js/stdlib/commit/8a88ec1f450ddc7cc4e9004f94299fe864bf7acb) - **docs:** update related packages sections [(#2006)](https://github.com/stdlib-js/stdlib/pull/2006) _(by stdlib-bot)_
-   [`8c5698c`](https://github.com/stdlib-js/stdlib/commit/8c5698ce650800516279f9d90fabbc65a17cff52) - **feat:** add `utils/any-own-by` _(by Joel Mathew Koshy, Philipp Burckhardt)_
-   [`a3fbf67`](https://github.com/stdlib-js/stdlib/commit/a3fbf67720b3d1963b27c1097bd8144397ac0ec1) - **docs:** update related packages sections [(#1857)](https://github.com/stdlib-js/stdlib/pull/1857) _(by stdlib-bot)_
-   [`d40dbaf`](https://github.com/stdlib-js/stdlib/commit/d40dbafc25e3e10c8fa83f5b4203db97c289823c) - **chore:** update package meta data [(#1812)](https://github.com/stdlib-js/stdlib/pull/1812) _(by stdlib-bot)_
-   [`8d6f33c`](https://github.com/stdlib-js/stdlib/commit/8d6f33c6b2162168d9855080d5cc261f4f9bfd9e) - **feat:** add `utils/parse-ndjson` _(by Manik Sharma, stdlib-bot, Shubham Singh, Philipp Burckhardt, Athan Reines)_
-   [`80fdd70`](https://github.com/stdlib-js/stdlib/commit/80fdd7073fb324751656cadfc3ed190045fc1583) - **feat:** add `utils/some-own-by` _(by Rutam Kathale, Pranav, Philipp Burckhardt)_
-   [`69c167d`](https://github.com/stdlib-js/stdlib/commit/69c167d7b5ad978f4e5507a48a8f8dc525464da5) - **feat:** add `utils/any-in-by` _(by Priyansh Prajapati)_
-   [`c9e1623`](https://github.com/stdlib-js/stdlib/commit/c9e1623e7c116d0d0afdf80dc22b19af81b3346b) - **feat:** add `utils/none-in-by` _(by Priyanshu Agarwal, Philipp Burckhardt)_
-   [`52e479b`](https://github.com/stdlib-js/stdlib/commit/52e479b8430f04cfe0b861bd81f59c9125d7673b) - **feat:** add `utils/every-own-by` _(by Pranjal Jha, Philipp Burckhardt)_
-   [`5cfd0a8`](https://github.com/stdlib-js/stdlib/commit/5cfd0a8712299d680aff7f9d8fca0c0ac69de56b) - **chore:** update package meta data [(#1462)](https://github.com/stdlib-js/stdlib/pull/1462) _(by stdlib-bot)_
-   [`87ec7c2`](https://github.com/stdlib-js/stdlib/commit/87ec7c2486b008c88a0b0846135240c1ae36e9f1) - **feat:** add `utils/every-in-by` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`e971001`](https://github.com/stdlib-js/stdlib/commit/e971001e2d17ca4c6e67e81aaba687f5001f0288) - **fix:** improve type declarations by using generics in `utils/group` [(#1375)](https://github.com/stdlib-js/stdlib/pull/1375) _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`046d8c4`](https://github.com/stdlib-js/stdlib/commit/046d8c4f83ff9635764967406fb6c3b5c4554518) - **feat:** add `utils/none-own-by` _(by Pratik Singh, stdlib-bot, Philipp Burckhardt)_
-   [`2351845`](https://github.com/stdlib-js/stdlib/commit/2351845b933cc7b7368c42e4565b57149806e5f9) - **feat:** add `utils/some-in-by` _(by Rutam Kathale, Philipp Burckhardt)_
-   [`6941efb`](https://github.com/stdlib-js/stdlib/commit/6941efb41b8c7c108ec87b93bb82795584134753) - **refactor:** improve type definitions for async/if then [(#1381)](https://github.com/stdlib-js/stdlib/pull/1381) _(by Prajwal Kulkarni, Philipp Burckhardt)_
-   [`19106ca`](https://github.com/stdlib-js/stdlib/commit/19106ca820dcd737e7fcf1b022d9b1b7346c5b52) - **fix:** update unary predicate error type to include null _(by Philipp Burckhardt)_
-   [`952ea72`](https://github.com/stdlib-js/stdlib/commit/952ea72db18b6ff6b06bf89a3559d9f99a69cae5) - **fix:** properly type predicate error parameter _(by Philipp Burckhardt)_
-   [`174544f`](https://github.com/stdlib-js/stdlib/commit/174544f854a5dd7e839ecf9eb2c46095728f62dd) - **refactor:** use generics to improve type declarations for async/if then [(#1366)](https://github.com/stdlib-js/stdlib/pull/1366) _(by Prajwal Kulkarni)_

</details>

</section>

<!-- /.commits -->

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
-   Pranjal Jha
-   Pratik Singh
-   Priyansh Prajapati
-   Priyanshu Agarwal
-   Rutam Kathale
-   Sai Srikar Dumpeti
-   Shubham Mishra
-   Utkarsh Raj

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="features">

### Features

-   [`8904b41`](https://github.com/stdlib-js/stdlib/commit/8904b41fed1ab765d80190f1b066106e5ddeb627) - refactor TypeScript declarations to preserve type information

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`541d333`](https://github.com/stdlib-js/stdlib/commit/541d33396f3cef0c017d7c67845a9072d6626be3) - disable code blocks due to runtime errors

</section>

<!-- /.bug-fixes -->

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

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="features">

### Features

-   [`e18b248`](https://github.com/stdlib-js/stdlib/commit/e18b248464425863019a841795a7e5fc7d01d0ea) - update namespace TypeScript declarations [(#1100)](https://github.com/stdlib-js/stdlib/pull/1100)
-   [`6ba83db`](https://github.com/stdlib-js/stdlib/commit/6ba83db94da9a5611126becdd83d5a3a0c3b73d7) - consolidate callback arguments
-   [`32a4165`](https://github.com/stdlib-js/stdlib/commit/32a4165d91ab7fc60dc843d619fb3ce472fb5618) - consolidate callback arguments
-   [`a6be89b`](https://github.com/stdlib-js/stdlib/commit/a6be89ba51bb22516e4e10483bc0086be648d81b) - consolidate callback arguments
-   [`3a07602`](https://github.com/stdlib-js/stdlib/commit/3a0760275c57c5b61dd748cf825c7146b2b7d619) - consolidate callback arguments
-   [`f270c07`](https://github.com/stdlib-js/stdlib/commit/f270c078cd4394120cb3cf2d92a9b02892052fe8) - update callback signature
-   [`c1eaf9b`](https://github.com/stdlib-js/stdlib/commit/c1eaf9b48f73112af77d774084caf5a27e2d47e9) - update callback signature
-   [`762c44f`](https://github.com/stdlib-js/stdlib/commit/762c44f2d442ad099b10dae4635e8c29a5c6b328) - update callback signature
-   [`de73ae1`](https://github.com/stdlib-js/stdlib/commit/de73ae19f43cbad40036d25b1d46620b3c5113a9) - update namespace TypeScript declarations [(#1089)](https://github.com/stdlib-js/stdlib/pull/1089)
-   [`2bb4efe`](https://github.com/stdlib-js/stdlib/commit/2bb4efeeed71045d67f599a65eb5edc493ab849e) - improve type specificity for `thisArg`
-   [`701fffc`](https://github.com/stdlib-js/stdlib/commit/701fffc7e3ff3b63c1fc1ad3bafa78017ccaea6d) - switch order of generic input types
-   [`b92f33c`](https://github.com/stdlib-js/stdlib/commit/b92f33c2acfe6732882688ecf98602f29149abbb) - improve type specificity
-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version
-   [`1147e6a`](https://github.com/stdlib-js/stdlib/commit/1147e6a6756955b23b9b3f0c12ca834d2b5b3273) - refactor for added type safety
-   [`5edaa45`](https://github.com/stdlib-js/stdlib/commit/5edaa451c3d0ec114eab2640bde05cb09e1d97d4) - refactor for added type safety
-   [`d97df70`](https://github.com/stdlib-js/stdlib/commit/d97df70e5296503247dcab0485e1e6b58929cb61) - fix parameter order and ensure type safety of this context
-   [`5c70f69`](https://github.com/stdlib-js/stdlib/commit/5c70f699fe056e550029f30f6c8a12c26200c1df) - use generics for type safety
-   [`a23de41`](https://github.com/stdlib-js/stdlib/commit/a23de41de4280e8d1291a87c50af5c07e9b5ae54) - refactor declaration for added type safety
-   [`10ab1e7`](https://github.com/stdlib-js/stdlib/commit/10ab1e71cfce96df534b70874166890754b7d839) - refactor declaration for added type safety
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044)
-   [`ba454af`](https://github.com/stdlib-js/stdlib/commit/ba454af8b3a18ddb727d26613d97905fc2b115fd) - increase minimum TypeScript version
-   [`04518a7`](https://github.com/stdlib-js/stdlib/commit/04518a70bd76be49c16d0cc70c93f0ff304362b5) - increase minimum TypeScript version
-   [`3363cce`](https://github.com/stdlib-js/stdlib/commit/3363cce2161db6711181a527e124f34de49cf48d) - increase minimum TypeScript version
-   [`e62998d`](https://github.com/stdlib-js/stdlib/commit/e62998da4db17224516ba67fdc0d04a4baec83c9) - increase minimum TypeScript version
-   [`3959f83`](https://github.com/stdlib-js/stdlib/commit/3959f834656eeeab8a21397b360e93ccfaaa7721) - increase minimum TypeScript version
-   [`136dea5`](https://github.com/stdlib-js/stdlib/commit/136dea56f5aed5bee2daa1b135afedd9f10ddb89) - increase minimum TypeScript version
-   [`6fe818a`](https://github.com/stdlib-js/stdlib/commit/6fe818a2c2704f86939ca37c178ecaaaa7cb7118) - refactor declarations to use generics
-   [`8029fec`](https://github.com/stdlib-js/stdlib/commit/8029fec506ed2a501af25e63f724ca08ad12a615) - refactor declarations to use generics
-   [`609eec4`](https://github.com/stdlib-js/stdlib/commit/609eec4bab7ae96c8b733046e97c724eb55fdd71) - refactor declarations to use generics
-   [`2558991`](https://github.com/stdlib-js/stdlib/commit/255899189d60b13e6c55b6457f14e70cebe2efef) - increase minimum TypeScript version
-   [`0fff7dc`](https://github.com/stdlib-js/stdlib/commit/0fff7dc03ced4c21e7bf7c5e164f50a28f6ab5e4) - refactor declarations to use generics
-   [`4d4c295`](https://github.com/stdlib-js/stdlib/commit/4d4c29512a4d6eb3ba12e76aa266ea47822e82cc) - refactor declarations to use generics
-   [`33b1a9e`](https://github.com/stdlib-js/stdlib/commit/33b1a9eebbfdae2784f5a49be9c56b8b8fc9bc65) - refactor declarations to use generics
-   [`5238516`](https://github.com/stdlib-js/stdlib/commit/52385165887a527340ca95059ba3ee4502af9b42) - refactor declarations to use generics
-   [`11dfa3a`](https://github.com/stdlib-js/stdlib/commit/11dfa3ad7fc6619b73e5a79ffa0c509f94170203) - increase minimum TypeScript version
-   [`069c10d`](https://github.com/stdlib-js/stdlib/commit/069c10d99850d8ec51e7764d2266ed34405ff542) - increase minimum TypeScript version
-   [`5cf30d1`](https://github.com/stdlib-js/stdlib/commit/5cf30d1a059e3fd6fdafa0e327a148d64f9d002e) - refactor declarations to use generics
-   [`c928438`](https://github.com/stdlib-js/stdlib/commit/c928438efd2dcb945212f8ff96d0a4595f0a35b8) - refactor declarations to use generics
-   [`79c74b3`](https://github.com/stdlib-js/stdlib/commit/79c74b361f7032a948481650a8b9b21644783415) - refactor declarations to use generics
-   [`97b7144`](https://github.com/stdlib-js/stdlib/commit/97b7144bdcd3c520688549a483601f67491066ea) - increase minimum TypeScript version
-   [`26f6fb2`](https://github.com/stdlib-js/stdlib/commit/26f6fb251d4612dbaa5c3f67b65ec006bddc10db) - refactor declarations to use generics
-   [`18482b3`](https://github.com/stdlib-js/stdlib/commit/18482b3feda6ce8241e0b72bb4715564e7931277) - improve definitions for type safety
-   [`becc613`](https://github.com/stdlib-js/stdlib/commit/becc613f1dd47053e3b5b100adfa4769402dc51f) - improve definition for type safety
-   [`d92d0a7`](https://github.com/stdlib-js/stdlib/commit/d92d0a71bb32d41bea354d0e3e3dc0bbd2cc9839) - improve definition for type safety

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)
-   [`4dc4968`](https://github.com/stdlib-js/stdlib/commit/4dc496854221dcd17d43cfd10d9520580b618ecb) - update import path for `Collection` type definition and refactor to use generics
-   [`5c93dea`](https://github.com/stdlib-js/stdlib/commit/5c93deadb44fe8f5597326c412d3ec005547efb2) - update import path for `Collection` type definition and refactor to use generics
-   [`030ddd0`](https://github.com/stdlib-js/stdlib/commit/030ddd076adeb08373b919fed9a133f06254662c) - update import path for `Collection` type definition and refactor to use generics
-   [`feb0880`](https://github.com/stdlib-js/stdlib/commit/feb0880e539b786a1b27d20be28348249bf3f604) - update import path for `Collection` type definition and refactor to use generics
-   [`619fadc`](https://github.com/stdlib-js/stdlib/commit/619fadce92a34abdc7d02bad4ce6612f490791a9) - update import path for `Collection` type definition and refactor to use generics
-   [`c234583`](https://github.com/stdlib-js/stdlib/commit/c2345831e7e99470d6519f7f548d1d130abe1591) - update import path for `Collection` type definition and refactor to use generics
-   [`e9afc9f`](https://github.com/stdlib-js/stdlib/commit/e9afc9f088654d14858df809aa8ee52a51f024df) - update import path for `Collection` type definition and refactor to use generics
-   [`bc9c722`](https://github.com/stdlib-js/stdlib/commit/bc9c72243e2971b04b486b222f18712dfbb12961) - update import path for `Collection` type definition and use generics
-   [`5573a67`](https://github.com/stdlib-js/stdlib/commit/5573a67ad26e964548a6cae27d4b85afb6e9909b) - update import path for `Collection` type definition and use generics
-   [`447a49d`](https://github.com/stdlib-js/stdlib/commit/447a49da67d4cc03ab5106b815929731e3b418ec) - update import path for `Collection` type definition and use generics
-   [`6b80df1`](https://github.com/stdlib-js/stdlib/commit/6b80df17ce5a19ad19690c691ce00b79768f6ea7) - update import path for `Collection` type definition and use generics
-   [`33fb7ed`](https://github.com/stdlib-js/stdlib/commit/33fb7ed1579343f4bff1f79c6948c7bf5439a2d5) - update import path for `Collection` type definition and use generics
-   [`7de06d8`](https://github.com/stdlib-js/stdlib/commit/7de06d8787ac72365d3ba9d29ac70d8ccbb069a0) - update import path for `Collection` type definition and use generics
-   [`c1e09e2`](https://github.com/stdlib-js/stdlib/commit/c1e09e2883cec812a2ee4c254cc89b34aeab2059) - update import path for `Collection` type definition and use generics
-   [`d028a83`](https://github.com/stdlib-js/stdlib/commit/d028a837644d0451445424922f2f07a0f94e7b4d) - update import path for `Collection` type definition and use generics
-   [`daa846c`](https://github.com/stdlib-js/stdlib/commit/daa846cf840517f2620160f9a7d638975fb0b069) - update import path for `Collection` type definition and use generics
-   [`724d386`](https://github.com/stdlib-js/stdlib/commit/724d386fdb37a4ab05e0e332766a3d7b67f54ab2) - update import path for `Collection` type definition and use generics
-   [`e92aceb`](https://github.com/stdlib-js/stdlib/commit/e92aceb807c9ec3e442cf53e3495a66767772166) - update import path for `Collection` type definition and use generics
-   [`67b5d37`](https://github.com/stdlib-js/stdlib/commit/67b5d37284f61bb52b53ebf3f30ed64c3436870d) - update import path for `Collection` type definition and improve type specificity
-   [`90b28d6`](https://github.com/stdlib-js/stdlib/commit/90b28d6e257dc731e846a16029768d3af57d1082) - update import path for `Collection` type definition and improve type specificity
-   [`4ff0c5a`](https://github.com/stdlib-js/stdlib/commit/4ff0c5a46aaca21237522f26e030aaefb19bb7be) - update import path for `Collection` type definition and improve type specificity
-   [`cb52e02`](https://github.com/stdlib-js/stdlib/commit/cb52e0271914a717355ba2b37c1b702771eb141a) - update import path for `Collection` type definition and improve type specificity
-   [`ac2c729`](https://github.com/stdlib-js/stdlib/commit/ac2c7294915dce638395d1bf3aa405a55159049d) - add missing `this` parameter
-   [`99e61ba`](https://github.com/stdlib-js/stdlib/commit/99e61ba8044535dc5aec73c684a652bbab4541c4) - add missing `this` parameter
-   [`312caf3`](https://github.com/stdlib-js/stdlib/commit/312caf3929069173b1c574e54b7276f340601c9a) - add missing `this` parameter
-   [`aec2475`](https://github.com/stdlib-js/stdlib/commit/aec24756acf532d2565ef5561d5c7f9e67d8639a) - add missing `this` parameter
-   [`72357fb`](https://github.com/stdlib-js/stdlib/commit/72357fb30adaf6e00a4d176f0bd8a14f339e6370) - add missing `this` parameter
-   [`71f0dcb`](https://github.com/stdlib-js/stdlib/commit/71f0dcb8a2fe76df584bfc23b1195d6e55e8557f) - add missing `this` parameter
-   [`0216d80`](https://github.com/stdlib-js/stdlib/commit/0216d80f92d2a52741d2243c3bf759f1c82d0f1a) - add missing `this` parameter
-   [`3f58bf9`](https://github.com/stdlib-js/stdlib/commit/3f58bf96d366a7c2dd0e70813f52cc5e22fa83c1) - add missing `this` parameter
-   [`3a20d0d`](https://github.com/stdlib-js/stdlib/commit/3a20d0d370d4a956adf22835076a5420e54af364) - add missing `this` parameter
-   [`195a63e`](https://github.com/stdlib-js/stdlib/commit/195a63e3480cbda8994d60c69839343ddab652cb) - add missing `this` parameter
-   [`43949fc`](https://github.com/stdlib-js/stdlib/commit/43949fcc42c41a9b62f2136835afecea8b70e294) - add missing `this` parameter
-   [`a11b904`](https://github.com/stdlib-js/stdlib/commit/a11b904f72cea90a52038f27acac29eabdc94696) - add missing `this` parameter
-   [`21cddc4`](https://github.com/stdlib-js/stdlib/commit/21cddc47d6cde04976608ca363fb7b937d7f5fb5) - add missing `this` parameter
-   [`b45ab4c`](https://github.com/stdlib-js/stdlib/commit/b45ab4c20205d15c590d5fd7084fa74f00795a38) - add missing `this` parameter
-   [`438c577`](https://github.com/stdlib-js/stdlib/commit/438c57782f4d29ddf7cd17ac49776d6717779be1) - add missing `this` parameter
-   [`d390c4e`](https://github.com/stdlib-js/stdlib/commit/d390c4e96f0d98376392ca01a46614ce2d4e18a1) - add missing `this` parameter
-   [`a18bf17`](https://github.com/stdlib-js/stdlib/commit/a18bf17ecfd9d333f1705f7f5838b63efe8dfcbe) - update import path for `Collection` type definition
-   [`ed797c1`](https://github.com/stdlib-js/stdlib/commit/ed797c100bfb7987175b2fc085be2e73b9fc9bf2) - update import path for `Collection` type definition
-   [`2654159`](https://github.com/stdlib-js/stdlib/commit/26541597a65d088b3141cdc1f1e9800fd3c47304) - update import path for `Collection` type definition
-   [`f41e1b6`](https://github.com/stdlib-js/stdlib/commit/f41e1b68ded2c1e5d6c39028e32bd0f0c7e75e65) - update import path for `Collection` type definition
-   [`53723e9`](https://github.com/stdlib-js/stdlib/commit/53723e9e9a521c6b43893383a09433626f9a5d0e) - update import path for `Collection` type definition
-   [`e92f470`](https://github.com/stdlib-js/stdlib/commit/e92f4707c25e7272845551f3daae70b3d86591b6) - update import path for `Collection` type definition
-   [`1fc4de2`](https://github.com/stdlib-js/stdlib/commit/1fc4de2f10bfe2a24b14a6326658bbb5d93fe65a) - update import path for `Collection` type definition
-   [`ccc993b`](https://github.com/stdlib-js/stdlib/commit/ccc993b3aed2401eb4fd94d49da2e27631c9c0e1) - update import path for `Collection` type definition
-   [`e91b8c5`](https://github.com/stdlib-js/stdlib/commit/e91b8c59c2b088959b0233b2f62a9b340989e817) - update import path for `Collection` type definition
-   [`41a3c74`](https://github.com/stdlib-js/stdlib/commit/41a3c74e7d025bb804c773fe69d33bd79393ccb1) - update import path for `Collection` type definition
-   [`43265b3`](https://github.com/stdlib-js/stdlib/commit/43265b30f6843258cfe15b7efd6306220a23c1a9) - update import path for `Collection` type definition
-   [`a151e17`](https://github.com/stdlib-js/stdlib/commit/a151e17ad2eb24f65e4f5cda0db93c8287d1e416) - update import path for `Collection` type definition
-   [`73b6076`](https://github.com/stdlib-js/stdlib/commit/73b60762aa8b90f40955041f5fe2425393997061) - update import path for `Collection` type definition
-   [`2cc76dd`](https://github.com/stdlib-js/stdlib/commit/2cc76dd32b4145469a439fbd761c442a1ceed461) - update import path for `Collection` type definition
-   [`0481deb`](https://github.com/stdlib-js/stdlib/commit/0481deb4ea65c04ef733c89464d8c875beb8bde0) - update import path for `Collection` type definition
-   [`c5cfac0`](https://github.com/stdlib-js/stdlib/commit/c5cfac0c621b13d7d6b2f15380d36726f861045d) - update import path for `Collection` type definition
-   [`4a9ce10`](https://github.com/stdlib-js/stdlib/commit/4a9ce10522aff3ae6f099bcc867c5f3d30dddef8) - update import path for `Collection` type definition
-   [`29bce60`](https://github.com/stdlib-js/stdlib/commit/29bce60bb13947ca6d336c6970954b491013b1e1) - add missing support for omitting a `returns` option
-   [`cbdc02b`](https://github.com/stdlib-js/stdlib/commit/cbdc02b1b3febae34e4df2358913fbf55d2365f2) - add missing support for omitting a `returns` option
-   [`1bf88f1`](https://github.com/stdlib-js/stdlib/commit/1bf88f1a75366df27e02072018699487680ab597) - update import path for `Collection` type definition
-   [`63445cd`](https://github.com/stdlib-js/stdlib/commit/63445cdacf11308b7cfcddc48cb40d4497d061e1) - set missing default type value
-   [`fcfd703`](https://github.com/stdlib-js/stdlib/commit/fcfd7038263c02980f2f8e635526ca66273d2f67) - update import path for `Collection` type definition
-   [`1185b24`](https://github.com/stdlib-js/stdlib/commit/1185b24060765164e1c5da1967c18d9f7a7b1e0f) - enhance type for `this` context
-   [`a5bc25a`](https://github.com/stdlib-js/stdlib/commit/a5bc25a773ba6af924107c8322acf3b8b9b3f21a) - update import path for `Collection` type definition
-   [`b423df5`](https://github.com/stdlib-js/stdlib/commit/b423df535144d071f50f8ffde064840fe38cf130) - update import path for `Collection` type definition
-   [`ad90d49`](https://github.com/stdlib-js/stdlib/commit/ad90d49a0b23da4df7dade0b8e5b4e50b10a580a) - update import path for `Collection` type definition
-   [`ceabc3b`](https://github.com/stdlib-js/stdlib/commit/ceabc3b509711945de3ecfe2348f54e25937b02b) - update import path for `Collection` type definition
-   [`5b60a40`](https://github.com/stdlib-js/stdlib/commit/5b60a40c28a92651623f0274ae34bf53f82aef60) - update import path for `Collection` type definition
-   [`1ddd642`](https://github.com/stdlib-js/stdlib/commit/1ddd642d08f7ec5bb55b3b148fef71997def4e54) - update import path for `Collection` type definition
-   [`eaa6bdd`](https://github.com/stdlib-js/stdlib/commit/eaa6bdd35b5f78e9dba25d51a04b3070617ac7f1) - update import path for `Collection` type definition
-   [`a9970ee`](https://github.com/stdlib-js/stdlib/commit/a9970ee570c87272e72732555b7c3bd0da24cdbe) - update import path for `Collection` type definition
-   [`789b322`](https://github.com/stdlib-js/stdlib/commit/789b322b20f2f9d035b3ac6d44b0e4beece9a50c) - update import path for `Collection` type definition
-   [`c96c6e0`](https://github.com/stdlib-js/stdlib/commit/c96c6e08ce946cef9b820ee8de3cb5c38cbb3c79) - update import path for `Collection` type definition
-   [`71dd315`](https://github.com/stdlib-js/stdlib/commit/71dd31521048ed99b8ed50a4e181fa93a75f0d07) - update import path for `Collection` type definition
-   [`ff4c195`](https://github.com/stdlib-js/stdlib/commit/ff4c1957c999b16635d7388fe37299f8b94f7e5c) - update import path for `Collection` type definition
-   [`c7f71aa`](https://github.com/stdlib-js/stdlib/commit/c7f71aa3fbe517bdbbc7a7fa017597f46938c85e) - update import path for `Collection` type definition
-   [`7a8ca35`](https://github.com/stdlib-js/stdlib/commit/7a8ca35382cabcd7ea1b3541ec46620aa727013d) - update import path for `Collection` type definition
-   [`d5b607b`](https://github.com/stdlib-js/stdlib/commit/d5b607b0518407e3e1924723fba67497b003d2f4) - update import path for `Collection` type definition
-   [`c069f30`](https://github.com/stdlib-js/stdlib/commit/c069f30d1d208589c8a06d164e3545edeee98b37) - update import path for `Collection` type definition
-   [`7e5ef6d`](https://github.com/stdlib-js/stdlib/commit/7e5ef6d515bec20acfba5b040442e95eda1f63b4) - update import path for `Collection` type definition
-   [`2de0332`](https://github.com/stdlib-js/stdlib/commit/2de03325135024e1a1922d8bb166a95d6efde18d) - update import path for `Collection` type definition
-   [`4e1f4b3`](https://github.com/stdlib-js/stdlib/commit/4e1f4b3490e6df7ad9f06a1335d42a89623d03dc) - update import path for `Collection` type definition
-   [`54fc8e7`](https://github.com/stdlib-js/stdlib/commit/54fc8e7e4d109f1fdd2cd85b2c21e08794d4dbb1) - update import path for `Collection` type definition
-   [`b95f8bc`](https://github.com/stdlib-js/stdlib/commit/b95f8bc7893459462ccb7a180cddbb8a07dc2a76) - update import path for `Collection` type definition
-   [`cb8dd54`](https://github.com/stdlib-js/stdlib/commit/cb8dd5415c30229fa3eb70ef8669323eea8922a0) - update import path for `Collection` type definition and improve types
-   [`33f4a75`](https://github.com/stdlib-js/stdlib/commit/33f4a75335d0b81a893acbf77678d3b651fcb6d0) - update import path for `Collection` type definition
-   [`0f5ff18`](https://github.com/stdlib-js/stdlib/commit/0f5ff18ee50178bd11db8591f90e5486afd1dd41) - update import path for `Collection` type definition
-   [`a2a7714`](https://github.com/stdlib-js/stdlib/commit/a2a771469fb7ed35e48c034e1bf4a490449be15f) - update import path for `Collection` type definition
-   [`9212514`](https://github.com/stdlib-js/stdlib/commit/9212514cd0ba9a681c2ca86ebe2fd3b61f866b64) - set correct package names and descriptions
-   [`d2c1aee`](https://github.com/stdlib-js/stdlib/commit/d2c1aee465676ae680d4c055e5a4f6d288ed4eef) - allow type of error handler return value to differ

</section>

<!-- /.bug-fixes -->

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

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

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

