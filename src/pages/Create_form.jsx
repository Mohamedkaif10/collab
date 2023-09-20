import "../styles/Create_form.css"
import Book_img from "../assets/Book.png"
import { useState ,useRef} from "react";
import Modal from "../components/Modal";
const Create_form=()=>{
       const [isModalOpen, setIsModalOpen] = useState(false);
       const formRef = useRef(null);
              
              const openModal = () => {setIsModalOpen(true); };
            
              
              const closeModal = () => {setIsModalOpen(false); };
            
              const handleSubmit = () => {openModal();};
             
             

              const handleReset = () => {formRef.current.reset();};
            
    return(
        <>
        <div className="create_form">
            
            <p className="Heading_CF"> <span><img src={Book_img}/></span>Create Form</p>
            <p className="SbHeading_CF">Add or remove required fields belowto create a project form</p>
          <div className="details_1">
                <p>Personal Details</p>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
          </div>
          <div className="details_1">
                <p>Educational Details</p>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input placeholder="pg Institute">
                        </input>
                       </div>
                       <div className="Year of Passing">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="Specilisation">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="pg_percentage">
                        <input placeholder="name">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input placeholder="Ug_institute">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="Year of Passing">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input placeholder="Ug_institute">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="Year of Passing">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input placeholder="Ug_institute">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="Year of Passing">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
          </div>
          <div className="details_1">
                <p>Work Experience</p>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input placeholder="pg Institute">
                        </input>
                       </div>
                       <div className="Year of Passing">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="Specilisation">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="pg_percentage">
                        <input placeholder="name">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input placeholder="Ug_institute">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="Year of Passing">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
          </div>
          <div className="details_1">
                <p>Work Experience</p>
                <div className="details_1_box">
                       <div className="inner_box_1">
                        <input placeholder="pg Institute">
                        </input>
                       </div>
                       <div className="Year of Passing">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="Specilisation">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div className="pg_percentage">
                        <input placeholder="name">
                        </input>
                       </div>
                </div>
          </div>
          <div className="Buttons_flex">
            <button className="Reset_button" onClick={handleReset}>Reset</button>
            <button className="Submit_button" onClick={handleSubmit}>Submit</button>
          </div>
          {isModalOpen && <Modal closeModal={closeModal} />}
          </div>
          
        </>
    )
}
export default Create_form