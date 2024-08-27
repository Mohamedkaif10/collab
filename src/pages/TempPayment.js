import { Fragment } from "react";
import { useState } from "react";
import {
  Button,
  Container,
  CircularProgress,
  Typography,
  Backdrop,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import qrcode from "../assets/Qrcode.jpeg";
import { IconButton } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import SuccessModal from "../components/payment_success";
const TempPayment = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        "https://for-sky-backend.vercel.app/api/screenshot",
        {
          method: "POST",
          body: formData,
          headers: { Authorization: token },
        }
      );

      const data = await response.json();
      setResponse(data);
      console.log(response);
      if (data.success) {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  console.log(response);
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={qrcode}
          alt="QR Code"
          style={{
            maxWidth: "100%",
            height: "600px",
            width: "600px",
            marginBottom: "16px",
            marginTop: "20px",
          }}
        />
      </div>
      <Container
        style={{
          border: "1px dashed black",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>Upload screenShot</Typography>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput">
          <UploadIcon position="end" fontSize="large">
            <IconButton component="span">
              <AttachFile />
            </IconButton>
          </UploadIcon>
        </label>
        <Button variant="contained" onClick={handleUpload}>
          Upload
        </Button>
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 20, color: "#fff" }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
      {isModalOpen && <SuccessModal onClose={handleCloseModal} />}
    </Fragment>
  );
};
export default TempPayment;
