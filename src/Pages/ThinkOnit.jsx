import "./TechnicalEvents.css";
import { Link } from "react-router-dom";
import thinkonit from "./eventimgs/thinkonit.jpg";

function ThinkonIt() {
  return (
    <>
      <div className="technicaleventsCon">
        <div className="eventss">
          <div className="eventImg">
            <img src={thinkonit} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">Think on it</div>
            <p className="aboutpara">
              Think On It is a problem-solving symposium event designed
              tochallenge participants' logical thinking and real-time
              implementation skills. Participants will be provided with a set of
              problem statements covering a diverserange of topics. Their task
              is to devise practical solutions that are not onlylogically sound
              but also implementable in real-world scenarios.
            </p>
            <div className="eventHeader">Rules</div>

            <div className="aboutpara">
              <ul>
                <li>
                  Participants must adhere to the event's time constraints and
                  submit their solutions within the specified time limit.
                </li>
                <li>
                  Teams are expected to demonstrate logical thinking and
                  practical problem-solving skills in their solutions.
                </li>
                <li>
                  Plagiarism or copying solutions from external sources is
                  strictly prohibited.
                </li>
                <li>
                  Teams should ensure that their solutions are not only
                  logically sound but also feasible for real-world
                  implementation.
                </li>
                <li>
                  Any team found engaging in malpractice, such as cheating or
                  unauthorized communication, will be disqualified from the
                  event.
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
export default ThinkonIt;
