import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button,Box,Select,MenuItem, FormControl,InputLabel,Pagination,Container} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "../styles/landing_page.css"
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const LandingPage = () => {
  const [postings, setPostings] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    stipend_amount: '',
    department_name: '',
    job_title: '',
    // Add more filters as needed
  });
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
    pageCount: 1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobPostings();
  }, [pagination.page, filters]);
  

  const fetchJobPostings = async () => {
    try {
      const endpoint = filters.location
        ? '/filtered-job-details'
        : '/get_job';

      const response = await axios.get(
        `http://localhost:8002/api${endpoint}`,
        {
          params: {
            ...filters,
            page: pagination.page,
            pageSize: pagination.pageSize,
          },
        }
      );

      const { success, jobDetails } = response.data;

      if (success) {
        setPostings(jobDetails);
        setPagination((prevPagination) => ({
          ...prevPagination,
          pageCount: Math.ceil(jobDetails.length / pagination.pageSize),
        }));
      } else {
        console.error('Failed to fetch job postings');
      }
    } catch (error) {
      console.error('Error fetching job postings', error);
    }
  };
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
    <>
    <Navbar/>
    <Box
    sx={{
      display: 'flex',
      height: '100vh',
      
    }}
  >
        <Box
    sx={{
      flex: '0 0 30%', 
      backgroundColor: '#f0f0f0',
      padding: '16px',
      marginTop: '6%',
      display: 'flex',
      flexDirection: 'column', 
    }}
  >
    <FormControl fullWidth>
    <InputLabel id="location">Location</InputLabel>
    <Select
      labelId="location-label"
      id="location-select"
      value={filters.location}
      label="Location"
      onChange={(e) => handleFilterChange('location', e.target.value)}
      sx={{ marginBottom: '16px', width: '100%' }} // Add styles for spacing and width
    >
      <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
      <MenuItem value={'jammu and kashmir'}>Jammu and Kashmir</MenuItem>
      <MenuItem value={'hyderabad'}>Hyderabad</MenuItem>
    </Select>
    </FormControl>

    <FormControl fullWidth>
    <InputLabel id="stipend">Stipend amount</InputLabel>
    <Select
      labelId="stipend-label"
      id="stipend-select"
      value={filters.stipend_amount}
      label="Stipend Amount"
      onChange={(e) => handleFilterChange('stipend_amount', e.target.value)}
      sx={{ marginBottom: '16px', width: '100%' }} // Add styles for spacing and width
    >
      <MenuItem value={'80000'}>80000</MenuItem>
      <MenuItem value={'90000'}>90000</MenuItem>
      <MenuItem value={'34223'}>34223</MenuItem>
      <MenuItem value={'9000'}>9000</MenuItem>
    </Select>
    </FormControl>

    <FormControl fullWidth>
    <InputLabel id="department_name">Discipline</InputLabel>
    <Select
      labelId="department-label"
      id="department-select"
      value={filters.department_name}
      label="Department"
      onChange={(e) => handleFilterChange('department_name', e.target.value)}
      sx={{ marginBottom: '16px', width: '100%' }} // Add styles for spacing and width
    >
      <MenuItem value={'something'}>Something</MenuItem>
      <MenuItem value={'kaif'}>Kaif</MenuItem>
      <MenuItem value={'kf'}>KF</MenuItem>
      <MenuItem value={'somethuingas'}>somethuingas</MenuItem>
    </Select>
    </FormControl>

    <FormControl fullWidth>
    <InputLabel id="job_title">Job Title</InputLabel>
    <Select
      labelId="job-title-label"
      id="job-title-select"
      value={filters.job_title}
      label="Job Title"
      onChange={(e) => handleFilterChange('job_title', e.target.value)}
      sx={{ marginBottom: '16px', width: '100%' }} // Add styles for spacing and width
    >
      <MenuItem value={'sfhlsdfuasdlauhtile'}>sfhlsdfuasdlauhtile</MenuItem>
      <MenuItem value={'sometitile'}>sometitile</MenuItem>
      <MenuItem value={'somsfd'}>somsfd</MenuItem>
      <MenuItem value={'sometitile'}>sometitile</MenuItem>
    </Select>    
    </FormControl>    
    
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
            <p className='job_title'> {posting.job_title}</p>

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
       
            <Button onClick={handleJoinClick} variant="contained" style={{ alignSelf: 'flex-end' ,backgroundColor: '#FFC20E',color: '#253D90', }}>Apply</Button>
          </Box>
        ))}
      </div>
    )}
    </Container>
      </Box>
     
    </Box>
    <Pagination
    count={10}
    page={pagination.page}
    onChange={(event, value) =>
      setPagination((prevPagination) => ({
        ...prevPagination,
        page: value,
      }))
    }
    variant="outlined"
    shape="rounded"
    sx={{
      alignSelf: 'flex-start',
      marginTop: '16px', // Add margin at the top
      marginBottom: '16px', // Add margin at the bottom
    }}
  />
      <Footer  />
     </>
    
  );
};

export default LandingPage;