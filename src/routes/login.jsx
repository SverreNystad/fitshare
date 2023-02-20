import React from "react";
import style from "./login.module.scss";
import { Link } from "react-router-dom";

export default function Login() {

  async function postLogInData(event, url="api/v1/users/login/{username}/{password}"){
    event.preventDefault();
    console.log(event.target[1].value);
    let username = event.target[0].value;
    let password = event.target[1].value;

    const response = await fetch(`http://localhost:8080/api/v1/users/login/${username}/${password}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors',
    })
    console.log(response);
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
