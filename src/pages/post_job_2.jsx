import { Fragment } from "react";
import { Button } from "@mui/material";
import "../styles/post_job_2.css";

const PostJob2 = () => {
    const inputLabels = [
        "Stipend Amount",
        "Last Day to Apply",
        "Vacancies",
        "Location",
        "Google Scholar Link",
        "Duration of the Job",
      ];
  return (
    <Fragment>
      <div className="job_div">
        <h2>Post a Job</h2>
        <h5>Follow these simple steps to post your job and connect with top talent</h5>

        {/* Header */}
        <div className="post_job_header">
          <div className="">Upload Documents</div>
          <div className="">Job Details</div>
          <div className="">Confirmation</div>
        </div>

        {/* Grid */}
        <div className="grid_container">
          {inputLabels.map((label, index) => (
            <div key={index} className="grid_item">
              <p>{label}</p>
              <input type="text" placeholder={`Input ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="item_post_job_desc">
          <p>Advertisement Document (PDF)</p>
          <input type="text" placeholder="Upload Document" />
        </div>

        {/* Buttons */}
        <div className="buttons_container">
          <Button>Clear</Button>
          <Button>Next</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default PostJob2;
