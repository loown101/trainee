import PropTypes from 'prop-types';

export const Listing = (props) => {
  const { url, MainImage, title, currency_code, price, quantity } = props.items

  const changeName = (title) => {
    if (title.length > 50) {
      const name = title.slice(1, 50)

      return name + '...'
    }

    return title
  }

  const renderCurrency = (currency) => {
    if (currency === 'USD') {
      return <span>&#36;</span>;
    }

    if (currency === 'EUR') {
      return <span>&euro;</span>;
    }

    return currency;
  }

  const renderCount = (count) => {
    if (count < 10) {
      return 'item-quantity level-low'
    }

    if (count >= 10 && count <= 20) {
      return 'item-quantity level-medium'
    }

    if (count > 20) {
      return 'item-quantity level-high'
    }
  }

  return (
    <>
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={MainImage?.url_570xN} alt={title} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{changeName(title)}</p>
          <p className="item-price">{renderCurrency(currency_code)} {price}</p>
          <p className={renderCount(quantity)}>{quantity}</p>
        </div>
      </div>
    </>
  )
}

Listing.propTypes = {
  url: PropTypes.string,
  MainImage: PropTypes.objectOf({ url_570xN: PropTypes.string }),
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
}

Listing.defaultProps = []