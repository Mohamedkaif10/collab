
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
const disciplines = ['Discipline 1', 'Discipline 2', 'Discipline 3', 'Discipline 4', 'Discipline 5', 'Discipline 6', 'Discipline 7', 'Discipline 8', 'Discipline 9', 'Discipline 10', 'Discipline 11'];

const popularRoles = [
    { name: 'JRF', openings: 10 },
    { name: 'SRF', openings: 5 },
    { name: 'Project Associate', openings: 8 },
    { name: 'Project Manager', openings: 12 },
    { name: 'View All openings', openings: 15 },
  ];
  const topInstitutePostings = ['Institute 1', 'Institute 2', 'Institute 3', 'Institute 4', 'Institute 5', 'Institute 6', 'Institute 7', 'Institute 8', 'Institute 9', 'Institute 10'];

const Pageone = () => {
  return (
    <>
      <Typography variant="h6"  gutterBottom style={{ marginTop: '16px' }}>
        Disciplines
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {disciplines.map((discipline, index) => (
          <Button key={index} variant="outlined" style={{ marginRight: '8px', marginBottom: '8px' }}>
            {discipline}
          </Button>
        ))}
      </div>

      <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
      Discover Popular Roles
    </Typography>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' ,justifyContent:'center'}}>
      {popularRoles.map((role, index) => (
        <Card key={index} style={{ width: '200px', marginBottom: '32px', marginRight: '16px', padding: '16px', height: '300px', display: 'flex', flexDirection: 'column', }}>
          <CardContent style={{ flex: 1 }}>
            <Typography sx={{ color: '#253D90', fontSize: '1.25rem', fontWeight: '600' }} variant="body1">{role.name}</Typography>
            <Typography variant="body2">{role.openings} Openings</Typography>
          </CardContent>
          <Button variant="contained"  style={{ marginTop: '16px', fontSize: '0.75rem', width: '100%',backgroundColor:'#FFC20E',color:'#253D90',fontWeight:600 }}>
            View Openings
          </Button>
        </Card>
      ))}
    </div>

    <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
  Top Institute Postings
</Typography>
<Grid container spacing={2} justifyContent="center">
  {topInstitutePostings.slice(0, 6).map((institute, index) => (
    <Grid key={index} item xs={6} sm={2}>
      <Button variant="outlined" style={{ width: '100%' }}>
        {institute}
      </Button>
    </Grid>
  ))}
</Grid>
<Grid container spacing={2} justifyContent="center" style={{ marginBottom: '16px' }}>
    {topInstitutePostings.slice(6, 11).map((institute, index) => (
      <Grid key={index} item xs={6} sm={2}>
        <Button variant="outlined" style={{ width: '100%' }}>
          {institute}
        </Button>
      </Grid>
    ))}
  </Grid>
    </>
  );
};

export default Pageone;
