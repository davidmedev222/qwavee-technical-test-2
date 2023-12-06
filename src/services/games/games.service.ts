import { Game } from '@/models'
import { instance } from '@/services'

/**
 * Retrieves games by category from the specified URL.
 *
 * @param {string} url - The URL to fetch the games from.
 * @return {Promise<Game[]>} A promise that resolves to an array of Game objects.
 */
async function getGamesByCategory(url: string): Promise<Game[]> {
  const request = await instance.get(url)
  return request.data
}

export { getGamesByCategory }
