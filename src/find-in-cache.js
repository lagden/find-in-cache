import process from 'node:process'
import hash from '@tadashi/hash'
import { parseBoolean } from '@tadashi/common'
import cache from './lib/cache.js'

const {
	CLEAR_CACHE_FIRST_RUN = true,
} = process.env

let firstRun = parseBoolean(CLEAR_CACHE_FIRST_RUN)

/**
 * Finds a value in the cache based on a given key.
 *
 * On the first run, it clears the entire cache. On subsequent runs, it attempts
 * to retrieve the item from the cache.
 *
 * @param {string} key - The key for which to find the cached value.
 * @returns {Promise<*>} A promise that resolves to the cached value if found, or undefined if not found.
 */
export async function find(key) {
	const cacheName = hash(key, { alg: 'sha1', encoding: 'hex' })

	if (firstRun) {
		firstRun = false
		await cache.clear()
	} else {
		const fromCache = await cache.get(cacheName)
		if (fromCache) {
			return fromCache
		}
	}
}

/**
 * Caches a value with an optional time-to-live (TTL).
 *
 * @param {string} key - The key under which the value will be stored.
 * @param {*} value - The value to be cached.
 * @param {string|number} _ttl - The time-to-live for the cache entry, in seconds.
 * @returns {Promise<Object>} A promise that resolves to an object indicating the success of the caching operation.
 */
export function caching(key, value, _ttl) {
	const cacheName = hash(key, { alg: 'sha1', encoding: 'hex' })
	let args = []

	const ttl = globalThis.Number(_ttl)
	if (ttl && globalThis.Number.isInteger(ttl) && ttl > 0) {
		args = ['EX', ttl]
	}

	return cache.set(cacheName, value, ...args)
}

export { default as cache } from './lib/cache.js'
