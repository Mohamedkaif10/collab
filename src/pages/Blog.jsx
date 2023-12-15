import { Fragment } from "react"
import{ useState, useEffect } from 'react';
import axios from 'axios';
import { Button,Box,Grid,Container} from '@mui/material';
import BlogModal from '../components/Blog_modal';
const BlogPage=()=>{
    const [ideas, setIdeas] = useState([]);
  const [filteredIdeas, setFilteredIdeas] = useState([]);
  const [selectedStream, setSelectedStream] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get('http://localhost:8002/api/get-ideas');
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
          const response = await axios.get(`http://localhost:8002/api/ideasByStream/${selectedStream}`);
          setFilteredIdeas(response.data);
        } catch (error) {
          console.error('Error fetching ideas by stream:', error);
        }
      };

      fetchIdeasByStream();
    } else {
      // If no stream is selected, show all ideas
      setFilteredIdeas(ideas);
    }
  }, [selectedStream, ideas]);

  const handleFilterByStream = (stream) => {
    setSelectedStream(stream);
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const refreshIdeas = async () => {
    try {
      const response = await axios.get('http://localhost:8002/api/get-ideas');
      console.log("the response is", response.data.ideas);
      setIdeas(response.data.ideas);
    } catch (error) {
      console.error('Error refreshing ideas:', error);
    }
  };
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Box sx={{ width: '60%', margin: '0 auto' }}>
  {filteredIdeas.map((idea) => (
    <Box
      key={idea.id}
      sx={{
        marginBottom: '20px',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#FFFFFF',
        marginTop:'10px'
      }}
    >
      <h3 style={{ color: '#253D90', marginBottom: '8px' }}>{idea.title}</h3>
      <p style={{ marginBottom: '8px' }}>{idea.content}</p>
      <p style={{ color: '#888', marginBottom: '8px' }}>Stream: {idea.stream}</p>
      <p style={{ color: '#888', marginBottom: '8px' }}>Posted At: {new Date(idea.created_at).toLocaleString()}</p>
      {/* Add more styling as needed */}
    </Box>
  ))}
</Box>
        </Grid>
        <Grid item xs={4}>
          <div>
            <Button onClick={handleModalOpen}>Post your Ideas</Button>
            <h2>Ideas</h2>
            <Container>
              {/* Add filter buttons */}
              <Button onClick={() => handleFilterByStream(null)}>All</Button>
              <Button onClick={() => handleFilterByStream('eng physics')}>Eng Physics</Button>
              <Button onClick={() => handleFilterByStream('Physics')}>Physics</Button>
              {/* Add more buttons for other streams as needed */}
            </Container>
          </div>
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