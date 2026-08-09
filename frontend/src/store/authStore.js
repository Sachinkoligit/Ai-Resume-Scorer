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
      localStorage.setItem("accessToken", accessToken);
      toast.success("Login Successfully");
      set({ authUser: result.user });
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
onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({
    authUser: user,
    isLoading: false,
  });
});
