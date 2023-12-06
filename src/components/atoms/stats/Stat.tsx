interface Props {
  /**
   * The value to be displayed in the Stat component.
   * It can be either a string or a JSX element.
   */
  value: string | JSX.Element
  /**
   * The title of the Stat component.
   */
  title: string
}

function Stat({ value, title }: Props) {
  return (
    <li className='stat'>
      <span className='stat__value'>{value}</span>
      <p className='stat__title'>{title}</p>
    </li>
  )
}

export default Stat
