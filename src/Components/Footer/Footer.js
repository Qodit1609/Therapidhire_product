import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <footer class="text-center text-lg-start text-muted">
        <section class="pt-3">
          <div class="container-fluid text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 foot-head">
                <h6 class="text-uppercase fw-bold mb-4">Company name</h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 foot-head">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Interviwer
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    HR
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Candidate
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 foot-head">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Services
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Contact
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 foot-head">
                <h6 class="text-uppercase fw-bold mb-4 ">Contact</h6>

                <p class>
                  <i class="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="d-flex justify-content-center bg-white justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <div class="text-center foot-head">
              © 2021 Copyright:
              <Link class="text-reset fw-bold" to="/">
                TheRapidHire Product
              </Link>
            </div>
          </div>

          <div className="social-icon">
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
