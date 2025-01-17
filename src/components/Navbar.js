import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-darK bg-success">
        <Link className="navbar-brand fs-1 fst-italic" to="/">
          Food App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                Login <span className="sr-only"></span>
              </Link>
            </li>
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
