import React from "react";
import "./navBar.scss";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <img
          src="https://www.bing.com/th?id=OIP.nzqcNBda6adpBXavP_8rawHaHa&w=116&h=107&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
          alt=""
        />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active">
              Tours
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
