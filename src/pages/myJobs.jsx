import { Fragment } from "react"
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Button,Box,Container} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const Myjobs =()=>{
    const [postings, setJobDetails] = useState([]);

    const fetchJobDetails = async () => {
        try {
          const response = await axios.get('http://localhost:8002/api/job_details/user');
          setJobDetails(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching job details', error);
        }
      };
    
      useEffect(() => {
        fetchJobDetails();
      }, []);
    
      const handleApplyClick = (pdfId) => {
        const folderUrl = 'https://drive.google.com/';
        const pdfUrl = `${folderUrl}/file/d/${pdfId}/view`;
        window.open(pdfUrl, '_blank');
      };
    
      const handleDeleteClick = async (jobId) => {
        try {
          await axios.delete(`http://localhost:8002/api/job/${jobId}`);
          fetchJobDetails();
        } catch (error) {
          console.error('Error deleting job', error);
        }
      };
   
    return (
        <Fragment>
 <Container sx={{
         maxHeight: '90vh',
         overflowY: 'auto',
      }}>
      {postings && (
      <div>
        
        {postings.map(posting => (
         <Box
         key={posting.job_id}
         className="postings-box"
         sx={{
           backgroundColor: '#f5f5f5',
           borderRadius: '8px',
           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
           padding: '16px',
           marginBottom: '16px',
           textAlign: 'left',
           display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
           '& p': {
             marginBottom: '8px',
           },
           '& Button': {
             marginTop: '16px'
           },
         }}
       >
            <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p className='job_title'> {posting.job_title}</p>
              
               <DeleteIcon onClick={() => handleDeleteClick(posting.job_id)}/>

              </Box>

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <p>Created at {new Date(posting.created_at).toLocaleDateString()}</p>
            <span style={{ margin: '5px' }}>|</span>
            <p>{posting.vacancies} vacancies</p>
           <span style={{ margin: '5px' }}>|</span>
          <p>Apply Before: {new Date(posting.last_date).toLocaleDateString()}</p>
          </div>
           
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
  <li>Location: {posting.location}</li>
  <li>Stipend Amount: {posting.stipend_amount}</li>
  <li>Department: {posting.department_name}</li>
</ul>
           
            <p>Scholar Link: {posting.scholar_link}</p>
            <p>{posting.description}</p>
            {/* <p>Duration: {posting.duration} months</p> */}

            
        <hr></hr>
       
           
        <Button onClick={() => handleApplyClick(posting.pdf_id)} variant="contained" style={{ alignSelf: 'flex-end', backgroundColor: '#FFC20E', color: '#253D90', }}>Apply</Button>
          </Box>
        ))}
      </div>
    )}
    </Container>
     
        </Fragment>
    )
}
export default Myjobs