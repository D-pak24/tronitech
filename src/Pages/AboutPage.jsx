import "./TechnicalEvents.css"
import mainposter from "./eventimgs/mainposter.jpeg"
import About from "../Components/About";
import Contact from "../Components/Contact";
function AboutPage(){
return(
    <>
    <div className="technicaleventsCon">
<div className="eventss">
        <div className="eventImgs">
          <img src={mainposter} alt="eventImage" />
        </div>
       <div className="eventDes">
        <About/>
       </div>
       <div className="line"></div>
       <div className="footer">
       <div className="contactus">
        <Contact/>
       </div>

       <div className="map">
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497483.1375706508!2d79.96551051021193!3d13.061939235358194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0554775e57%3A0x191bc5eec274319!2sAgni%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1712415690530!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      <small className="dev">Crafted By Dpak</small>
       </div>
       </div>

      </div>
      </div>
    </>
)
}
export default AboutPage;