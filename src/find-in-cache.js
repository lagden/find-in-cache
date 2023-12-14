import hash from '@tadashi/hash'
import {parseBoolean} from '@tadashi/common'
import cache from './lib/cache.js'

const {
	CLEAR_CACHE_FIRST_RUN = true,
} = process.env

let firstRun = parseBoolean(CLEAR_CACHE_FIRST_RUN)

export async function find(key) {
	const cacheName = hash(key, {alg: 'sha1', encoding: 'hex'})

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

export function caching(key, value, _ttl) {
	const cacheName = hash(key, {alg: 'sha1', encoding: 'hex'})
	let args = []

	const ttl = globalThis.Number(_ttl)
	if (ttl && globalThis.Number.isInteger(ttl) && ttl > 0) {
		args = ['EX', ttl]
	}

	return cache.set(cacheName, value, ...args)
}

export {default as cache} from './lib/cache.js'
