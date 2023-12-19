import "../styles/global.css"
import 'tailwindcss/tailwind.css';
import navBarImg from "../assets/navbarBrand.png"
import firstLogo from "../assets/firstlogo.png"
const Reset_page = () => {
  return (
    <div className="flex">
      <span className="w-3/5">
        <img className=" pt-8 procollabpic" src={navBarImg} alt="" />
        <div className="main_div">
          <div className="forgot_password_title">Verification</div>
          <div className="text4">
            Enter your 4 digits code that you received on your email.
          </div>
          <div className="pin_span pt-5">
            <input className="pin_digits" type="number" name="" id="" />
            <input className="pin_digits" type="number" name="" id="" />
            <input className="pin_digits" type="number" name="" id="" />
            <input className="pin_digits" type="number" name="" id="" />
          </div>
          <div className="pt-3"></div>
          <div className="continuediv">
            <button className="continue">Verify</button>
          </div>
          <div className="didnt_recieve_code">
            If you didn’t receive a code! <span className="resend">Resend</span>
          </div>
        </div>
      </span>
      <span className="w-2/5 right-side">
        <img className="sideimg" src={firstLogo} alt="" />
      </span>
    </div>
  );
};

export default Reset_page;
