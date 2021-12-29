import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Hr_Dashboard = () => {
  return (
    <div id="hr_dash">
      <Header />
      <div className="container">
        <div class="table-responsive">
          <table class="table no-wrap user-table mb-0">
            <thead class="table-light">
              <tr>
                <th scope="col" class="border-0 font-weight-medium ps-4">
                  Shortlist Candidate
                </th>
                <th scope="col" class="border-0 font-weight-medium">
                  Recorded Video
                </th>
                <th scope="col" class="border-0 font-weight-medium">
                  Selected
                </th>
                <th scope="col" class="border-0 font-weight-medium">
                  Rejected
                </th>
                <th scope="col" class="border-0 font-weight-medium">
                  Review
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="hr-table">
                  <div class="d-flex align-items-start">
                    <img
                      src="../../assets/images/users/1.jpg"
                      class="rounded-circle"
                      width="35"
                    />
                    <div class="ms-2">
                      <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                      <span class="text-muted">HTML, JS, ReactJS</span>
                    </div>
                  </div>
                </td>
                <td class="ps-4">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowfullscreen
                    ></iframe>
                  </div>
                </td>
                <td class="hr-table">
                  <i class="far fa-3x fa-check-circle"></i>
                </td>
                <td class="hr-table">
                  <i class="far fa-3x fa-times-circle"></i>
                </td>
                <td class="hr-table">
                  <span>
                    <div class="stars">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    </div>
                  </span>
                  <div>Best Rated</div>
                </td>
              </tr>
              <tr>
                <td class="hr-table">
                  <div class="d-flex align-items-start">
                    <img
                      src="../../assets/images/users/1.jpg"
                      class="rounded-circle"
                      width="35"
                    />
                    <div class="ms-2">
                      <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                      <span class="text-muted">HTML, JS, ReactJS</span>
                    </div>
                  </div>
                </td>
                <td class="ps-4">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowfullscreen
                    ></iframe>
                  </div>
                </td>
                <td class="hr-table">
                  <i class="far fa-3x fa-check-circle"></i>
                </td>
                <td class="hr-table">
                  <i class="far fa-3x fa-times-circle"></i>
                </td>
                <td class="hr-table">
                  <span>
                    <div class="stars">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    </div>
                  </span>
                  <div>Best Rated</div>
                </td>
              </tr>
              <tr>
                <td class="hr-table">
                  <div class="d-flex align-items-start">
                    <img
                      src="../../assets/images/users/1.jpg"
                      class="rounded-circle"
                      width="35"
                    />
                    <div class="ms-2">
                      <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                      <span class="text-muted">HTML, JS, ReactJS</span>
                    </div>
                  </div>
                </td>
                <td class="ps-4">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowfullscreen
                    ></iframe>
                  </div>
                </td>
                <td class="hr-table">
                  <i class="far fa-3x fa-check-circle"></i>
                </td>
                <td class="hr-table">
                  <i class="far fa-3x fa-times-circle"></i>
                </td>
                <td class="hr-table">
                  <span>
                    <div class="stars">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    </div>
                  </span>
                  <div>Best Rated</div>
                </td>
              </tr>
              <tr>
                <td class="hr-table">
                  <div class="d-flex align-items-start">
                    <img
                      src="../../assets/images/users/1.jpg"
                      class="rounded-circle"
                      width="35"
                    />
                    <div class="ms-2">
                      <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                      <span class="text-muted">HTML, JS, ReactJS</span>
                    </div>
                  </div>
                </td>
                <td class="ps-4">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowfullscreen
                    ></iframe>
                  </div>
                </td>
                <td class="hr-table">
                  <i class="far fa-3x fa-check-circle"></i>
                </td>
                <td class="hr-table">
                  <i class="far fa-3x fa-times-circle"></i>
                </td>
                <td class="hr-table">
                  <span>
                    <div class="stars">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    </div>
                  </span>
                  <div>Best Rated</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hr_Dashboard;
