import Cache from '@tadashi/cache-redis'

const {
	CACHE_REDIS_PREFIX = 'lib',
	CACHE_REDIS_NAMESPACE = 'find_in_cache',
	CACHE_REDIS_DB = 0,
} = process.env

const cache = new Cache({
	redis: {
		keyPrefix: CACHE_REDIS_PREFIX,
		db: CACHE_REDIS_DB,
	},
	namespace: CACHE_REDIS_NAMESPACE,
})

export default cache
