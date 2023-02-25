import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../components/UI/Logo";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import TranslateIcon from "@mui/icons-material/Translate";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import useAppDispatch from "../../../hooks/useAppDispatch.hook";
import { logout } from "../../../redux/auth/slice";
const Sidebar = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    if (window.confirm("Logout?")) {
      navigate("/");
      dispatch(logout())
    }
  };
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
          <span>Kategoriya</span>
        </NavLink>
        <div onClick={onLogout} className="admin__link">
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
