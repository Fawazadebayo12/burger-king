import {Link} from "react-router-dom"
const Homem = () =>{
    return(
       <>
       <div className="all-homem">
       <div className="home-menu">
        <Link className="home20" to="/"><h3>Home /</h3></Link>
        <Link className="home21" to="/menu"><h3>Menu</h3></Link>
</div>
</div>
       </>
    )
}

export default Homem