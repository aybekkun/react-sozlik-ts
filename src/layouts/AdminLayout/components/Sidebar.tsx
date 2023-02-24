import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../../components/UI/Logo";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import TranslateIcon from "@mui/icons-material/Translate";
import HomeIcon from "@mui/icons-material/Home";
const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="admin__sidebar">
      <div className="admin__nav">
        <Logo />
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive && pathname === "/admin" ? "active admin__link" : "admin__link")}
        >
          <HomeIcon /> <span>Home</span>
        </NavLink>
        <NavLink to="words" className={({ isActive }) => (isActive ? "active admin__link" : "admin__link")}>
          <TranslateIcon />
          <span>Sózler</span>
        </NavLink>
        <NavLink to="category" className={({ isActive }) => (isActive ? "active admin__link" : "admin__link")}>
          <DashboardCustomizeIcon />
          <span>Category</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
