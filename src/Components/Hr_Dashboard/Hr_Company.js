import React from "react";
import { Link } from "react-router-dom";

const Hr_Company = () => {
  return (
    <div id="hr_company">
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <form class="form-horizontal row">
                {/* <div class="form-group col-md-12">
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
                </div> */}
                <div class="form-group col-md-12">
                  <label>Company name</label>
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Enter Company name"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label> Company Location</label>
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Enter Company Location"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Company Website</label>
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Enter Company Website"
                  />
                </div>
                <div class="mb-3">
                  <label for="verification" class="form-label">
                  Company Supporting Letter(for verification)
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    multiple
                  />
                </div>
                <div className="next-button">
                <Link to="/hr_requirment"> <button type="submit" class="btn btn-default">
                    Next
                  </button></Link> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hr_Company;
