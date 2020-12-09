import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/about">
        <h3>About</h3>
      </Link>
    </nav>
  );
}

export default Nav;
