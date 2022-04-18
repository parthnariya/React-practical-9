import React from "react";
import signupImg from "../assets/signup.png";
import SignUpContainer from "../containers/SignUpContainer";

const Signup = () => {
  return (
    <div className="row">
      <div className="col-md-5">
        <SignUpContainer />
      </div>
      <div className="col-md-7 my-auto">
        <img className="img-fluid w-100 homeImage" src={signupImg} alt="" />
      </div>
    </div>
  );
};

export default Signup;
