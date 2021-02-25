'use strict'

const test = require('ava')
const {find, caching} = require('../src')
const cache = require('../src/lib/cache')

test.before(async () => {
	await cache.clear()
})

// Caching data forever
test('caching', async t => {
	const res = await caching('test', 'Apenas um show', 30)
	t.is(res, true)
})

// Clear cache - First Run
test('finding - First Run', async t => {
	const res = await find('test')
	t.is(res, undefined)
})

// None
test('finding - Second Run', async t => {
	const res = await find('test')
	t.is(res, undefined)
})

// Caching data again
test('caching again', async t => {
	const res = await caching('test', 'Apenas um show')
	t.is(res, true)
})

// Yeahh
test('finding - Third Run', async t => {
	const res = await find('test')
	t.is(res, 'Apenas um show')
})
