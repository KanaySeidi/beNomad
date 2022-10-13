import React from "react";
import nav from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={nav.section}>
        <div className={nav.container}>
          <nav className={nav.logo}>LOGO</nav>
          <nav className={nav.list}>
            <nav className={nav.item}>See and Try</nav>
            <nav className={nav.item}>Eat</nav>
            <nav className={nav.item}>Stay</nav>
            <nav className={nav.item}>Blogs</nav>
          </nav>
          <nav className={nav.auth}>
            <nav className={nav.login}>Log IN</nav>
            <nav className={nav.reg}>Register</nav>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
