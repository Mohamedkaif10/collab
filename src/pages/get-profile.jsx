import { useState, useEffect } from 'react';
import { Typography, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';
const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem('authToken');
   
    const response = await axios.get(' https://for-sky-backend.vercel.app/api/user-pro', {
    // const response = await axios.get('http://localhost:8002/api/user-pro', {

      headers: { Authorization: token },
    });
   
    const data = response.data;

    if (response.status === 200 && data.profile) {
      return data.profile;
    } else {
      throw new Error(data.error || 'Error fetching user profile.');
    }
  } catch (error) {
    throw new Error(error.message || 'Error fetching user profile.');
  }
};


const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await fetchUserProfile();
        setProfile(userProfile);
        console.log("the name uis",userProfile)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="h5">Personal Details</Typography>
          <Typography>Full Name {profile.full_name}</Typography>
          <Typography>Email ID {profile.email}</Typography>
          <Typography>Mobile Number {profile.mobile_number}</Typography>
          <Typography>Work Status {profile.work_status}</Typography>
          <Typography>Present Location {profile.present_location}</Typography>
          <Typography>Description {profile.description}</Typography>
          <img src={profile.image_url} alt="User Profile" style={{ maxWidth: '100%', height: 'auto' }} />
        </>
      )}
    </Paper>
  );
};

export default UserProfile;
