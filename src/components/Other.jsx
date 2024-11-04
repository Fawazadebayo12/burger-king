import { GiKnifeFork } from "react-icons/gi";
import { MdOutlineTakeoutDining } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
const Other = () => {
  return(
      <div className="The-whole">
         <div className="wooper1">
           <div className="wooper2">
            <h2>What would you like?</h2>
           </div>
           <div className="wooper3">
            <div className="knife">
            <GiKnifeFork className="knife1"/>
            <span>Dine-in Pickup</span>
            <span className="knife2">Order is served in restaurant</span>
            </div><br />
            <div className="Takeout">
            <MdOutlineTakeoutDining  className="Takeout1"/>
            <span>Takeout</span>
            <span className="Takeout2">Order is packed for outside</span>
            </div><br />
            <div className="delivery">
            <MdOutlineDeliveryDining className="delivery1"/>
            <span>Delivery</span>
              <span className="delivery2">Order is delivered to you</span>
            </div>
            </div>
         </div>
      </div>
  )
}

export default Other