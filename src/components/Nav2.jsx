import burger from "../assets/Burger-King-logo.svg"
import {Link} from "react-router-dom"
const Nav2 = () => {
    return(
       <nav className="container">
       <Link to='/'><img src={ burger } className="burger-logo" alt="a pic" /></Link>
        <div className="nav-link">
           <Link to="/order">Order</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/offer">offers</Link>
           <Link to="/restaurant">Restaurant</Link>
           <Link to="/career">Careers</Link>
           <Link to="/news">News</Link>
        </div>
        <div className="navbar1">
            <button className="navbar-button">Register</button>
        </div>
      </nav>
    )
}

export default Nav2