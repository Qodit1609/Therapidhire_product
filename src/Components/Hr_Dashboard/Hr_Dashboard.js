import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import coomentbox from "../../Assets/Contact_Animations.png";
import shortlisted from "../../Assets/shortlisted.png";
const Hr_Dashboard = () => {
  return (
    <div id="hr_dash">
      <Header />
      <section className="pb-5">
        <div className="container">
          <div class="row">
            <div className="col-md-6">
              <div className="short-candidate">
                <h5>Shortlist Candidate</h5>
                <p>More than 400+ new members</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="candidate-button">
                <button className="btn btn-primary">New Report</button> &nbsp;
                <button className="btn btn-danger">Create</button>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table no-wrap user-table mb-0">
              <thead class="table-bg">
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
                        src={shortlisted}
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
                        src={shortlisted}
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
                        src={shortlisted}
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
                        src={shortlisted}
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
      </section>
      <section className="selected-sec">
        <div className="container">
          <div className="recject-candi">
            <h5>Selected & Rejected Candidate</h5>
            <p>More than 400+ new members</p>
          </div>
          <div class="table-responsive">
            <table class="table no-wrap user-table mb-0">
              <thead class="table-bg">
                <tr>
                  <th scope="col" class="border-0 font-weight-medium ps-4">
                    Selected Candidate
                  </th>

                  <th scope="col" class="border-0 font-weight-medium">
                    Rejected Candidate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="hr-table">
                    <div class="d-flex align-items-start">
                      <img
                        src={shortlisted}
                        class="rounded-circle"
                        width="35"
                      />
                      <div class="ms-2">
                        <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                        <span class="text-muted">HTML, JS, ReactJS</span>
                      </div>
                    </div>
                  </td>
                  <td class="hr-table">
                    <div class="d-flex align-items-start">
                      <img
                        src={shortlisted}
                        class="rounded-circle"
                        width="35"
                      />
                      <div class="ms-2">
                        <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                        <span class="text-muted">HTML, JS, ReactJS</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="hr-table">
                    <div class="d-flex align-items-start">
                      <img
                        src={shortlisted}
                        class="rounded-circle"
                        width="35"
                      />
                      <div class="ms-2">
                        <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                        <span class="text-muted">HTML, JS, ReactJS</span>
                      </div>
                    </div>
                  </td>
                  <td class="hr-table">
                    <div class="d-flex align-items-start">
                      <img
                        src={shortlisted}
                        class="rounded-circle"
                        width="35"
                      />
                      <div class="ms-2">
                        <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                        <span class="text-muted">HTML, JS, ReactJS</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="hr-table">
                    <div class="d-flex align-items-start">
                      <img
                        src={shortlisted}
                        class="rounded-circle"
                        width="35"
                      />
                      <div class="ms-2">
                        <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                        <span class="text-muted">HTML, JS, ReactJS</span>
                      </div>
                    </div>
                  </td>
                  <td class="hr-table">
                    <div class="d-flex align-items-start">
                      <img
                        src={shortlisted}
                        class="rounded-circle"
                        width="35"
                      />
                      <div class="ms-2">
                        <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                        <span class="text-muted">HTML, JS, ReactJS</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="hr-table">
                    <div class="d-flex align-items-start">
                      <img
                        src={shortlisted}
                        class="rounded-circle"
                        width="35"
                      />
                      <div class="ms-2">
                        <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                        <span class="text-muted">HTML, JS, ReactJS</span>
                      </div>
                    </div>
                  </td>
                  <td class="hr-table">
                    <div class="d-flex align-items-start">
                      <img
                        src={shortlisted}
                        class="rounded-circle"
                        width="35"
                      />
                      <div class="ms-2">
                        <h5 class="font-weight-medium mb-0">Brad Simmons</h5>
                        <span class="text-muted">HTML, JS, ReactJS</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="pt-2 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={coomentbox} class="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="comment-box">
                <h3>Comment Box</h3>
                <div class="form-group">
                  <textarea
                    placeholder="comments"
                    class="form-control"
                    id="exampleFormControlTextarea5"
                    rows="10"
                  ></textarea>
                </div>
               <button className="btn">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hr_Dashboard;
