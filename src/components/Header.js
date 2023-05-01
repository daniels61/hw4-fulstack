import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <div>
      <Navbar/>
      <SideBar/>
    </div>
  );
};

export default Header;