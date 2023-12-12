import { Fragment, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types'; 
import "../styles/Blog.css"
const BlogModal = ({onClose}) => {
  const [title, setTitle] = useState("");
  const [stream, setStream] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post("http://localhost:8002/api/ideas", {
        title,
        stream,
        content,
      });

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
        <div className="modal"> 
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Stream:
          <input
            type="text"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button onClick={onClose}>Close</button>
      </form>
      </div>
    </Fragment>
  );
  
  
  }
  BlogModal.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose should be a required function
}

export default BlogModal;
