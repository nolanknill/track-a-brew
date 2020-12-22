import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <span className="logo">Track A Brew</span>
      <Link to="/login">Login</Link>
    </nav>
  );
}
