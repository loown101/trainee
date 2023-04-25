import { useState } from 'react'
import { products } from '../../utils'
import { IconSwitch } from '../IconSwitch/iconSwitch'
import CardsView from '../CardsView/cardsView'
import ListView from '../ListView/listView'

const Store = () => {
  const [state, setState] = useState('view_list')

  const onSwitch = () => {
    setState((prev) => (prev === 'view_list' ? 'view_module' : 'view_list'))
  }

  console.log(state)
  return (
    <>
      <IconSwitch icon={state} onSwitch={onSwitch} />
      <div>
        {state === 'view_list' ? <CardsView arrCards={products} /> : <ListView arrCards={products} />}
      </div>
    </>
  )
}

export default Store