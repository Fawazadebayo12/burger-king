import eva from "../assets/eva-water.jpg"
import sprite from "../assets/sprite.jpg"
import coke from "../assets/coke.jpg"

const Drinks = () =>{
    return(
        <div className="all-drinks">
            <h2>Drinks</h2>

            <div className="drinks-burger">
                 <div className="drinks-pic">
            <img src={ eva } alt="a pic" />
            <span>Eva Water</span>
                 </div>
                 <div className="drinks-pic">
            <img src={ sprite } alt="a pic" />
            <span>Sprite</span>
                 </div>
                 <div className="drinks-pic">
            <img src={ coke } alt="a pic" />
            <span>Coke</span>
                 </div>
         </div>        
         </div>
 )
 }

 export default Drinks

