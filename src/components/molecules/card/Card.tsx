import { Button } from '@/components'
import { Game } from '@/models'
import Image from 'next/image'

interface Props {
  /**
   * The game object containing information about the game.
   */
  game: Game
}

function Card({ game }: Props) {
  return (
    <article className='card'>
      <Image className='card__cover' src={game.img} width={362} height={266} alt='Presentation image of the letter' />
      <h3 className='card__title'>{game.name}</h3>
      <header className='card__header'>
        <Image className='card__avatar' src={game.profileAvatar} width={52} height={52} alt='User Avatar' />
        <p className='card__description'>{game.nickname}</p>
        <span className='card__subtitle'>Gillette</span>
      </header>
      <Button className='card__button'>Live Demo</Button>
    </article>
  )
}

export default Card
