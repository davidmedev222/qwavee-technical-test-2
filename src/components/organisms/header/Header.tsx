'use client'
import { HamburgerMenu, Logo, Nav } from '@/components'
import { useState } from 'react'

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  /**
   * Toggles the show menu state.
   *
   * @return {void} No return value.
   */
  function toggleShowMenu(): void {
    setShowMenu((state) => !state)
  }

  return (
    <header className='header'>
      <Logo />
      <HamburgerMenu toggleShowMenu={toggleShowMenu} />
      <Nav showMenu={showMenu} />
    </header>
  )
}

export default Header
