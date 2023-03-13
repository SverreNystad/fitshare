// import React from "react";
import style from "./signin.module.scss";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { signIn } from "../api";

export default function Signin() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [passwordMessage, setPasswordMessage] = useState("");

  async function postSingIn(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const confirmPassword = event.target[2].value;

    if (password != confirmPassword) {
      setPasswordMessage("Passordet og bekreft passord er ulike.");
      return;
    }
    if (password.length < 8 || password == "") {
      setPasswordMessage("Passordet er mindre enn 8 tegn");
      return;
    }
    const res = await signIn(username, password);
    setUser(res);
    setPasswordMessage("");
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
          <div className={style.submitError}>{passwordMessage}</div>
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
