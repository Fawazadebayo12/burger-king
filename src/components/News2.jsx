import first from "../assets/first-news.jpg.jpeg"
import second from "../assets/second-news.jpg.jpeg"
import third from "../assets/third-news.png"
const News2 = () => {
    return(
        <div className="news2-container">
          <span>News</span><br /><br />
          <div className="news2-store">
             <div className="first-news">
              <img src={ first } alt="first pic" />
              <span>JOIN THE BK TEAM</span>
             </div>
             <div className="second-news">
               <img src={ second } alt=" second pic" />
               <span>A WHOOPER HAS A NEW HOME</span>
             </div>
             <div className="third-news">
              <img src={ third } alt="a pic" />
              <span>The 3K,4K,5K NAIRA MENU</span>
             </div>
          </div>
        </div>
    )
}

export default News2