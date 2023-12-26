// Import necessary MUI components and React
import  { useState, useEffect } from 'react';
import { Typography, Paper, CircularProgress } from '@mui/material';

// Function to fetch user profile
const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await fetch('https://for-sky-backend.vercel.app/api/user-profile' , {
      headers: { Authorization: token },
  }); // Adjust the endpoint based on your server setup
    const data = await response.json();

    if (response.ok) {
      return data.profile;
    } else {
      throw new Error(data.error || 'Error fetching user profile.');
    }
  } catch (error) {
    throw new Error(error.message || 'Error fetching user profile.');
  }
};

// Component to display user profile
const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await fetchUserProfile();
        setProfile(userProfile);
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
          <Typography variant="h5">User Profile</Typography>
          <Typography>Name: {profile.full_name}</Typography>
          <Typography>Email: {profile.email}</Typography>
          {/* Add more fields as needed */}
        </>
      )}
    </Paper>
  );
};

export default UserProfile;
