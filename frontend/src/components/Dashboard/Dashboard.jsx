import React, { useState } from "react";
import "./Dashboard.css";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { FaRegFileAlt, FaUser } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import { GiProgression } from "react-icons/gi";

export default function Dashboard() {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="main-container">
          <div className="">
            <h1 className="heading">Smart Resume Screening</h1>
            <h2 className="sub-heading">Resume Match Score</h2>
          </div>

          <div className="instruction-container">
            <ul className="instructions-list">
              <p className="">
                <MdOutlineIntegrationInstructions color="blue" />
                Important Instructions:
              </p>
              <li>
                <FaRegFileAlt color="blue" />
                <span>
                  Please paste the complete job description in the "Job
                  Description" field before submitting.
                </span>
              </li>
              <li>
                <VscFilePdf color="blue" />{" "}
                <span>Only PDF format (.pdf) resumes are accepted.</span>
              </li>
            </ul>
          </div>

          <div className="upload-wrapper">
            <div className="container">
              <h4 style={{ margin: 0 }}>Upload your resume</h4>
            </div>

            <button className="upload-button">Upload Resume</button>
          </div>

          <div className="analyze-wrapper">
            <textarea rows={8} placeholder="Paste Your Job Description" />
            <button className="analyze-button">Analyze</button>
          </div>
        </div>

        <div className="right-container">
        <div className="profile-container">
          <h3>Analyze with AI</h3>
          <div className="profile-image-container">
            {!imageError ? (
              <img
                alt="profile"
                src="xyz.png"
                onError={() => setImageError(true)}
                className="profile"
              />
            ) : (
              <FaUser className="profile"/>
            )}
          </div>
          <h4>Sachin koli</h4>
        </div>

        <div className="profile-container">
          <h3>Result</h3>
          <h2>75% {" "} <GiProgression color="orange"/></h2> 
          <h5>Feedback</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto quo aperiam ad porro recusandae, enim veniam debitis, perferendis omnis velit dolores consequuntur temporibus maxime deserunt, reiciendis ullam nihil dicta laboriosam sint. Maxime explicabo quis nisi eaque, aperiam velit magnam perferendis asperiores iste beatae reiciendis quaerat corrupti autem, necessitatibus molestias? eaque, aperiam velit magnam perferendis asperiores iste beatae reiciendis quaerat corrupti autem, necessitatibus molestias?</p>
        </div>
        </div>
      </div>
    </div>
  );
}
