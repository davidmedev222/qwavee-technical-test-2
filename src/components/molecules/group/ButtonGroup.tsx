import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
}

function ButtonGroup({ children, className }: Props) {
  const classes = clsx('group', className)

  return <div className={classes}>{children}</div>
}

export default ButtonGroup
