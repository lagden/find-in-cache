import assert from 'node:assert/strict'
import { after, test } from 'node:test'
import { cache, caching, find } from '../src/find-in-cache.js'

after(() => {
	cache.redis.disconnect(false)
})

test('caching', async () => {
	const { set } = await caching('test', 'Apenas um show', 30)
	assert.equal(set, 'OK')
})

test('finding - First Run', async () => {
	const res = await find('test')
	assert.equal(res, undefined)
})

test('finding - Second Run', async () => {
	const res = await find('test')
	assert.equal(res, undefined)
})

test('caching again', async () => {
	const { set, sadd } = await caching('test', 'Apenas um show')
	assert.equal(set, 'OK')
	assert.equal(sadd, 1)
})

test('finding - Third Run', async () => {
	const res = await find('test')
	assert.equal(res, 'Apenas um show')
})
