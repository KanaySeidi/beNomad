import React from "react";
import login from "./Login.module.css";

const Login = () => {
  return (
    <>
      <section>
        <div className={login.container}>
          <div className={login.box}>
            <p className={login.txt}>Login</p>
            <input className={login.item} type="text" placeholder="Имя" />
            <input className={login.item} type="text" placeholder="Фамилия" />
            <input className={login.item} type="email" placeholder="email" />
            <input
              className={login.item}
              type="password"
              placeholder="Пароль"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
