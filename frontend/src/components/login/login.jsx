import React from "react";
import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { auth, provider } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const navigate = useNavigate();
  const { authUser, login, logout } = useAuthStore();
  console.log("auth user", authUser)
  const handleLogin = async () => {
    const success = await login();
    if (success) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <h1>Login</h1>
          <button onClick={authUser ? logout : login}>
            <FaGoogle /> {authUser ? "Logout" : "Continue with Google"}
          </button>
        </div>
      </div>
    </div>
  );
}
