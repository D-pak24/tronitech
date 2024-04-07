import { Link } from "react-router-dom";
import "./Event.css";

function Events(props) {
  
  return (
    <>
            <h1>Events</h1>
      <div className="eventContainer">

        <div className="technical">
          <Link to={"/technical"}>
          <figure className="techbg">
            <img src={props.img1} alt="Technical" className="technicalimg" />
          </figure>
          </Link>
          <h5>Technical Events</h5>
          
        </div>
        <div className="nontechnical">
          <Link to={"/nontechnical"}>
          <figure className="nontechbg">
            <img src={props.img2} alt="Technical" className="technicalimg" />
          </figure>
          </Link>
          <h5>Non Technical Events</h5>
          
        </div>
      </div>
    </>
  );
}

export default Events;
