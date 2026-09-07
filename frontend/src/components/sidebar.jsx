import React, { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Sidebar() {
  const location = useLocation();
  const { authUser } = useAuthStore();
  const isAdmin = authUser?.role === "admin";
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const sidebarElements = [
    { name: "dashboard", icon: <MdDashboard />, redirect: "/dashboard" },
    { name: "history", icon: <FaHistory />, redirect: "/history" },
    isAdmin && { name: "admin", icon: <RiAdminLine />, redirect: "/admin" },
    { name: "signin/signout", icon: <MdOutlineLogout />, redirect: "/signin" },
  ].filter(Boolean);
  const pathName = location.pathname;
console.log("IsAdmin",isAdmin)
  useEffect(() => {
    switch (true) {
      case pathName.includes("history"):
        setSelectedItem("history");
        break;
      case pathName.includes("admin"):
        setSelectedItem("admin");
        break;
      case pathName.includes("signin"):
        setSelectedItem("signin/signout");
        break;
      case pathName.includes("dashboard"):
        setSelectedItem("dashboard");
        break;
      default:
        setSelectedItem("dashboard");
        break;
    }
  }, [pathName]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <FaRegFileAlt className="file-icon" />
        <h2>Resume Screening</h2>
      </div>
      <ul className="sidebar-list-wrapper">
        {sidebarElements.map((element) => (
          <li
            key={element.name}
            onClick={() => setSelectedItem(element.name)}
            className={`sidebar-element-list ${selectedItem === element.name ? "active" : ""}`}
          >
            <Link to={element.redirect} className="sidebar-element-list">
              {element.icon} {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
