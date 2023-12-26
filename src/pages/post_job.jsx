import { Fragment } from "react";
import { Button } from "@mui/material";
import "../styles/post_job_2.css";
import { TextField, Typography ,Grid} from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {  IconButton } from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import UploadIcon from '@mui/icons-material/Upload';
import { useNavigate } from "react-router-dom";
const PostJob = () => {
  const [formData, setFormData] = useState({
    // Your form fields here
   job_title: '',
    dept_name: '',
    stipend_amount:'',
    last_date: null,
    vacancies:'',
    location:'',
    scholar_link:'',
    duration:'',
    description:'',
    pdf: null,
    institute:''
    // Add other fields as needed
  });
  const navigate= useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDateChange = (date) => {
    console.log('Selected Date:', date); 
    setFormData((prevData) => ({
      ...prevData,
      last_date: date || null,
    }));
  };
  const handlePdfUpload = (e) => {
    // Handle PDF upload logic if needed
    const pdfFile = e.target.files[0];
    // Add logic to handle the uploaded PDF file, e.g., send to server or store in state
    setFormData((prevData) => ({
      ...prevData,
      pdf: pdfFile,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const token = localStorage.getItem('authToken');
      console.log(token)
      const formDataObject = new FormData();
      formDataObject.append('dept_name', formData.dept_name);
      formDataObject.append('job_title', formData.job_title);
      formDataObject.append('stipend_amount', formData.stipend_amount);
      formDataObject.append('last_date', formData.last_date);
      formDataObject.append('vacancies', formData.vacancies);
      formDataObject.append('location', formData.location);
      formDataObject.append('scholar_link',formData.scholar_link);
      formDataObject.append('duration', formData.duration);
      formDataObject.append('description', formData.description);
      formDataObject.append('pdf', formData.pdf);
      formDataObject.append('institute', formData.institute);
      const response = await fetch('https://for-sky-backend.vercel.app/api/job-details', {
        method: 'POST',
        // headers: { Authorization: token },
        body: formDataObject,
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit the form. Please try again.');
      }
     navigate('/temp-payment')
      // If the response is okay, you can proceed with the next steps or redirect to another page
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Display an error message to the user or perform other error handling actions
    }
  };
  return (
    <Fragment>
      <div className="job_div">
        <Typography sx={{color:'#253D90',fontSize:'2rem',fontWeight:'600'}}>Post a Job</Typography>
        <Typography sx={{color:'#636161',}}>Follow these simple steps to post your job and connect with top talent</Typography>

        {/* Header */}
        <form>
        {/* Grid */}
        {/* <div className="grid_container"> */}
        {/* <div className="grid_item">
        <Typography variant="body1" sx={{ marginRight: "80%" }}>Job Title</Typography>
            <TextField
              type="text"
              placeholder="Enter Job Title"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
              sx={{ margin: "0 120px 10px 0", width: "300px"}}
            />
          </div>
          <div className="grid_item">
            <Typography sx={{color:'#253D90'}}>Department Name</Typography>
            <TextField
              type="text"
              placeholder="Enter Department Name"
              name="dept_name"
              value={formData.dept_name}
              onChange={handleChange}
              sx={{ margin: "0 20px 10px 0", width: "300px"}}
            />
          </div>
          <div className="grid_item">
            <Typography sx={{color:'#253D90'}}>Stipend Amount</Typography>
            <TextField
              type="text"
              placeholder="Enter Stipend Amount"
              name="stipend_amount"
              value={formData.stipend_amount}
              onChange={handleChange}
              sx={{ margin: "0 20px 10px 0", width: "300px"}}
            />
          </div>
          <div className="grid_item">
            <Typography sx={{color:'#253D90'}}>Last date</Typography>
            <TextField
              type="text"
              placeholder="enter last date"
              name="last_date"
              value={formData.last_date}
              onChange={handleChange}
              sx={{ margin: "0 20px 10px 0", width: "300px"}}
            />
          </div>
          <div className="grid_item">
            <Typography sx={{color:'#253D90'}}>vacancies</Typography>
            <TextField
              type="text"
              placeholder="Enter vacancies"
              name="vacancies"
              value={formData.vacancies}
              onChange={handleChange}
              sx={{ margin: "0 20px 10px 0", width: "300px"}}
            />
          </div>
          <div className="grid_item">
            <Typography sx={{color:'#253D90'}}>Location</Typography>
            <TextField
              type="text"
              placeholder="Enter Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              sx={{ margin: "0 20px 10px 0", width: "300px"}}

            />
          </div>
          <div className="grid_item">
            <Typography sx={{color:'#253D90'}}>Scholar link</Typography>
            <TextField
              type="text"
              placeholder="Enter Scholar Link"
              name="scholar_link"
              value={formData.scholar_link}
              onChange={handleChange}
              sx={{ margin: "0 20px 10px 0", width: "300px"}}
            />
          </div>
          <div className="grid_item">
            <Typography sx={{color:'#253D90'}}>Duration</Typography>
            <TextField
              type="text"
              placeholder="Enter Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              sx={{ margin: "0 20px 10px 0", width: "300px"}}
            />
          </div>
          <div className="grid_item">
            <Typography sx={{color:'#253D90'}}>Description</Typography>
            <TextField
              type="text"
              placeholder="Enter Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              sx={{ margin: "0 20px 100px 0", width: "300px"}}
            />
          </div>

        </div> */}
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <Typography sx={{color:'#253D90'}}>Job Title</Typography>
              <TextField
                type="text"
                placeholder="Enter Job Title"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{color:'#253D90'}}>Department Name</Typography>
              <TextField
                type="text"
                placeholder="Enter Department Name"
                name="dept_name"
                value={formData.dept_name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{color:'#253D90'}}>Stipend Amount</Typography>
              <TextField
                type="text"
                placeholder="Enter Stipend Amount"
                name="stipend_amount"
                value={formData.stipend_amount}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
  <Typography sx={{ color: '#253D90' }}>Last date</Typography>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker
        label="Basic date picker"
        value={formData.last_date}
        onChange={handleDateChange}
        sx={{ width: '100%', marginTop: '8px' }} // Adjust the width and other styles as needed
      />
    </DemoContainer>
  </LocalizationProvider>
</Grid>
           

            <Grid item xs={4}>
              <Typography sx={{color:'#253D90'}}>vacancies</Typography>
              <TextField
                type="text"
                placeholder="Enter vacancies"
                name="vacancies"
                value={formData.vacancies}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{color:'#253D90'}}>Location</Typography>
              <TextField
                type="text"
                placeholder="Enter Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{color:'#253D90'}}>Scholar link</Typography>
              <TextField
                type="text"
                placeholder="Enter Scholar Link"
                name="scholar_link"
                value={formData.scholar_link}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{color:'#253D90'}}>Duration</Typography>
              <TextField
                type="text"
                placeholder="Enter Duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{color:'#253D90'}}>Description</Typography>
              <TextField
                type="text"
                placeholder="Enter Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{color:'#253D90'}}>Institute/Company name</Typography>
              <TextField
                type="text"
                placeholder="Enter Institute"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
         
        <div className="flex flex-col items-center">
          <div className="item_post_job_desc">
  <p>Advertisement Document (PDF)</p>
  <input
    type="file"
    id="fileInput"
    accept=".pdf"
    name="pdf"
    style={{ display: 'none' }} 
    onChange={handlePdfUpload}
  />
  <label htmlFor="fileInput">
    <UploadIcon position="end" fontSize="large">
      <IconButton component="span">
        <AttachFile />
      </IconButton>
    </UploadIcon>
  </label>
</div>
</div>

  
        <div className="buttons_container">
          <Button>Clear</Button>
          <Button variant="contained" onClick={handleSubmit} sx={{background:'#FFC20E',color:'#253D90',width:'10%'}}>Next</Button>
        </div>
        </form>
      </div>
    </Fragment>
  );
};

export default PostJob;
