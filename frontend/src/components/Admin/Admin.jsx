import React from "react";
import "./Admin.css";
import AdminResults from "../ui/AdminResults";

export default function Admin() {
  return (
    <div className="admin-container">
      <div className="admin-wrapper">
        <AdminResults/>
        <AdminResults/>
        <AdminResults/>
        <AdminResults/>
      </div>
    </div>
  );
}
