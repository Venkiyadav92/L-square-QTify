import React from "react";
import "./Navbar.css"; 
import Logo from "../Logo/Logo";
import Feedback from "../Feedback/Feedback";
import SearchBox from "../SearchBox/SearchBox";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo"><Logo /></div>
      <div className="searchBox"><SearchBox /></div>
      <div className="feedback"><Feedback /></div>
    </nav>
  );
}

export default Navbar;