import React from "react";

const Verification = () => {
  return (
    <div id="verification">
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <form class="form-horizontal row">
                <h2>Enter the verification code</h2>
                <div class="d-flex flex-row mt-5">
                  <input type="text" class="form-control" autofocus="" /> &nbsp;
                  <input type="text" class="form-control" /> &nbsp;
                  <input type="text" class="form-control" /> &nbsp;
                  <input type="text" class="form-control" /> &nbsp;
                  <input type="text" class="form-control" /> &nbsp;
                  <input type="text" class="form-control" />
                </div>
                <div className="next-button pt-5">
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

export default Verification;
