import React from "react";
import "../styles/global.css"
import 'tailwindcss/tailwind.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Welcomeprofpage = () => {
    const navigate=useNavigate()
const [formData,setFormData]=useState({
    prof_dept:"",
  prof_Specilisation: "",
  prof_RIA:""
})
const handleInputChange=(e)=>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
 
}
const handleSubmit =(event) => {
    event.preventDefault();
    const requestData = {
       
            prof_dept: formData. prof_dept,
            prof_Specilisation: formData.prof_Specilisation,
            prof_RIA: formData.prof_RIA,
       
      };
      fetch("http://127.0.0.1:8000/prof/prof_profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
    .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
       
       
        setFormData({
            prof_dept:"",
            prof_Specilisation: "",
            prof_RIA:""
            });
            navigate("/projects")
      })
      
   
}
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex">
      <span className="w-2/5 lefty">
        <div className="main_div3">
          <div className="collab_plat">
            Collaboration <tr />
            Platform
          </div>
          <div className="whiteline"></div>
          <div className="text-7">Find new Projects easily.</div>
        </div>
      </span>
      <span className="w-3/5">
        <div className="maindiv1 pt-10">
          <div className="wel_pro">Welcome Prof.</div>
          <div className="regacc">Complete your Profile</div>
          <div className="flex pb-5">
            <span className="pr-5">
              <div className="title">Select your Department</div>
              <div>
                <input
                  className="textbox2"
                  type="text"
                  name="prof_dept"
                  id="prof_dept"
                  value={formData.prof_dept}
                  onChange={handleInputChange}
                />
              </div>
            </span>
          </div>
          <div className="flex pb-5">
            <span className="pr-5">
              <div className="title">Add Specilisation</div>
              <div>
                <input
                  className="textbox2"
                  type="text"
                  name="prof_Specilisation"
                  id="prof_Specilisation"
                  value={formData.prof_Specilisation}
                  onChange={handleInputChange}
                />
              </div>
            </span>
          </div>
          <div className="flex">
            <span className="pr-5">
              <div className="title">Research Interest Areas</div>
              <div>
                <input
                  className="textbox2"
                  type="text"
                  name="prof_RIA"
                  id="prof_RIA"
                  value={formData.prof_RIA}
                  onChange={handleInputChange}
                />
              </div>
            </span>
          </div>
          <div className="pt-3">
            <div className="createaccdiv">
              <button className="createacc" type="submit">Proceed</button>
            </div>
          </div>
        </div>
      </span>
    </div>
    </form>
  );
};

export default Welcomeprofpage;
