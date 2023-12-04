import { Routes } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href={Routes.Home} className='logo'>
      <Image className='logo__image' src='/assets/logo-gradient.webp' width={44} height={34} alt='Website logo' />
      board
    </Link>
  )
}

export default Logo
