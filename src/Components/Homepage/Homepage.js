import React from "react";
import Login from "../Login/Login";
import "./Homepage.css";
import leftImage from "../../Assets/18940.png";
import Services from "../Services/Services";
import WhyUS from "../WhyUS/WhyUS";
import Customers from "../Customers/Customers";
import Testimonials from "../Testimonials/Testimonials";


function Homepage() {
  return (
    <div id="homepage">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-container">
                <img className="img-fluid" src={leftImage} alt="leftImage" />
          </div>
          <div className="col-md-6 form-container">
             <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  HR
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  INTERVIWER
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  CANDIDATE
                </button>
              </li>
            </ul>
           <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <Login />
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <Login />
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services/>
      <WhyUS/>
      <Customers/>
      <Testimonials/>
    </div>
  );
}

export default Homepage;
