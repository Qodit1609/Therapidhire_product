import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import coomentbox from "../../Assets/Contact_Animations.png";
import shortlisted from "../../Assets/shortlisted.png";

const Candidate_Dashboard = () => {
  return (
    <div id="candidate_dash">
      <Header />
      <section class="interview-sloat">
        <div className="container">
          <div class="row">
            <div className="col-md-6">
              <div className="short-candidate">
                <h5>Interview Slots</h5>
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
                  <th
                    scope="col"
                    class="border-0 font-weight-medium text-light ps-4"
                  >
                    Interview Slots
                  </th>
                  <th
                    scope="col"
                    class="border-0 font-weight-medium text-light"
                  >
                    Interview History
                  </th>
                  <th
                    scope="col"
                    class="border-0 font-weight-medium text-light"
                  >
                    Interview Result
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
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
                  <td>
                    <button class="btn btn-primary">Selected</button>
                  </td>
                </tr>
                <tr>
                  <td></td>
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
                  <td>
                    <button class="btn btn-danger">Rejected</button>
                  </td>
                </tr>
                <tr>
                  <td></td>
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
                  <td>
                    <button class="btn btn-primary">Selected</button>
                  </td>
                </tr>
                <tr>
                  <td></td>
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
                  <td>
                    <button class="btn btn-danger">Rejected</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section class="schedule-interview">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="card bg-white">
                <div class="bg-white card-header">
                  <div class="align-items-center row">
                    <div class="col">
                      <h6 class="mb-0">Announcement</h6>
                    </div>
                    <div class="text-right col-auto">
                      <select class="me-2 form-select form-select-sm">
                        <option>Today 07 Jan 2022</option>
                        <option>Today 07 Jan 2022</option>
                        <option>Today 07 Jan 2022</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="container mt-3">
                  <div class="flex-fill card bg-light">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title">
                            Outing schedule for every departement
                          </h5>
                          <sapn>5 Minutes ago</sapn>
                        </div>
                        <div class="col-auto">
                          <div class="stat stat-sm">
                            <i class="fas fa-thumbtack"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-fill card bg-light mt-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title">Meeting HR Department</h5>
                          <sapn>Yesterday, 12:30 PM</sapn>
                        </div>
                        <div class="col-auto">
                          <div class="stat stat-sm">
                            <i class="fas fa-thumbtack"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-fill card bg-light mt-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title">
                            IT Department need two more talents for UX/UI
                            Designer position
                          </h5>
                          <sapn>Yesterday, 12:30 PM</sapn>
                        </div>
                        <div class="col-auto">
                          <div class="stat stat-sm">
                            <i class="fas fa-thumbtack"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-white p-0 card-footer">
                  <a
                    role="button"
                    tabindex="0"
                    href="/#!"
                    class="w-100 py-2 btn btn-link btn-sm"
                  >
                    See All Announcement
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="card bg-light">
                <div class="bg-light card-header">
                  <div class="align-items-center row">
                    <div class="col">
                      <h6 class="mb-0">Upcoming Schedule</h6>
                    </div>
                    <div class="text-right col-auto">
                      <select class="me-2 form-select form-select-sm">
                        <option>Today 07 Jan 2022</option>
                        <option>Today 07 Jan 2022</option>
                        <option>Today 07 Jan 2022</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="container mt-3 mb-3">
                  Priority
                  <div class="flex-fill card bg-light">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h6 class="card-title">
                            Review candidate applications
                          </h6>
                          <sapn>Today 11.30 AM</sapn>
                        </div>
                        <div class="col-auto">
                          <div class="stat stat-sm">
                            <i class="fas fa-thumbtack"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  Other
                  <div class="flex-fill card bg-light mt-2 ">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h6 class="card-title">Interview with candidates</h6>
                          <span>Today 10.30 AM</span>
                        </div>
                        <div class="col-auto">
                          <div class="stat stat-sm">
                            <i class="fas fa-thumbtack"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-white p-0 card-footer">
                  <a
                    role="button"
                    tabindex="0"
                    href="/#!"
                    class="w-100 py-2 btn btn-link btn-sm"
                  >
                    Creat a New Schedule
                  </a>
                </div>
              </div>
            </div>
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
                <h3>Feedback Box</h3>
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

export default Candidate_Dashboard;
