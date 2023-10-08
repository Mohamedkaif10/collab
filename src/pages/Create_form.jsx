import "../styles/Create_form.css"
import Book_img from "../assets/Book.png"
import { useState ,useRef} from "react";
import Modal from "../components/Modal";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const Create_form=()=>{
       
       const [isModalOpen, setIsModalOpen] = useState(false);
       const navigate=useNavigate()
              
              const openModal = () => {setIsModalOpen(true); };
            
              
              const closeModal = () => {
                     setIsModalOpen(false)
                     navigate("/projects") 
              };
            
              const handleSubmit = (event) => {
                     event.preventDefault();
                     openModal();
              };
              // Get all the remove buttons by class name
const removeButtons = document.querySelectorAll('.remove-button');

// Add a click event listener to each remove button
removeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the parent div (container) of the clicked button
    const container = button.parentElement.parentElement;

    // Remove the container from the DOM
    container.remove();
  });
});

            
    return(
           <>      
        <form>
        <div className="create_form">
            
            <p className="Heading_CF"> <span><img src={Book_img}/></span>Create Form</p>
            <p className="SbHeading_CF">Add or remove required fields belowto create a project form</p>
          <div className="details_1">
                <p>Personal Details</p>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                          <button className="remove-button">Remove</button>
                       </div>
                       <div classname="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                       
                        <button className="remove-button">Remove</button>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                        <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                        <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                        <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="add or drop">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                        <button className="remove-button">Remove</button>
                       </div>
                </div>
          </div>
          <div className="details_1">
                <p>Educational Details</p>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="pg Institute">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="Year of Passing">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="Specilisation">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="pg_percentage">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Ug_institute">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Year of Passing">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="add or drop">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Ug_institute">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Year of Passing">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="add or drop">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Ug_institute">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Year of Passing">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="add or drop">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                </div>
          </div>
          <div className="details_1">
                <p>Work Experience</p>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="pg Institute">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="Year of Passing">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="Specilisation">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="pg_percentage">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Ug_institute">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Year of Passing">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="add or drop">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                </div>
          </div>
          <div className="details_1">
                <p>Work Experience</p>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="pg Institute">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="Year of Passing">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="Specilisation">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="pg_percentage">
                        <input className="input_stuff" placeholder="name">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                </div>
          </div>
          <div className="Buttons_flex">
            <button className="Reset_button">Reset</button>
            <button className="Submit_button" onClick={handleSubmit}>Submit</button>
          </div>
          {isModalOpen && <Modal closeModal={closeModal} />}
          </div>
          
        </form>
        </>
    )
}
export default Create_form