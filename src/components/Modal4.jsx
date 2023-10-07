import "../styles/Modal4.css"
import { useState } from "react"
const Modal4=({closeModal4})=>{
    const[formData,setFormData]=useState({
       date:"",
       fromTime:"",
       toTime:"",
       link:""
      })
      const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        // Check if the input field is for time (fromTime or toTime)
        if (name === "fromTime" || name === "toTime") {
          // Split the time string (e.g., "10:30") into hours and minutes
          const [hours, minutes] = value.split(":");
          
          // Format the time string with the required format "HH:mm:ss.SSS"
          const formattedTime = `${hours}:${minutes}:00.000`;
          
          // Update the state with the formatted time
          setFormData((prevData) => ({
            ...prevData,
            [name]: formattedTime,
          }));
        } else {
          // For other fields (e.g., date), update the state as usual
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
           
        const handleSubmit =(event) => {
          event.preventDefault();
          const requestData = {
             
                 date: formData.date,
                 fromTime: formData.fromTime,
                 toTime:formData.toTime,
                 link:formData.link
             
            };
            fetch("http://127.0.0.1:8000/prof/schedule", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          })
          .then((response) => {
            if (response.status === 401) {
              alert('Invalid Credentials');
              return;
            } else if (response.status === 200) {
              return response.json();
            } else {
              console.error('Error:', response.status, response.statusText);
            }
          })
            .then((data) => {
              console.log("Response:", data);
              setFormData({
                date:"",
                fromTime:"",
                toTime:"",
                link:""
                  });
                 
            })
            closeModal4();
         
      }
    
      

    return(
        <>
        <div className="modal4"> 
       
            <div className="main_modal_4">
            <button className="close_btn_modal" onClick={closeModal4}>Close</button>
                <p>Schedule Interview</p>
                <div>
                    <input type="date" name="date" onChange={handleInputChange} value={formData.date}/>
                </div>
                <div className="time_input">
  <p>from</p>
  <input type="time" name="fromTime" onChange={handleInputChange} value={formData.fromTime} />
  <br />
  <p>to</p>
  <input type="time" name="toTime" onChange={handleInputChange} value={formData.toTime} />
</div>
                <div className="input_div">
                <input placeholder="Meet link" className="link_input" name="link" onChange={handleInputChange} value={formData.link}/>
                </div>
                <br/>
            <button className="schedule_button" onClick={handleSubmit}>Schedule</button>
            </div>
          
        </div>
        </>
    )
}
export default Modal4;