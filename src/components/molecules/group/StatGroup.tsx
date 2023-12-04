import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
}

function StatGroup({ children, className }: Props) {
  const classes = clsx('group group--stat', className)

  return <ul className={classes}>{children}</ul>
}

export default StatGroup
