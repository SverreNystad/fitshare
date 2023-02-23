import React, { useContext, useState } from "react";
import style from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [userNotFoundMessage, setUserNotFoundMessage] = useState("");
  async function getLogInData(event) {
    event.preventDefault();
    const { username, password } = Object.fromEntries(
      new FormData(event.target)
    );

    const res = await fetch(
      `http://localhost:8080/api/v1/users/login/${username}/${password}`
    ).then((user) => user.json()).catch((error) => console.error("Could not log in due to: " + error));
    setUser(res);
    if (user) {
      navigate("/profile");
    }
    setUserNotFoundMessage("Feil passord eller brukernavn");
  }

  return (
    <>
      <main className={style.login}>
        <h1 className={style.headline}>Logg inn</h1>
        <form onSubmit={getLogInData} className={style.form}>
          <input
            name="username"
            type="text"
            placeholder="Brukernavn"
            className={style.field}
          />
          <input
            name="password"
            type="password"
            placeholder="Passord"
            className={style.field}
          />
          <div className={style.submitError}>{userNotFoundMessage}</div>
          <button type="submit" className={style.submitbutton}>
            Logg inn
          </button>
          <Link to={"/signin"} className={style.button}>
            Ingen bruker? Registrer deg her
          </Link>
        </form>
      </main>
    </>
  );
}
