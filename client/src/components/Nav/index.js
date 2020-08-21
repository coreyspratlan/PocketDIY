import React from "react";
import {Link} from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/members">
        Home
      </Link>
      <Link className="navbar-brand" to="/projects">
        Projects
      </Link>
    </nav>
  );
}

export default Nav;
