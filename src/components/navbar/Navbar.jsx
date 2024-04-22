import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import AboutUs from "../AboutUs";
import Packages from "../Packages";
import Doctor from "../Doctor";
import ContactUs from "../ContactUs";
import Service from "../Service";
import { TbSearch } from "react-icons/tb";
import calendar from "../../assets/calendar.png";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <input
        checked={openMenu}
        type="checkbox"
        name=""
        id="check"
        onChange={() => {
          setOpenMenu(!openMenu);
        }}
      />
      <div className="navContainer">
        <Link to="/">
          {" "}
          <img src={logo} className="logo" />
        </Link>
        <div className={openMenu?"nav-btn check":"nav-btn"}>
          <AboutUs />
          <Service />
          <Packages />
          <Doctor />
          <ContactUs />
        </div>
        <div className="search_date">
          <div className="search">
            <TbSearch />
            <input style={{ outline: "none", border: "none" }} />
          </div>
          <Link to="/appointments">
            <img src={calendar} style={{ width: "2rem" }} />
          </Link>
        </div>
      </div>
      <div className="hamburger-menu-container">
        <div className="hamburger-menu">
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;