import "../styles/Create_form.css"
import Book_img from "../assets/Book.png"
const Create_form=()=>{
    return(
        <>
        <div className="create_form">
            
            <p className="Heading_CF"> <span><img src={Book_img}/></span>Create Form</p>
            <p className="SbHeading_CF">Add or remove required fields belowto create a project form</p>
          <div className="details_1">
                <p>Personal Details</p>
                <div className="details_1_box">
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
          </div>
          <div className="details_1">
                <p>Educational Details</p>
                <div className="details_1_box">
                       <div classname="inner_box_1">
                        <input placeholder="pg Institute">
                        </input>
                       </div>
                       <div classname="Year of Passing">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="Specilisation">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="pg_percentage">
                        <input placeholder="name">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div classname="inner_box_1">
                        <input placeholder="Ug_institute">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="Year of Passing">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div classname="inner_box_1">
                        <input placeholder="Ug_institute">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="Year of Passing">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div classname="inner_box_1">
                        <input placeholder="Ug_institute">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="Year of Passing">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
          </div>
          <div className="details_1">
                <p>Work Experience</p>
                <div className="details_1_box">
                       <div classname="inner_box_1">
                        <input placeholder="pg Institute">
                        </input>
                       </div>
                       <div classname="Year of Passing">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="Specilisation">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="pg_percentage">
                        <input placeholder="name">
                        </input>
                       </div>
                </div>
                <div className="details_1_box">
                       <div classname="inner_box_1">
                        <input placeholder="Ug_institute">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="Year of Passing">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="inner_box_1">
                        <input placeholder="add or drop">
                        </input>
                       </div>
                </div>
          </div>
          <div className="details_1">
                <p>Work Experience</p>
                <div className="details_1_box">
                       <div classname="inner_box_1">
                        <input placeholder="pg Institute">
                        </input>
                       </div>
                       <div classname="Year of Passing">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="Specilisation">
                        <input placeholder="name">
                        </input>
                       </div>
                       <div classname="pg_percentage">
                        <input placeholder="name">
                        </input>
                       </div>
                </div>
          </div>
          <div className="Buttons_flex">
            <button className="Reset_button">Reset</button>
            <button className="Submit_button">Submit</button>
          </div>
          </div>
        </>
    )
}
export default Create_form