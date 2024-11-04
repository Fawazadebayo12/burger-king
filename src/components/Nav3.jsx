import burger from "../assets/Burger-King-logo.svg"
import {Link} from "react-router-dom"

const Nav3 = () => {
    return(
       <>
       <div className="all-of">
       <nav className="container1">
       <Link to='/'><img src={ burger } className="burger-logo" alt="a pic" /></Link>
        <div className="nav-links">
           <Link to="/order">Order</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/offer">offers</Link>
           <Link to="/restaurant">Restaurant</Link>
           <Link to="/career">Careers</Link>
           <Link to="/news">News</Link>
        </div>
        
      </nav>
      <div className="other-nav">
      <Link className="nav-item" to="">Flamed Grilled Burgers</Link>
      <Link className="nav-item" to="" >Chicken Burgers</Link>
      <Link className="nav-item" to="#">Sides</Link>
      <Link className="nav-item" to="#">Drinks</Link>
      <Link className="nav-item" to="#">Desserts</Link>
  </div>
  </div>
   </>
    )
}

export default Nav3