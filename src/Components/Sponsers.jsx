import Sponser1 from "./sponser1.jpg"
import Sponser2 from "./sponser2.jpg"
import "./Sponsers.css"
function Sponsers(){
 return(
    <>
    <h1>Sponsers</h1>
    <div className="sponserContainer">
        <div className="img1"><img src={Sponser1} alt="sponserImg"/></div>
        <div className="img2"><img src={Sponser2} alt="sponserImg"/></div>
    </div>
    </>
 )
}
export default Sponsers;