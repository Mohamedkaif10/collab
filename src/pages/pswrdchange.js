import { useState, useEffect } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const UpdatePasswordForm = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailFromParams = searchParams.get("email");
    if (emailFromParams) {
      setEmail(emailFromParams);
    }
  }, [location.search]);

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.put(
        "https://for-sky-backend.vercel.app/api/update-password",
        { email, newPassword }
      );
      setMessage(response.data.message);
      setError("");
      navigate("/second");
    } catch (err) {
      setMessage("");
      setError(err.response.data.error || "Internal Server Error");
    }
  };

  return (
    <Box>
      <Typography variant="h5">Update Password</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        disabled
      />
      <TextField
        label="New Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdatePassword}
      >
        Update Password
      </Button>
      {message && <Typography color="success">{message}</Typography>}
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default UpdatePasswordForm;
