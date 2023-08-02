import './NavBar.css'
import { NavLink } from 'react-router-dom';
import logo from "../images/yogability-logo.png";


const NavBar = () => {
  return (
    <>
      <nav className='nav-container'>
        <NavLink className="homepage-btn">Home</NavLink>
          <img className='logo' src={logo} alt="yogability-logo" />
        <NavLink className="saved-asanas-btn">Saved Asanas</NavLink>
      </nav>
    </>
  );
};

export default NavBar