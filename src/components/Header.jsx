import React from "react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Header = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: authTypes.logout });
    navigate("/login");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/men" className="nav-link" aria-current="page">
                    Men
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/women" className="nav-link" aria-current="page">
                    Women
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/search"
                    className="nav-link"
                    aria-current="page"
                  >
                    Search
                  </NavLink>
                </li>
              </ul>
              <div className="display-flex ms-auto">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
