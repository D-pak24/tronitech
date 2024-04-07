import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Register from './Pages/Register';
import TechnicalEvents from './Pages/TechnicalEvents.jsx';
import NonTechnicalEvents from './Pages/NonTechnicalEvents.jsx';
import Navbar from './Components/Navbar.jsx';
import AgniLogo from "./assets/AGNI-LOGO-AUTO.png";
import AboutPage from './Pages/AboutPage.jsx';
import PaperPresentation from './Pages/PaperPresentation.jsx';
import ErrorCode from './Pages/ErrorCode.jsx';
import CircuitDebug from './Pages/CircuitDebug.jsx';
import BrainyBowlz from './Pages/BrainyBowl.jsx';
import ThinkonIt from './Pages/ThinkOnit.jsx';
import App from './App.jsx';
import MemeCreationOrOnSpotPhotography from './Pages/MemeCreationAndOnSpotDrawing.jsx';
import BoxCricketAndFreeFire from "./Pages/BoxCricketndFreeFire.jsx";
import Talentia from "./Pages/Talentia.jsx";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppWithScrollToTop() {
  useEffect(() => {
    const preventDevTools = (e) => {
      if ((e.ctrlKey && e.shiftKey && e.key === 'I' && e.ctrlKey && e.keyCode == 85) || (e.key === 'F12')) {
        e.preventDefault();
      }
    };

    const preventContextMenu = (e) => {
      e.preventDefault();
    };

    window.addEventListener('keydown', preventDevTools);
    window.addEventListener('contextmenu', preventContextMenu);

    return () => {
      window.removeEventListener('keydown', preventDevTools);
      window.removeEventListener('contextmenu', preventContextMenu);
    };
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar img={AgniLogo} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/technical" element={<TechnicalEvents />} />
          <Route path="/nontechnical" element={<NonTechnicalEvents />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events/paperpresentation" element={<PaperPresentation/>}/>
          <Route path="/events/errorcode" element={<ErrorCode/>}/>
          <Route path="/events/circuitdebug" element={<CircuitDebug/>}/>
          <Route path="/events/brainybowlz" element={<BrainyBowlz/>}/>
          <Route path="/events/thinkonit" element={<ThinkonIt/>}/>
          <Route path="/events/boxcricketORfreefire" element={<BoxCricketAndFreeFire/>}/>
          <Route path="/events/talentia" element={<Talentia/>}/>
          <Route path="/events/memecreationORonspotphotography" element={<MemeCreationOrOnSpotPhotography/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AppWithScrollToTop />);
