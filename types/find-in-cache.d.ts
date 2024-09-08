/**
 * Finds a value in the cache based on a given key.
 *
 * On the first run, it clears the entire cache. On subsequent runs, it attempts
 * to retrieve the item from the cache.
 *
 * @param {string} key - The key for which to find the cached value.
 * @returns {Promise<*>} A promise that resolves to the cached value if found, or undefined if not found.
 */
export function find(key: string): Promise<any>;
/**
 * Caches a value with an optional time-to-live (TTL).
 *
 * @param {string} key - The key under which the value will be stored.
 * @param {*} value - The value to be cached.
 * @param {string|number} _ttl - The time-to-live for the cache entry, in seconds.
 * @returns {Promise<Object>} A promise that resolves to an object indicating the success of the caching operation.
 */
export function caching(key: string, value: any, _ttl: string | number): Promise<any>;
export { default as cache } from "./lib/cache.js";
