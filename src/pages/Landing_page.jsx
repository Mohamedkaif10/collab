import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField,Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [postings, setPostings] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    stipend_amount: '',
    department_name: '',
    job_title: '',
    // Add more filters as needed
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get('http://localhost:8002/api/get_job');
        const { success, postings } = response.data;

        if (success) {
          setPostings(postings);
        } else {
          console.error('Failed to fetch job postings');
        }
      } catch (error) {
        console.error('Error fetching job postings', error);
      }
    };

    fetchJobPostings();
  }, []);

  const isLoggedIn = !!localStorage.getItem('authToken');

  const handleJoinClick = () => {
    if (!isLoggedIn) {
      navigate('/second');
    } else {
      console.log('User is already logged in. Implement additional logic here.');
    }
  };

  const handlePostClick = () => {
    if (!isLoggedIn) {
      navigate('/second');
    } else {
      navigate('/job1');
    }
  };

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const handleApplyFilters = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8002/api/filtered-job-details?location=${filters.location}&stipend_amount=${filters.stipend_amount}&department_name=${filters.department_name}&job_title=${filters.job_title}`
      );
      const { success, jobDetails } = response.data;

      if (success) {
        setPostings(jobDetails);
      } else {
        console.error('Failed to fetch filtered job details');
      }
    } catch (error) {
      console.error('Error fetching filtered job details', error);
    }
  };
 

  return (
    <Box
    sx={{
      display: 'flex',
      height: '100vh',
      
    }}
  >
        <Box
        sx={{
          flex: '0 0 30%', // Adjust the width as needed
          backgroundColor: '#f0f0f0',
          padding: '16px',
          marginTop: '6%',
        }}
      >
        {/* Filter input fields */}
        <TextField
          label="Location"
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
        />
        <TextField
          label="Stipend Amount"
          value={filters.stipend_amount}
          onChange={(e) => handleFilterChange('stipend_amount', e.target.value)}
        />
        <TextField
          label="Department Name"
          value={filters.department_name}
          onChange={(e) => handleFilterChange('department_name', e.target.value)}
        />
        <TextField
          label="Job Title"
          value={filters.job_title}
          onChange={(e) => handleFilterChange('job_title', e.target.value)}
        />
        {/* Add more filter inputs as needed */}
        <Button onClick={handleApplyFilters}>Apply Filters</Button>
      </Box>

      <Box
        sx={{
          flex: '1',
          padding: '16px',
        }}
      >
         <Button onClick={handlePostClick}>Post a job</Button>
      <h1>Search for science jobs on ProCollab</h1>
      {postings && (
      <div >
        {/* Render job postings */}
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
           '& p': {
             marginBottom: '8px',
           },
           '& Button': {
             marginTop: '16px',
           },
         }}
       >
            <p> {posting.job_title}</p>
            <p>Department: {posting.department_name}</p>
            <p>Stipend Amount: {posting.stipend_amount}</p>
            <p>Last Date: {new Date(posting.last_date).toLocaleDateString()}</p>
            <p>Vacancies: {posting.vacancies}</p>
            <p>Location: {posting.location}</p>
            <p>Scholar Link: {posting.scholar_link}</p>
            <p>Duration: {posting.duration} months</p>
            <p>Description: {posting.description}</p>
            <Button onClick={handleJoinClick}  variant="contained">Apply</Button>
          </Box>
        ))}
      </div>
    )}
      </Box>
    </Box>
  );
};

export default LandingPage;