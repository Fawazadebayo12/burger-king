import newside from "../assets/New-Sides.jpg"
import meet from "../assets/meet-the-long.jpg"
import bestseller from "../assets/best-seller.jpg"
import whooper from "../assets/second-news.jpg.jpeg"
const Newsr = () =>{
    return(
        <>
        <div className="heading">
        <h2>News</h2>
        </div>
       <div className="newsr">
        <div className="new-sides">
         <img src={ newside } alt="a pic" />
         <p>NEW SIDES ALERT!!!</p>
         <span>Burger King has introduced NEW SIDES to the BK<br /> SIDES GENG</span>
        </div>
        <div className="new-sides">
        <img src={ meet } alt="a pic" />
        <p>WHAT'S BETTER THAN</p>
        <span>Burger King is now Grilling in Nigeria and the Whopper<br /> has a new Home!!</span>
        </div>
        <div className="new-sides">
         <img src={ bestseller} alt="a pic" />
         <p>Best Sellers of the</p>
         <span>Say Hello to our Best Sellers of the month - The<br /> Whopper, Steakhouse, and the Big King.</span>
        </div>
        <div className="new-sides">
      <img src={ whooper } alt="a pic" />
      <p>THE WHOOPER HAS A NEW</p>
      <span>Burger King is now Grilling in Nigeria and the Whopper<br /> has a new Home!!</span>
        </div>
       </div>
        </>
    )
}

export default Newsr