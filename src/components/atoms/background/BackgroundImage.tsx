/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'

interface Props extends Omit<ImageProps, 'className' | 'sizes' | 'fill' | 'quality'> {
  className?: string
}

function BackgroundImage({ className, ...rest }: Props) {
  const classes = clsx('background', className)

  return <Image className={classes} fill quality={100} sizes='100vw' {...rest} />
}

export default BackgroundImage
