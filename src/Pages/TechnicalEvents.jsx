import React from "react";
import "./TechnicalEvents.css";
import paperpresentation from "./eventimgs/paperpresentation.jpg";
import errorcode from "./eventimgs/error_code.jpg";
import circuitdebug from "./eventimgs/circuitdebug.jpg";
import brainybowlz from "./eventimgs/brainybowlz.jpg";
import thinkonit from "./eventimgs/thinkonit.jpg";

import { Link } from "react-router-dom";
function TechnicalEvents() {
  return (
    <div className="technicaleventsCon">
      <div className="events">
        <div className="eventImg">
          <img src={paperpresentation} alt="eventImage" />
        </div>
        <div className="eventDes">
          <div className="eventHeader">Paper Presentation 📝</div>
          <small>Theme: Electronics Related Domain</small>
          <p className="aboutpara">
            Enter the dynamic world of technology at the TronixTechs`24
            symposium! 🚀 Get ready for an exciting experience filled with
            insights, engaging discussions and exciting networking
            opportunities. Come Join us to discover the latest trends and
            innovations, all in a vibrant and energetic atmosphere. Don't miss
            your chance to join this exciting event where enthusiasts Tech
            enthusiasts unite to explore, learn and connect. ⚡️🌟
          </p>
          <Link to={"/events/paperpresentation"}>  <div className="learnMore">
                Dive Deeper
            </div></Link>
        </div>
        
      </div>
      
      <div className="events">
        <div className="eventImg">
          <img src={errorcode} alt="eventImage" />
        </div>
        <div className="eventDes">
          <div className="eventHeader">Error Code 💻</div>
          <p className="aboutpara">
            Attention tech enthusiasts! Get ready to crack the code at our Error
            Codes event in the next HackerRank Challenge. 🖥️💻Dive into the
            world of coding by completing various challenges and fixes to
            sharpen your programming skills. Whether you're a seasoned
            programmer or just starting out, this event is your chance to learn,
            grow, and push the limits of your coding expertise. Don't forget to
            bring your laptop because you'll be building and debugging live on
            HackerRank. Join us for a fun coding experience filled with
            enthusiasm, camaraderie, and many “aha” moments. See you soon! 👩‍💻👨‍💻
          </p>
          <Link to={"/events/errorcode"}>  <div className="learnMore">
                Dive Deeper
            </div></Link>
        </div>

      </div>
      <div className="events">
        <div className="eventImg">
          <img src={circuitdebug} alt="eventImage" />
        </div>
        <div className="eventDes">
          <div className="eventHeader">Circuit Debugging ⚡️</div>
          <p className="aboutpara">
            Attention circuit enthusiasts! Prepare to roll up your sleeves and
            dive into the world of circuit debugging at our upcoming event. 🔌
            Join us for a thrilling challenge where you'll be building and
            debugging circuits live on Tinkercad. Whether you're a novice or a
            seasoned pro, this event promises to test your skills, creativity,
            and problem-solving abilities. Don't forget to bring your laptops,
            as you'll be tinkering and troubleshooting circuits in real-time.
            Get ready for an electrifying experience filled with fun, learning,
            and the satisfaction of conquering challenges. See you there!" 💡
          </p>
          <Link to={"/events/circuitdebug"}>  <div className="learnMore">
                Dive Deeper
            </div></Link>
        </div>

      </div>
      <div className="events">
        <div className="eventImg">
          <img src={brainybowlz} alt="eventImage" />
        </div>
        <div className="eventDes">
          <div className="eventHeader">Brainly bowl [ quiz ]</div>
          <p className="aboutpara">
            Get ready to put your thinking caps on and join us for the Brainly
            Bowl Quiz! 🧠🏆 Test your aptitude, logical reasoning, and general
            knowledge prowess in this ultimate battle of the brains. From
            mind-bending puzzles to thought-provoking riddles, each question
            will challenge your intellect and sharpen your problem-solving
            skills. Gather your team, bring your A-game, and prepare to compete
            against the brightest minds. Only those with the sharpest wit and
            quickest reflexes will emerge victorious in the Brainly Bowl Quiz.
            Are you ready to prove your mental mettle?
          </p>
          <Link to={"/events/brainybowlz"}>  <div className="learnMore">
                Dive Deeper
            </div></Link>
        </div>

      </div>
      <div className="events">
        <div className="eventImg">
          <img src={thinkonit} alt="eventImage" />
        </div>
        <div className="eventDes">
          <div className="eventHeader">Think on it</div>
          <p className="aboutpara">
            Think On It is a problem-solving symposium event designed
            tochallenge participants' logical thinking and real-time
            implementation skills. Participants will be provided with a set of
            problem statements covering a diverserange of topics. Their task is
            to devise practical solutions that are not onlylogically sound but
            also implementable in real-world scenarios.
          </p>
          <Link to={"/events/thinkonit"}>  <div className="learnMore">
                Dive Deeper
            </div></Link>
        </div>

      </div>
    </div>
  );
}

export default TechnicalEvents;
