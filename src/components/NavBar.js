import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className="container">
      <div className="toggleNav">
        <button className="btn" onClick={() => setOpen((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links" id={open ? "open" : "close"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/experience"}>Experience</Link>
        <Link to={"/projects"}>Projects</Link>
      </div>
    </div>
  );
};

export default NavBar;
