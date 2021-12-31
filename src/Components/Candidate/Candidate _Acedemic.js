import React from "react";

const Candidate_Acedemic = () => {
  return (
    <div id="candidate_acedemic">
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <form class="form-horizontal row">
              <div class="mb-3">
                  <label for="upload_file" class="form-label">
                  CV/Resume
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="upload_file"
                    multiple
                  />
                </div>
                <div class="mb-3">
                  <label for="upload_file" class="form-label">
                  10th Marksheet
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="upload_file"
                    multiple
                  />
                </div>
                <div class="mb-3">
                  <label for="upload_file" class="form-label">
                  12th Marksheet
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="upload_file"
                    multiple
                  />
                </div>
                <div class="mb-3">
                  <label for="upload_file" class="form-label">
                  Graducation Marksheet
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="upload_file"
                    multiple
                  />
                </div>
                <div class="mb-3">
                  <label for="upload_file" class="form-label">
                  PG Marksheet
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="upload_file"
                    multiple
                  />
                </div>
                <div class="mb-3">
                  <label for="upload_file" class="form-label">
                  Any Certification
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="upload_file"
                    multiple
                  />
                </div>
                <div class="form-group col-md-12">
                  <label for="gender">
                  Intrested Job Field
                  </label>
                  <select class="form-control" id="ctc">
                    <option>select</option>
                    <option>IT</option>
                    <option>Electronic</option>
                    <option>Account</option>
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

export default Candidate_Acedemic;
