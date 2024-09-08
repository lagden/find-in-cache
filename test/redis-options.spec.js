import './helper/reset.js'

import assert from 'node:assert/strict'
import { after, test } from 'node:test'
import { cache, caching } from '../src/find-in-cache.js'

after(() => {
	cache.redis.disconnect(false)
})

test('options', async () => {
	const { set } = await caching('option', 'go!', 5)
	assert.equal(set, 'OK')
})
