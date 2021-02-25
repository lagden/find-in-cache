'use strict'

const Cache = require('@tadashi/cache-redis')

const {
	REDIS_CACHE_NAMESPACE: namespace = '_app_find_in_cache'
} = process.env

const cache = new Cache({namespace})

module.exports = cache
