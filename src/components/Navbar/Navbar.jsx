import React from "react";
import nav from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={nav.section}>
        <div className={nav.container}>
          <Link to="/">
            <nav className={nav.logo}>LOGO</nav>
          </Link>
          <nav className={nav.list}>
            <nav className={nav.item}>See and Try</nav>
            <nav className={nav.item}>Eat</nav>
            <nav className={nav.item}>Stay</nav>
            <nav className={nav.item}>Blogs</nav>
          </nav>
          <nav className={nav.auth}>
            <Link to="/login">
              <nav className={nav.login}>Log In</nav>
            </Link>
            <nav className={nav.reg}>Register</nav>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
