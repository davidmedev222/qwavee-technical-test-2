import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  /**
   * The content of the NavLink.
   */
  children: React.ReactNode
}

function NavLink({ children, ...rest }: Props) {
  return (
    <Link className='link' {...rest}>
      {children}
    </Link>
  )
}

export default NavLink
