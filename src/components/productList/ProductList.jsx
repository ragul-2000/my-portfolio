import Product from "../product/Product"
import "./productlist.css"
import { products}  from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
     <div className="pl-texts">
        <h1 className="pl-title">Web Portfolio Highlights</h1>
        <p className="pl-desc">
        Immerse yourself in a showcase of my web development expertise, 
        unveiling projects marked by innovation and user-focused functionality. 
        From a refined booking application to a dynamic social media platform, 
        each site reflects my commitment to seamless digital experiences. 
        These samples embody the professional precision and design finesse 
        I bring to every web project, ensuring a harmonious blend of technology and user satisfaction.
        </p>
      </div>
      <div className="pl-list">
        {products.map(item => (<Product key ={item.id}img={item.img} link = {item.link}/>))}
        
      </div>
    </div>
  )
}

export default ProductList