import { Link } from "react-router-dom";
import "./Event.css";

function Events(props) {
  console.log(props.tech);
  // const [eventNames, setEventNames] = useState({
  //     event1: "Paper Presentation",
  //     event2: "Error Coding",
  //     event3: "Circuit Debugging",
  //     event4: "Circuit Reframing",
  //     event5: "Brainy Bowl (Quiz)",
  //     event6: "Think On it",
  //   });
  //   const[isNonTech,setHandleNonTech]=useState(false);
  //   const [eventTitle, setEventTitle] = useState("Technical Events");
  //   function handleLeft() {
  //     setHandleNonTech(false);
  //     setEventTitle("Technical Events");
  //     setEventNames({
  //       event1: "Paper Presentation",
  //       event2: "Error Coding",
  //       event3: "Circuit Debugging",
  //       event4: "Circuit Reframing",
  //       event5: "Brainy Bowl (Quiz)",
  //       event6: "Think On it",
  //     })
  //   }
  //   function handleRight() {
  //     setHandleNonTech(true);
  //     setEventTitle("Non-Technical Events");
  //     setEventNames({
  //       event1: "Box Cricket",
  //       event2: "Talentia",
  //       event3: "Meme Creation",
  //       event4: "On Spot Photography",
  //     })
  //   }
  return (
    <>
            <h1>Events</h1>
      <div className="eventContainer">

        <div className="technical">
          <Link to={"/technical"}>
          <figure className="techbg">
            <img src={props.img1} alt="Technical" className="technicalimg" />
          </figure>
          <h5>Technical Events</h5>
          </Link>
        </div>
        <div className="nontechnical">
          <Link to={"/nontechnical"}>
          <figure className="nontechbg">
            <img src={props.img2} alt="Technical" className="technicalimg" />
          </figure>
          <h5>Non Technical Events</h5>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Events;
