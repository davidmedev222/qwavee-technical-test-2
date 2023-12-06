import clsx from 'clsx'

interface Props {
  /**
   * The children of the component.
   */
  children: React.ReactNode
  /**
   * Additional class name for the component.
   */
  className?: string
}

function ButtonGroup({ children, className }: Props) {
  const classes = clsx('group', className)

  return <div className={classes}>{children}</div>
}

export default ButtonGroup
