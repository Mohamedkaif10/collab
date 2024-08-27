import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import hyd from "../assets/hyderabad.png";
import bom from "../assets/bombay.png";
import madras from "../assets/madras.png";
import kanpur from "../assets/kanpur.jpeg";
import rour from "../assets/rourkela.png";
import trichy from "../assets/trichy.png";
import guwathi from "../assets/guwathi.png";
import kharagpur from "../assets/kharagpur.jpg";
import gandhi from "../assets/gandhinagar.png";
import roor from "../assets/roorkee.png";
import logoMain from "../assets/logoForsync.png";
import Icon from "@mui/material/Icon";
import { createTheme } from "@mui/material/styles";
const topInstitutePostings = [
  "IIT Hyderabad",
  "IIT Bombay",
  "IIT Madras",
  "IIT Kanpur",
  "NIT Rourkela",
  "NIT Tiruchirapalli",
  "IIT Guwathi",
  "IIT kharaghpur",
  "IIT GandhiNagar",
  "IIT Roorkee",
];
const instituteImages = {
  "IIT Hyderabad": hyd,
  "IIT Bombay": bom,
  "IIT Madras": madras,
  "IIT Kanpur": kanpur,
  "NIT Rourkela": rour,
  "NIT Tiruchirapalli": trichy,
  "IIT Guwathi": guwathi,
  "IIT kharaghpur": kharagpur,
  "IIT GandhiNagar": gandhi,
  "IIT Roorkee": roor,
};
const Pageone = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingDepartments, setloadingDepartments] = useState(false);
  const [jrfCount, setJrfCount] = useState(0);
  const [srfCount, setSrfCount] = useState(0);
  const [pa, setpa] = useState(0);
  const [pm, setpm] = useState(0);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://for-sky-backend.vercel.app/api/subjects")
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error("Error fetching subjects:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleSubjectClick = (subjectId) => {
    setloadingDepartments(true);
    axios
      .get(`https://for-sky-backend.vercel.app/api/departments/${subjectId}`)
      .then((response) => setDepartments(response.data))
      .catch((error) => console.error("Error fetching departments:", error))
      .finally(() => setloadingDepartments(false));

    setSelectedSubject(subjectId);
  };
  useEffect(() => {
    const fetchJrfCount = async () => {
      try {
        const response = await axios.get(
          "https://for-sky-backend.vercel.app/api/count-jrf"
        );
        setJrfCount(response.data.jrfCount);
        console.log("jrf", response.data);
      } catch (error) {
        console.log("Error fetching JRF count");
      } finally {
        setLoading(false);
      }
    };

    fetchJrfCount();
  }, []);
  useEffect(() => {
    const fetchSrfCount = async () => {
      try {
        const response = await axios.get(
          "https://for-sky-backend.vercel.app/api/count-srf"
        );
        setSrfCount(response.data.srfCount);
        console.log("srf", response.data);
      } catch (error) {
        console.log("Error fetching JRF count");
      } finally {
        setLoading(false);
      }
    };

    fetchSrfCount();
  }, []);
  useEffect(() => {
    const fetchProAssociate = async () => {
      try {
        const response = await axios.get(
          "https://for-sky-backend.vercel.app/api/count-project-associate"
        );
        console.log(response.data);
        setpa(response.data.projectassociate);
      } catch (error) {
        console.log("Error fetching JRF count");
      } finally {
        setLoading(false);
      }
    };

    fetchProAssociate();
  }, []);

  useEffect(() => {
    const fetchProManager = async () => {
      try {
        const response = await axios.get(
          "https://for-sky-backend.vercel.app/api/count-project-manager"
        );
        setpm(response.data.projectmanager);
      } catch (error) {
        console.log("Error fetching JRF count");
      } finally {
        setLoading(false);
      }
    };

    fetchProManager();
  }, []);

  const popularRoles = [
    { name: "JRF", openings: jrfCount },
    { name: "SRF", openings: srfCount },
    { name: "Project Associate", openings: pa },
    { name: "Project Manager", openings: pm },
    { name: "View All openings", openings: 15 },
  ];

  return (
    <>
      <img src={logoMain} />
      <Typography
        variant="h6"
        gutterBottom
        style={{
          marginTop: "16px",
          color: "#253D90",
          fontWeight: "700",
          fontSize: "2rem",
        }}
      >
        Disciplines
      </Typography>

      {loading && <CircularProgress />}
      {!loading && (
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-wrap mb-4">
            {subjects.slice(0, 6).map((subject) => (
              <button
                key={subject.id}
                onClick={() => handleSubjectClick(subject.id)}
                className="mr-4 mb-4 bg-white border border-black text-black px-4 py-2 rounded"
              >
                {subject.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap">
            {subjects.slice(6).map((subject) => (
              <button
                key={subject.id}
                onClick={() => handleSubjectClick(subject.id)}
                className="mr-4 mb-4 bg-white border border-black text-black px-4 py-2 rounded"
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedSubject && (
        <div>
          <h2>
            Departments under{" "}
            {subjects.find((s) => s.id === selectedSubject)?.name}
          </h2>
          {loadingDepartments && <CircularProgress />}
          {!loadingDepartments && (
            <div className={`grid grid-cols-3 gap-10`}>
              {departments.map((department) => (
                <div
                  key={department.id}
                  className="p-4 border border-gray-300 rounded mb-5 bg-white"
                >
                  {department.name}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Typography
        variant="h6"
        gutterBottom
        style={{
          marginTop: "16px",
          color: "#253D90",
          fontWeight: "700",
          fontSize: "2rem",
        }}
      >
        Discover Popular Roles
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {popularRoles.map((role, index) => (
          <Card
            key={index}
            style={{
              width: "200px",
              marginBottom: "32px",
              marginRight: "16px",
              padding: "16px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent style={{ flex: 1 }}>
              <Typography
                sx={{
                  color: "#253D90",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                }}
                variant="body1"
              >
                {role.name}
              </Typography>
              <Typography variant="body2">{role.openings} Openings</Typography>
            </CardContent>
            <Button
              variant="contained"
              style={{
                marginTop: "16px",
                fontSize: "0.75rem",
                width: "100%",
                backgroundColor: "#FFC20E",
                color: "#253D90",
                fontWeight: 600,
              }}
            >
              View Openings
            </Button>
          </Card>
        ))}
      </div>

      <Typography
        variant="h6"
        gutterBottom
        style={{
          marginTop: "16px",
          color: "#253D90",
          fontWeight: "700",
          fontSize: "2rem",
        }}
      >
        Top Institute Postings
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {topInstitutePostings.slice(0, 6).map((institute, index) => (
          <Grid key={index} item xs={6} sm={2}>
            <Button
              startIcon={
                <Icon style={{ display: "block" }}>
                  <img
                    src={instituteImages[institute]}
                    alt={institute}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      marginBottom: "8px",
                    }}
                  />
                </Icon>
              }
            >
              <span>{institute}</span>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginBottom: "16px" }}
      >
        {topInstitutePostings.slice(6, 11).map((institute, index) => (
          <Grid key={index} item xs={6} sm={2}>
            <Button
              startIcon={
                <Icon style={{ display: "block" }}>
                  <img
                    src={instituteImages[institute]}
                    alt={institute}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      marginBottom: "8px",
                    }}
                  />
                </Icon>
              }
            >
              <span>{institute}</span>
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Pageone;
