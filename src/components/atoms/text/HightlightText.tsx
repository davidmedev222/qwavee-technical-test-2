interface Props {
  /**
   * The children of the component.
   */
  children: React.ReactNode
}

function HightlightText({ children }: Props) {
  return <span className='highlight'>{children}</span>
}

export default HightlightText
