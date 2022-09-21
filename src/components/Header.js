import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-full w-full flex items-end justify-between px-5 pb-3">
      <div className="text-2xl">Logo</div>
      <nav className="flex gap-3">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return { borderBottom: isActive ? "2px solid grey" : "" };
          }}
        >
          Home{" "}
        </NavLink>
        <NavLink
          to="/addLocation"
          style={({ isActive }) => {
            return { borderBottom: isActive ? "2px solid grey" : "" };
          }}
        >
          AddLocation{" "}
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return { borderBottom: isActive ? "2px solid grey" : "" };
          }}
        >
          Login{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
