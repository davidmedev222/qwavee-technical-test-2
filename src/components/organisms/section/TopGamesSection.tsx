'use client'
import { Button, CardsSkeleton, CategoriesSkeleton, Heading, HightlightText } from '@/components'
import Card from '@/components/molecules/card/Card'
import { getCategories, getGamesByCategory } from '@/services'
import { ERROR_MESSAGES_CODE } from '@/utils'
import { useState } from 'react'
import useSWR from 'swr'

function TopGamesSection() {
  const [categorySelected, setCategorySelected] = useState('1')
  const {
    data: categories,
    error: categoriesError,
    isLoading: isLoadingCategories
  } = useSWR('/categories', getCategories, { revalidateOnFocus: false })
  const {
    data: games,
    error: gamesError,
    isLoading: isLoadingGames
  } = useSWR(`/categories/${categorySelected}/cardsInfo`, getGamesByCategory, { revalidateOnFocus: false })

  /**
   * Change the selected category.
   *
   * @param {string} categoryID - The ID of the category to be selected.
   */
  function changeCategory(categoryID: string) {
    setCategorySelected((state) => categoryID)
  }

  const categoriesErrorMessage = ERROR_MESSAGES_CODE[categoriesError?.response?.status]
  const gamesErrorMessage = ERROR_MESSAGES_CODE[gamesError?.response?.status]

  return (
    <section className='topgames'>
      <Heading className='topgames__title' as='h3'>
        Welcome to the top <HightlightText>games</HightlightText>
      </Heading>
      <div className='topgames__categories'>
        {categoriesError && <div className='topgames__error'>{categoriesErrorMessage}</div>}
        {isLoadingCategories && <CategoriesSkeleton />}
        {categories?.map((category) => {
          const variant = categorySelected !== category.id ? 'outline' : undefined
          return (
            <Button
              key={category.id}
              onClick={() => changeCategory(category.id)}
              className='topgames__category'
              variant={variant}
            >
              {category.name}
            </Button>
          )
        })}
      </div>
      <ul className='topgames__cards'>
        {gamesError && <div className='topgames__error topgames__error--cards'>{gamesErrorMessage}</div>}
        {isLoadingGames && <CardsSkeleton />}
        {games?.map((game) => (
          <li key={game.id}>
            <Card game={game} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TopGamesSection
