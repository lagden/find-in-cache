import test from 'ava'
import {
	find,
	caching,
	cache,
} from '../src/find-in-cache.js'

test.before(async () => {
	await cache.clear()
})

// Caching data forever
test.serial('caching', async t => {
	const res = await caching('test', 'Apenas um show', 30)
	t.is(res, true)
})

// Clear cache - First Run
test.serial('finding - First Run', async t => {
	const res = await find('test')
	t.is(res, undefined)
})

// None
test.serial('finding - Second Run', async t => {
	const res = await find('test')
	t.is(res, undefined)
})

// Caching data again
test.serial('caching again', async t => {
	const res = await caching('test', 'Apenas um show')
	t.is(res, true)
})

// Yeahh
test.serial('finding - Third Run', async t => {
	const res = await find('test')
	t.is(res, 'Apenas um show')
})

// // Find Object key
// test.serial('finding - Object key', async t => {
// 	const res = await find({a: 123})
// 	t.is(res, undefined)
// })
