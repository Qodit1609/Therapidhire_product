import React from "react";
import SignUp from "../../Assets/singup.png";
import Google from "../../Assets/google-logo.png";

const Signup = () => {
  return (
    <div id="signup">
      <div className="container">
        <h2 className="heading">SIGNUP FORM</h2>
        <div className="row">
          <div className="col-md-6">
            <img src={SignUp} className="img-fluid sign-img" alt="signup" />
          </div>
          <div className="col-md-6">
            <div class="form-group pt-2 pb-4">
              <label className="pb-2">Your Firstname*</label>
              <input
                type="text"
                class="form-control shadow p-3 bg-white rounded"
                id="name"
                placeholder="Enter Firstname"
                label="name"
              />
            </div>
            <div class="form-group pb-4">
              <label className="pb-2">Your LastName*</label>
              <input
                type="text"
                class="form-control shadow p-3  bg-white rounded"
                id="name"
                placeholder="Enter LastName"
                label="name"
              />
            </div>
            <div class="form-group pb-4">
              <label className="pb-2">Email Address*</label>
              <input
                type="text"
                class="form-control shadow p-3  bg-white rounded"
                id="name"
                placeholder="Enter email address"
                label="name"
              />
            </div>
            <div class="form-group pb-4">
              <label className="pb-2">Contact Number*</label>
              <input
                type="text"
                class="form-control shadow p-3  bg-white rounded"
                id="name"
                placeholder="Enter Contact Number"
                label="name"
              />
            </div>
            <div class="form-group pb-4">
              <label className="pb-2">DOB*</label>
              <input
                type="date"
                class="form-control shadow p-3 bg-white rounded"
                id="name"
                placeholder="Name"
                label="name"
              />
            </div>
            <div class="form-group">
              <label className="pb-2">Role*</label>
              <select class="form-control shadow p-3" id="role">
                <option disabled selected value></option>
                <option>HR</option>
                <option>Interviewer</option>
                <option>Candidate</option>
              </select>
            </div>

            <div class="form-group form-check pt-4">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                I agree to terms & condition
              </label>
            </div>
            <div class="form-group pt-4">
              <button type="submit" class="btn btn-primary w-100">
                Signup Account
              </button>
            </div>

            <div class="or-container">
              <div class="line-separator"></div>
              <div class="or-label">or</div>
              <div class="line-separator"></div>
            </div>
            <div class="row">
              <div class="col-md-12 google">
                {" "}
                <a class="btn shadow p-3" href="#">
                  <img src={Google} alt="google logo" /> Signup Using Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
