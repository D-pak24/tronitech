import "./TechnicalEvents.css";
import errorcode from "./eventimgs/error_code.jpg";
function TechnicalEvents(){

    return(

    
    <>
     <div className="technicaleventsCon">
        <div className="events">
            <div className="eventImg">
                <img src={errorcode} alt="errorcodeBanner" id="errorcodeimg" />
            </div>
            <div className="eventDes"></div>
        </div>
     </div>
    </>
    )
}

export default TechnicalEvents;