import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/landing_page.css"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    // State to store the job postings
    const [postings, setPostings] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // Function to fetch job postings
        const fetchJobPostings = async () => {
            try {
                // Make a GET request to the API endpoint
                const response = await axios.get('http://localhost:8002/api/get_job');
                console.log("the response are", response);
                // Extract postings from the response
                const { success, postings } = response.data;

                if (success) {
                    // Set the postings in the component state
                    setPostings(postings);
                    console.log(postings)
                } else {
                    console.error('Filed to fetch job postings');
                }
            } catch (error) {
                console.error('Error fetching job postings', error);
            }
        };

        // Call the function to fetch job postings when the component mounts
        fetchJobPostings();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    const isLoggedIn = !!localStorage.getItem('authToken');
    console.log('Is logged in:', isLoggedIn);

    const handleJoinClick = () => {
        console.log('Join clicked');

        if (!isLoggedIn) {
            navigate('/second');
        } else {
            console.log('User is already logged in. Implement additional logic here.');
        }
    };

    const handlePostClick = () => {
        console.log('Join clicked');

        if (!isLoggedIn) {
            navigate('/second');
        } else {
            navigate('/job1')
        }
    };
    return (
        <div>
            <Button onClick={handlePostClick}>Post  a job</Button>
            <h1>Search for science jobs on ProCollab</h1>
            {postings && (
                <div >
                    {/* Render job postings */}
                    {postings.map(posting => (
                        <div key={posting.job_id} className="postings-box">
                            <p> {posting.job_title}</p>
                            <p>Department: {posting.department_name}</p>
                            <p>Stipend Amount: {posting.stipend_amount}</p>
                            <p>Last Date: {new Date(posting.last_date).toLocaleDateString()}</p>
                            <p>Vacancies: {posting.vacancies}</p>
                            <p>Location: {posting.location}</p>
                            <p>Scholar Link: {posting.scholar_link}</p>
                            <p>Duration: {posting.duration} months</p>
                            <p>Description: {posting.description}</p>
                            <Button onClick={handleJoinClick} variant="contained">Apply</Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LandingPage;
