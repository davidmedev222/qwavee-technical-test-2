import clsx from 'clsx'

interface Props {
  /**
   * The HTML tag to be used for the heading.
   */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * The content of the heading.
   */
  children: React.ReactNode
  /**
   * Additional class name(s) for the heading.
   */
  className?: string
}

function Heading({ as = 'h1', children, className }: Props) {
  const classes = clsx('heading', as === 'h2' && 'heading--h2', as === 'h3' && 'heading--h3', className)
  const HeadingTag = as

  return <HeadingTag className={classes}>{children}</HeadingTag>
}

export default Heading
