import React from "react";
import "../styles/global.css"
import 'tailwindcss/tailwind.css';
import navBarImg from "../assets/navbarBrand.png"
import firstLogo from "../assets/firstlogo.png"
const Forgot_pass = () => {
  return (
    <div className="flex">
      <span className="w-3/5">
        <img className=" pt-8 procollabpic" src={navBarImg} alt="" />
        <div className="main_div">
          <div className="forgot_password_title">Forgot Password</div>
          <div className="text4">
            Enter your registered email, we will send 4 digits code to your
            email.
          </div>
          <div className="pt-2">
            <div className="emailtext">E-mail Address</div>
            <div className="emaildiv">
              <input className="emailbtn" type="text"></input>
            </div>
          </div>
          <div className="continuediv">
            <button className="continue">Continue</button>
          </div>
        </div>
      </span>
      <span className="w-2/5 right-side">
        <img className="sideimg" src={firstLogo} alt="" />
      </span>
    </div>
  );
};

export default Forgot_pass;
