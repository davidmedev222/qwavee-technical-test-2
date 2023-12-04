import clsx from 'clsx'

interface Props {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: string
}

function Heading({ as = 'h1', children, className }: Props) {
  const classes = clsx('heading', className)
  const HeadingTag = as

  return <HeadingTag className={classes}>{children}</HeadingTag>
}

export default Heading
