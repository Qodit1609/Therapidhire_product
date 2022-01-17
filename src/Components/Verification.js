import React, { useEffect, useState } from "react";

const Verification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const json = JSON.stringify(otp);

  const verify = () => {
    // let userOTPFromAPI = '1221'
    // let otpFromUser = ''
    // otp.forEach(e => {
    //   otpFromUser+=otpFromUser+e
    // });
    // console.log('otpFromUser: ', otpFromUser)
    // if(userOTP === '')
    localStorage.setItem("otp", otp);
    console.log(otp);
  };

  return (
    <div id="verification">
      <div className="form-bg">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-4 text-center">
              <div className="row">
                <div className="col-sm-12 mt-5 bgWhite">
                  <div className="title">Verify OTP</div>
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="otp-field"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
                  <p className="text-dark">OTP Entered - {otp.join("")}</p>
                  <p>
                    <button
                      className="btn btn-secondary mr-2"
                      onClick={(e) => setOtp([...otp.map((v) => "")])}
                    >
                      Clear
                    </button>
                    &nbsp;
                    <button className="btn btn-primary" onClick={verify}>
                      Verify OTP
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
