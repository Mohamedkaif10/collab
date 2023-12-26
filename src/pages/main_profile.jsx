import { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import ProfilePage from './conditional'; // Import your Profile component
import SavedJobs from './saved-jobs'; // Import your SavedJob component

const MainProfilePage = () => {
  const [showProfile, setShowProfile] = useState(true);

  const handleShowProfile = () => {
    setShowProfile(true);
  };

  const handleShowSavedJob = () => {
    setShowProfile(false);
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item>
          <Button variant={showProfile ? 'contained' : 'outlined'} onClick={handleShowProfile}>
            Profile
          </Button>
        </Grid>
        <Grid item>
          <Button variant={showProfile ? 'outlined' : 'contained'} onClick={handleShowSavedJob}>
            Saved Jobs
          </Button>
        </Grid>
      </Grid>

      {showProfile ? <ProfilePage /> : <SavedJobs />}
    </Container>
  );
};

export default MainProfilePage;
