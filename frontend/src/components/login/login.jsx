import React from "react";
import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { auth, provider } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { accessToken, displayName, email, photoURL } = result.user;
      localStorage.setItem("accessToken",accessToken);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <h1>Login</h1>
          <button onClick={handleLogin}>
            <FaGoogle /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
