// Contact.js
import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactHeader">Contact Us</div>
      <div className="contactDetails">
        <h4 className="conHeaders">Convenor</h4>
        <h4>Mrs.Dr.N.V.S.Shree Rathna Lakshmi</h4>
        <div className="line"></div>
        <h4  className="conHeaders">Faculty Co-ordinaters</h4>
        <h4>Mrs.Dr.Maheshwari</h4>
        <div className="line"></div>
        <h4 className="conHeaders">Student Co-ordinaters</h4>
        <h4>President - Sri Rakshaga / 86374 97709</h4>
        <h4>Vice President - Venkata Krishnan / 6383168127</h4>
        <h4>Secretary - Premalatha / 89395 62666</h4>
        <h4>Event Coordinator - Vignesh/ 9360266424</h4>
        <div className="line"></div>
        <p className="aboutcontact">
          Agni College of Technology College in OMR, Navallur, Thallambur,
          Chennai – 600 130,Tamil Nadu
          <a href="https://act.edu.in/" target="_blank">To Know More About Our College</a>
        </p>
      </div>
      <div className="line"></div>
      <div className="footer">
        <div className="tronixtech">TRONIXTECH ' 24</div>
        <div className="email">
          <div className="email">Email :</div> <span className="mail">tronixtech@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
