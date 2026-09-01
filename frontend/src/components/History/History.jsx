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
    console.log("authUser",authUser?._id);
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/getUserResume/${authUser._id}`,
      );
      const result = await response.json();
      console.log("result",result);
      setResumes(result.data);
    } catch (error) {
      console.log(error || error.message);
    }
  };

  useEffect(() => {
    getUserHistory();
  }, []);
  return (
    <div className="history-container">
      <div className="history-wrapper">
        {/* <Result />
        <Result />
        <Result />
        <Result /> */}
        {resumes.map((item,index)=>(
          <Result key={index} score={item.score} feedback={item.feedback} issueDate={item.createdAt}/>
        ))}
      </div>
    </div>
  );
}
