import "./TechnicalEvents.css";
import { Link } from "react-router-dom";
import errorcode from "./eventimgs/error_code.jpg";
function ErrorCode() {
  return (
    <>
      <div className="technicaleventsCon">
        <div className="eventss">
          <div className="eventImg">
            <img src={errorcode} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">ErrorCode</div>
            <p className="aboutpara">
              Attention tech enthusiasts! Get ready to crack the code at our
              Error Codes event in the next HackerRank Challenge. 🖥️💻Dive into
              the world of coding by completing various challenges and fixes to
              sharpen your programming skills. Whether you're a seasoned
              programmer or just starting out, this event is your chance to
              learn, grow, and push the limits of your coding expertise. Don't
              forget to bring your laptop because you'll be building and
              debugging live on HackerRank. Join us for a fun coding experience
              filled with enthusiasm, camaraderie, and many “aha” moments. See
              you soon! 👩‍💻👨‍💻
            </p>
            <div className="eventHeader">Rules</div>

            <div className="aboutpara">
              <ul>
                <li>Everyone should bring laptop on your own</li>
                <li>All should have hackerrank account</li>
                <li>A program will be provided with some errors</li>
                <li>Participants need to rectify the error in the coding</li>
                <li>Only 5 minutes will be provided to debug the coding</li>
              </ul>
              <div className="eventHeader">Round 2 : Code Building</div>
              <ul>
                <li>A program will be provided</li>
                <li>
                  Participants need to build the coding based on our given
                  criteria
                </li>
                <li>Only 8 minutes will be provided</li>
                <li>
                Disclaimer: If any malpractice is noticed by our team, that team will be
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
export default ErrorCode;
