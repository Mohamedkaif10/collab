import "../styles/Modaltwo.css";
import { useState } from "react";

const Modal_2 = ({ addFormData, closeModal }) => {
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
    // Create a new form data object
    const newFormData = {
      ...formData,
    };

    // Call the addFormData function from the parent component
    addFormData(newFormData);

    // Clear the form
    setFormData({
      position: "",
      projectTitle: "",
      startDate: "",
      endDate: "",
      vacancy: "",
    });

    // Close the modal
    closeModal();
  };

  return (
    <>
      <form className="formmodal">
        <div className="main_modal">
          <p>Create New Form</p>
          <div className="modal_div_overall">
            <div className="modal_div_under">
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
            <p>Dates</p>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            ></input>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            ></input>
          </div>
          <button className="somebutton" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Modal_2;



