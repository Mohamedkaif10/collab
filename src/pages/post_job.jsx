import { Fragment } from "react"
import "../styles/post_job.css"
import {Button} from "@mui/material";
const PostJob=()=>{

    return(
        <Fragment>
          <div className="job_div">
            <h2>Post a Job</h2>
            <h5>Follow these simple steps to post your job and connect with top talent</h5>
                 <div className="post_job_header">
                    <div className="">Upload Documents</div>
                    <div className="">Job Details</div>
                    <div className="">Confirmation</div>
                 </div>
                 <div className="container_post_job">
          <div className="item_post_job">
            <p>Job Title</p>
            <input type="text" placeholder="Input 1" />
          </div>
          <div className="item_post_job">
            <p>Department Name</p>
            <input type="text" placeholder="Input 2" />
          </div>
          </div>
          <div className="item_post_job_desc">
            <p>Advertisement Document (PDF)</p>
            <input type="text" placeholder="Upload Document" />
          </div>
         <div>
          <Button>Clear</Button>
          <Button>Next</Button>
         </div>
          </div>
        </Fragment>
    )
}
export default PostJob