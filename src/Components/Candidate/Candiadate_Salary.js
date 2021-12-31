import React from "react";

const Candiadate_Salary = () => {
  return (
    <div id="candidate_salary">
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
                  <label for="gender">
                    Current CTC (in case of experience)
                  </label>
                  <select class="form-control" id="ctc">
                    <option>select</option>
                    <option>0-1 LAC</option>
                    <option>1-3 LAC</option>
                    <option>3-5 LAC</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="upload_file" class="form-label">
                    PAN CARD
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="upload_file"
                    multiple
                  />
                </div>
                <div class="form-group">
                  <textarea
                    placeholder="comments"
                    class="form-control"
                    id="exampleFormControlTextarea5"
                    rows="10"
                  ></textarea>
                </div>
                <div className="next-button">
                  <button type="submit" class="btn btn-default">
                    Submit
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

export default Candiadate_Salary;
