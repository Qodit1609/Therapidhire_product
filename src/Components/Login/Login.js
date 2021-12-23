import React from "react";
import SignUp from "../../Assets/singup.png";
import Google from "../../Assets/google-logo.png";

function Login() {
  return (
    <div id="login">
      <form class="row row-cols-xl-auto g-3 align-items-center">
        <div class="col-12">
          <label class="visually-hidden" for="inlineFormInputGroupUsername">
            Username
          </label>
          <div class="input-group">
            <div class="input-group-text">@</div>
            <input
              type="text"
              class="form-control shadow p-3  bg-white rounded"
              id="inlineFormInputGroupUsername"
              placeholder="Username"
              label="Username"
            />
          </div>
          <div class="input-group">
            <div class="input-group-text">@</div>
            <input
              type="text"
              class="form-control shadow p-3  bg-white rounded"
              id="inlineFormInputGroupPassword"
              placeholder="Password"
              label="Password"
            />
          </div>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineFormCheck"
            />
            <label class="form-check-label" for="inlineFormCheck">
              Remember me
            </label>
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn shadow p-2  rounded">
            Login
          </button>
          <h6 className="pt-3">
            I don't have an account ?
            <span class="signup ms-3">
              <a
                data-bs-toggle="modal"
                data-bs-target="#bd-example-modal-xl"
                href="#"
              >
                Signup
              </a>
            </span>
          </h6>
        </div>
        <div class="col-12 content"></div>
      </form>

      <div
        class="modal fade bd-example-modal-xl"
        id="bd-example-modal-xl"
        tabindex="-1"
        aria-labelledby="bd-example-modal-xlLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="heading">SIGNUP FORM</h2>
                  <img src={SignUp} className="img-fluid" alt="signup" />
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
                        <img src={Google} alt="google logo" /> Signup Using
                        Google
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
