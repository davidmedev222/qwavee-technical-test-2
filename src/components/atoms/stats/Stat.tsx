interface Props {
  value: string | JSX.Element
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
