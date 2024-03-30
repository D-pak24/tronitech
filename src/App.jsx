import "./App.css";
import Navbar from "./Components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Events from "./Components/Events";
import About from "./Components/About";
import DesktopBackground from "./assets/circuitbg.png";
import Contact from "./Components/Contact";
import AgniLogo from "./assets/AGNI-LOGO-AUTO.png";
import glitter from "./assets/glitter.png";

function App() {
  return (
    <>
      <Navbar img={AgniLogo} />
      <div className="mainContainer">
        <Parallax pages={4}>
          <ParallaxLayer
            className="mainBox"
            offset={0}
            speed={0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${DesktopBackground})`,
              backgroundSize: "cover",
              backgroundColor: "rgba(76, 175, 80, 0.3)",
            }}
          >
            <div className="mainContent">
              <div className="right">
                <h2 className="tronix">TRONIXTECH</h2>
                <div className="2k24">2024</div>
              </div>
              <div className="left">
                <div className="Title">Get Ready!</div>
                <div className="titleContent">Symposium Time let's dive in</div>
                {/* <p>Venue : Agni College Of Technology</p> */}
                <button className="mainBtn">Register Now</button>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.8}
            factor={1.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            id="about"
          >
            <About />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.5}
            factor={1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundImage: `url(${glitter})`,
              background:
                "linear-gradient(rgb(63, 26, 82) 1.68%, rgb(17, 26, 59) 31.25%, rgb(19, 6, 29) 101.23%)",
                backgroundSize:"cover"
            }}
            id="events"
          >
            <Events />
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.5}
            factor={1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            id="contact"
          >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default App;
