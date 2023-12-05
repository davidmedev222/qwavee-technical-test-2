import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  variant?: 'outline'
  className?: string
}

function Button({ children, variant, className }: Props) {
  const classes = clsx('button', variant === 'outline' && 'button--outline', className)

  return <button className={classes}>{children}</button>
}

export default Button
