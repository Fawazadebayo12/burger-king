import whooper from "../assets/Whopper.jpg"
import steakhouse from "../assets/steakhouses.jpg"
import bigking from "../assets/big-king.jpeg"
import doublewhooper from "../assets/DOUBLE-WHOPPER.jpg"
import doublesteakhouse from "../assets/double-steakhouse.jpg"
import bigkingxxl from "../assets/big-king-xxlw.jpg"
import whooperjr from "../assets/whopper-jnr.jpg"
import cheeseburger from "../assets/cheeseburger-sandwich.jpg"
import hamburger from "../assets/hamburger.jpg"
import doublecheeseburger from "../assets/double-cheese-burger.jpg"

const FlameGrills = () =>{
    return(
       <>
       
       <div className="name-for1">
       <h2 className="name-for">FlameGridBurgers</h2>
       </div>
       <div className="for-home-menu">
        <div className="snacks">

        <div className="just-pic">
        <img src={ whooper } alt=" a pic" />
                <span>Whooper</span>
            </div>
            <div className="just-pic">
                <img src={ steakhouse } alt="a pic" />
                <span>Steakhouse</span>
            </div>
            <div className="just-pic">
                <img src={ bigking } alt=" a pic" />
                <span>Big King</span>
            </div>
            <div className="just-pic">
                <img src={ doublewhooper } alt="a pic" />
                <span>Double Whooper</span>
            </div>
            <div className="just-pic">
                <img src={ doublesteakhouse } alt="a pic" />
                <span>Double Steakhouse</span>
            </div>
            <div className="just-pic">
                <img src={ bigkingxxl } alt="a pic" />
                <span>Big King XXL</span>
            </div>
            <div className="just-pic">
                <img src={ whooperjr } alt="a pic" />
                <span>Whooper jr</span>
            </div>
            <div className="just-pic">
                <img src={ cheeseburger } alt="a pic" />
                <span>Cheeseburger</span>
            </div>
            <div className="just-pic">
                <img src={ hamburger } alt="a pic" />
                <span>Hamburger</span>
            </div>
            <div className="just-pic">
                <img src={ doublecheeseburger } alt="a pic" />
                <span>Double Cheeseburger</span>
            </div>
       </div>
       </div>
       </>
    )
}

export default FlameGrills