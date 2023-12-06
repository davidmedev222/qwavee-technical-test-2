import { NavLink } from '@/components'
import { HeaderLinks } from '@/utils'

interface Props {
  /**
   * Flag indicating whether the menu is shown or not.
   */
  showMenu: boolean
}

function Nav({ showMenu }: Props) {
  return (
    <nav className={`nav ${showMenu ? 'nav__show' : ''}`}>
      <ul className='nav__list'>
        {HeaderLinks.map(({ href, label }) => (
          <li className='nav__item' key={href}>
            <NavLink href={href}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
