import hash from '@tadashi/hash'
import cache from './lib/cache.js'

let {
	CLEAR_CACHE_FIRST_RUN: firstRun = true,
} = process.env

export async function find(key) {
	const cacheName = hash(key)

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

export function caching(key, value, ttl) {
	const cacheName = hash(key)
	let args = []

	if (ttl && Number.isNaN(ttl) === false && ttl > 0) {
		args = ['EXAT', ttl]
	}

	return cache.set(cacheName, value, ...args)
}
