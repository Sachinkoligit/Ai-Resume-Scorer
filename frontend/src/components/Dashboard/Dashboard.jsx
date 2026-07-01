import React from "react";
import "./Dashboard.css";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";

export default function Dashboard() {
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
                <FaRegFileAlt color="blue"/>
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
              <h4 style={{margin:0}}>Upload your resume</h4>
            </div>

            <button className="upload-button">
              Upload Resume
            </button>
          </div>

          <div className="analyze-wrapper">
            <textarea rows={8} placeholder="Paste Your Job Description"/>
            <button className="analyze-button">Analyze</button>
          </div>
        </div>
        <div className="profile-container">second</div>
      </div>
    </div>
  );
}
