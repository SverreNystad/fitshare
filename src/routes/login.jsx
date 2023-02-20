import React, { useContext } from "react";
import style from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function postLogInData(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    const response = await fetch(
      `http://localhost:8080/api/v1/users/login/${username}/${password}`
    );
    const userRes = await response.json();
    setUser(userRes);
    console.log(userRes);
    navigate("/");
  }

  return (
    <>
      <main className={style.login}>
        <h1 className={style.headline}>Logg inn</h1>
        <form onSubmit={postLogInData} className={style.form}>
          <input type="text" placeholder="Brukernavn" className={style.field} />
          <input
            type="password"
            placeholder="Passord"
            className={style.field}
          />
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
