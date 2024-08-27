import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination,
  Container,
  styled,
  Typography,
  TextField,
} from "@mui/material";
import "../styles/landing_page.css";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useBookmarks } from "../Context/bookmarkContext";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Autocomplete } from "@mui/material";

const Filter_Button = styled(Button)`
  height: 53.25px;
  font-size: 17px;
  font-weight: 600;
  color: #253d90;
  text-transform: none;
`;

const Button_Box = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid #253d90;
  border-radius: 5px;
  height: 40px;
  width: 170px;
  margin-bottom: 7px;
  padding: 2px 2px;
`;

const Jobs_Heading = styled(Typography)`
  font-size: 40px;
  color: #253d90;
  font-weight: 700;
  padding-top: 10px;
  text-align: left;
`;

const Heading_Box = styled(Box)`
  justify-content: left;
  padding: 10px 0 5px 5px;
  background-color: #f0f0f0;
`;

const Form_Elements = styled(FormControl)`
  margin-bottom: 10px;
  height: 54px;
  width: 28vw;
  background-color: #e3edf9;
  color: #253d90;
  border-radius: 5px;
`;
const LandingPage = () => {
  const [postings, setPostings] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    stipend_amount: "",
    department_name: "",
    job_title: "",
  });
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
    pageCount: 1,
  });
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    fetchJobPostings();
  }, [pagination.page, filters]);

  const fetchJobPostings = async () => {
    try {
      const endpoint = filters.location ? "/filtered-job-details" : "/get_job";

      const response = await axios.get(
        `https://for-sky-backend.vercel.app/api${endpoint}`,

        {
          params: {
            ...filters,
            page: pagination.page,
            pageSize: pagination.pageSize,
          },
        }
      );

      const { success, jobDetails } = response.data;

      if (success) {
        setPostings(jobDetails);
        setPagination((prevPagination) => ({
          ...prevPagination,
          pageCount: Math.ceil(jobDetails.length / pagination.pageSize),
        }));
      } else {
        console.error("Failed to fetch job postings");
      }
    } catch (error) {
      console.error("Error fetching job postings", error);
    }
  };

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const handleApplyFilters = async () => {
    try {
      const response = await axios.get(
        `https://for-sky-backend.vercel.app/api/filtered-job-details?location=${filters.location}&stipend_amount=${filters.stipend_amount}&department_name=${filters.department_name}&job_title=${filters.job_title}`
      );
      const { success, jobDetails } = response.data;

      if (success) {
        setPostings(jobDetails);
      } else {
        console.error("Failed to fetch filtered job details");
      }
    } catch (error) {
      console.error("Error fetching filtered job details", error);
    }
  };
  const { isJobBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const handleBookmarkClick = async (jobId) => {
    try {
      if (isJobBookmarked(jobId)) {
        await axios.delete(
          `https://for-sky-backend.vercel.app/api/bookmark/${jobId}`,
          {
            headers: { Authorization: token },
          }
        );
        removeBookmark(jobId);
      } else {
        console.log(token);
        await axios.post(
          `https://for-sky-backend.vercel.app/api/bookmark/${jobId}`,
          {
            headers: { Authorization: token },
          }
        );
        addBookmark(jobId);
      }
    } catch (error) {
      console.error("Error bookmarking job", error);
    }
  };
  const handleApplyClick = (institute) => {
    window.open(institute, "_blank");
  };

  return (
    <>
      <Heading_Box>
        <Jobs_Heading sx={{ alignItems: "left" }}>
          Search for science jobs on{" "}
          <span style={{ color: "#FFC20E" }}>Ta</span>yog
        </Jobs_Heading>
      </Heading_Box>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Box
          sx={{
            flex: "0 0 30%",
            backgroundColor: "#f0f0f0",
            padding: "16px",
            marginTop: "6%",
            display: "flex",
            flexDirection: "column",
            height: "40vh",
          }}
        >
          <Button_Box>
            <Filter_Button onClick={handleApplyFilters}>
              Search Filters
            </Filter_Button>
            <FilterAltIcon sx={{ color: "#253D90" }} />
          </Button_Box>
          <Form_Elements fullWidth>
            <Autocomplete
              id="location-select"
              value={filters.location}
              options={[
                "Telangana",
                "Maharashtra",
                "Uttarakhand",
                "Punjab",
                "Odisha",
                "Karnataka",
                "Gujarat",
                "Andhra Pradesh",
                "West Bengal",
                "Kerala",
                "More..",
              ]}
              onChange={(event, newValue) =>
                handleFilterChange("location", newValue)
              }
              renderInput={(params) => (
                <div>
                  <InputLabel
                    htmlFor="location"
                    sx={{
                      color: "#253D90",
                      fontWeight: "bold",
                      position: "absolute",
                      top: "-10px",
                      left: "10px",
                    }}
                  >
                    Location
                  </InputLabel>
                  <TextField
                    {...params}
                    label=" "
                    id="location"
                    sx={{ color: "#253D90", fontWeight: "bold" }}
                  />
                </div>
              )}
            />
          </Form_Elements>

          <Form_Elements fullWidth>
            <InputLabel
              id="stipend"
              sx={{ color: "#253D90", fontWeight: "bold" }}
            >
              Stipend amount
            </InputLabel>
            <Select
              labelId="stipend-label"
              id="stipend-select"
              value={filters.stipend_amount}
              label="Stipend Amount"
              onChange={(e) =>
                handleFilterChange("stipend_amount", e.target.value)
              }
              sx={{
                color: "#253D90",
                fontWeight: "bold",
                "& .MuiSelect-icon": { color: "#253D90" },
              }}
            >
              <MenuItem id="job-menuitem" value={"19999"}>
                Up to ₹19,999
              </MenuItem>
              <MenuItem id="job-menuitem" value={"20000-29999"}>
                ₹20,000 to ₹29,999
              </MenuItem>
              <MenuItem id="job-menuitem" value={"30000-49999"}>
                ₹30,000 to ₹49,999
              </MenuItem>
              <MenuItem id="job-menuitem" value={"50000-74999"}>
                ₹50,000 to ₹74,999
              </MenuItem>
              <MenuItem id="job-menuitem" value={"75000-99999"}>
                ₹75,000 to ₹99,999
              </MenuItem>
              <MenuItem id="job-menuitem" value={"100000-124999"}>
                ₹100,000 to ₹124,999
              </MenuItem>
              <MenuItem id="job-menuitem" value={"125000-149999"}>
                ₹125,000 to ₹149,999
              </MenuItem>
              <MenuItem id="job-menuitem" value={"150000-199999"}>
                ₹150,000 to ₹199,999
              </MenuItem>
              <MenuItem id="job-menuitem" value={"200000"}>
                ₹200,000 and More
              </MenuItem>
            </Select>
          </Form_Elements>

          <Form_Elements fullWidth>
            <InputLabel
              id="department_name"
              sx={{ color: "#253D90", fontWeight: "bold" }}
            >
              Discipline
            </InputLabel>
            <Select
              labelId="department-label"
              id="department-select"
              value={filters.department_name}
              label="Department"
              onChange={(e) =>
                handleFilterChange("department_name", e.target.value)
              }
              sx={{
                color: "#253D90",
                fontWeight: "bold",
                "& .MuiSelect-icon": { color: "#253D90" },
              }}
            >
              <MenuItem id="job-menuitem" value={"Artificial Intelligence"}>
                Artificial Intelligence
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Biomedical Engineering"}>
                Biomedical Engineering
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Biotechnology"}>
                Biotechnology
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Chemical Engineering"}>
                Climate Change
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Civil Engineering"}>
                Civil Engineering
              </MenuItem>
              <MenuItem
                id="job-menuitem"
                value={"Computer Science and Engineering"}
              >
                Computer Science and Engineering
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Electrical Engineering"}>
                Electrical Engineering
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Engineering Science"}>
                Engineering Science
              </MenuItem>
              <MenuItem
                id="job-menuitem"
                value={"Heritage Science and Technology"}
              >
                Heritage Science and Technology
              </MenuItem>
              <MenuItem
                id="job-menuitem"
                value={"Materials Science and Metallurgical Engineering"}
              >
                Materials Science and Metallurgical Engineering
              </MenuItem>
              <MenuItem
                id="job-menuitem"
                value={"Mechanical and Aerospace Engineering"}
              >
                Mechanical and Aerospace Engineering
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Liberal Arts"}>
                Liberal Arts
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Design"}>
                Design
              </MenuItem>
              <MenuItem
                id="job-menuitem"
                value={"Entrepreneurship and Management"}
              >
                Entrepreneurship and Management
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Chemistry"}>
                Chemistry
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Physics"}>
                Physics
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Mathematics"}>
                Mathematics
              </MenuItem>
            </Select>
          </Form_Elements>

          <Form_Elements fullWidth>
            <InputLabel
              id="job_title"
              sx={{ color: "#253D90", fontWeight: "bold" }}
            >
              Job Profile
            </InputLabel>
            <Select
              labelId="job-title-label"
              id="job-title-select"
              value={filters.job_Profile}
              label="Job Title"
              onChange={(e) => handleFilterChange("job_title", e.target.value)}
              sx={{
                color: "#253D90",
                fontWeight: "bold",
                "& .MuiSelect-icon": { color: "#253D90" },
              }}
            >
              <MenuItem id="job-menuitem" value={"Bioinformatician"}>
                Bioinformatician
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Director"}>
                Director
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Faculty Menber"}>
                Faculty Menber
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Head Of Department"}>
                Head Of Department
              </MenuItem>
              <MenuItem id="job-menuitem" value={"PhD Studentship"}>
                PhD Studentship
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Postdoctoral"}>
                Postdoctoral
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Principal Investigator"}>
                Principal Investigator
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Professor"}>
                Professor
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Research Assistant"}>
                Research Assistant
              </MenuItem>
              <MenuItem id="job-menuitem" value={"Researcher"}>
                Researcher
              </MenuItem>
            </Select>
          </Form_Elements>

          <Button onClick={handleApplyFilters}>Apply Filters</Button>
        </Box>

        <Box
          sx={{
            flex: "1",
            padding: "16px",
          }}
        >
          <Container
            sx={{
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {postings && (
              <div>
                {postings.map((posting) => (
                  <Box
                    key={posting.job_id}
                    className="postings-box"
                    sx={{
                      backgroundColor: "#ffffff",
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
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p className="job_title"> {posting.job_title}</p>
                      {isJobBookmarked(posting.job_id) ? (
                        <BookmarkAddedIcon
                          sx={{ fontSize: "1.5rem", cursor: "pointer" }}
                          onClick={() => handleBookmarkClick(posting.job_id)}
                        />
                      ) : (
                        <BookmarkAddIcon
                          sx={{ fontSize: "1.5rem", cursor: "pointer" }}
                          onClick={() => handleBookmarkClick(posting.job_id)}
                        />
                      )}
                    </Box>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>{posting.vacancies} vacancies</p>
                      <span style={{ margin: "5px" }}>|</span>
                      <p>Apply Before: {posting.last_date}</p>
                    </div>

                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                      <li>{posting.location}</li>
                      <li>{posting.stipend_amount}</li>
                      <li>{posting.department_name}</li>
                      <li>{posting.link}</li>
                    </ul>

                    <p>Scholar Link: {posting.scholar_link}</p>
                    <p>{posting.description}</p>

                    <hr></hr>

                    <Button
                      onClick={() => handleApplyClick(posting.institute)}
                      variant="contained"
                      style={{
                        alignSelf: "flex-end",
                        backgroundColor: "#FFC20E",
                        color: "#253D90",
                      }}
                    >
                      Apply
                    </Button>
                  </Box>
                ))}
              </div>
            )}
          </Container>
        </Box>
      </Box>
      <Pagination
        count={10}
        page={pagination.page}
        onChange={(event, value) =>
          setPagination((prevPagination) => ({
            ...prevPagination,
            page: value,
          }))
        }
        variant="outlined"
        shape="rounded"
        sx={{
          alignSelf: "flex-start",
          marginTop: "16px",
          marginBottom: "16px",
          "& .Mui-selected": {
            backgroundColor: "#253D90",
            color: "white",
          },
        }}
      />
    </>
  );
};

export default LandingPage;
