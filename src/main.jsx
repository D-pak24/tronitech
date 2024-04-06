import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <Navbar img={AgniLogo} />
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
        <Route path="/events/boxcricketORfreefire" element={<ThinkonIt/>}/>
        <Route path="/events/talentia" element={<ThinkonIt/>}/>
        <Route path="/events/memecreationORonspotphotography" element={<ThinkonIt/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
