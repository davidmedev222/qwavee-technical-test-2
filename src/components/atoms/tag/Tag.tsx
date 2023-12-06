import Image from 'next/image'

interface Props {
  /**
   * The children of the component.
   */
  children: React.ReactNode
}

function Tag({ children }: Props) {
  return (
    <div className='tag'>
      <Image
        className='tag__image'
        src='/assets/star-gradient.webp'
        width={36}
        height={36}
        alt='Star with gradient background'
      />
      {children}
    </div>
  )
}

export default Tag
