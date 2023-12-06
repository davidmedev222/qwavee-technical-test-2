import clsx from 'clsx'

interface Props {
  /**
   * The content to be rendered inside the component.
   */
  children: React.ReactNode
  /**
   * The variant of the component. Set to 'outline' for an outlined button.
   */
  variant?: 'outline'
  /**
   * The class name to be applied to the component.
   */
  className?: string
}

function Button({ children, variant, className }: Props) {
  const classes = clsx('button', variant === 'outline' && 'button--outline', className)

  return <button className={classes}>{children}</button>
}

export default Button
