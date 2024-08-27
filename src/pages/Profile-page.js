import { Fragment, useState } from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

const CreateProfileForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    work_status: "",
    present_location: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("authToken");
      const formDataToSend = new FormData();
      formDataToSend.append("full_name", formData.full_name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("mobile_number", formData.mobile_number);
      formDataToSend.append("work_status", formData.work_status);
      formDataToSend.append("present_location", formData.present_location);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("image", formData.image);

      const response = await axios.post(
        "https://for-sky-backend.vercel.app/api/create-profile",
        formDataToSend,
        {
          headers: { Authorization: token },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error creating user profile:", error.response.data.error);
    }
  };

  return (
    <Fragment>
      <Typography sx={{ marginTop: "1%" }}>Profile</Typography>
      <Typography sx={{ marginTop: "1%" }}>
        Provide these details to make your profile and Find a job & grow your
        career
      </Typography>
      <div className="max-w-md mx-0 my-5">
        <div className="mb-4">
          <label
            htmlFor="full_name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile_number"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile_number"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="work_status"
            className="block text-sm font-medium text-gray-700"
          >
            Work Status
          </label>
          <input
            type="text"
            id="work_status"
            name="work_status"
            value={formData.work_status}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="present_location"
            className="block text-sm font-medium text-gray-700"
          >
            Present Location
          </label>
          <input
            type="text"
            id="present_location"
            name="present_location"
            value={formData.present_location}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md mx-auto"
          />
        </div>
        <div className="mb-4 mx-auto">
          <FormControl>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Profile Pic
            </label>
            <TextField
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              inputProps={{ accept: "image/*" }}
            />
            <FormHelperText>Upload an image file</FormHelperText>
          </FormControl>
        </div>
        <Button
          sx={{}}
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Create Profile
        </Button>
      </div>
    </Fragment>
  );
};

export default CreateProfileForm;
