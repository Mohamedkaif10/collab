import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
const GetIdeaPage = () => {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    const fetchIdeaById = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `https://for-sky-backend.vercel.app/api/get-ideas/${id}`,
          {
            headers: { Authorization: token },
          }
        );
        setIdea(response.data.idea);
      } catch (error) {
        console.error("Error fetching idea by ID:", error);
      }
    };

    fetchIdeaById();
  }, [id]);

  return (
    <Fragment>
      {idea ? (
        <Card
          sx={{
            maxWidth: 600,
            margin: "auto",
            marginTop: 4,
            height: "80vh",
            marginBottom: 2,
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {idea.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Posted At: {new Date(idea.created_at).toLocaleString()}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {idea.stream}
            </Typography>
            <Typography variant="body1" paragraph>
              {idea.content}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <CircularProgress
          sx={{ display: "block", margin: "auto", marginTop: 4 }}
        />
      )}
    </Fragment>
  );
};

export default GetIdeaPage;
