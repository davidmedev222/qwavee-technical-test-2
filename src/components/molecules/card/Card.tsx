import { Button } from '@/components'
import Image from 'next/image'

function Card() {
  return (
    <article className='card'>
      <Image
        className='card__cover'
        src='/assets/swiper.webp'
        width={362}
        height={266}
        alt='Presentation image of the letter'
      />
      <h3 className='card__title'>Core Philosophies</h3>
      <header className='card__header'>
        <Image className='card__avatar' src='/assets/swiper2.webp' width={52} height={52} alt='User Avatar' />
        <p className='card__description'>Cameron Williamson</p>
        <span className='card__subtitle'>Gillette</span>
      </header>
      <Button className='card__button'>Live Demo</Button>
    </article>
  )
}

export default Card
