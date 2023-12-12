import { Fragment } from "react"
import{ useState, useEffect } from 'react';
import axios from 'axios';
import { Button,Box} from '@mui/material';
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
    return(
        <Fragment>
            <Button onClick={handleModalOpen}>Post your Ideas</Button>
      {/* Render the BlogModal component conditionally */}
      {isModalOpen && (
        <BlogModal
          onClose={() => {
            setIsModalOpen(false);
            refreshIdeas(); // Refresh ideas after modal is closed
          }}
        />
      )}
<div >
        <h2>Ideas</h2>
        <div>
          {/* Add filter buttons */}
          <Button onClick={() => handleFilterByStream(null)}>All</Button>
          <Button onClick={() => handleFilterByStream('eng physics')}>Eng Physics</Button>
          <Button onClick={() => handleFilterByStream('Physics')}>Physics</Button>
          {/* Add more buttons for other streams as needed */}</div>
        <Box sx={{ width: '70%', margin: '0 auto',backgroundColor: '#f0f0f0' }}>
        {filteredIdeas.map((idea) => (
            <div key={idea.id} style={{ marginBottom: '20px' }}>
              <h3>{idea.title}</h3>
              <p>{idea.content}</p>
              <p>Stream: {idea.stream}</p>
              <p>Posted At: {new Date(idea.created_at).toLocaleString()}</p>
            </div>
          ))}
        </Box>
      </div>
        </Fragment>
    )
}
export default BlogPage