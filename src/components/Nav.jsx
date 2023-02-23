import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { UserContext } from "../UserContext";
import style from "./Nav.module.scss";

export default function Nav() {
  const { user, setUser } = useContext(UserContext) || {}; // throws error if user is undefined "|| {}" fixes this https://stackoverflow.com/questions/48433008/js-es6-destructuring-of-undefined

  return (
    <nav id="navigation">
      <div className={style.navContainer}>
        <Link className={style.logo} to={"/"}>
          <img width="42px" src={logo} alt="Logo" />
          <span>FitShare</span>
        </Link>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link to={user ? "/profile" : "/login"}>Profil</Link>
          </li>
          <li className={style.li}>
            <Link to={"/friends"}>Venner</Link>
          </li>
          <li className={style.li}>
            <Link to={"/groups"}>Grupper</Link>
          </li>
          <li className={style.li}>
            <Link to={"/plans/new"}>Ny trening</Link>
          </li>
        </ul>
        <div>
          <span className={style.shortcut}>Snarveier</span>
          <ul className={style.ul}>
            <li className={style.li}>
              <Link to={"#"}>Progresjon</Link>
            </li>
            <li className={style.li}>
              <Link to={"/plans"}>Tidligere økter</Link>
            </li>
          </ul>
        </div>
        <Link className={style.login} to={"/login"}>
          Logg inn
        </Link>
      </div>
    </nav>
  );
}
