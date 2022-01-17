import React from "react";

const Hr_Requirments = () => {
  return (
    <div id="hr_req">
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
                  <label>Intrested field</label>
                  <input
                    class="form-control"
                    type="text"
                    required=""
                    placeholder="Enter Company name"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label for="technology">Technology</label>
                  <select class="form-control" id="technology">
                    <option>select technology</option>
                    <option>MERN</option>
                    <option>MEAN</option>
                    <option>PHP</option>
                  </select>
                </div>
                <div class="form-group col-md-12">
                  <label for="work">Work Expierance</label>
                  <select class="form-control" id="work">
                    <option>select work experiance</option>
                    <option>Fresher</option>
                    <option>Expeiranced</option>
                  </select>
                </div>
                <div class="form-group col-md-12">
                  <label for="location">Location</label>
                  <select class="form-control" id="location">
                    <option>select location</option>
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Pune</option>
                  </select>
                </div>
                <div class="form-group">
                  <textarea placeholder="comments"
                    class="form-control"
                    id="exampleFormControlTextarea5"
                    rows="10"
                  ></textarea>
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

export default Hr_Requirments;
