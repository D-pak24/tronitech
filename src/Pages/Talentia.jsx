import "./TechnicalEvents.css";
import { Link } from "react-router-dom";
import talentia from "./eventimgs/talentia.jpg";

function Talentia() {
  return (
    <>
      <div className="technicaleventsCon">
        <div className="eventss">
          <div className="eventImg">
            <img src={talentia} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">Talentia</div>
            <p className="aboutpara">
              Talentia is an event to showcases various talents and skills of
              individuals. It typically includes performances such as singing,
              dancing, acting, musical performances, stand-up comedy, and other
              forms of artistic expression. Additionally, It's a platform for
              participants to exhibit their creativity, passion, and expertise
              while also providing entertainment and inspiration to the audience
            </p>
            <div className="eventHeader">Rules</div>

            <div className="aboutpara">
              <ul>
                <li>
                  All participants must register in advance to showcase their
                  talent.
                </li>
                <li>
                  Each performance must adhere to a specified time limit,
                  typically determined by the event organizers.
                </li>
                <li>
                  No offensive or inappropriate content is allowed in any
                  performance.
                </li>
                <li>
                  Participants must respect the diversity and cultural
                  sensitivities of the audience.
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
export default Talentia;
