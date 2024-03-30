import React, { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    // Target date (April 13th, 2024)
    const targetDate = new Date("2024-04-13T00:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        setExpired(true);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>About Us</h2>
      <p className="aboutpara">
        We are thrilled to extend our invitation to all of you for Agni College of Technology's Symposium organized by Electronics and Communication Engineering (ECE), "TRONIXTECH," scheduled for April 13th. Our aim is to cultivate a culture of knowledge exchange, collaboration, and innovation. Our objective is to delve into emerging trends, exchange invaluable insights, and tackle the pressing challenges within our industry. Together, let's pave the way forward, igniting positive transformation and progress. We urge you to actively engage and seize the opportunity to connect with fellow enthusiasts who share your zeal and commitment. We anticipate that "TRONIXTECH" will be an event filled with both enlightenment and inspiration. Come, join us, and let's embark on this exhilarating journey of exploration and discovery together!
      </p>
      <div className="markdate">13th April 2024</div>
      <h5>Mark The Date</h5>
      <div className="countdown">
        <h4>Countdown</h4>
        {expired ? (
          <div className="expired">Expired</div>
        ) : (
          <div className="timer">
            {days}D {hours}H {minutes}M {seconds}S
          </div>
        )}
      </div>
    </>
  );
}

export default About;
