import React from "react";
import "../styles/global.css"
import 'tailwindcss/tailwind.css';
import navBarImg from "../assets/navbarBrand.png"
import firstLogo from "../assets/firstlogo.png"
import uploadImg from "../assets/upload.png"
const Successful_pass_reset = () => {
  return (
    <div className="flex">
      <span className="w-3/5">
        <img className=" pt-8 procollabpic" src={navBarImg} alt="" />
        <div className="main_div">
          <div className="main_div2">
            <div className="uploadimgdiv">
              <img className="uploadimg" src={uploadImg} alt="" />
            </div>
            <div className="Successfully flex justify-center">Successfully</div>
            <div className="text-6 flex justify-center">
              Your password has been reset successfully
            </div>
            <div className="continuediv flex justify-center pt-3">
              <button className="continue">Login</button>
            </div>
          </div>
        </div>
      </span>
      <span className="w-2/5 right-side">
        <img className="sideimg" src={firstLogo} alt="" />
      </span>
    </div>
  );
};

export default Successful_pass_reset;
