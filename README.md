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


Find in cache


## Install

```
$ npm i @tadashi/find-in-cache
```

## Environment variable

| variable              | type       | required    | default            | description  |
| --------              | ---------- | ----------- | --------------     | ------------ |
| REDIS                 | string     | no          | 127.0.0.1:6379     | The address or addresses of the Redis server(s) |
| REDIS_PWD             | string     | no          | -                  | The password for authenticating with the Redis server, if required |
| CACHE_REDIS_PREFIX    | string     | no          | lib                | Key prefix |
| CACHE_REDIS_NAMESPACE | string     | no          | find-in-cache      | Avoid conflicts between caches |
| CACHE_REDIS_DB        | number     | no          | 0                  | Number of database |
| CACHE_REDIS_OPTIONS   | JSONString | no          | {}                 | [See configuration options](https://redis.github.io/ioredis/interfaces/CommonRedisOptions.html) |
| CLEAR_CACHE_FIRST_RUN | boolean    | no          | true               | Clear cache when app is started |


## API

### find(key): Promise<*>

| parameter   | type     | required    | default     | description |
| --------    | -------- | ----------- | ----------- | ------------ |
| key         | string   | yes         | -           | The key for which to find the cached value |


### caching(key, value, ttl): Promise\<Object\>

| parameter   | type           | required    | default     | description |
| --------    | -------------- | ----------- | ----------- | ------------ |
| key         | string         | yes         | -           | The key under which the value will be stored |
| value       | any            | yes         | -           | The value to be cached |
| ttl         | string\|number | no          | -           | The time-to-live for the cache entry, in seconds |


> [!IMPORTANT]  
> If the `ttl` is not set, the cache will last forever


## Usage

```js
import {find, caching, cache} from '@tadashi/find-in-cache'

await find('foo')
// => undefined

await caching('foo', 'bar', 30)
// => {'OK', 1}

await find('foo')
// => bar

await cache.clear()
// => cache was cleared
```

---

> [!IMPORTANT]  
> Buy me a coffee!  
> BTC: `bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4`


## License

MIT © [Thiago Lagden](https://github.com/lagden)
