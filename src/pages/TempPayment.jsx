import { Fragment } from "react"
import { useState } from 'react';
import { Button, Container, CircularProgress,  } from '@mui/material';
import qrcode from "../assets/Qrcode.jpeg"
const TempPayment=()=>{
    const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
        setLoading(true);
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('http://localhost:8002/api/screenshot', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }finally {
        setLoading(false);
      }
  };
    return(
        <Fragment>
          
 <Container>
 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img
    src={qrcode}
    alt="QR Code"
    style={{ maxWidth: '100%', height: '600px', width: '600px', marginBottom: '16px' }}
  />
</div>
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" onClick={handleUpload}>
        Upload
      </Button>
      {loading && <CircularProgress />}
      {response && (
        <div>
          <p>Response from Server:</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </Container>
        </Fragment>
    )
}
export default TempPayment