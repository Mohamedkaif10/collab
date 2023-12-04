import "../styles/Create_form.css"
import Book_img from "../assets/Book.png"
import { useState ,useRef} from "react";
import Modal from "../components/Modal";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Modal6 from "../components/Modal6";
import Modal7 from "../components/Modal7";
import Modal8 from "../components/Modal8";
const Create_form=()=>{
       
       const [isModalOpen, setIsModalOpen] = useState(false);
       const [isModalOpen6, setIsModalOpen6] = useState(false);
       const [isModalOpen7, setIsModalOpen7] = useState(false);
       const [isModalOpen8, setIsModalOpen8] = useState(false);
       const [divCount, setDivCount] = useState(1);
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

              const openModal6 = () => {setIsModalOpen6(true); };
            
              
              const closeModal6 = () => {
                     setIsModalOpen6(false)
                    
              };
            
              const handleSubmit6 = (event) => {
                     event.preventDefault();
                     openModal6();
              };
             
              const openModal7 = () => {setIsModalOpen7(true); };
            
              
              const closeModal7 = () => {
                     setIsModalOpen7(false)
                    
              };
            
              const handleSubmit7 = (event) => {
                     event.preventDefault();
                     openModal7();
              };
             

              const openModal8 = () => {setIsModalOpen8(true); };
            
              
              const closeModal8 = () => {
                     setIsModalOpen8(false)
                    
              };
            
              const handleSubmit8 = (event) => {
                     event.preventDefault();
                     openModal8();
              };
              const addMoreDiv = () => {
                     setDivCount((prevCount) => prevCount + 1); 
                   };
             
const removeButtons = document.querySelectorAll('.remove-button');

removeButtons.forEach((container) => {
     container.remove();

});

            
    return(
           <>      
        <form>
        <div className="create_form">
            
            <p className="Heading_CF">Create Form</p>
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
                        <input className="input_stuff" placeholder="Date of Birth">
                        </input>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Martial Status">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                         <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Gender">
                        </input>
                        <button className="remove-button">Remove</button>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Address">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                        <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Email Id">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                        <button className="remove-button">Remove</button>
                       </div>
                       <div className="inner_box_1">
                        <input className="input_stuff" placeholder="Contact">
                        </input>
                        <RemoveCircleOutlineIcon className="removeicon"/>
                        <button className="remove-button">Remove</button>
                       </div>
                       <button onClick={handleSubmit6} className="add_remove_button">
                        + Add More
                       </button>
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
                       <button onClick={handleSubmit7} className="add_remove_button">
                        + Add More
                       </button>
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
                       <button onClick={handleSubmit8} className="add_remove_button">
                        + Add More
                       </button>
                       </div>
          </div>
          <div className="Buttons_flex">
            <button className="Reset_button">Reset</button>
            <button className="Submit_button" onClick={handleSubmit}>Submit</button>
          </div>
          {isModalOpen && <Modal closeModal={closeModal} />}
          {isModalOpen6 && <Modal6 closeModal6={closeModal6} />}
          {isModalOpen7 && <Modal7 closeModal7={closeModal7} />}
          {isModalOpen8 && <Modal8 closeModal8={closeModal8} />}
          </div>
          
        </form>
        </>
    )
}
export default Create_form;