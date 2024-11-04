import Chickenburgers from "../Chickenburgers"
import Desserts from "../Desserts"
import Drinks from "../Drinks"
import FlameGrills from "../FlameGrills"
import Nav3 from "../Nav3"
import Sides from "../Sides"
import Footer from "../Footer"
import Homem from "../Homem"

const Menu = () =>{
    return(
       <>
       <Nav3 />
       <Homem />
       <FlameGrills />
       <Chickenburgers />
       <Sides />
       <Drinks />
       <Desserts />
       <Footer />
       </>
    )
}

export default Menu