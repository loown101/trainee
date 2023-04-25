export const IconSwitch = (props) => {
  const { icon, onSwitch } = props

  return (
    <button onClick={onSwitch} className={'material-icons'}>
      {icon}
    </button>
  )
}
