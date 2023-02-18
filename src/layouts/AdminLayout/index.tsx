import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import "./AdminLayout.scss";
const AdminLayout = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin__main">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
