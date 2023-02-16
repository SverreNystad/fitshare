import React from "react";
import style from "./signin.module.css"
import image from "../img/logo.png"
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <>
      <main className={style.signin}>
      <img className={style.image} src={image} alt=""/>
      <h1 className={style.headline}>Registrer deg</h1>
      <form method="post" className={style.form}>
      <input type="text" placeholder="Brukernavn" className={style.field}/>
      <input type="password" placeholder="Passord" className={style.field}/>
      <input type="password" placeholder="Bekreft passord" className={style.field}/>
      <button type="submit" className={style.submitbutton}>Registrer deg</button>
      <Link  to={"/login"} className={style.button}>Allerede registrert? Logg inn her</Link>
      </form>
      </main>
    </>
  );
}