import React from "react";
import "./Services.css";
// import hrImage from '../../Assets/hr.png';
// import interviewerImage from '../../Assets/interviewer.png';
import candidateImage from '../../Assets/candidate.png';


function Services() {
  return (
    <div id="services">
      <div className="container">
        <div className="content">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            impedit sed vitae, illo quisquam at facere repudiandae accusamus
            labore animi eaque corporis quos nobis ipsa nam suscipit. Natus, at!
            Repellat.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 cards">
            <div class="card shadow p-1  bg-white">
              <img src={candidateImage} class="card-img-top" alt="..." />
              <div class="card-body">
              <h3>HR</h3>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 cards">
            <div class="card shadow p-1  bg-white">
              <img src={candidateImage} class="card-img-top" alt="..." />
              <div class="card-body">
              <h3>Interviewer</h3>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 cards">
            <div class="card shadow p-1  bg-white">
              <img src={candidateImage} class="card-img-top" alt="..." />
              <div class="card-body">
                  <h3>Candidate</h3>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
