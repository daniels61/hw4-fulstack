
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div className="navbar">
        <Link to={"/"} >Home</Link>
        
        <Link to={"/about"}>About Me</Link>
       
        <Link to={"/contact"}>Contact</Link>

        <Link to={"/post_page"}>Post page</Link>

        <Link to={"/new_post"}>New post</Link>
  
        <Link to={"/login"} className="right-align">login</Link>
      </div>
    );
  }

  export default Navbar;