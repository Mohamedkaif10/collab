import  { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import ProfilePage from './conditional';
import SavedJobs from './saved-jobs';
import MyJobs from './myJobs';

const MainProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState('profile');

  const renderComponent = () => {
    switch (selectedTab) {
      case 'profile':
        return <ProfilePage />;
      case 'savedJobs':
        return <SavedJobs />;
      case 'postedJobs':
        return <MyJobs />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item>
          <Button onClick={() => setSelectedTab('profile')}>Profile</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => setSelectedTab('savedJobs')}>Saved Jobs</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => setSelectedTab('postedJobs')}>Posted Jobs</Button>
        </Grid>
      </Grid>

      {renderComponent()}
    </Container>
  );
};

export default MainProfilePage;
