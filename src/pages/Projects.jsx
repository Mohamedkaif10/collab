import { useState } from "react";
import Book_img from "../assets/Book.png"
import "../styles/projects.css"
const Projects=()=>{
    const [activeButton, setActiveButton] = useState(null);
    const [showCAF, setShowCAF] = useState(true); 
  // Function to handle button click and change the active button
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    // Check if the 'AP' button was clicked and hide/show CAF accordingly
    if (buttonName === "AP") {
      setShowCAF(false);
    } else {
      setShowCAF(true);
    }
  };
    return(
        <>
        <div className="main_div">
            <p>Helo prof Raj</p>
             <div className="first_boxes">
             <button
        className={activeButton === 'Projects' ? 'active' : ''}
        onClick={() => handleButtonClick("Projects")}
      >
        Projects
      </button>
      <button
        className={activeButton === 'AP' ? 'active' : ''}
        onClick={() => handleButtonClick("AP")}
      >
        AP
      </button>
      <button
        className={activeButton === 'SavedAP' ? 'active' : ''}
        onClick={() => handleButtonClick("SavedAP")}
      >
        Saved AP
      </button>
             </div>
             {showCAF ? (
                <>
  <div>
    <div className="CAF">
      <span><img src={Book_img} alt="Book" /></span>
      <p>Create New Positions</p>
      <button className="CAF_Button">Create a form</button>
    </div>
    <div className="subBox">
      <div className="head_subBox">
        <p>Positions</p>
        <div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <table>
        <tr className="heading_table">
          <th>Position</th>
          <th>Project Title</th>
          <th>Start Date</th>
          <th>End date</th>
          <th>Vacancy</th>
          <th>Share</th>
          <th>Action</th>
        </tr>
        <tr>
          <td colSpan="7" className="line"><hr className="linehr" /></td>
        </tr>
        <tr className="row_table">
          <td>srf</td>
          <td>Real time dynamic risk</td>
          <td>22/04/2022</td>
          <td>28/04/2022</td>
          <td>5g</td>
          <td>Share</td>
          <td>^</td>
        </tr>
      </table>
    </div>
  </div>
   <div className="pagination">
   <a href="#">&laquo;</a>
   <a href="#">1</a>
   <a href="#">2</a>
   <a href="#">3</a>
   <a href="#">4</a>
   <a href="#">5</a>
   <a href="#">6</a>
   <a href="#">&raquo;</a>
</div>
</>
) : (
    <>
  <div>
   <p>Real time dynamic Risk Envelope or smart and safe mobile applications</p>
   <div>
    <button>All</button>
    <button>Shortlisted</button>
    <button>Selected</button>
    </div>
    <div>
        <div className="filters">
            <p>Filters</p>
            <p>Department</p>
           <input type="radio" id="any" name="dept" value="any" />
            <label for="any">HTML</label><br />
            <input type="radio" id="mtech"  name="dept" value="mtech" />
            <label for="mtech">HTML</label><br />
            <input type="radio" id="btech" name="dept" value="btech" />
            <label for="btech">HTML</label><br />
            <input type="radio" id="phd" name="dept" value="phd" />
            <label for="phd">HTML</label><br />
            <p>Date of posting</p>
            <input type="radio" id="alltime" name="DOP" value="alltime" />
            <label for="alltime">HTML</label><br />
            <input type="radio" id="last24hrs" name="DOP" value="last24hrs" />
            <label for="last24hrs">HTML</label><br />
            <input type="radio" id="last3days" name="DOP" value="last3days" />
            <label for="last3days">HTML</label><br />
            <input type="radio" id="last7days" name="DOP" value="last7days" />
            <label for="last7days">HTML</label><br />
            <p>Work Experience</p>
            <input type="radio" id="anyexp" name="experience"  value="anyexp" />
            <label for="anyexp">Any experience</label><br />
            <input type="radio" id="one2three" name="experience" value="one2three" />
            <label for="one2three">1-3 years</label><br />
            <input type="radio" id="three2six" name="experience" value="three2six" />
            <label for="three2six">3-6 years</label><br/>
            <p>Skills</p>
            <input type="checkbox" id="python" />
           <label for="python">Python</label><br/>
           <input type="checkbox" id="coding" />
           <label for="coding">coding</label><br/>
           <input type="checkbox" id="resh" />
           <label for="resh">Rresearch</label><br/>
           <p>CGPA</p>
           <input type="range" min="1" max="100" ></input>
        </div>
        <div className="applicants">
            <p>3177 Applicants</p>
            <div>sort by</div>
            <table>
        <tr className="sub_heading_table">
          <th>SN</th>
          <th>Name</th>
          <th>Institute</th>
          <th>Branch</th>
          <th>CGPA</th>
          <th>Experience</th>
          <th>Relecvancy</th>
          <th>Status</th>
        </tr>
        <tr>
          <td colSpan="7" className="line"><hr className="linehr" /></td>
        </tr>
        <tr className="sub_heading_row_table">
          <td>srf</td>
          <td>Real time dynamic risk</td>
          <td>22/04/2022</td>
          <td>28/04/2022</td>
          <td>5g</td>
          <td>Share</td>
          <td>^</td>
          <td>Shortlisted</td>
        </tr>
      </table>
        </div>
    </div>
  </div>
   <div className="pagination">
   <a href="#">&laquo;</a>
   <a href="#">1</a>
   <a href="#">2</a>
   <a href="#">3</a>
   <a href="#">4</a>
   <a href="#">5</a>
   <a href="#">6</a>
   <a href="#">&raquo;</a>
</div>
</>
)}
             
            </div>
             
           
        </>
    )
}
export default Projects