import { Button, Heading, HightlightText } from '@/components'
import Card from '@/components/molecules/card/Card'

const cards = Array.from({ length: 7 })

function TopGamesSection() {
  return (
    <section className='topgames'>
      <Heading className='topgames__title' as='h3'>
        Welcome to the top <HightlightText>games</HightlightText>
      </Heading>
      <div className='topgames__categories'>
        <Button className='topgames__category'>Mewest Games</Button>
        <Button className='topgames__category' variant='outline'>
          Latest Games
        </Button>
        <Button className='topgames__category' variant='outline'>
          Fight Games
        </Button>
        <Button className='topgames__category' variant='outline'>
          Sport Games
        </Button>
      </div>
      <ul className='topgames__cards'>
        {cards.map((_, index) => (
          <li key={index}>
            <Card />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TopGamesSection
