import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import avatar from "../../images/logo.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../assets/css/style.css";
import { fetchUserData } from "../../_actions/user_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faBars} />;
export default function Board() {
  const [display, setDisplay] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    dispatch(fetchUserData())
      .then((res) => {
        console.log(res.payload);
        setUser(res.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="wrapper d-flex align-items-stretch">
      <nav id="sidebar" className={`${display ? "active" : ""}`}>
        <div className="p-4 pt-5">
          <img className="img logo rounded-circle mb-5" src={avatar} />
          <ul className="list-unstyled components mb-5">
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Sentiment Analysis
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <Link to="/dashboard/twitter">Twitter</Link>
                </li>
                <li>
                  <Link to="/dashboard/facebook">Facebook</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/dashboard/chart">Chart</Link>
            </li>

            <li>
              <Link to="/dashboard/namedentities">Named Entities</Link>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>

          <div className="footer"></div>
        </div>
      </nav>

      <div id="content" className="p-4 p-md-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              onClick={handleClick}
              className="btn btn-primary"
            >
              {element}
              <span className="sr-only">Toggle Menu</span>
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" aria-hidden="true">
                {element}
              </i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          {/* <div>{user ? `Hello ${user.username}` : ""}</div> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
