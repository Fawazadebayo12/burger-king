import caramel from "../assets/caramel-sundae.jpg"
import stray from "../assets/Strawberry-sundae.jpg"
import choco from "../assets/chocolate-sundae.jpg"
import kitkat from "../assets/kit-kat.jpg"
const Desserts = () =>{
    return(
        <div className="all-desserts">
            <h2>Desserts</h2>

            <div className="dessert-burger">
                 <div className="dessert-pic">
            <img src={ caramel } alt="a pic" />
            <span>Caramel Sundae</span>
                 </div>
                 <div className="dessert-pic">
            <img src={ stray } alt="a pic" />
            <span>Strawberry Sundae</span>
                 </div>
                 <div className="dessert-pic">
            <img src={ choco } alt="a pic" />
            <span>Chocolate Sundae</span>
                 </div>
                 <div className="dessert-pic">
            <img src={ kitkat } alt="a pic" />
            <span>KitKat Fusion</span>
            </div>
     </div>
     </div>
    )
}

export default Desserts