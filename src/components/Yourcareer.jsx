import Thepic from "../assets/The-4-pic.png"
const Yourcareer = () =>{
    return(
        <>
        <div className="everything">
        <div className="for-text">
         <h1>Your Career,</h1><br />
         <h1>Your Way</h1>
        </div>
        <div className="The-pics">
            <img src={ Thepic } alt=" 4 pictures" />
        </div><br /><br />
        <div className="below">
         <p>We may be the King,<br />
but around here, my friend,<br />
YOU rule your career.</p><br /><br />
<span> You get to do things your way, and be, well, just you.<br />
The team's a proper team. We have a laugh, and we've got your back.<br />
And because we are shaking up fast food and opening restaurants like<br />
nobody's business, you get to be a part of something (royally) huge.<br />
It is only what "one" deserves.</span>
        </div><br /><br />
        <div className="for-button">
            <button>Find the King Vacancy</button>
        </div>
        </div>
        </>
    )
}

export default Yourcareer