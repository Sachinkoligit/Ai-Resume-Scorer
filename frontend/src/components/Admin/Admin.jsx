import React, { useState, useEffect } from "react";
import "./Admin.css";
import AdminResults from "../ui/AdminResults";
import { useAuthStore } from "../../store/authStore";

export default function Admin() {
  const { authUser } = useAuthStore();
  const [resumes, setResumes] = useState([]);

  const getUserHistory = async () => {
    if (!authUser?._id) {
      setResumes([]);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/getAllResume`,
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
    <div className="admin-container">
      <div className="admin-wrapper">
        {resumes.map((item, index) => (
          <AdminResults
            key={index}
            name={item?.user?.name}
            email={item?.user?.email}
            score={item.score}
            feedback={item.feedback}
            issueDate={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
