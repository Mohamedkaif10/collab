import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateProfileForm from "./Profile-page"
import UserProfile from "../pages/get-profile"
const ProfilePage = () => {
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);

  useEffect(() => {
    const fetchProfileStatus = async () => {
      try {
        const token = localStorage.getItem('authToken');
       
        const response = await axios.get('https://for-sky-backend.vercel.app/api/check-profile' , {
          // const response = await axios.get('http://localhost:8002/api/check-profile' , {
          headers: { Authorization: token },
      });

      
        setIsProfileCompleted(response.data.profile_completed);
      } catch (error) {
        console.error('Error checking profile status:', error);
      }
    };
    fetchProfileStatus();
  }, []); 

  return (
    <div>
      {isProfileCompleted ? (
        <UserProfile />
      ) : (
        <CreateProfileForm />
      )}
    </div>
  );
};

export default ProfilePage;
