# find-in-cache

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/find-in-cache.svg
[npm]:             https://www.npmjs.com/package/@tadashi/find-in-cache
[ci-img]:          https://github.com/lagden/find-in-cache/actions/workflows/nodejs.yml/badge.svg
[ci]:              https://github.com/lagden/find-in-cache/actions/workflows/nodejs.yml
[coveralls-img]:   https://coveralls.io/repos/github/lagden/find-in-cache/badge.svg?branch=main
[coveralls]:       https://coveralls.io/github/lagden/find-in-cache?branch=main


Find data in cache


## Install

```
$ npm i @tadashi/find-in-cache
```

## Environment variable

variable              | type     | required    | default            | description
--------              | -------- | ----------- | --------------     | ------------
REDIS                 | string   | no          | 127.0.0.1:6379     | Addresses to connect
REDIS_PWD             | string   | no          | -                  | Redis password
CACHE_REDIS_PREFIX    | string   | no          | lib                | Key prefix
CACHE_REDIS_NAMESPACE | string   | no          | find-in-cache      | Avoid conflicts between caches
CACHE_REDIS_DB        | number   | no          | 0                  | Number of database
CLEAR_CACHE_FIRST_RUN | boolean  | no          | true               | Clear cache when app is started

See more about `REDIS` and `REDIS_PWD` in:  
https://github.com/lagden/connect-redis


## API

### find(key: any): any

parameter   | type     | required    | default     | description
--------    | -------- | ----------- | ----------- | ------------
key         | any      | yes         | -           | data key name


### caching(key: any, value: any, ttl: number): boolean

parameter   | type     | required    | default     | description
--------    | -------- | ----------- | ----------- | ------------
key         | any      | yes         | -           | data key name
value       | any      | yes         | -           | data
ttl         | number   | no          | -           | cache lifetime in seconds


⚠️ if the `ttl` is not set, the cache will last forever


## Usage

```js
import {find, caching, cache} from '@tadashi/find-in-cache'

await find('foo')
// => undefined

await caching('foo', 'bar', 30)
// => true

await find('foo')
// => bar

await cache.clear()
// => cache was cleared
```


## Donate ❤️

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4


## License

MIT © [Thiago Lagden](https://github.com/lagden)
