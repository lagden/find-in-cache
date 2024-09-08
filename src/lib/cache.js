import process from 'node:process'
import Cache from '@tadashi/cache-redis'

const {
	CACHE_REDIS_PREFIX = 'lib',
	CACHE_REDIS_NAMESPACE = 'find_in_cache',
	CACHE_REDIS_DB = 0,
	CACHE_REDIS_OPTIONS = '{}',
} = process.env

let options

try {
	options = JSON.parse(CACHE_REDIS_OPTIONS)
} catch {
	options = {}
}

/**
 * Initializes a cache instance with configurations from environment variables.
 *
 * Configuration includes Redis options such as:
 * - Key prefix: Allows for logical grouping of cache keys.
 * - Database number: Specifies which Redis database to use.
 * - Namespace: Provides an application-specific grouping for keys.
 */
const cache = new Cache({
	redisOptions: {
		keyPrefix: CACHE_REDIS_PREFIX,
		db: CACHE_REDIS_DB,
		...options,
	},
	namespace: CACHE_REDIS_NAMESPACE,
})

export default cache
