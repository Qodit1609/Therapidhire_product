import React from "react";
import Google from "../../Assets/google-logo.png";


const Log = () => {
  return (
    <div id="log">
      <div class="registration-form">
        <form>
          <h2>Login</h2>
          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Username
            </label>
            <div class="input-group">
              <input
                type="email"
                class="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-block create-account">
              Get OTP
            </button>
          </div>
          <div class="or-container">
            <div class="line-separator"></div>
            <div class="or-label">OR</div>
            <div class="line-separator"></div>
          </div>
          <div class="row">
            <div class="col-md-12 google">
              <a class="btn shadow p-3" href="#">
                <img src={Google} alt="google logo" /> &nbsp; Login With Google
              </a>
              <div className="sign-up">
                 <h5>Don’t have an account?  <a href="#">Signup</a>  </h5> 
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Log;
