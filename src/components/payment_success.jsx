import { Fragment } from 'react';
import { Box, Typography, IconButton,Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const SuccessModal = ({ onClose }) => {
    const navigate = useNavigate()
    const homePage=()=>{
        navigate('/')
    }
  return (
    <Fragment>
      <div className="overlay"></div>
      <Box className="modal">
        <IconButton
          onClick={ onClose}
          style={{ position: 'absolute', top: '8px', right: '8px', color: '#6576B1' }}
        >
          <CancelIcon />
        </IconButton>
        <Typography sx={{ color: '#6576B1' }}>Congratulation!</Typography>
       
        <Typography sx={{ color: '#6576B1' }}>You have submitted the Job Post</Typography>
        <Typography sx={{ color: '#6576B1' }}>We will notify you after payment confirmation</Typography>
        <Typography sx={{ color: '#6576B1' }}>Keep an eye on your emails for updates on new applications and relevant notifications.</Typography>
        <Button variant="contained" onClick={homePage} sx={{backgroundColor:'#FFC20E',color:'#253D90'}}>Go Home</Button>
      
      </Box>
    </Fragment>
  );
};
SuccessModal.propTypes = {
    onClose: PropTypes.func.isRequired,  // Ensure onClose is a function and is required
  };
export default SuccessModal;
