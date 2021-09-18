import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <span className="navbar-brand h1" href="#">
          Spacestagram
        </span>
        <p>Brought to you by NASA's APOD Api</p>
      </div>
    </nav>
  );
}

export default NavBar;
