import "./TechnicalEvents.css";
import { Link } from "react-router-dom";
import circuitdebug from "./eventimgs/circuitdebug.jpg";

function CircuitDebug() {
  return (
    <>
      <div className="technicaleventsCon">
        <div className="eventss">
          <div className="eventImg">
            <img src={circuitdebug} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">Circuit Debug</div>
            <p className="aboutpara">
              Attention circuit enthusiasts! Prepare to roll up your sleeves and
              dive into the world of circuit debugging at our upcoming event. 🔌
              Join us for a thrilling challenge where you'll be building and
              debugging circuits live on Tinkercad. Whether you're a novice or a
              seasoned pro, this event promises to test your skills, creativity,
              and problem-solving abilities. Don't forget to bring your laptops,
              as you'll be tinkering and troubleshooting circuits in real-time.
              Get ready for an electrifying experience filled with fun,
              learning, and the satisfaction of conquering challenges. See you
              there!" 💡
            </p>
            <div className="eventHeader">Rules</div>

            <div className="aboutpara">
              <ul>
                <li>
                  All the circuits are going to build and debug on Tinkercad, so
                  participants are requested to bring a laptop for this event
                </li>
                <li>Each team can have a maximum of 2 members</li>
                <li>A circuit diagram will be provided with some errors</li>
                <li>Participants need to rectify the error in the circuit</li>
                <li>Only 5 minutes will be provided to debug the circuit</li>
              </ul>
              <div className="eventHeader">Round 2 : Circuit Building</div>
              <ul>
                <li>A circuit diagram will be provided</li>
                <li>Participants need to build the circuit</li>
                <li>Only 8 minutes will be provided</li>
                <li>
                  If any malpractice is noticed by our team, that team will be
                  disqualified
                </li>
              </ul>
            </div>
            <Link to={"/register"}>
              <div className="learnMore">Register</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default CircuitDebug;
