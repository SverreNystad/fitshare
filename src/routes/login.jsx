import React from "react";
import style from "./login.module.css"
import image from "../img/logo.png"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <main className={style.login}>
      <img className={style.image} src={image} alt=""/>
      <h1 className={style.headline}>Logg inn</h1>
      <form method="post" className={style.form}>
      <input type="text" placeholder="Brukernavn" className={style.field}/>
      <input type="password" placeholder="Passord" className={style.field}/>
      <button type="submit" className={style.submitbutton}>Logg inn</button>
      <Link to={"/signin"} className={style.button}>Ingen bruker? Registrer deg her</Link>
      </form>
      </main>
    </>
  );
}