import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Post from "./Post";



const Layout = () => {

  return (
    <div>
      <Header />
      <SideBar/>
      <Outlet />
    </div>
  );
};

export default Layout;