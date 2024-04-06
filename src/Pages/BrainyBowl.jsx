import "./TechnicalEvents.css";
import { Link } from "react-router-dom";
import errorcode from "./eventimgs/error_code.jpg";
function  BrainyBowlz() {
  return (
    <>
      <div className="technicaleventsCon">
        <div className="eventss">
          <div className="eventImg">
            <img src={errorcode} alt="eventImage" />
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
            <div className="eventHeader">Rules</div>

            <div className="aboutpara">
              <ul>
              <li>Note: questions based on aptitude, logical, generalized questions</li>
<li>This event contains 3 different rounds</li>
<li>Each team consists of 3 members</li>
<li>Round 1: [SQUEEZE] [15 questions] - 7 verbal, 8 visual</li>
<li>Time duration: 15 mins</li>
<li>Teams scoring 10 and above will move to the next round</li>

              </ul>
              <div className="eventHeader">Round 2</div>
              <ul>

<li>20 questions (15 verbal, 5 visual)</li>
<li>Time duration: 10 mins</li>
<li>Teams scoring 15 and above move on to the final round</li>
<li>Round 3: [PROVE]</li>
<li>10 questions (visual)</li>
<li>Time duration: 5 mins</li>
<li>Disclaimer: If any team is noticed with malpractice, they will be eliminated</li>

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
export default BrainyBowlz;
