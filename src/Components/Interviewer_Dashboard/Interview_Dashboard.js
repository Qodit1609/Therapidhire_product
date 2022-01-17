import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import interviwer from "../../Assets/18940.png";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Interview_Dashboard = () => {
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
  return (
    <div id="interview_dash">
      <Header />
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
  );
};

export default Interview_Dashboard;
