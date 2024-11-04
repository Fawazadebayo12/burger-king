import plantain from "../assets/Plantain-Cubes.png"
import potato from "../assets/Potato-Cubes.png"
import yam from "../assets/yam-fries.png"
import wings from "../assets/chicken-wings.jpg"
import cheesy from "../assets/chili-cheese.jpg"
import nuggets from "../assets/chicken-nuggets.jpg"
import rings from "../assets/onion-rings.jpg"
import fries from "../assets/fries.jpg"
const Sides = () =>{
    return(
        <div className="all-sides">
            <h2>Sides</h2>

            <div className="sides-burger">
                 <div className="sides-pic">
            <img src={ plantain } alt="a pic" />
            <span>Plantain Cubes</span>
                 </div>
                 <div className="sides-pic">
            <img src={ potato } alt="a pic" />
            <span>Potato Cubes</span>
                 </div>
                 <div className="sides-pic">
            <img src={ yam } alt="a pic" />
            <span>Yam Fries</span>
                 </div>
                 <div className="sides-pic">
            <img src={ wings } alt="a pic" />
            <span>Chicken Wings</span>
                 </div>
                 <div className="sides-pic">
            <img src={ cheesy } alt="a pic" />
            <span>Cheesy Bites</span>
                 </div>
                 <div className="sides-pic">
            <img src={ nuggets } alt="a pic" />
            <span>Chicken Nuggets</span>
                 </div>
                 <div className="sides-pic">
            <img src={ rings } alt="a pic" />
            <span>Onion Rings</span>
                 </div>
                 <div className="sides-pic">
            <img src={ fries } alt="a pic" />
            <span>Bk Fries</span>
                 </div>
            </div>
        </div>
    )
}


export default Sides