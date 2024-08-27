import { Fragment } from "react";
import { useState } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      const response = await axios.post(
        "https://for-sky-backend.vercel.app/api/send-otp",
        { email }
      );
      setMessage(response.data.message);
      setError("");
      navigate(`/verify-otp?email=${encodeURIComponent(email)}`);
    } catch (err) {
      setMessage("");
      setError(err.response.data.error || "Internal Server Error");
    }
  };
  return (
    <Fragment>
      <Box>
        <Typography variant="h5">Send OTP</Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSendOTP}>
          Send OTP
        </Button>
        {message && <Typography color="success">{message}</Typography>}
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Fragment>
  );
};
export default ForgotPass;
