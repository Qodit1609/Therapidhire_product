import React from "react";
import Footer from "../Footer/Footer";
import coomentbox from "../../Assets/Contact_Animations.png";
import shortlisted from "../../Assets/shortlisted.png";
import Admin_Header from "../Header/Admin_Header";
import interviwer from "../../Assets/18940.png";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const Hr_Dashboard = () => {
  const data = {
    labels: ["Today", "This Week", "Month", "Custom"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 15, 5, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // const [userType, setUserType] = useState('')

  // setUserType(localStorage.getItem('user_type'))
  const userType = localStorage.getItem("user_type");
  console.log(userType);
  return (
    <div>
      {userType && userType == "HR" ? 
      (
        <div id="hr_dash">
          <Admin_Header />
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
                    <button className="btn btn-primary">New Report</button>{" "}
                    &nbsp;
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <i class="fa fa-star"></i>{" "}
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>{" "}
                            <i class="fa fa-star"></i>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <i class="fa fa-star"></i>{" "}
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>{" "}
                            <i class="fa fa-star"></i>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <i class="fa fa-star"></i>{" "}
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>{" "}
                            <i class="fa fa-star"></i>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <i class="fa fa-star"></i>{" "}
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>{" "}
                            <i class="fa fa-star"></i>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
      ) : (userType == "candidate" ? 
      (
        <div id="candidate_dash">
          <Admin_Header />
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
                    <button className="btn btn-primary">New Report</button>{" "}
                    &nbsp;
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                            <h5 class="font-weight-medium mb-0">
                              Brad Simmons
                            </h5>
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
                              <h6 class="card-title">
                                Interview with candidates
                              </h6>
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
      ) : userType == "interviewer" ? 
      (
        <div id="interview_dash">
          <Admin_Header />
          <section>
            <div class="container">
              <div class="table-responsive">
                <table class="table no-wrap user-table mb-0">
                  <thead class="table-bg">
                    <tr>
                      <th
                        scope="col"
                        class="border-0 font-weight-medium text-white ps-4"
                      >
                        ACTIVITY
                      </th>
                      <th
                        scope="col"
                        class="border-0 font-weight-medium text-white"
                      >
                        CALENDER
                      </th>
                      <th
                        scope="col"
                        class="border-0 font-weight-medium text-white"
                      >
                        REVIEWS
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                  <img src={interviwer} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section class="weekly-bg">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h2>Weekly Report</h2>
                  <Pie class="pt-5" data={data} />
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-4 pt-5 mt-5">
                  <div class="card card-stats time-bg">
                    <div class="card-body">
                      <h3>Total Time Slot</h3>
                      <h6>NA</h6>
                    </div>
                  </div>
                  <div class="card card-stats time-bg mt-5">
                    <div class="card-body">
                      <h3>Total Interview</h3>
                      <h6>NA</h6>
                    </div>
                  </div>
                  <div class="card card-stats time-bg mt-5">
                    <div class="card-body">
                      <h3>Rejected</h3>
                      <h6>NA</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      ): (<div>No Dashboard
      </div>))}
    </div>
  );
};

export default Hr_Dashboard;
