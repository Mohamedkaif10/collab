import { Fragment, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types'; 
import "../styles/Blog.css";
import { Button,Box,Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const BlogModal = ({onClose}) => {
  const [formData, setFormData] = useState({
    title: '',
    stream: 'some',
    content: '',
    image: null,
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
 const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { title, stream, content, image } = formData;

    try {
      const token = localStorage.getItem('authToken');
      const formData = new FormData();
      formData.append('title', title);
      formData.append('stream', stream);
      formData.append('content', content);
      formData.append('image', image);

      const response = await axios.post('https://for-sky-backend.vercel.app/api/ideas', formData,
       {
        headers: { Authorization: token },
      }
      );
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error(error);
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
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Content
          <textarea
          name="content"
           value={formData.content}
           onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        Image:
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
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
    onClose: PropTypes.func.isRequired, 
}

export default BlogModal;
