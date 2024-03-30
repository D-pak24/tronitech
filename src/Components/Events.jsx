import { useState } from "react";

function Events(){
    const [eventNames, setEventNames] = useState({
        event1: "Paper Presentation",
        event2: "Error Coding",
        event3: "Circuit Debugging",
        event4: "Circuit Reframing",
        event5: "Brainy Bowl (Quiz)",
        event6: "Think On it",
      });
      const[isNonTech,setHandleNonTech]=useState(false);
      const [eventTitle, setEventTitle] = useState("Technical Events");
      function handleLeft() {
        setHandleNonTech(false);
        setEventTitle("Technical Events");
        setEventNames({
          event1: "Paper Presentation",
          event2: "Error Coding",
          event3: "Circuit Debugging",
          event4: "Circuit Reframing",
          event5: "Brainy Bowl (Quiz)",
          event6: "Think On it",
        })
      }
      function handleRight() {
        setHandleNonTech(true);
        setEventTitle("Non-Technical Events");
        setEventNames({
          event1: "Box Cricket",
          event2: "Talentia",
          event3: "Meme Creation",
          event4: "On Spot Photography",
        })
      }
    return(
        <div className="eventContainer">
        <div className="eventTitle">
          <div className="leftArrow" onClick={handleLeft}>
            &#9664;
          </div>
          <h4 className={`eventName ${isNonTech ? "nonTechName" : ""}`}>{eventTitle}</h4>
          <div className="rightArrow" onClick={handleRight}>
            &#9658;
          </div>
        </div>
        <div className="eventContent">
          <ul className="eventList">
            <li
              className={`eventNames ${isNonTech ? "nonTech" : ""}`}
            >
              {eventNames.event1}
            </li>
            <li
              className={`eventNames ${isNonTech ? "nonTech" : ""}`}
            >{eventNames.event2}</li>
             <li
              className={`eventNames ${isNonTech ? "nonTech" : ""}`}
            >{eventNames.event3}</li>
            <li
              className={`eventNames ${isNonTech ? "nonTech" : ""}`}
            >{eventNames.event4}</li>
            <li
              className={`eventNames ${isNonTech ? "nonTech" : ""}`}
            >{eventNames.event5}</li>
             <li
              className={`eventNames ${isNonTech ? "nonTech" : ""}`}
            >{eventNames.event6}</li>
          </ul>
        </div>
      </div>
    )
}

export default Events;