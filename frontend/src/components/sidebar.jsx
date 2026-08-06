import React, { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { Link, redirect } from "react-router-dom";

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const sidebarElements = [
    { name: "dashboard", icon: <MdDashboard />, redirect: "/dashboard" },
    { name: "history", icon: <FaHistory />, redirect: "/history" },
    { name: "admin", icon: <RiAdminLine />, redirect: "/admin" },
    { name: "signin", icon: <MdOutlineLogout />, redirect:"/signin" },
  ];
  const pathName = window.location.pathname;

  useEffect(() => {
    switch (true) {
      case pathName.includes("history"):
        setSelectedItem("history");
        break;
      case pathName.includes("admin"):
        setSelectedItem("admin");
        break;
      case pathName.includes("signin"):
        setSelectedItem("signin");
        break;
      case pathName.includes("dashboard"):
        setSelectedItem("dashboard");
        break;
      default:
        setSelectedItem("dashboard");
        break;
    }
    console.log(selectedItem);
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
