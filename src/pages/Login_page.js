import GoogleIcon from "../assets/search.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Backdrop,
} from "@mui/material";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const requestData = {
      email: formData.email,
      password: formData.password,
    };
    axios
      .post("https://for-sky-backend.vercel.app/api/login", requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response Status:", response.status);
        if (response.status === 401) {
          alert("Invalid Credentials");
          return;
        } else if (response.status === 200) {
          return response.json();
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      })
      .then((data) => {
        console.log("Response:", data);
        setLoading(false);
        if (data && data.token) {
          localStorage.setItem("authToken", data.token);
          navigate("/jobs");
        } else {
          console.error("Token not found in the response data");
        }

        setFormData({
          email: "",
          password: "",
        });
      });
  };
  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={5}
        component={Paper}
        elevation={6}
        square
        sx={{ padding: 4 }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              margin="normal"
              fullWidth
              label="E-mail Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              sx={{ mb: 3 }}
            />
            <Link
              to="/forgot-pswrd"
              style={{
                textDecoration: "none",
                color: "blue",
                marginRight: "8px",
              }}
            >
              Reset Password?
            </Link>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
              or
            </Typography>
            <img
              src={GoogleIcon}
              alt="Google Sign In"
              style={{ cursor: "pointer", mt: 2 }}
            />
          </form>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography variant="body2" color="textSecondary" align="center">
            Don&rsquo;t have an account yet?{" "}
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              Join Forsync today
            </Link>
          </Typography>
        </Grid>
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 20, color: "#fff" }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
