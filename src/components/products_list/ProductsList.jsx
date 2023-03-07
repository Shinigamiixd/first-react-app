import "./ProductsList.css"
import data from "../../data/data"
import Product from "../product/Product"

const ProductsList = () => {
    return (
    <div>
      <Product items={data}/>
    </div>
  )
}

export default ProductsList
