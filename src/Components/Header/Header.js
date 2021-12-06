import React from 'react'
import Logo from '../../Assets/LOGO new.png';
import './Header.css';

function Header() {
    return (
        <div id="header">
           <nav class="navbar fixed-top navbar-expand-lg navbar-light shadow p-1  bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={Logo} alt="logo"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link p-3" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" href="#">next</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" href="#"><button type="button" class="btn">Sign In</button></a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" href="#"><button type="button" class="btn">Get Started</button></a>
        </li>
      </ul>
      {/* <span class="navbar-text">
        Navbar text with an inline element
      </span> */}
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header

