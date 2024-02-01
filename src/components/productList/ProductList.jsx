import Product from "../product/Product"
import "./productlist.css"
import { products}  from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
     <div className="pl-texts">
        <h1 className="pl-title">Web Portfolio Highlights</h1>
        <p className="pl-desc">
        Explore my web portfolio to witness a collection of innovative web development projects, showcasing my expertise. 
        From a refined Fashion E-Commerce UI to a robust Hotels Booking App and dynamic Social Media platform, 
        each project epitomizes my commitment to delivering seamless digital experiences. 
        These samples encapsulate professional precision, emphasizing my design finesse 
        and unwavering dedication to achieving a seamless balance between cutting-edge technology and user satisfaction. 
        Immerse yourself in my showcase and discover the intersection of innovation and functionality in web development.
        </p>
      </div>
      <div className="pl-list">
        {products.map(item => (<Product key ={item.id}img={item.img} link = {item.link}/>))}
        
      </div>
    </div>
  )
}

export default ProductList