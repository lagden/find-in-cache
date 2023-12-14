import {test, after} from 'node:test'
import assert from 'node:assert/strict'
import {
	find,
	caching,
	cache,
} from '../src/find-in-cache.js'

after(() => {
	cache.redis.disconnect(false)
})

// Caching data forever
test('caching', async () => {
	const res = await caching('test', 'Apenas um show', 30)
	assert.equal(res, true)
})

// Clear cache - First Run
test('finding - First Run', async () => {
	const res = await find('test')
	assert.equal(res, undefined)
})

// None
test('finding - Second Run', async () => {
	const res = await find('test')
	assert.equal(res, undefined)
})

// Caching data again
test('caching again', async () => {
	const res = await caching('test', 'Apenas um show')
	assert.equal(res, true)
})

// Yeahh
test('finding - Third Run', async () => {
	const res = await find('test')
	assert.equal(res, 'Apenas um show')
})

// // Find Object key
// test('finding - Object key', async () => {
// 	await caching({a: 123}, 'Apenas um show')
// 	const res = await find({a: 123})
// 	assert.equal(res, 'Apenas um show')
// })
