import { Category } from '@/models'
import { instance } from '@/services'

async function getCategories(url: string): Promise<Category[]> {
  const request = await instance.get(url)
  return request.data
}

export { getCategories }
