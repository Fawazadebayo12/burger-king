import { RiSendPlaneLine } from "react-icons/ri";
import baby from "../assets/baby.png"
import { useState } from "react";
import { MdOutlineClear } from "react-icons/md";

const Locator = () => {
    const [address, setAddress] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Searching for:", address);
  };

    return(
       <div className="main-container">
        <div className="inner-container">
            <div className="store-div">
                <h2>Store Locator</h2>
                <span>Find a location nearby</span><br /><br />
                <div className="icon1">
                {/* <form onSubmit={handleSubmit} className="search-form"> */}
              </div>
              <div className="input-container">
              <input
                type="text"
                placeholder="Your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input4"
               />
              <button type="submit" className="search-button">
                {address != "" ? (
                  <MdOutlineClear className="icon3" onClick={()=>setAddress('')} size={20} />
                ) : (
                    <RiSendPlaneLine className="icon2"/>
                )}
      
              </button>
            {/* </form>      */}
            </div>
            
            </div>
            <div className="img-div">
                <img src={ baby } alt=" a pic" className="baby"/>
            </div>     
        </div>
       </div>
    )
}

export default Locator