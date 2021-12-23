import React from "react";
// import hrImage from '../../Assets/hr.png';
// import interviewerImage from '../../Assets/interviewer.png';
import candidateImage from "../../Assets/candidate.png";

function Services() {
  return (
    <div id="services">
      <div className="container">
        <div className="content">
          <h2>Our Services</h2>
          <p className="text-center">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
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
