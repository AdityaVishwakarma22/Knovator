import React from "react";
import { job_category } from "../assets/textContent/textContent";
import bookmark from "../assets/bookmark.png";
import arrow from "../assets/offers arrow.svg"
function Job() {
  return (
    <div className="main-container job-section">
      <h3 className="content-header">{job_category.heading}</h3>
      <div className="box-container">
        {job_category &&
          job_category.arr.map((e) => {
            return <div className="job-box">
                    <div className="wrapper-job">
                      <div className="box-header">
                        <img src={e.img} alt="company img" className="company-img"/>
                        <h6>{e.heading}</h6>
                        <img src={bookmark} alt="bookmark" id="bookmark"/>
                      </div>
                      <div className="box-body">
                        <div className="body-header">
                          <h6>{e.name}</h6>
                          <span>{e.review}</span>
                        </div>
                        <ul>
                          {
                            e.description.map((data)=><li>{data}</li>)
                          }
                        </ul>
                      </div>
                      <div className="box-footer">
                        <hr />
                          <h6 className="technologies">{job_category.technologies}</h6>
                        <hr />
                      </div>
                      <button className="job-card-btn">
                        Apply Now <i class="fa-solid fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
          })}
      </div>
      <button>All Job Offers <img src={arrow} alt="expand offers" /></button>
    </div>
  );
}

export default Job;
