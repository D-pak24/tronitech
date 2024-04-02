import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import TechnicalEvents from './Pages/TechnicalEvents.jsx';
import NonTechnicalEvents from './Pages/NonTechnicalEvents.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/technical" element={<TechnicalEvents />} />
        <Route path="/nontechnical" element={<NonTechnicalEvents />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
