import React from "react";
import log from "./Login2.module.css";

const Login2 = () => {
  return (
    <div>
      <section>
        <div className={log.container}>
          <h2 className={log.logo}>LOGO</h2>
          <div className={log.box}>
            <h4 className={log.txt}>Forgot Password</h4>
            <p className={log.content}>
              Can't get in ? Enter your email below and we'll send you an email
              to get this sorted out.
            </p>
            <input className={log.item} type="email" placeholder="Email" />
            <div className={log.cont}>
              <button>Cancel</button>
              <button>Send reset email</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login2;
