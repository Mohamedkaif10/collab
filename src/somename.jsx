import { Fragment } from "react";
import { Button } from "@mui/material";
import "../styles/post_job_2.css";
import { useState } from "react";
const PostJob = () => {
    const [formData, setFormData] = useState({
        // Your form fields here
        job_title: '',
        dept_name: '',
        stipend_amount: '',
        last_date: '',
        vacancies: '',
        location: '',
        scholar_link: '',
        duration: '',
        description: '',
        pdf_document: '',
        // Add other fields as needed
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handlePdfUpload = (e) => {
        // Handle PDF upload logic if needed
        const pdfFile = e.target.files[0];
        // Add logic to handle the uploaded PDF file, e.g., send to server or store in state
        setFormData((prevData) => ({
            ...prevData,
            pdf_document: pdfFile,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();

        // Append JSON fields to FormData
        Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
            formDataObj.append('pdf', formData.pdf_document);
        });

        // Append PDF file to FormData
        try {
            const token = localStorage.getItem('authToken');
            console.log(token)
            const response = await fetch('http://localhost:8002/api/job-details', {
                method: 'POST',
                headers: { Authorization: token },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to submit the form. Please try again.');
            }

            // If the response is okay, you can proceed with the next steps or redirect to another page
        } catch (error) {
            console.error('Error submitting the form:', error);
            // Display an error message to the user or perform other error handling actions
        }
    };
    return (
        <Fragment>
            <div className="job_div">
                <h2>Post a Job</h2>
                <h5>Follow these simple steps to post your job and connect with top talent</h5>

                {/* Header */}
                <div className="post_job_header">
                    <div className="header_jbdetails">Job Details</div>
                    <div className="header_jbdetails">Confirmation</div>
                </div>

                <form>
                    {/* Grid */}
                    <div className="grid_container">
                        <div className="grid_item">
                            <p>Job Title</p>
                            <input
                                type="text"
                                placeholder="Enter Job Title"
                                name="job_title"
                                value={formData.job_title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid_item">
                            <p>Department Name</p>
                            <input
                                type="text"
                                placeholder="Enter Department Name"
                                name="dept_name"
                                value={formData.dept_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid_item">
                            <p>Stipend Amount</p>
                            <input
                                type="number"
                                placeholder="Enter Stipend Amount"
                                name="stipend_amount"
                                value={formData.stipend_amount}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid_item">
                            <p>Stipend Amount</p>
                            <input
                                type="text"
                                placeholder="Enter Stipend Amount"
                                name="last_date"
                                value={formData.last_date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid_item">
                            <p>Stipend Amount</p>
                            <input
                                type="text"
                                placeholder="Enter Stipend Amount"
                                name="vacancies"
                                value={formData.vacancies}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid_item">
                            <p>Stipend Amount</p>
                            <input
                                type="text"
                                placeholder="Enter Stipend Amount"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid_item">
                            <p>Stipend Amount</p>
                            <input
                                type="text"
                                placeholder="Enter Stipend Amount"
                                name="scholar_link"
                                value={formData.scholar_link}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid_item">
                            <p>Stipend Amount</p>
                            <input
                                type="text"
                                placeholder="Enter Stipend Amount"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid_item">
                            <p>Stipend Amount</p>
                            <input
                                type="text"
                                placeholder="Enter Stipend Amount"
                                name=" description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>


                    <div className="item_post_job_desc">
                        <p>Advertisement Document (PDF)</p>
                        <input
                            type="file"
                            accept=".pdf"
                            name="pdf"
                            onChange={handlePdfUpload}
                        />
                    </div>


                    <div className="buttons_container">
                        <Button>Clear</Button>
                        <Button onClick={handleSubmit}>Next</Button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default PostJob;
