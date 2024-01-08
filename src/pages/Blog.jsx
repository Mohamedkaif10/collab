import { Fragment } from "react"
import{ useState, useEffect } from 'react';
import axios from 'axios';
import { Button,Box,Grid,Container} from '@mui/material';
import BlogModal from '../components/Blog_modal';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const BlogPage=()=>{
    const [ideas, setIdeas] = useState([]);
  const [filteredIdeas, setFilteredIdeas] = useState([]);
  const [selectedStream, setSelectedStream] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
const navigate= useNavigate()
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        // const response = await axios.get('http://localhost:8002/api/get-ideas');
        const response = await axios.get('https://for-sky-backend.vercel.app/api/get-ideas');
        console.log("the response is ",response.data)
        console.log("the responese are", response.data.ideas);
        setIdeas(response.data.ideas);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    };

    fetchIdeas();
  }, []);

  useEffect(() => {
   
    if (selectedStream) {
      const fetchIdeasByStream = async () => {
        try {
          const response = await axios.get(`https://for-sky-backend.vercel.app/api/ideasByStream/${selectedStream}`);
          setFilteredIdeas(response.data);
        } catch (error) {
          console.error('Error fetching ideas by stream:', error);
        }
      };

      fetchIdeasByStream();
    } else {
      setFilteredIdeas(ideas);
    }
  }, [selectedStream, ideas]);

  // const handleFilterByStream = (stream) => {
  //   setSelectedStream(stream);
  // };
  const refreshIdeas = async () => {
    try {
      const response = await axios.get('https://for-sky-backend.vercel.app/api/get-ideas');
      console.log("the response is ",response.data)
      console.log("the response is", response.data.ideas);
      setIdeas(response.data.ideas);
    } catch (error) {
      console.error('Error refreshing ideas:', error);
    }
  };
  const handleModalOpen = () => {
    const isUserLoggedIn = !!localStorage.getItem('authToken');

    if (isUserLoggedIn) {
      setIsModalOpen(true);
    } else {
      navigate('/login');
    }
  };
  
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Box sx={{ width: '80%', margin: '0 auto' }}>
  {filteredIdeas.map((idea) => (
     <Link key={idea.id} to={`/get-idea/${idea.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Box
      key={idea.id}
      sx={{
        marginRight: '30px',
        marginBottom: '20px',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#FFFFFF',
        marginTop:'10px'
      }}
    >
      <h3 style={{ color: '#253D90', marginBottom: '8px' }}>{idea.title}</h3>
      <img src={idea.imageurl}/>
      <p style={{ marginBottom: '8px' }}>{idea.content}</p>
      <p style={{ color: '#888', marginBottom: '8px' }}>Stream: {idea.stream}</p>
      <p style={{ color: '#888', marginBottom: '8px' }}>Posted At: {new Date(idea.created_at).toLocaleString()}</p>
    </Box>
    </Link>
  ))}
</Box>
        </Grid>
        <Grid item xs={4}>
          {/* <div>
           
            <h2>Discover more of what matters to you</h2>
            <Container>
              <Button variant="outlined" sx={{backgroundColor:'#C5CCE1',color:'#6576B1'}} onClick={() => handleFilterByStream(null)}>All</Button>
              <Button variant="outlined" sx={{backgroundColor:'#C5CCE1'}} onClick={() => handleFilterByStream('eng physics')}>Eng Physics</Button>
              <Button variant="outlined" sx={{backgroundColor:'#C5CCE1'}} onClick={() => handleFilterByStream('Physics')}>Physics</Button>
            </Container>
          </div> */}
          <Container  sx={{ marginTop: '15vh' }}>
     <p> Your views on the recent research and theories.. </p>
     <Button onClick={handleModalOpen}  variant="contained" endIcon={<SendIcon />}>Post your Ideas</Button>
     </Container>
        </Grid>
       
      </Grid>
      
      {/* Render the BlogModal component conditionally */}
      {isModalOpen && (
        <BlogModal
          onClose={() => {
            setIsModalOpen(false);
            refreshIdeas(); // Refresh ideas after modal is closed
          }}
        />
      )}
    </Fragment>
  );
};
export default BlogPage