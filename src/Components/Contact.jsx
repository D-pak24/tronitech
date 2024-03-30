// Contact.js
import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactHeader">Contact Us</div>
      <div className="contactDetails">
        <h4>President - Sri Rakshaga / 86374 97709</h4>
        <h4>Vice President - Venkata Krishnan / 6383168127</h4>
        <h4>Secretary - Premalatha / 89395 62666</h4>
        <h4>Event Coordinator - Vignesh/ 9360266424</h4>
        <h4 className="aboutcontact">
          Agni College of Technology College in OMR, Navallur, Thallambur,
          Chennai – 600 130,Tamil Nadu
        </h4>
      </div>
      <div className="line"></div>
      <div className="footer">
        <div className="tronixtech">TRONIXTECH ' 24</div>
        <div className="email">
          Email : <span className="mail">tronixtech@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
