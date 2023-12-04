import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  variant?: 'outline'
}

function Button({ children, variant }: Props) {
  const classes = clsx('button', variant === 'outline' && 'button--outline')

  return <button className={classes}>{children}</button>
}

export default Button
