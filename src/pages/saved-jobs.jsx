import { Typography,Box,Button } from "@mui/material"
import { Fragment } from "react"
import { useState, useEffect } from "react";
import axios from "axios";
const SavedJobs=()=>{
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
        const fetchBookmarks = async () => {
            try {
              const token = localStorage.getItem('authToken');
              
        const response = await axios.get('https://for-sky-backend.vercel.app/api/bookmarks', {
          headers: { Authorization: token },
        });

        const { success, bookmarks } = response.data;
            
                if (success) {
                  setBookmarks(bookmarks);
                } else {
                  console.error("Failed to fetch bookmarks");
                }
              } catch (error) {
                console.error("Error fetching bookmarks", error);
              }
            };
    
       
          fetchBookmarks();
       
      }, []);
    
    return (
      <Fragment>
      <Typography variant="h4" mb={2}>
        Saved Jobs
      </Typography>
      {bookmarks.length === 0 ? (
        <Typography variant="h6">No saved jobs found.</Typography>
      ) : (
        <div>
          {bookmarks.map((bookmark) => (
            <Box
              key={bookmark.job_id}
              className="postings-box"
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                marginBottom: "16px",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "& p": {
                  marginBottom: "8px",
                },
                "& Button": {
                  marginTop: "16px",
                },
              }}
            >
              <p className="job_title"> {bookmark.job_title}</p>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p>
                  Created at {new Date(bookmark.created_at).toLocaleDateString()}
                </p>
                <span style={{ margin: "5px" }}>|</span>
                <p>{bookmark.vacancies} vacancies</p>
                <span style={{ margin: "5px" }}>|</span>
                <p>Apply Before: {new Date(bookmark.last_date).toLocaleDateString()}</p>
              </div>

              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>Location: {bookmark.location}</li>
                <li>Stipend Amount: {bookmark.stipend_amount}</li>
                <li>Department: {bookmark.department_name}</li>
              </ul>

              <p>Scholar Link: {bookmark.scholar_link}</p>
              <p>{bookmark.description}</p>

              <hr />

              <Button
                variant="contained"
                style={{ alignSelf: "flex-end", backgroundColor: "#FFC20E", color: "#253D90" }}
              >
                Apply
              </Button>
            </Box>
          ))}
        </div>
      )}
    </Fragment>
    )
}
export default SavedJobs