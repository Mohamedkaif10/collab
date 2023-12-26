import { Fragment, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types'; 
import "../styles/Blog.css";
import { Button,Box,Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const BlogModal = ({onClose}) => {
  const [title, setTitle] = useState("");
  const [stream, setStream] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('authToken');
      
      const response = await axios.post(
        "https://for-sky-backend.vercel.app/api/ideas",
        {
          title,
          stream,
          content,
        },
        {
          headers: { Authorization: token },
        }
      );
  

      console.log("Idea added successfully:", response.data);

      // Clear the form after successful submission (optional)
      setTitle("");
      setStream("");
      setContent("");
      onClose();
    } catch (error) {
      console.error("Error adding idea:", error);
    }
  };

  return (
    <Fragment>
        <div className="overlay"></div>
        <Box className="modal"> 
      <form onSubmit={handleFormSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Stream
          <input
            type="text"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
          />
        </label>
        <br />
        <label>
          Content
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <div className="buttons">
     <Button onClick={onClose}>Close</Button>
    <Button type="submit" variant="contained" endIcon={<SendIcon />}>Share</Button>
  </div>
      </form>
      <Typography sx={{color:'#6576B1'}}> It will increase your chance to get noticed</Typography>
      </Box>
    </Fragment>
  );
  
  
  }
  BlogModal.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose should be a required function
}

export default BlogModal;
