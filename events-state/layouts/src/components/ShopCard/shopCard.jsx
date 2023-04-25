export const ShopCard = (props) => {
  const { name, description, image, price, key } = props

  return (
    <div key={key} className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt="Товар" />
      <p>{price}</p>
      <button>Add to Card</button>
    </div >
  )
}
