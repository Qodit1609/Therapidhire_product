import React, { useEffect, useState } from "react";
import Logo from "../../Assets/LOGO new.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("otp");
    if (token) {
      setIsTrue(true);
    }
  }, []);
  return (
    <div id="header">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light shadow p-1  bg-white">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item p-3">
                <NavLink exact activeClassName="active" to="#">
                  Home
                </NavLink>
              </li>
              <li class="nav-item p-3">
                <NavLink exact activeClassName="active" to="#">
                  Features
                </NavLink>
              </li>

              <li class="nav-item p-3">
                <NavLink exact activeClassName="active" to="#">
                  Contact
                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link p-3" href="#">
                  <button type="button" class="btn">
                    Sign Up
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-3" href="#">
                  <button type="button" class="btn">
                    Get Started
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

  const AdminHeader = () => {
    return (
      <div id="admin_header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light shadow p-1  bg-white">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item p-3">
                  <Link to="#">Dashboard</Link>
                </li>
                <li class="nav-item p-3">
                  <Link to="#">Profile</Link>
                </li>
              </ul>
              <div className="ms-auto">
                <li class="nav-item dropdown">
                  <a
                    class="nav-icon dropdown-toggle d-inline-block d-sm-none"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-settings align-middle"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </a>

                  <a
                    class="nav-link dropdown-toggle d-none d-sm-inline-block"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                      class="avatar img-fluid rounded-circle me-1"
                      width={40}
                      height={30}
                      alt="Admin"
                    />
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="pages-settings.html">
                      Edit Profile
                    </a>
                    <a class="dropdown-item" href="#">
                      Help
                    </a>
                    <a class="dropdown-item" href="#">
                      Sign out
                    </a>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };

  const MainHead = () => {
    return (
      <div id="header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light shadow p-1  bg-white">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item p-3">
                  <NavLink exact activeClassName="active" to="#">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item p-3">
                  <NavLink exact activeClassName="active" to="#">
                    Features
                  </NavLink>
                </li>

                <li class="nav-item p-3">
                  <NavLink exact activeClassName="active" to="#">
                    Contact
                  </NavLink>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-3" href="#">
                    <button type="button" class="btn">
                      Sign Up
                    </button>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-3" href="#">
                    <button type="button" class="btn">
                      Get Started
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  return (
  <div>{isTrue ? AdminHeader : MainHead}</div>
  );
};

export default Header;
