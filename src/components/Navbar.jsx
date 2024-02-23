
import { NavLink } from 'react-router-dom';

import './navbar.css'
import tayoglogo from '../../src/assets/img/tayog Logo.png'
import navlogo from '../assets/img/hamburger-menu-svgrepo-com.svg'
import arrow from '../assets/img/arrow-sm-right-svgrepo-com.svg'


export default function Navbar() {

 function click() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.right = "0%"
 }

 function reverseclick() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.right = "-100%"
 }

  return (
    <>



    <div className="navbar-container">
        <div className="navbar-logo">
            <img src={tayoglogo} alt="Logo" />
        </div>

        <div className="navbar-links">
      <div className="nav-link"><NavLink to="/">Home</NavLink></div>
     
      <div className="nav-link"><NavLink to="/jobs" >Job</NavLink></div>
      <div className="nav-link"><NavLink to="/blogPage">Blogs</NavLink></div>
      <div className="nav-link"><NavLink to="/profile">Profile</NavLink></div>
    </div>

            <div className="navbar-buttons">
        <NavLink to='/post-job' >   <button className='navbar-button postjob-btn'>
                post a Job
             </button>
             </NavLink>  

          <NavLink to="/login"> <button className='navbar-button signin-btn'>
                Sign in
             </button>
             </NavLink>  
        </div>

<div className="navbar-buttons-phone">
<img src={navlogo} alt="" style={{width:'70px'}} onClick={click}/>
</div>

{/* <div className="navbar-links-phone"> */}
        
<div className="sidebar">
<NavLink to="/" onClick={reverseclick}>Home</NavLink>
     
     <NavLink to="/jobs"  onClick={reverseclick}>Job</NavLink>
     <NavLink to="/blogPage" onClick={reverseclick}>Blogs</NavLink>
    <NavLink to="/profile" onClick={reverseclick}>Profile</NavLink>
    <img src={arrow} alt="" style={{width:"60px"}} onClick={reverseclick}/>
  {/* </div> */}
  </div>
</div>
        
        </>
  )
}
