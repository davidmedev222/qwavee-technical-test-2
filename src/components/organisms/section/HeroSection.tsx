import { Button, ButtonGroup, Heading, HightlightText, Stat, StatGroup } from '@/components'
import Image from 'next/image'

function HeroSection() {
  return (
    <section className='hero'>
      <Heading as='h1' className='hero__title'>
        Let your mind <HightlightText>explore</HightlightText> new world
      </Heading>
      <p className='hero__description'>
        Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether.
        Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.
      </p>
      <Image className='hero__image' src='/assets/hero.webp' width={390} height={496} alt='Hero image' />
      <div className='hero__marquee' />
      <ButtonGroup className='hero__buttons'>
        <Button>Buy Now</Button>
        <Button variant='outline'>
          <HightlightText>Play Now</HightlightText>
        </Button>
      </ButtonGroup>
      <StatGroup className='hero__stats'>
        <Stat value='300+' title='Unique Style' />
        <Stat value={<HightlightText>200+</HightlightText>} title='Project Finished' />
        <Stat value='500+' title='Happy customer' />
      </StatGroup>
    </section>
  )
}

export default HeroSection
