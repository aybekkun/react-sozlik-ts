import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopSearch from "./components/TopSearch";
import useAppDispatch from "../../hooks/useAppDispatch.hook";

import { userCheck } from "../../redux/auth/asyncActions";
import "./AdminLayout.scss";
const AdminLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userCheck());
  }, []);
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin__main">
        <TopSearch />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
