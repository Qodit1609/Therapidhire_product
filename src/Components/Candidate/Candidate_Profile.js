import React from "react";

const Candidate_Profile = () => {
  return (
    <div id="candidate_profile">
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <form class="form-horizontal row">
                <div class="form-group col-md-12">
                  <div class="profile-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                      alt=""
                    />
                    <div class="file btn btn-lg btn-primary">
                      Upload
                      <input type="file" name="file" />
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label>First Name</label>
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Last Name</label>
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Enter Last Name"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Email Address</label>
                  <input
                    class="form-control"
                    type="email"
                    required=""
                    placeholder="Enter Email Address"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Date of Birth</label>
                  <input
                    class="form-control"
                    type="date"
                    required=""
                    placeholder="Password"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Contact Number</label>
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Enter Mobile Name"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label for="gender">Gender</label>
                  <select class="form-control" id="gender">
                    <option>select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="form-group col-md-12">
                  <label>Parents Name</label>
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Parents Mobile Number</label>
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="upload_file" class="form-label">
                    Upload File
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="upload_file"
                    multiple
                  />
                </div>
                <div class="form-group col-md-12">
                  <label for="marital">Marital Status</label>
                  <select class="form-control" id="marital">
                    <option>select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="next-button">
                  <button type="submit" class="btn btn-default">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate_Profile;
