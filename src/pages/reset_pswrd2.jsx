import  { useState,useEffect } from 'react';
import { Button, Box,Typography,TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input'

const VerifyOTPForm = () => {
  const [otp, setOTP] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect to get the email from query parameters when component mounts
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailFromParams = searchParams.get('email');
    if (emailFromParams) {
      setEmail(emailFromParams);
    }
  }, [location.search]);

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:8002/api/verify-otp', {email, otp });
      setMessage(response.data.message);
      setError('');

      // If OTP verified successfully, navigate to the next page (e.g., dashboard)
      navigate(`/update-password?email=${encodeURIComponent(email)}`);
    } catch (err) {
      setMessage('');
      setError(err.response.data.error || 'Internal Server Error');
    }
  };

  return (
    <Box>
      <Typography variant="h5">Verify OTP</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        disabled
      />
      <MuiOtpInput
        length={6}
        label="OTP"
        variant="outlined"
        fullWidth
        margin="normal"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleVerifyOTP}>
        Verify OTP
      </Button>
      {message && <Typography color="success">{message}</Typography>}
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default VerifyOTPForm;
