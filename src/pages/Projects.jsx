import { useState,useEffect } from "react";
import Book_img from "../assets/Book.png"
import "../styles/projects.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal_2 from "../components/Modal_2"
import {useLocation} from "react-router-dom"
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Projects=()=>{
  const {search} = useLocation()
  const queryParams = new URLSearchParams(search);
  const full_name=queryParams.get('full_name')
  console.log(full_name,queryParams.get('full_name'))
  console.log("hello")
  const searchParams = new URLSearchParams(location.search);
  const formData = {}; 
  const navigate=useNavigate() 

   const sonme=searchParams.get('full_name')
   console.log(sonme)
   const[modalData,setModalData]=useState(null)
    const [activeButton, setActiveButton] = useState(null);
    const [showCAF, setShowCAF] = useState(true); 
    const[activeButton2,setActiveButton2]=useState(null);
    const [showSelected, setShowSelected] = useState(false);
    const [showSaved, setShowSaved] = useState(false);
    const [showAll, setShowAll] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState('');
    // const [formDataArray, setFormDataArray] = useState([]);
    const [applicantsData, setApplicantsData] = useState([
      { name: "Applicant 1", institute: "IIT", discipline: "Btech", experience: 2, cgpa: 8 },
      { name: "Applicant 2", institute: "NIT", discipline: "Mtech", experience: 1, cgpa: 7 },
      // Add more data here
    ]);
    const [filteredApplicants, setFilteredApplicants] = useState([...applicantsData]);
    const [entries, setEntries] = useState([]); 
    const openModal = () => {setIsModalOpen(true); };
    const closeModal = () => {setIsModalOpen(false); };
    const handleSubmit = () => {openModal();};
    // const applyFilters = () => {
    //   const filtered = applicantsData.filter((applicant) => {
    //     const { institute, discipline, publications, cgpa } = filters;
  
       
    //     return (
    //       (institute.all || (institute.iit && applicant.institute === "IIT") || (institute.nit && applicant.institute === "NIT")) &&
    //       (discipline.all || (discipline.Btech && applicant.discipline === "Btech") || (discipline.Mtech && applicant.discipline === "Mtech")) &&
    //       (publications.all || (publications.anyexp && applicant.experience >= 0 && applicant.experience <= 1) || (publications.one2three && applicant.experience >= 1 && applicant.experience <= 3)) &&
    //       applicant.cgpa >= cgpa
    //     );
    //   });
  
    //   setFilteredApplicants(filtered);
    // };
    const [filters, setFilters] = useState({
      institute: {
        all: true,
        iit: false,
        nit: false,
        iiit: false,
      },
      discipline: {
        Btech: true,
        Mtech: false,
        PHD: false,
      },
      publications: {
        all: true,
        anyexp: false,
        one2three: false,
        three2six: false,
      },
      cgpa: 5, 
    });
    // for (const [key, value] of searchParams.entries()) {
    //   formData[key] = value;
    // }  
    //   const addFormData = (formData) => {
    //     setFormDataArray([...formDataArray, formData]);
    //   };
    console.log("this is ",applicantsData)
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
  const handleModalData = (data) => {
    setModalData(data);
    closeModal(); 
    setEntries([...entries,data])
  };
  console.log('Data received from Modal_2:', modalData);
  console.log('Data received from Modal_2:', modalData && modalData. position);
  console.log(entries);

  useEffect(() => {
    const jsonString = localStorage.getItem("entries");
    if (jsonString) {
      const savedEntries = JSON.parse(jsonString);
      setEntries(savedEntries);
    }
  }, []);

  // Save the entries to localStorage whenever it changes
  useEffect(() => {
    const jsonString = JSON.stringify(entries);
    localStorage.setItem("entries", jsonString);
  }, [entries]);

  const applyFilters = () => {
    const filtered = applicantsData.filter((applicant) => {
      const { institute, discipline, publications, cgpa } = filters;
      
      // Check if the applicant matches the selected filters
      return (
        (institute.all || (institute.iit && applicant.institute === "IIT") || (institute.nit && applicant.institute === "NIT")) &&
        (discipline.all || (discipline.Btech && applicant.discipline === "Btech") || (discipline.Mtech && applicant.discipline === "Mtech")) &&
        (publications.all || (publications.anyexp && applicant.experience >= 0 && applicant.experience <= 1) || (publications.one2three && applicant.experience >= 1 && applicant.experience <= 3)) &&
        applicant.cgpa >= cgpa
      );
    });
  
    setFilteredApplicants(filtered);
  };


  const handleFilterChange = (filterCategory, filterName) => {
    console.log("Before filter change:", filters);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterCategory]: {
        ...prevFilters[filterCategory],
        [filterName]: !prevFilters[filterCategory][filterName],
      },
    }));
  };
  console.log("after filter change:", filters);
  // Apply filters whenever the filters state changes
  useEffect(() => {
    const filtered = applicantsData.filter((applicant) => {
      const { institute, discipline, publications, cgpa } = filters;
  
      return (
        (institute.all || (institute.iit && applicant.institute === "IIT") || (institute.nit && applicant.institute === "NIT")) &&
        (discipline.all || (discipline.Btech && applicant.discipline === "Btech") || (discipline.Mtech && applicant.discipline === "Mtech")) &&
        (publications.all || (publications.anyexp && applicant.experience >= 0 && applicant.experience <= 1) || (publications.one2three && applicant.experience >= 1 && applicant.experience <= 3)) &&
        applicant.cgpa >= cgpa
      );
    });
  
    setFilteredApplicants(filtered);
  }, [filters]);



  const handleSortChange = (option) => {
    setSelectedSortOption(option);
  
    // Create a copy of the filtered applicants array
    const sortedApplicants = [...filteredApplicants];
  
    switch (option) {
      case 'A-Z':
        // Sort by name in ascending order
        sortedApplicants.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Desc CGPA':
        // Sort by CGPA in descending order
        sortedApplicants.sort((a, b) => b.cgpa - a.cgpa);
        break;
      case 'Asc CGPA':
        // Sort by CGPA in ascending order
        sortedApplicants.sort((a, b) => a.cgpa - b.cgpa);
        break;
      case 'Experience':
        // Sort by experience in descending order
        sortedApplicants.sort((a, b) => b.experience - a.experience);
        break;
      default:
        // Default to the original order
        break;
    }
  
    // Update the state with the sorted applicants
    setFilteredApplicants(sortedApplicants);
  };
  
const navigatePage=()=>{
  navigate("/create_form")
}



console.log("the filters are",filteredApplicants)
    return(
        <>
        <Navbar/>
        <div className="main_div">
            <p>Helo prof {sonme}</p>
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
      {isModalOpen && <Modal_2 closeModal={closeModal} onModalData={handleModalData} />}
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
        {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.position}</td>
                <td>{entry.projectTitle}</td>
                <td>{entry.startDate}</td>
                <td>{entry.endDate}</td>
                <td>{entry.vacancy}</td>
                <td>Share</td>
                <td >^</td>
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
            
            <input
                  type="checkbox"
                  id="all"
                  checked={filters.institute.all}
                  onChange={() => handleFilterChange("institute", "all")}
                   />
           <label for="all">All</label><br/>
           <input 
                type="checkbox" 
                id="iit"
                checked={filters.institute.iit}
                onChange={() => handleFilterChange("institute", "iit")}
            />
           <label for="iit">IIT</label><br/>
           <input type="checkbox" id="nit" checked={filters.institute.nit}  onChange={() => handleFilterChange("institute", "nit")}/>
           <label for="nit">NIT</label><br/>
           <input type="checkbox" id="iiit" checked={filters.institute.iiit}  onChange={() => handleFilterChange("institute", "iiit")}/>
           <label for="iiit">IIIT</label><br/>
        
            <p className="headfilter">Discipline</p>
            <input type="checkbox" id="Btech" checked={filters.discipline.Btech} onChange={() => handleFilterChange("discipline", "Btech")}/>
            <label for="Btech">Btech</label><br/>
           <input type="checkbox" id="Mtech" checked={filters.discipline.Mtech} onChange={() => handleFilterChange("discipline", "Mtech")}/>
           <label for="Mtech">Mtech</label><br/>
           <input type="checkbox" id="PHD" checked={filters.discipline.PHD} onChange={() => handleFilterChange("discipline", "PHD")}/>
           <label for="PHD">PHD</label><br/>

            <p className="headfilter">Publications</p>
            <input type="radio" id="anyexp" name="experience" checked={filters.publications.anyexp}  value="anyexp" onChange={() => handleFilterChange("publications", "anyexp")}/>
            <label for="anyexp">0-1</label><br />
            <input type="radio" id="one2three" name="experience"  checked={filters.publications.one2three}  value="one2three" onChange={() => handleFilterChange("publications", "one2three")}/>
            <label for="one2three">1-3 years</label><br />
            <input type="radio" id="three2six" name="experience"  checked={filters.publications.three2six}  value="three2six" onChange={() => handleFilterChange("publications", "three2six")}/>
            <label for="three2six">3&above</label><br/>
          
           <p className="headfilter">CGPA</p>
           <input type="range" min="1" max="100"  checked={filters.cgpa} onChange={() => handleFilterChange("cgpa")} ></input>
        </div>
        {showAll &&  <div className="applicants">
            <div className="div_under_App">
            <p className="noofapp">All Applicants</p>
            <div className="right_eelements">
            <input placeholder="Search"></input>
            <form action="#">
    <select name="sort" id="sort" >
        <option value="" disabled selected hidden>Sort by</option>
        <option value="A-Z">A-Z</option>
        <option value="Desc CGPA">Desc CGPA</option>
        <option value="Asc CGPA">Asc CGPA</option>
        <option value="Experience">Experience</option>
    </select>
</form>
</div>
            </div>
            <div className="the_two_buttons">
                <button>Shortlist</button>
                <button>Copy Link</button>
                </div>
            <table className="table_2">
            <thead>
        <tr className="sub_heading_table">
       
          <th>SN</th>
          <th>Name</th>
          <th>Institute</th>
          <th>Program</th>
          <th>CGPA</th>
          <th>Publications</th>
          <th>Relecvancy %</th>
        </tr>
        </thead>
        <tbody>
        {filteredApplicants.map((applicant, index) => (
           <tr key={index}>
              <td>{index + 1}</td>
              <td>{applicant.name}</td>
              <td>{applicant.institute}</td>
              <td>{applicant.discipline}</td>
              <td>{applicant.experience}</td>
              <td>{applicant.cgpa}</td>
              <td>83%</td>
             </tr>
           
          ))}
         </tbody>
      </table>
        </div>}
        {showSelected && <div className="applicants">
            <div className="div_under_App">
            <p className="noofapp">All Applicants</p>
            <input placeholder="Search"></input>
            <form action="#">
    <select name="sort" id="sort"  value={selectedSortOption}
    onChange={(e) => handleSortChange(e.target.value)}>
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
          <td style={{width: "80px", cursor:"pointer"}} >^</td>
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
             
           <Footer/> 
        </>
    )
}
export default Projects