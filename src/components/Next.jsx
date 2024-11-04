import React from "react";
import "../index.css"; // Link to your CSS file
import phone from "../assets/new-phone.png.jpg";
import app from "../assets/apple-man.jpg";
import play from "../assets/play-man.jpg";


const Next = () => {
  return (
    <div className="banner">
      <div className="content">
        <div className="phone-image">
          <img src={phone} alt="Phone with Offer" className="phone" />
        </div>
        <div className="text-section">
          <h1>
            Download our app and discover the incredible offers we have for you!
          </h1>
          <div className="download-buttons">
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://play.google.com/store/apps/details/BURGER_KING_App%3Fid%3Dcom.emn8.mobilem8.nativeapp.bk%26hl%3Den_ZA&ved=2ahUKEwjsxqTfkqeJAxUNRPEDHS80IooQFnoECBYQAQ&usg=AOvVaw2nj2TvE4RLU7O_Os5gwkx8"
              target="_blank"
              rel="playstoreapp"
            >
              <img src={play} alt="Google Play" className="store-button" />
            </a>
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/us/app/burger-king-app/id638323895&ved=2ahUKEwjyncjwkqeJAxU0QvEDHVsvCBYQFnoECBwQAQ&usg=AOvVaw02VkohhLAHQygar4U3VHj-"
              target="_blank"
              rel="Appstoreapp"
            >
              <img src={app} alt="App Store" className="store-button" />
            </a>
          </div>
          <p className="legal-text">
            Apple and the Apple logo are trademarks of Apple Inc., registered in
            the US and other countries. App Store is a<br /> service mark of Apple
            Inc. Google Play is a trademark of Google Inc. Terms and Conditions
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Next;

// import phone from "../assets/new-phone.png.jpg"

// const Next = () =>{
//   return(
//       <div className="banner">
//       <div className="content">
//        <img src= { phone } alt="a pic" className="phone"/>
//       </div>
//       <div className="text-section">
//         <h1>
//           Download our app and discover the<br></br> incredible offers we have for you!
//        </h1>
//       </div>
//       </div>
//   )
// }

// export default Next
