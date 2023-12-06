'use client'
import { Button, ButtonGroup, Heading, HightlightText } from '@/components'
import { ImagesSwiper } from '@/utils'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'

function FavoriteGamesSection() {
  return (
    <section className='favorite'>
      <Heading className='favorite__title' as='h2'>
        choose your <HightlightText>favorite</HightlightText> games
      </Heading>
      <p className='favorite__description'>
        Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about
        release.
      </p>
      <Swiper
        slidesPerView={2}
        centeredSlides
        centeredSlidesBounds
        initialSlide={1}
        spaceBetween={28}
        grabCursor
        breakpoints={{ 768: { spaceBetween: 56 } }}
        className='favorite__swiper'
      >
        {ImagesSwiper.map((image) => (
          <SwiperSlide key={image.id}>
            <Image className='favorite__image' src={image.src} quality={100} width={654} height={368} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonGroup>
        <Button>View All</Button>
        <Button variant='outline'>Play Now</Button>
      </ButtonGroup>
    </section>
  )
}

export default FavoriteGamesSection
