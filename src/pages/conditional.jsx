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
        // Make a request to check if the user has completed the profile
        const response = await axios.get('https://for-sky-backend.vercel.app/api/check-profile' , {
          headers: { Authorization: token },
      }); // Adjust the endpoint as per your server route

        // Update the state based on the response
        setIsProfileCompleted(response.data.profile_completed);
      } catch (error) {
        console.error('Error checking profile status:', error);
      }
    };

    // Call the function when the component mounts
    fetchProfileStatus();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {isProfileCompleted ? (
        // Render the page with user profile information
        <UserProfile />
      ) : (
        // Render the posting page since the profile is not completed
        <CreateProfileForm />
      )}
    </div>
  );
};

export default ProfilePage;
