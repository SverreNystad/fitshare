// import React from "react";
import style from "./signin.module.scss"
import { Link } from "react-router-dom";
// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";


export default function postSignin() {

  async function postSignIn(event, url='api/v1/users/signup/{username}/{password}'){
    event.preventDefault;
    const username= event.target[0].value;
    const password = event.target[1].value;
    console.log(event);


    const response = await fetch(`http://localhost:8080/api/v1/users/signup/${username}/${password}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    })
    console.log(response);

  }
    
  
  return (
    <>
      <main className={style.signin}>
      <h1 className={style.headline}>Registrer deg</h1>
      <form onSubmit={postSignin} className={style.form}>
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