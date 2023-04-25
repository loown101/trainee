import { ShopItem } from "../ShopItem/shopItem"

const ListView = (props) => {
  const { arrCards } = props

  return (
    <div className="listContainer">
      {arrCards?.map((card, index) => {
        return <ShopItem name={card.name} description={card.color} image={card.img} price={card.price} key={index} />
      })}
    </div>
  )
}

export default ListView