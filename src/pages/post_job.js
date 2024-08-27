import { Fragment } from "react";
import { Button } from "@mui/material";
import "../styles/post_job_2.css";
import {
  CircularProgress,
  TextField,
  Typography,
  Grid,
  Backdrop,
} from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PostJob = () => {
  const [formData, setFormData] = useState({
    job_title: "",
    dept_name: "",
    stipend_amount: "",
    last_date: null,
    vacancies: "",
    location: "",
    scholar_link: "",
    duration: "",
    description: "",
    link: "",
    institute: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDateChange = (date) => {
    console.log("Selected Date:", date);
    const formattedDate = date ? date.toISOString() : null;
    setFormData((prevData) => ({
      ...prevData,
      last_date: formattedDate,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      console.log(token);

      const response = await axios.post(
        "https://for-sky-backend.vercel.app/api/job-details",
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.data.success) {
        throw new Error("Failed to submit the form. Please try again.");
      }
      navigate("/temp-payment");
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Fragment>
      <div className="job_div">
        <Typography
          sx={{ color: "#253D90", fontSize: "2rem", fontWeight: "600" }}
        >
          Post a Job
        </Typography>
        <Typography sx={{ color: "#636161" }}>
          Follow these simple steps to post your job and connect with top talent
        </Typography>
        <form>
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ marginTop: "2%" }}
          >
            <Grid item xs={4}>
              <Typography sx={{ color: "#253D90" }}>Job Title</Typography>
              <TextField
                type="text"
                placeholder="Enter Job Title"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: "#253D90" }}>Department Name</Typography>
              <TextField
                type="text"
                placeholder="Enter Department Name"
                name="dept_name"
                value={formData.dept_name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: "#253D90" }}>Stipend Amount</Typography>
              <TextField
                type="text"
                placeholder="Enter Stipend Amount"
                name="stipend_amount"
                value={formData.stipend_amount}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: "#253D90" }}>Last date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Last Date"
                    format="DD - MM - YYYY"
                    value={formData.last_date}
                    onChange={handleDateChange}
                    sx={{ width: "100%", marginTop: "8px" }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={4}>
              <Typography sx={{ color: "#253D90" }}>vacancies</Typography>
              <TextField
                type="text"
                placeholder="Enter vacancies"
                name="vacancies"
                value={formData.vacancies}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: "#253D90" }}>Location</Typography>
              <TextField
                type="text"
                placeholder="Enter Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: "#253D90" }}>
                Scholar link (Optional)
              </Typography>
              <TextField
                type="text"
                placeholder="Enter Scholar Link"
                name="scholar_link"
                value={formData.scholar_link}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: "#253D90" }}>Duration</Typography>
              <TextField
                type="text"
                placeholder="Enter Duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: "#253D90" }}>
                Institute/Company name
              </Typography>
              <TextField
                type="text"
                placeholder="Enter Institute"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid sx={{ marginTop: "2%" }}>
            <Typography sx={{ color: "#253D90" }}>Description</Typography>
            <TextField
              multiline
              rows={4}
              placeholder="Enter Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid sx={{ marginTop: "2%" }}>
            <Typography sx={{ color: "#253D90" }}>Link</Typography>
            <TextField
              multiline
              rows={4}
              placeholder="Enter Link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 20, color: "#fff" }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          <div className="buttons_container">
            <Button>Clear</Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ background: "#FFC20E", color: "#253D90", width: "10%" }}
            >
              {loading ? <CircularProgress size={20} /> : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default PostJob;
