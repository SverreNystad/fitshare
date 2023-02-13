import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Nav() {
  return (
    <nav>
      <div>
        <Link to={"/"}>
          <img width="42px" src={logo} alt="Logo" />
        </Link>
        <span>FitShare</span>
      </div>
      <ul>
        <li>
          <Link to={"/profile"}>Profil</Link>
        </li>
        <li>
          <Link to={"/friends"}>Venner</Link>
        </li>
        <li>
          <Link to={"/groups"}>Grupper</Link>
        </li>
        <li>
          <Link to={"/plans/new"}>Ny trening</Link>
        </li>
      </ul>
      <span>Snarveier</span>
      <ul>
        <li>
          <Link to={"#"}>Progresjon</Link>
        </li>
        <li>
          <Link to={"/plans"}>Tidligere økter</Link>
        </li>
      </ul>
    </nav>
  );
}
