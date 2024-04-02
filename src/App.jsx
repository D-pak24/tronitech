import "./App.css";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Events from "./Components/Events";
import About from "./Components/About";
import  Nontechnical  from "./assets/astronontech.png";
import Technical from "./assets/astrotech.png";

import Contact from "./Components/Contact";
import AgniLogo from "./assets/AGNI-LOGO-AUTO.png";


function App() {
  return (
    <>

      <div className="mainContainer">
      <Navbar img={AgniLogo} />
        <div id="home">
          <div className="mainContent">
            <div className="right">
              <h2 className="tronix">TRONIX TECHS</h2>
              <div className="2k24">2024</div>
            </div>
            <div className="left">
              <div className="Title">Get Ready!</div>
              <div className="titleContent">Symposium Time let's dive in</div>
              {/* <p>Venue : Agni College Of Technology</p> */}
              <Link to={"/register"}>
                <button className="mainBtn">Register Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div id="about">
          <About />
        </div>

        <div id="events">
          <Events img1={Technical} img2={Nontechnical}/>
        </div>

        <div id="contacts">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
