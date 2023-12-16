import "../styles/global.css"
import 'tailwindcss/tailwind.css';
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
    <div className="flex flex-col items-center min-h-screen-90">
    <form onSubmit={handleSubmit} >
    <div className="text-blue-600 font-inter font-bold text-4xl pt-8">Login</div>
      <div className=" text-left">
        
  
        <p className="emailtext">E-mail Address</p>
        <div className="emaildiv">
          <input
            className="emailbtn"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
  
        <p className="emailtext">Password</p>
        <div className="emaildiv">
          <input
            className="emailbtn"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
  
          <p className="cursor-pointer">Reset Password?</p>
  
        <div className="signindiv">
          <button className="signinbtn" type="submit">
            Sign In
          </button>
        </div>
  
        <p className="or">or</p>

          <img className="googleimg" src={googlePic} alt="" />
      </div>
    </form>
  
    <div style={{ marginTop: 'auto', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
      <p style={{ marginRight: '5px' }}>Don&apos;t have an account yet?</p>
      <p onClick={handleButtonClick} className="cursor-pointer text-blue-800 font-bold" >Join Forsync today</p>
    </div>
  </div>
  
  );
};

export default Second;
