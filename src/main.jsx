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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar img={AgniLogo} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/technical" element={<TechnicalEvents />} />
        <Route path="/nontechnical" element={<NonTechnicalEvents />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events/paperpresentation" element={<PaperPresentation/>}/>
        <Route path="/events/errorcode" element={<ErrorCode/>}/>
        <Route path="/events/circuitdebug" element={<CircuitDebug/>}/>
        <Route path="/events/brainybowlz" element={<BrainyBowlz/>}/>
        <Route path="/events/thinkonit" element={<ThinkonIt/>}/>
        {/* Other routes go here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
