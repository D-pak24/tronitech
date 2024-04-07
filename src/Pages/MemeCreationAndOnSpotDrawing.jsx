import "./TechnicalEvents.css";
import { Link } from "react-router-dom";
import memecreation from "./eventimgs/memecreation.jpg";
import onspot from "./eventimgs/onspot.jpg";

function MemeCreationOrOnSpotPhotography() {
  return (
    <>
      <div className="technicaleventsCon">
        <div className="eventss">
          <div className="eventImg">
            <img src={memecreation} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">MemeCreation</div>
            <p className="aboutpara">
              Join our meme creation challenge and unleash your creativity!
            </p>
            <div className="eventHeader">Rules</div>

            <div className="aboutpara">
              <ul>
                <li>Choose any 1 topic only (Technical & non-technical).</li>
                <li>Individual participation.</li>
                <li>The content should be only in ENGLISH & TANGLISH.</li>
                <li>Image size should be an Instagram post.</li>
                <li>Content should be 100% original in concept.</li>
                <li>
                  If found copied from other sources, the entry will be
                  disqualified.
                </li>
                <li>Content should be clean with no indecent words.</li>
                <li>By using only InShot, Canva, and VN are allowed.</li>
                <li>Memes should be submitted in jpg/jpeg/pdf/png format.</li>
                <li>Time given only 30 minutes to prepare your meme.</li>
              </ul>
            </div>
            <Link to={"https://docs.google.com/forms/d/e/1FAIpQLScNGaj5s7bhlLy0rz4hkZZFX9Q4MQmnwrw384r6WNowc_-agw/viewform?usp=sf_link"}>
              <div className="learnMore">Register</div>
            </Link>
          </div>
        </div>
        <div className="or">OR</div>
        <div className="eventss">
          <div className="eventImg">
            <img src={onspot} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">On Spot Photography</div>
            <p className="aboutpara">
              On Spot Photography" is a captivating event where participants
              showcase theirspontaneity and creativity through photography.
              Participants are given a themeor prompt at the event venue and are
              tasked with capturing compelling imageswithin a limited timeframe.
            </p>
            <div className="eventHeader">Rules</div>

            <div className="aboutpara">
              <ul>
                <li>
                  Participants must bring their own camera or smartphone for
                  photography.
                </li>
                <li>
                  Each participant is provided with a specific time limit to
                  capture and submit their photographs.
                </li>
                <li>
                  Photographs must adhere to the theme or prompt provided by the
                  organizers.
                </li>
                <li>
                  Post-processing of images is usually not allowed, with the
                  emphasis on capturing authentic moments.
                </li>
                <li>
                  Submissions must be in digital format and submitted within the
                  designated timeframe.
                </li>
                <li>
                  Judges evaluate entries based on creativity, composition,
                  relevance to the theme, and overall impact.
                </li>
                <li>
                  Winners are announced based on the judges' decisions, with
                  prizes awarded to top performers.
                </li>
              </ul>
            </div>

            <Link to={"https://docs.google.com/forms/d/e/1FAIpQLScNGaj5s7bhlLy0rz4hkZZFX9Q4MQmnwrw384r6WNowc_-agw/viewform?usp=sf_link"}>
              <div className="learnMore">Register</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default MemeCreationOrOnSpotPhotography;
