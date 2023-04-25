export const ShopItem = (props) => {
  const { name, description, image, price, key } = props

  return (
    <div key={key} className='card'>
      <img src={image} alt="Товар" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button>Add to Card</button>
    </div>
  )
}
