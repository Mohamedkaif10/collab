import React from "react";
import firstLogo from "../assets/firstlogo.png"
import 'tailwindcss/tailwind.css';
import navBarImg from "../assets/navbarBrand.png"
import "../styles/global.css"
import { useNavigate } from "react-router-dom";
const First = () => {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    
    navigate('/second');
  };
  return (
    <div className="flex">
      <span className="w-3/5">
        <img className=" pt-8 procollabpic" src={navBarImg} alt="" />
        <div className="text1">
          Are you a Professor or a Student
          <tr /> looking for a Project?
        </div>
        <div className="text2">Go no further...</div>
        <div className="text3 font-bold">
          <span className="text-yell font-bold">Collaboration </span> is now
          Easy, Find your first project here!
        </div>
        <div className="pl-20 pt-12">
          <span>
          
            <button href="/secondProf" className="b1 px-16 py-3 rounded-lg clickbtn" onClick={handleButtonClick}>
               Professor
            </button>
           
          </span>
          <span className="px-4"></span>
          <span>
            <button className="b2 px-16 py-3 rounded-lg clickbtn">
              Student
            </button>
          </span>
        </div>
      </span>
      <span className="w-2/5 right-side bg-triangleback">
        <img className="sideimg" src={firstLogo} alt="" />
        <div>
          <button className="mx-3 bg-white"></button>
          <button className="px-3 bg-white"></button>
          <button className="px-3 bg-white"></button>
        </div>
      </span>
    </div>
  );
};

export default First;
