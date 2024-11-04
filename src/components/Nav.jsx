import burger from "../assets/Burger-King-logo.svg"
import {Link} from "react-router-dom"
const Nav = () => {
    return(
       <nav className="container">
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
    )
}

export default Nav