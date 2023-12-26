import { useState } from 'react';
import axios from 'axios';
import { TextField, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    phone_no: '',
  });
const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://for-sky-backend.vercel.app/api/register', formData);

      if (response.data.success) {
        console.log(response.data); 
        navigate('/login')
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">Profile Information</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            type="text"
            id="phone_no"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
    </div>
  );
};

export default RegisterForm;
