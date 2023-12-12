import "../styles/global.css"
import 'tailwindcss/tailwind.css';
import navBarImg from "../assets/navbarBrand.png"
import firstLogo from "../assets/firstlogo.png"
import googlePic from "../assets/search.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Second = () => {
    const navigate = useNavigate();
const[formData,setFormData]=useState({
  email:"",
 password:""
})
const handleInputChange=(e)=>{
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value});

}
  const handleButtonClick = () => {
       navigate('/register');
  };
  const handleSubmit =(event) => {
    event.preventDefault();
    const requestData = {
       
            email: formData.email,
            password: formData.password
       
      };
      fetch("http://127.0.0.1:8002/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
    .then((response) => {
      console.log("Response Status:", response.status);
      if (response.status === 401) {
        alert('Invalid Credentials');
        return;
      } else if (response.status === 200) {
        return response.json();
      } else {
        console.error('Error:', response.status, response.statusText);
      }
   })
   .catch((error) => {
    console.error('Fetch Error:', error);
 })
      .then((data) => {
        console.log("Response:", data);
        
     if(data && data.token){
      localStorage.setItem('authToken', data.token);
      navigate("/");
     }else {
      console.error('Token not found in the response data');
    }
  
         setFormData({
          email:"",
          password:""
            });
           
      })
      
   
}
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex">
      <span className="w-3/5">
        <img className=" pt-8 procollabpic" src={navBarImg} alt="" />
        <div className="main_div">
          <div className="logintext">Login</div>
          <div>
            <div className="emailtext">E-mail Address</div>
            <div className="emaildiv">
              <input className="emailbtn" type="text" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}>

              </input>
            </div>
          </div>
          <div>
            <div className="emailtext">Password</div>
            <div className="emaildiv">
              <input className="emailbtn"
               type="text" 
              name="password" 
              value={formData.password} 
              onChange={handleInputChange}>
            </input>
            </div>
          </div>
          <div className="div1">
            <div className="checkboxdiv">
              <input className="checkbox" type="checkbox" name="" id="" />
            </div>
            <div className="remember">Remember Me</div>
            <div className="reset">Reset Password?</div>
          </div>
          <div className="signindiv">
            <button className="signinbtn" type="submit">
              Sign In
            </button>
          </div>
          <div>
            <div className="or">or</div>
            <div className="pt-10">
              <img className="googleimg" src={googlePic} alt="" />
            </div>
          </div>
        </div>
      </span>
      <span className="w-2/5 right-side">
        <img className="sideimg" src={firstLogo} alt="" />
      </span>
      <p  onClick={handleButtonClick} style={{color:"black"}}> join procollab today</p>
    </div>
    </form>
  );
};

export default Second;
