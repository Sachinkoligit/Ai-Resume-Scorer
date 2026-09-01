import React from "react";
import "../Dashboard/Dashboard.css";
import { GiProgression } from "react-icons/gi";

export default function Result({score,feedback,issueDate}) {
  const pathname = window.location.pathname;
  const isHistoryPage = pathname.includes("history");
  return (
    <div className="profile-container">
      {!isHistoryPage && <h3>Result</h3>}
      <h2>
        {score || 0}% <GiProgression color="orange" />
      </h2>
      {!isHistoryPage && <h5>Feedback</h5>}
      {isHistoryPage && (
        <h5 style={{ color: "blue" }}>Full Stack Mern Developer</h5>
      )}
      {isHistoryPage && <h5>Resume Name: Sachin Koli</h5>}
      <p>
        {feedback || NA}
      </p>
      {isHistoryPage && (
        <span style={{ alignSelf: "flex-start" }}>Dated: {issueDate}</span>
      )}
    </div>
  );
}
