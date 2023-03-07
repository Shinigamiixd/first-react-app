import "./Product.css"

const Product = (props) => {
  return (
    <div className="item-card-container">
      {props.items.map((item, index) => (
        <div key={index} className="item-card">
          <h2>{item.name}</h2>
          <div className="item-card-img-container">
            <img src={item.imageUrl} alt=""></img>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Product