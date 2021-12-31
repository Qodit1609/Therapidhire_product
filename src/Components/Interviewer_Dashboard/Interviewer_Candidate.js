import React from "react";

const Interviewer_Candidate = () => {
  return (
    <div id="interviewer_candidate">
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <form class="form-horizontal row">
                <div class="form-group col-md-12">
                  <label for="gender">Technology</label>
                  <select class="form-control" id="ctc">
                    <option>select</option>
                    <option>MERN</option>
                    <option>MEAN</option>
                    <option>JAVA</option>
                  </select>
                </div>

                <div class="form-group col-md-12">
                  <label for="gender">
                    Experienced/Fresher
                  </label>
                  <select class="form-control" id="ctc">
                    <option>select</option>
                    <option>fresher</option>
                    <option>Experienced</option>
                    <option>Intern</option>
                  </select>
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

export default Interviewer_Candidate;
