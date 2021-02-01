import React from "react";
import { Link } from "react-router-dom";
import "./Navi.css";

function Navigation() {
  return (
    <div className="navi">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
