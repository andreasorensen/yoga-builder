import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "../images/yogability-logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="nav-container">
        <NavLink to="/home" className="homepage-btn">
          Home
        </NavLink>
        <img className="logo" src={logo} alt="yogability-logo" />
        <NavLink to="/saved" className="saved-asanas-btn">Saved Asanas</NavLink>
      </nav>
    </>
  );
};

export default NavBar;
