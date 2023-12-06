import { Game } from '@/models'
import { instance } from '@/services'

async function getGamesByCategory(url: string): Promise<Game[]> {
  const request = await instance.get(url)
  return request.data
}

export { getGamesByCategory }
