import { RiSendPlaneLine } from "react-icons/ri";
import {Link} from "react-router-dom"
import { useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import BranchMap from './Branchmap';
// import React, { useState } from 'react';


const Resto = () =>{
    const [address, setAddress] = useState("");
    const [selectedLocation, setSelectedLocation] = useState(null);
    return(
      <>
      
            <div>
            <BranchMap selectedLocation={selectedLocation} />
        </div>

      <div className="The-container">
         <div className="home-resto">
           <Link to="/">Home /</Link>
           <Link className="for-resto" to="/restaurant"> Restaurants</Link>
         </div><br /><br />
         <div className="input-type">
            <input type="text" placeholder="please, enter your location" value={address}
                onChange={(e) => setAddress(e.target.value)}/>

        <button type="submit" className="for-icons">
            {address!= "" ?(
              <MdOutlineClear className="icon20" onClick={()=>setAddress('')} size={25} />
            ):(
                <RiSendPlaneLine className="plane" />
            )}
        </button>
        </div>
           <div className="Resto">
            <h1>Restaurants</h1>
            </div>
        </div>
      <div className="for-location">
        <div className="location">
            <h2>Victoria Island</h2>
            <span>247 Ajose adeogun</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Palms</h2>
            <span>1 Bisway St,Maroko Lekki</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Lekki</h2>
            <span>11b Victoria Arobioke St,Lekki Phase 1</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Agungi</h2>
            <span>10 Agungi Ajiran Road,Agungi</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Yaba</h2>
            <span>282 Herbert Macaulay Way</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Victoria Island</h2>
            <span>247 Ajose adeogun</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Surulere</h2>
            <span>69 Adeniran Ogunsanya Street,Surulere</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Gbagada</h2>
            <span>296, Gbagada-oworonshoki expressway</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Festac</h2>
            <span>132 Festac Access Road</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Ajah</h2>
            <span>237, Lekki-Epe Expy,Ajah</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Ikeja GRA</h2>
            <span>32 Joel Ogunnaike Street</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Ikeja City Mall</h2>
            <span>Obafemi Awolowo Way,Alausa,Ojodu</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Ringroad Ibadan</h2>
            <span>2, Bisi Akande Rd,MKO Abiola way,Oluyole,Ring Road</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Gateway</h2>
            <span>Musa Yar'Adua expressway(Airport road)</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Gwarimpa</h2>
            <span>No 55 Pa Michael Imoudu Street,3rd Avenue Gwarimpa</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
        <div className="location">
            <h2>Wuse 2</h2>
            <span>24 Durban St,Wuse 2</span><br /><br />
          <Link to="">show on map</Link><br />
        </div><br />
      </div>
      
      </>
    )
}

export default Resto