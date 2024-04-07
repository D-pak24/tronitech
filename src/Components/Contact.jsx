import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactHeader">Contact Us</div>
      <div className="contactDetails">
        <h4 className="conHeaders">Convenor</h4>
        <h4>Dr.N.V.S.Shree Rathna Lakshmi</h4>
        <div className="line"></div>
        <h4 className="conHeaders">Faculty Coordinator</h4>
        <h4>Mrs.D.Maheswari</h4>
        <div className="line"></div>
        <h4 className="conHeaders">Student Coordinators</h4>
        <h4>President - Sri Rakshaga / 86374 97709</h4>
        <h4>Vice President - Venkata Krishnan / 6383168127</h4>
        <h4>Secretary - Premalatha / 89395 62666</h4>
        <h4>Event Coordinator - Vignesh/ 9360266424</h4>
        <h4>Treasurer - Saminathan/ 8668058971</h4>
        <div className="line"></div>
        <p className="aboutcontact">
          Agni College of Technology College in OMR, Navallur, Thallambur,
          Chennai – 600 130,Tamil Nadu
          <a href="https://act.edu.in/" target="_blank">
            To Know More About Our College
          </a>
        </p>
      </div>
      <div className="line"></div>
      <div className="footer">
        <div className="tronixtech">TRONIXTECHS ' 24</div>
        <div className="email">
          <div className="email">
            {" "}
            <span className="mail">tronixtechs@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
