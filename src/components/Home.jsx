import  Locator from "../components/Locator"
import  Banner  from "../components/Banner"
import Nav from "./Nav"
import Next from "./Next"
import { News } from "./News"
import  Footer  from "./Footer"




const Home = () =>{
    return(
     <>
     <Nav />
     <Banner />
     <Locator />
     <Next />
     <News />
     <Footer />
     </>
    )
}

export default Home