import React from "react";
import "./Navbar.css"; 
import Logo from "../Logo/Logo";
import Feedback from "../Feedback/Feedback";
import Searchbox from "../Searchbox/Searchbox";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo"><Logo /></div>
      <div className="searchBox"><Searchbox /></div>
      <div className="feedback"><Feedback /></div>
    </nav>
  );
}

export default Navbar;