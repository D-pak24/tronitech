import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

function Navbar(props) {
  return (
    <header>
      <div className="logoContainer">
        <h2 className="logo">
          <img src={props.img} alt="logo" />
        </h2>
      </div>
      <ul className="navList">
        <Link to={'/register'}>
          <li className="navElements reg">Register</li>
        </Link>
        {/* <HashLink smooth to={"#events"} >
          <li className="navElements">Events</li>
        </HashLink >
        <HashLink smooth to={"#events"}>
          <li className="navElements">About</li>
        </HashLink>
        <HashLink smooth to={"#contact"} >
          <li className="navElements">Contact</li>
        </HashLink > */}
      </ul>
    </header>
  );
}

export default Navbar;
