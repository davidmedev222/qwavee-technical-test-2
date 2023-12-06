interface Props {
  /**
   * Function to toggle the show menu state.
   */
  toggleShowMenu: () => void
}

function HamburgerMenu({ toggleShowMenu }: Props) {
  return (
    <button onClick={toggleShowMenu} className='hamburger'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='15' viewBox='0 0 24 15'>
        <rect x='0.831543' y='0.79126' width='23' height='2' rx='1' />
        <rect x='6.83154' y='6.79126' width='17' height='2' rx='1' />
        <rect x='1.83154' y='12.7913' width='22' height='2' rx='1' />
      </svg>
    </button>
  )
}

export default HamburgerMenu
