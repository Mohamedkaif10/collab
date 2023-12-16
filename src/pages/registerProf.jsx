import { useState } from "react";
import "../styles/global.css"
import 'tailwindcss/tailwind.css';
import { useNavigate } from "react-router-dom";
const Registerprof1 = () => {
   const navigate=useNavigate()
    const[cnfrmpswrd,setCnfrmPswrd]=useState("")
    const [passwordError, setPasswordError] = useState("");
    const[formData,setFormData]=useState({
        full_name:"",
        last_name:"",
        email:"",
        phone_number:"",
        hashed_password:"",
    })

  const handleInputChange = (e) => {
        const { name, value } = e.target;
        const processedValue = name === 'phone_number' ? parseInt(value, 10) || '' : value;
        setFormData({ ...formData, [name]: processedValue });
      };
    const handleCnfrmPswrdChange = (e) => {
        const confirmPassword = e.target.value;
        setCnfrmPswrd(confirmPassword);
        
        if (formData.hashed_password !== confirmPassword) {
          setPasswordError("Passwords do not match");
        } else {
          setPasswordError("");
        }
      };
  const handleSubmit =(event) => {
    event.preventDefault();
    if (passwordError) {
        console.log("passw")
        return; 
      }
    else{
    const requestData = {
        parameter: {
          full_name: formData.full_name,
          last_name: formData.last_name,
          email: formData.email,
          phone_number: formData.phone_number,
          hashed_password: formData.hashed_password,
        },
      };
    
    fetch("http://127.0.0.1:8000/prof/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
       
        setCnfrmPswrd("")
        setFormData({
                id: "",
                full_name:"",
                last_name:"",
                email:"",
                phone_number:"",
                hashed_password:"",
            });
            navigate(`/welcome?${queryParams}`)
      })
      
    }
   
  };
  const queryParams =new URLSearchParams({full_name:formData.full_name}).toString()
 
  return (
    <form >
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
        <div className="maindiv1">
          <div className="wel_pro">Welcome to ProCollab</div>
          <div className="regacc">Register your account</div>
          <div className="flex pb-5">
            <span className="pr-5">
              <div className="title">First Name</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name="full_name"
                  id="firstName"
                  value={formData.full_name}
                  onChange={ handleInputChange}
                />
              </div>
            </span>
            <span>
              <div className="title">Last Name</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name="last_name"
                  id="lastName"
                  value={formData.last_name}
                  onChange={ handleInputChange}
                />
              </div>
            </span>
          </div>
          <div className="flex pb-5">
            <span className="pr-5">
              <div className="title">E-mail Address</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={ handleInputChange}
                />
              </div>
            </span>
            <span>
              <div className="title">Phone Number</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name="phone_number"
                  id="phone"
                  value={formData.phone_number}
                  onChange={ handleInputChange}
                />
              </div>
            </span>
          </div>
          <div className="flex">
            <span className="pr-5">
              <div className="title">Password</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name="hashed_password"
                  id="pswrd"
                  value={formData.hashed_password}
                  onChange={handleInputChange}
                />
              </div>
            </span>
            <span>
              <div className="title">Confirm Password</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name="confrm_pswrd"
                  id="confrm_pswrd"
                  value={cnfrmpswrd}
                  onChange={handleCnfrmPswrdChange}
                />
              </div>
              {passwordError && <div className="text-red-500">{passwordError}</div>}
            </span>
          </div>
          <div className="pt-8 flex ">
            <input className="checkbox1 pr-3" type="checkbox" name="" id="" />
            <div className="greytext pl-3">
              I agree to all the{" "}
              <span className="bluetext">Terms, Privacy Policy</span>
            </div>
          </div>
          <div>
            <div className="createaccdiv">
              <button onClick={handleSubmit}>Create Account</button>
            </div>
          </div>
          <div className="pt-5">
            Already have an account?{" "}
            <span className="bluetext font-semibold">Log In</span>
          </div>
        </div>
      </span>
    </div>
    </form>
  );
  }

export default Registerprof1;
