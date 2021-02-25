'use strict'

const hash = require('@tadashi/hash')
const cache = require('./lib/cache')

let {
	CLEAR_CACHE_FIRST_RUN: firstRun = true
} = process.env

async function find(key) {
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

function caching(key, value, ttl) {
	const cacheName = hash(key)
	let args = []
	if (ttl && ttl > 0) {
		args = ['EX', ttl]
	}

	return cache.set(cacheName, value, ...args)
}

module.exports = {find, caching}
