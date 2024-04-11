import "./TechnicalEvents.css";
import { Link } from "react-router-dom";
import talentia from "./eventimgs/talentia.jpg";
import cricket_ff from "./eventimgs/cricket_ff.jpg";
import memecreation from "./eventimgs/memecreation.jpg";

import "../Components/About.css";
function NonTechnicalEvents() {
  return (
    <>
      <div className="technicaleventsCon">
        <div className="events">
          <div className="eventImg">
            <img src={cricket_ff} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">Box Cricket</div>
            <p className="aboutpara">
              Get ready for adrenaline-fueled action! Whether you're smashing
              boundaries in the Box Cricket tournament
              <div className="or"> or </div>
            </p>
            <div className="eventHeader">Free fire</div>
            <p className="aboutpara">
              diving into the heart-pounding chaos of Free Fire, there's
              something for everyone to participate in. Compete, strategize, and
              emerge victorious in your chosen battleground.
            </p>
            <Link to={"/events/boxcricketORfreefire"}>
              <div className="learnMore">Dive Deeper</div>
            </Link>
          </div>
        </div>
        <div className="events">
          <div className="eventImg">
            <img src={talentia} alt="errorcodeBanner" id="errorcodeimg" />
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
            <Link to={"/events/talentia"}>
              <div className="learnMore">Dive Deeper</div>
            </Link>
          </div>
        </div>
        <div className="events">
          <div className="eventImg">
            <img src={memecreation} alt="eventImage" />
          </div>
          <div className="eventDes">
            <div className="eventHeader">Meme Creation</div>
            <p className="aboutpara">
              Join our meme creation challenge and unleash your creativity!
              <div className="or"> or </div>
            </p>
            <div className="eventHeader">On Spot Photography</div>
            <p className="aboutpara">
              "On Spot Photography" is a captivating event where participants
              showcase theirspontaneity and creativity through photography.
              Participants are given a themeor prompt at the event venue and are
              tasked with capturing compelling imageswithin a limited timeframe.
            </p>
            <Link to={"/events/memecreationORonspotphotography"}>
              <div className="learnMore">Dive Deeper</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NonTechnicalEvents;
