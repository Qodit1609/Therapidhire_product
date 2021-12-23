import React from "react";
import carousel1 from "../../Assets/carousel1.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  items: 4,
};

function Customers() {
  return (
    <div id="customers">
      <div className="container">
       <div className="customer-container">
        <h1>Our Customers</h1>
        <OwlCarousel className="owl-theme" loop margin={1} nav>
          <div class="item">
            <img src={carousel1} />
          </div>
          <div class="item">
            <img src={carousel1} />
          </div>
          <div class="item">
            <img src={carousel1} />
          </div>
          <div class="item">
            <img src={carousel1} />
          </div>
          <div class="item">
            <img src={carousel1} />
          </div>
        </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Customers;
