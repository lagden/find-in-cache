export default cache;
/**
 * Initializes a cache instance with configurations from environment variables.
 *
 * Configuration includes Redis options such as:
 * - Key prefix: Allows for logical grouping of cache keys.
 * - Database number: Specifies which Redis database to use.
 * - Namespace: Provides an application-specific grouping for keys.
 */
declare const cache: Cache;
import Cache from '@tadashi/cache-redis';
