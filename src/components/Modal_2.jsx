import "../styles/Modaltwo.css";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Projects from "../pages/Projects";
import Calender from "./calender";

const Modal_2 = ({ addFormData, closeModal }) => {
  const closeIcon = ()=>{
    closeModal();
  }

  const [formData, setFormData] = useState({
    position: "",
    projectTitle: "",
    startDate: "",
    endDate: "",
    vacancy: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
   
    const newFormData = {
      ...formData,
    };

   
    addFormData(newFormData);

    
    setFormData({
      position: "",
      projectTitle: "",
      startDate: "",
      endDate: "",
      vacancy: "",
    });

   
    closeModal();
  };

  const cancelDate = (event) => {
    event.preventDefault();
    console.log(formData.startDate)
  
    // Create a new object with cleared startDate and endDate
    const updatedFormData = {
      ...formData, // Copy the existing formData
      startDate: "",
      endDate: "",
    };
  
    // Update the state with the new object
    setFormData(updatedFormData);
  };

  return (
    <>
      <form className="formmodal">
        <div className="main_modal">
          <div className="first_div">
          <p className="create_new_form">Create New Form</p>
          <div className="closeIcon1" onClick={closeModal}><CloseIcon className="closeIcongreen"/></div>
          </div>
          <div className="main_div1">
            <div className="left1">
              <p>Position</p>
              <input
                className="left"
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
              ></input>
              <p>Vacancy</p>
              <input
                className="left"
                type="number"
                name="vacancy"
                value={formData.vacancy}
                onChange={handleInputChange}
              ></input>
              <p>PI</p>
              <input className="left" type="text"></input>
              <p>Project Title</p>
              <input
                className="left"
                type="text"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="right1">
            <p>Dates</p>
            <div className="date_div">
              <div className="date_div2">start:</div>
              <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            ></input>
            </div>
            <div className="date_div">
              <div className="date_div3">end:</div>
              <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            ></input>
            </div>
            <div>
            <Calender startDate={formData.startDate} endDate={formData.endDate}/>
            </div>
            <div className="bothdiv">
              <div className="cansubdiv">
                <button className="canbtn" onClick={cancelDate}>Cancel</button>
                <button className="subbtn">Done</button>
                </div>
            </div>
            </div>
          </div>
          <div className="buttondiv1">
          <button className="somebutton" onClick={handleFormSubmit}>
            Submit
          </button>
          </div>
          
        </div>
      </form>
    </>
  );
};

export default Modal_2;



