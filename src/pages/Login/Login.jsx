import React from "react";
import { Link } from "react-router-dom";
import login from "./Login.module.css";

const Login = () => {
  return (
    <>
      <section>
        <div className={login.container}>
          <h2 className={login.logo}>LOGO</h2>
          <div className={login.box}>
            <p className={login.txt}>Log In</p>

            <input className={login.item} type="email" placeholder="Email" />
            <input
              className={login.item}
              type="password"
              placeholder="Password"
            />
            <div className={login.cont}>
              <Link to="/">
                <button className={login.btn}> Log In</button>
              </Link>
              <Link to="/login2">
                <button className={login.forgot}>Forgot password</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
