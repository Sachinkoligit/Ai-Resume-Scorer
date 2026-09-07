import React, { useEffect, useState } from "react";
import "./History.css";
import Result from "../ui/Result";
// import "../Dashboard/Dashboard.css";
import { GiProgression } from "react-icons/gi";
import { useAuthStore } from "../../store/authStore";

export default function History() {
  const { authUser } = useAuthStore();
  const [resumes, setResumes] = useState([]);

  const getUserHistory = async () => {
    if (!authUser?._id) {
      setResumes([]);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/getUserResume/${authUser._id}`,
      );
      const result = await response.json();
      setResumes(result.data || []);
    } catch (error) {
      console.log(error || error.message);
      setResumes([]);
    }
  };

  useEffect(() => {
    getUserHistory();
  }, [authUser?._id]);

  if (resumes.length < 1) {
    return (
      <div className="history-container">
          <h2>No History Found</h2>
        </div>
    );
  }

  return (
    <div className="history-container">
      <div className="history-wrapper">
        {/* <Result />
        <Result />
        <Result />
        <Result /> */}
        {resumes.map((item, index) => (
          <Result
            key={index}
            score={item.score}
            feedback={item.feedback}
            issueDate={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
