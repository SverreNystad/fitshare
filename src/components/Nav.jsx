import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import style from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav id="navigation">
      <div className={style.navContainer}>
        <Link className={style.logo} to={"/"}>
          <img width="42px" src={logo} alt="Logo" />
          <span>FitShare</span>
        </Link>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link to={"/profile"}>Profil</Link>
          </li>
          <li className={style.li}>
            <Link to={"/friends"}>Venner</Link>
          </li>
          <li className={style.li}>
            <Link to={"/groups/mygroups"}>Grupper</Link>
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
