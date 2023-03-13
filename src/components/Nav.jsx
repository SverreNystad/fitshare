import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { UserContext } from "../UserContext";
import style from "./Nav.module.scss";
import groupLogo1 from "../img/group.png";
import groupLogo2 from "../img/group2.png";
import profileLogo from "../img/profile_black.png";
import dotImg from "../img/dot.png";
import runLogo from "../img/run.png";
import bookLogo from "../img/book.png";

export default function Nav() {
  const { user, setUser } = useContext(UserContext) || false;
  const [defined, setDefined] = useState(false);
  console.log(user);
  useEffect(() => {
    user ? setDefined(true) : setDefined(false);
  }, []);

  return (
    <nav id="navigation">
      <div className={style.navContainer}>
        <Link className={style.logo} to={"/"}>
          <img width="42px" src={logo} alt="Logo" />
          <span>FitShare</span>
        </Link>
        <ul className={style.ul}>
          <NavLi to={defined ? "/profile" : "/login"} img={profileLogo}>
            Profil
          </NavLi>
          {/* <NavLi to={"/friends"} img={groupLogo1}>
            Venner
          </NavLi> */}
          <NavLi to="/groups/mygroups" img={groupLogo2} alt="Grupper">
            Grupper
          </NavLi>
          <NavLi to={"/plans/new"} img={dotImg}>
            Ny trening
          </NavLi>
        </ul>
        <div>
          <span className={style.shortcut}>Snarveier</span>
          <ul className={style.ul}>
            <NavLi className={style.goal} to={defined ? "/goals" : "/login"} img={runLogo}>
              Mine mål
            </NavLi>
            <NavLi to={"/plans"} img={bookLogo}>
              Tidligere økter
            </NavLi>
          </ul>
        </div>
        <Link className={style.login} to={"/login"}>
          Logg inn
        </Link>
      </div>
    </nav>
  );
}

function NavLi(props) {
  return (
    <li className={style.li}>
      <Link to={props.to}>
        <img width="40px" src={props.img} alt={props.alt} />
        <span>{props.children}</span>
      </Link>
    </li>
  );
}
