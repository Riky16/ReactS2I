import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Back() {
  return (
    <div className="backHome">
      <Link to="/">
        <h3>⇦</h3>
      </Link>
    </div>
  );
}

export default Back;
