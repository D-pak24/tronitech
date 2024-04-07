import "./TechnicalEvents.css";
import { Link } from "react-router-dom";
import cricket_ff from "./eventimgs/cricket_ff.jpg";
function BoxCricketAndFreeFire() {
  return (
    <>
      <div className="technicaleventsCon">
        <div className="eventss">
          <div className="eventImg">
            <img src={cricket_ff} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">BoxCricket</div>
            <p className="aboutpara">
              Get ready for adrenaline-fueled action! Whether you're smashing
              boundaries in the Box Cricket tournament
            </p>
            <div className="eventHeader">Rules</div>

            <div className="aboutpara">
              <ul>
                <li>
                  Equipment Provided: Cricket bat and ball will be provided.
                </li>
                <li>
                  Team Requirements: Each team must have 6 players to start and
                  continue the game.
                </li>
                <li>
                  Captain's Role: Only captains can communicate with the umpire
                  for objections.
                </li>
                <li>
                  Scoring Rules: Runs in the power play are doubled at the end
                  of the over. Batsmen choose the powerplay over.
                </li>
                <li>
                  Bowling Rules:
                  <ul>
                    <li>Bowler must stay on both feet during delivery.</li>
                    <li>Release must be above shoulder level.</li>
                    <li>No step bowling; it's a No-Ball.</li>
                    <li>
                      One bounce above the shoulder is a No-Ball with no
                      warnings.
                    </li>
                  </ul>
                </li>
                <li>
                  Dismissals: Ball going directly out of the designated box
                  without bouncing is a common mode of dismissal.
                </li>
                <li>Game Format: Four overs per innings.</li>
                <li>
                  Match Result: The team with the most runs after both innings
                  wins. A tie is resolved with a super over.
                </li>
                <li>
                  Player Conduct: Fair play and sportsmanship are expected.
                </li>
                <li>
                  Attire: Players must wear suitable sports attire and footwear.
                </li>
                <li>
                  Disputes: Disputes should be resolved amicably among players
                  or brought to organizers.
                </li>
                <li>
                  Umpire's Decision: Umpire decisions are final and binding.
                </li>
              </ul>
            </div>
            <Link to={"/register"}>
              <div className="learnMore">Register</div>
            </Link>
          </div>
        </div>
        <div className="or">OR</div>
        <div className="eventss">
          <div className="eventImg">
            <img src={cricket_ff} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">Free Fire</div>
            <p className="aboutpara">
              Free Fire: Enter a fast-paced battle royale frenzy wheresurvival
              is the only option. Dive into intense, short matches, strategize
              with yourteam, and be the last one standing in this thrilling
              mobile shooter.
            </p>
            <div className="eventHeader">Rules</div>

            <div className="aboutpara">
              <ul>
                <li>Full squad only allowed.</li>
                <li>No grantee.</li>
                <li>No PC player.</li>
                <li>Don’t use 3rd party application.</li>
                <li>Don’t put emote during match.</li>
                <li>Registered players only allowed.</li>
                <li>Arrive match 5 minutes before start.</li>
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
export default BoxCricketAndFreeFire;
