import clsx from 'clsx'

interface Props {
  /**
   * The children of the component.
   */
  children: React.ReactNode
  /**
   * The CSS class name for the component.
   */
  className?: string
}

function StatGroup({ children, className }: Props) {
  const classes = clsx('group group--stat', className)

  return <ul className={classes}>{children}</ul>
}

export default StatGroup
