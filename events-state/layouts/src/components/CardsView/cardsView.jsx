import { ShopCard } from "../ShopCard/shopCard"

const CardsView = (props) => {
  const { arrCards } = props

  return (
    <div className="cardContainer">
      {arrCards?.map((card, index) => {
        return <ShopCard name={card.name} description={card.color} image={card.img} price={card.price} key={index} />
      })}
    </div>
  )
}

export default CardsView