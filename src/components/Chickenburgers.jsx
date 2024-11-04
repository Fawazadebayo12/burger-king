import original from "../assets/original-chicken.jpg"
import fillet from "../assets/King-Fillet.png"
import crispy from "../assets/crispy-chicken.jpg"

const Chickenburgers = () =>{
    return(
        <>
        <div id="Chickenburgers">
        <div className="all-chicken">
            <h2>Chicken Burgers</h2>

            <div className="chicken-burger">
                 <div className="chicken-pic">
            <img src={ original } alt="a pic" />
            <span>Chicken Royale</span>
                 </div>
                 <div className="chicken-pic">
            <img src={ fillet } alt="a pic" />
            <span>King Chicken Fillet</span>
                 </div>
                 <div className="chicken-pic">
            <img src={ crispy } alt="a pic" />
            <span>Crispy Chicken</span>
                 </div>
            </div>
        </div>
        </div>
        </>
    )
}


export default Chickenburgers