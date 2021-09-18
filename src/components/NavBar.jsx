import React from "react";
import "./NavBar.css";
import DateSelectMenu from "./DateSelectMenu";
function NavBar(props) {
  const { dateSelection } = props;
  return (
    <nav className="navbar">
      <div>
        <span className="navbar-brand h1" href="#">
          Spacestagram
        </span>
        <p>Brought to you by NASA's Astronomy Picture of the Day (APOD) API</p>
      </div>
      <DateSelectMenu dateSelection={dateSelection} />
    </nav>
  );
}

export default NavBar;
