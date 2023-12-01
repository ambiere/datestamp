##  [0.4.0-beta]() 2023-11-30

Initial release

## [0.4.0](https://github.com/zhid0399123/xcixtimestamp/compare/0.3.0-beta...0.4.0) (2023-11-30)


### Features

* **index:** added datestamp/ route to handle request when empty date param is passed ([4b5072b](https://github.com/zhid0399123/xcixtimestamp/commit/4b5072ba509d49b5766bd9408040db0ff9e7ab0e))
* **routes/index:** added route triggered when user pass empty date param ([d59a239](https://github.com/zhid0399123/xcixtimestamp/commit/d59a239593fd401431b676ab73945db6242e9a78))
* **server:** api versioning from npm package version ([1751b53](https://github.com/zhid0399123/xcixtimestamp/commit/1751b53381e77e946609e5e977fc676c2b920950))
* **style:** made index page responsive ([2c4f3f2](https://github.com/zhid0399123/xcixtimestamp/commit/2c4f3f2afb3720e8c67a1dadb0d6742330075cf8))

## [0.3.0](https://github.com/zhid0399123/xcixtimestamp/compare/0.2.0...0.3.0) (2023-11-29)


### Features

* **style:** styled header section ([38a0fc3](https://github.com/zhid0399123/xcixtimestamp/commit/38a0fc383ff09ca6a224f46960df43c968112140))


### Bug Fixes

* **index:** fixed getEndpointSegment fn ([cf62015](https://github.com/zhid0399123/xcixtimestamp/commit/cf620158f5eef32859f116801bb8ada3efd711ed))

## [0.2.0](https://github.com/zhid0399123/xcixtimestamp/compare/0.1.0...0.2.0) (2023-11-29)


### Features

* **bin/index:** server entrypoint/startup ([e08d9c9](https://github.com/zhid0399123/xcixtimestamp/commit/e08d9c9cd34c9c21f85fb9730f30678e32da1b30))
* **index.html:** added landing/home page for baseURL route ([5b1f931](https://github.com/zhid0399123/xcixtimestamp/commit/5b1f93101be92035f0a00aa1ce0a4e27e10f032a))
* **index.js:** script for index page ([2149a2b](https://github.com/zhid0399123/xcixtimestamp/commit/2149a2b968b11859d72ba3c6559ba2f1c416e53a))
* **index:** added "0.0.0.0" hostname ([10d8a74](https://github.com/zhid0399123/xcixtimestamp/commit/10d8a74b757b335a2a2ae5de9a5b3820b37fb394))
* **server:** added route to serve static files and app version ([ef5dda0](https://github.com/zhid0399123/xcixtimestamp/commit/ef5dda0909b539fd2790cfea692fb46d6137302a))
* **serverStartUpLog:** modified logger util fn to receive app address instead of port ([1917947](https://github.com/zhid0399123/xcixtimestamp/commit/191794745cba070eb081f5422951b3e74c063ab1))
* **style:** style for index page ([2046915](https://github.com/zhid0399123/xcixtimestamp/commit/2046915feb7c39e7acaafe522ec4804403f1ada1))

## [0.1.0](https://github.com/zhid0399123/xcixtimestamp/compare/daa5fd9fe6f46bf9976500850e6e827b60f81777...0.1.0) (2023-11-26)


### Features

* **.prettierrc:** config for default VSCode prettier formatter ([fae6dee](https://github.com/zhid0399123/xcixtimestamp/commit/fae6deea282f4984bc278a638e8b96385ce7ecf7))
* **errorHandler:** default error handler ([225adb2](https://github.com/zhid0399123/xcixtimestamp/commit/225adb20f697b4e115ef2c31f8051e55653f97b9))
* **index:** implimented date timestamp logic on /timestamp/:date endpoint ([dcb0fbe](https://github.com/zhid0399123/xcixtimestamp/commit/dcb0fbe3cc16722586285839efc3eddfde560e61))
* **logger:** configured custom pino-http logger ([ffde5d0](https://github.com/zhid0399123/xcixtimestamp/commit/ffde5d07f594bd3b47f475b707c92bff3947f4cf))
* **routeNotFound:** default route 404 handler ([1259ad6](https://github.com/zhid0399123/xcixtimestamp/commit/1259ad6a04e78267fa361c12bf6e9c4eb2ea6bca))
* **router:** timestamp router module ([66d9907](https://github.com/zhid0399123/xcixtimestamp/commit/66d99075edd932496776733a3a815388ab5329bb))
* **server:** endpoint versioning and implimented server startup logs ([c618741](https://github.com/zhid0399123/xcixtimestamp/commit/c618741d753fa758bc7ab24c54a5377f2fcbf2bb))
* **serverStartUpLog:** util to log info on server start ([724448d](https://github.com/zhid0399123/xcixtimestamp/commit/724448d9d6a05176035f0cba1d35957bcb80aa65))
* **toUnix:** convert valid date to unix ([fe69ae9](https://github.com/zhid0399123/xcixtimestamp/commit/fe69ae94852dab0c535721e6e9542f9caf707f78))
* **toUnix:** util to convert valid date to unix ([b210a30](https://github.com/zhid0399123/xcixtimestamp/commit/b210a3014b9e7945df5b814557b61817251c0238))
* **toUTC:** converts valid date to UTC ([daa5fd9](https://github.com/zhid0399123/xcixtimestamp/commit/daa5fd9fe6f46bf9976500850e6e827b60f81777))
* **toUTC:** util to convert valid date to utc ([9e0088c](https://github.com/zhid0399123/xcixtimestamp/commit/9e0088cbd4eb82b981c32659b62a39b700730955))

