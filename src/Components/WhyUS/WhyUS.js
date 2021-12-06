import React from "react";
import "./WhyUS.css";
import whyUsImage from '../../Assets/whyus.jpg';


function WhyUS() {
  return (
    <div>
      <div id="why-us">
        <div className="container">
          <div className="content">
            <h1>Why Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              alias ipsam repudiandae culpa ab quidem, rem veniam ratione nisi,
              distinctio reprehenderit eos unde natus, recusandae odit eveniet!
              Suscipit, debitis exercitationem! In rem pariatur dolore unde
              reprehenderit! Impedit beatae et magnam nulla, quam, cupiditate
              maxime eos nesciunt ut expedita in corporis. Accusantium fugit
              deleniti necessitatibus voluptatum dolor odit consequatur ad sint.
              Corporis dolorum velit est consectetur modi eum et ipsam alias
              quae eligendi odio dolorem expedita, aut ad accusamus doloremque
              nobis neque ullam distinctio doloribus voluptas tempora quibusdam
              deleniti recusandae. Blanditiis.
            </p>
          </div>
          <div className="row">
          <div className="col-lg-3 col-md-4 cards">
            <div class="card shadow p-1  bg-white">
              <img src={whyUsImage} class="card-img-top" alt="..." />
              <div class="card-body">
              <h3>Client First</h3>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 cards">
            <div class="card shadow p-1  bg-white">
              <img src={whyUsImage} class="card-img-top" alt="..." />
              <div class="card-body">
              <h3>Effective Synergy</h3>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 cards">
            <div class="card shadow p-1  bg-white">
              <img src={whyUsImage} class="card-img-top" alt="..." />
              <div class="card-body">
                  <h3>On Time Delivery</h3>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 cards">
            <div class="card shadow p-1  bg-white">
              <img src={whyUsImage} class="card-img-top" alt="..." />
              <div class="card-body">
                  <h3>Strong Expertise</h3>
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
    </div>
  );
}

export default WhyUS;
