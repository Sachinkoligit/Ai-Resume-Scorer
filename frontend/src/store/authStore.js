import { create } from "zustand";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { auth, provider } from "../../utils/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
// const navigate = useNavigate();
export const useAuthStore = create((set) => ({
  authUser: null,
  login: async () => {
    console.log("login...");
    try {
      const result = await signInWithPopup(auth, provider);
      const { accessToken, displayName, email, photoURL } = result.user;
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: displayName,
          email,
          photoUrl: photoURL,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      localStorage.setItem("accessToken", accessToken);
      toast.success("Login Successfully");
      set({ authUser: data.user });
      //   navigate("/dashboard");
      return true;
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  },
  logout: async () => {
    await signOut(auth);
    set({ authUser: null });
    toast.success("Logout Successfully");
    localStorage.clear();
  },
}));

// Listen for Firebase authentication changes
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    useAuthStore.setState({
      authUser: null,
      isLoading: false,
    });
    return;
  }
  const response = await fetch(
    "http://localhost:5000/api/auth/getUserByEmail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
      }),
    },
  );
  const data = await response.json();
  useAuthStore.setState({
    authUser: data.data,
    isLoading: false,
  });
});
