import "./TechnicalEvents.css";
import { Link } from "react-router-dom";
import paperpresentation from "./eventimgs/paperpresentation.jpg";

function PaperPresentation() {
  return (
    <>
      <div className="technicaleventsCon">
        <div className="eventss">
          <div className="eventImg">
            <img src={paperpresentation} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">Paper Presentation</div>
            <p className="aboutpara">
              Think On It is a problem-solving symposium event designed
              tochallenge participants' logical thinking and real-time
              implementation skills. Participants will be provided with a set of
              problem statements covering a diverserange of topics. Their task
              is to devise practical solutions that are not onlylogically sound
              but also implementable in real-world scenarios.
            </p>
            <div className="eventHeader">Rules</div>
            <small>Theme: Electronics Related Domain</small>

            <div className="aboutpara">
              <ul>
                <li>
                  Topic Selection: Choose a relevant topic within the given
                  theme
                </li>
                <li>Abstract Submission: Submit an abstract</li>
                <li>Presentation: Present your paper in 10-15 minutes</li>
                <li>Visual Aids: Use slides or posters sparingly</li>
                <li>
                  Language: Present in a language understandable to the
                  audience.
                </li>
                <li>
                  Prizes: Prizes or certificates may be awarded to the best
                  presentations.
                </li>
              </ul>
            </div>
            <Link to={"https://docs.google.com/forms/d/e/1FAIpQLScNGaj5s7bhlLy0rz4hkZZFX9Q4MQmnwrw384r6WNowc_-agw/viewform?usp=sf_link"}>
              {" "}
              <div className="learnMore">Register</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default PaperPresentation;
