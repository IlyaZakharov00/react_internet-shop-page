export const ShopItemFunc = (props) => {

  const {brand, title, description, descriptionFull, price, currency, component} = props.info
  return (
<div class="main-content">
  <h2>This is {component} component</h2>
  <h2>{brand}</h2>
  <h1>{title}</h1>
  <h3>{description}</h3>
  <div className="description">{descriptionFull}</div>
  <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
  <div className="divider"></div>
  <div className="purchase-info">
    <div className="price">{currency}{price},00</div>
    <button>Добавить в корзину</button>
  </div>
</div>
    )
}
