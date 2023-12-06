import { Category } from '@/models'
import { instance } from '@/services'

/**
 * Retrieves categories from the specified URL.
 *
 * @param {string} url - The URL to fetch categories from.
 * @return {Promise<Category[]>} A promise that resolves to an array of categories.
 */
async function getCategories(url: string): Promise<Category[]> {
  const request = await instance.get(url)
  return request.data
}

export { getCategories }
