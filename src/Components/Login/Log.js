import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Google from "../../Assets/google-logo.png";
import axios from "axios";

const Log = () => {
  const [username, setUsername] = useState("apoorv@trh.com");
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [data, setData] = useState({});
  const API = "https://therapidhiredev.herokuapp.com";
  const [error, setError] = useState(null);
  const [emailError] = useState(null);
  let emailInput = React.createRef();
  let history = useHistory();

  const handleChange = (e) => {
    console.log("handleChange", e);
    let baseUrl = `${API}/api/auth/login`;
    let payload = email ;

    let loginApi =  axios
      .post(baseUrl, payload)
      .then(({ data }) => {
        setMessage(data.message);
        setData(data.data);
        setError(false);
        let pathAdmin = `/admin/dashboard`;
        let pathHR = `/hr`;
        let pathSales = `/sales`;
        if (data.roleName == "hr") {
          history.push(pathHR);
        } else if (data.roleName == "sales") {
          history.push(pathSales);
        } else if (data.roleName == "admin") {
          history.push(pathAdmin);
        } else {
        }
        localStorage.setItem("myData", data.roleName);
        window.location.reload();
      })
      .catch(function (error) {
        setError(true);
        console.log("invalid username or password");
        return Promise.reject(error);
      });
  };

  function getOTP() {
    // console.log("get OTP: ", emailInput.current.value);
    let email = emailInput.current.value;
    if (email === "apoorv@trh.com") {
      console.log("get otp response: ", "email matched successfully!");
      // return <Redirect to='/verification' />
      history.push("/verification");
    } else {
      console.log("get otp response: ", "invalid email...");
    }
  }

  return (
    <div id="log">
      <div class="registration-form">
        <form>
          <h2>Login</h2>
          <div class="col-12">
            <div class="input-group">
              <input
                type="email"
                class="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Email"
                ref={emailInput}
                value={username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-group">
            <button
              type="button"
              class="btn btn-block create-account"
              onClick={getOTP}
            >
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
                <h5>
                  Don’t have an account? <a href="/signup">Signup</a>
                </h5>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Log;
