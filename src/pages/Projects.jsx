import { useState,useEffect } from "react";
import Book_img from "../assets/Book.png"
import "../styles/projects.css"
import { useNavigate } from "react-router-dom";
import Modal_2 from "../components/Modal_2"
import {useLocation} from "react-router-dom"
const Projects=()=>{
    const [activeButton, setActiveButton] = useState(null);
    const [showCAF, setShowCAF] = useState(true); 
    const[activeButton2,setActiveButton2]=useState(null);
    const [showSelected, setShowSelected] = useState(false);
    const [showSaved, setShowSaved] = useState(false);
    const [showAll, setShowAll] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
   
    const [position, setPosition] = useState(queryParams.get("position") || "");
    const [projectTitle, setProjectTitle] = useState(queryParams.get("projectTitle") || "");
    const [startDate, setStartDate] = useState(queryParams.get("startDate") || "");
    const [endDate, setEndDate] = useState(queryParams.get("endDate") || "");
    const [vacancy, setVacancy] = useState(queryParams.get("vacancy") || "");
    const [formDataArray, setFormDataArray] = useState([]);
    const openModal = () => {setIsModalOpen(true); };
    const closeModal = () => {setIsModalOpen(false); };
    const handleSubmit = () => {openModal();};
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        console.log("started")
        setPosition(queryParams.get("position") || "");
        setProjectTitle(queryParams.get("projectTitle") || "");
        setStartDate(queryParams.get("startDate") || "");
        setEndDate(queryParams.get("endDate") || "");
        setVacancy(queryParams.get("vacancy") || "");
      }, [location.search]);
      const addFormData = (formData) => {
        setFormDataArray([...formDataArray, formData]);
      };
    
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    if (buttonName === "AP") {
        setShowCAF(false);
      } else {
        setShowCAF(true);
      }
  };
  const handleButtonClick2 = (buttonName) => {
    setActiveButton2(buttonName);
    if (buttonName === "Shortlisted") {
        setShowSelected(true);
        setShowSaved(false);
        setShowAll(false);
      } else if (buttonName === 'Selected') {
        setShowSaved(true);
        setShowSelected(false);
        setShowAll(false);
      } else if (buttonName === "All") {
        setShowAll(true);
        setShowSelected(false);
        setShowSaved(false);
      }

  };
 
  useEffect(() => {
    console.log("FormDataArray updated:", formDataArray);
  }, [formDataArray]);
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
                
        <div className="upper_div">
    <div className="CAF">
      <span><img src={Book_img} alt="Book" /></span>
      <p>Create New Positions</p>
      <button className="CAF_Button" onClick={handleSubmit}>Create a form</button>
      {isModalOpen && <Modal_2 closeModal={closeModal} addFormData={addFormData} />}
    </div>
    <div className="subBox">
      <div className="head_subBox">
        <p>Positions</p>
        <div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <table className="table_1">
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
        {formDataArray.map((formData, index) => (
                  <tr key={index}>
                    <td>{formData.position}</td>
                    <td>{formData.projectTitle}</td>
                    <td>{formData.startDate}</td>
                    <td>{formData.endDate}</td>
                    <td>{formData.vacancy}</td>
                    <td>Share</td>
                    <td>^</td>
                  </tr>
                ))}
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
{/* <Modal_2  closeModal={closeModal} addFormData={addFormData} /> */}

</>

) : (
    <>
  <div className="App_div">
   <p>Real time dynamic Risk Envelope or smart and safe mobile applications</p>
   <div className="App_button_div">
    <button 
     className={activeButton2 === 'All' ? 'active' : ''}
     onClick={() => handleButtonClick2('All')}>All</button>
    <button
     className={activeButton2 === 'Shortlisted' ? 'active' : ''}
     onClick={() => handleButtonClick2('Shortlisted')}>Shortlisted</button>
    <button
   className={activeButton2 === 'Selected' ? 'active' : ''}
   onClick={() => handleButtonClick2('Selected')}>Selected</button>
    </div>
    <div className="filterProdiv">
        <div className="filters">
            <p className="filterhead">Filters</p>
            <p className="headfilter">Institute</p>
            <input type="checkbox" id="all" />
           <label for="all">All</label><br/>
           <input type="checkbox" id="iit" />
           <label for="iit">IIT</label><br/>
           <input type="checkbox" id="nit" />
           <label for="nit">NIT</label><br/>
           <input type="checkbox" id="iiit" />
           <label for="iiit">IIIT</label><br/>
        
            <p className="headfilter">Discipline</p>
            <input type="checkbox" id="Btech" />
            <label for="Btech">Btech</label><br/>
           <input type="checkbox" id="Mtech" />
           <label for="Mtech">Mtech</label><br/>
           <input type="checkbox" id="PHD" />
           <label for="PHD">PHD</label><br/>

            <p className="headfilter">Publications</p>
            <input type="radio" id="anyexp" name="experience"  value="anyexp" />
            <label for="anyexp">0-1</label><br />
            <input type="radio" id="one2three" name="experience" value="one2three" />
            <label for="one2three">1-3 years</label><br />
            <input type="radio" id="three2six" name="experience" value="three2six" />
            <label for="three2six">3&above</label><br/>
          
           <p className="headfilter">CGPA</p>
           <input type="range" min="1" max="100" ></input>
        </div>
        {showAll &&  <div className="applicants">
            <div className="div_under_App">
            <p className="noofapp">All Applicants</p>
            <input placeholder="Search"></input>
            <form action="#">
    <select name="sort" id="sort">
        <option value="" disabled selected hidden>Sort by</option>
        <option value="A-Z">A-Z</option>
        <option value="Desc CGPA">Desc CGPA</option>
        <option value="Asc CGPA">Asc CGPA</option>
        <option value="Experience">Experience</option>
    </select>
</form>
            </div>
            <div className="the_two_buttons">
                <button>Shortlist</button>
                <button>Copy Link</button>
                </div>
            <table className="table_2">
        <tr className="sub_heading_table">
          <th>SN</th>
          <th>Name</th>
          <th>Institute</th>
          <th>Program</th>
          <th>CGPA</th>
          <th>Publications</th>
          <th>Relecvancy</th>
        </tr>
        <tr>
          {/* <td colSpan="8" className="linetwo"><hr className="linehrtwo" /></td> */}
        </tr>
        <tr className="sub_heading_row_table">
          <td>srf</td>
          <td>Real time dynamic risk</td>
          <td>22/04/2022</td>
          <td>28/04/2022</td>
          <td>5g</td>
          <td>Share</td>
          <td>^</td>
        </tr>
      </table>
        </div>}
        {showSelected && <div className="applicants">
            <div className="div_under_App">
            <p className="noofapp">All Applicants</p>
            <input placeholder="Search"></input>
            <form action="#">
    <select name="sort" id="sort">
        <option value="" disabled selected hidden>Sort by</option>
        <option value="A-Z">A-Z</option>
        <option value="Desc CGPA">Desc CGPA</option>
        <option value="Asc CGPA">Asc CGPA</option>
        <option value="Experience">Experience</option>
    </select>
</form>
            </div>
            <div className="the_two_buttons">
                <button>Remove</button>
                </div>
            <table className="table_2">
        <tr className="sub_heading_table">
        <th>Select</th>
          <th>Name</th>
          <th>Institute</th>
          <th>Program</th>
          <th>CGPA</th>
          <th>Publications</th>
          <th>Relecvancy</th>
        </tr>
        <tr>
          {/* <td colSpan="8" className="linetwo"><hr className="linehrtwo" /></td> */}
        </tr>
        <tr className="sub_heading_row_table">
        <td>srf</td>
          <td>Real time dynamic risk</td>
          <td>22/04/2022</td>
          <td>28/04/2022</td>
          <td>5g</td>
          <td>Share</td>
          <td>^</td>
          <td><button>?</button></td>
        </tr>
      </table >
        </div>
        } {showSaved && <div className="applicants">
            <p className="noofapp">3177 Applicants</p>
            <div>sort by</div>
            <table className="table_2">
        <tr className="sub_heading_table">
          <th>SN</th>
          <th>Name</th>
          <th>Institute</th>
          <th>Branch</th>
          <th>CGPA</th>
          <th>Experience</th>
          <th>Relavancy</th>
          <th>Status</th>
        </tr>
        <tr>
          {/* <td colSpan="8" className="linetwo"><hr className="linehrtwo" /></td> */}
        </tr>
        <tr className="sub_heading_row_table">
          <td>srf</td>
          <td>selected</td>
          <td>22/04/2022</td>
          <td>28/04/2022</td>
          <td>5g</td>
          <td>Share</td>
          <td style={{width: "80px"}}>^</td>
          <td style={{width: "80px"}}>Shortlisted</td>
        </tr>
      </table>
        </div>}
        
       
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