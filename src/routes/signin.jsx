// import React from "react";
import style from "./signin.module.scss";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Signin() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function postSingIn(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const res = await fetch(
      `http://localhost:8080/api/v1/users/signup/${username}/${password}`
    ).then((user) => user.json());
    setUser(res);
    navigate("/profile");
  }

  return (
    <>
      <main className={style.signin}>
        <h1 className={style.headline}>Registrer deg</h1>
        <form onSubmit={postSingIn} className={style.form}>
          <input type="text" placeholder="Brukernavn" className={style.field} />
          <input
            type="password"
            placeholder="Passord"
            className={style.field}
          />
          <input
            type="password"
            placeholder="Bekreft passord"
            className={style.field}
          />
          <button type="submit" className={style.submitbutton}>
            Registrer deg
          </button>
          <Link to={"/login"} className={style.button}>
            Allerede registrert? Logg inn her
          </Link>
        </form>
      </main>
    </>
  );
}
