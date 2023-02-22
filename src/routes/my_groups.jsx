import React from "react";
import style from "./my_groups.module.scss";
import white_arrow from "../img/white_arrow.png";
import { Link } from 'react-router-dom';

export default function Groups() {
  return (
    
    <main className={style.groups}>
    <h1>Grupper</h1>
    <div className= {style.topbuttons}>
        <button className={style.topbutton}><Link to="/groups/activities">Aktiviteter</Link></button>
        <button className={style.topbutton}><Link to="/groups/challenges">Utfordringer</Link></button>
        <button className={style.selectedbutton}><Link to="/groups/mygroups">Mine Grupper</Link></button>
    </div>
    <div className={style.newgrouprow}>
      <text>Opprett ny gruppe</text>
    <button className={style.creategroupbutton}>
      <Link to="/groups/new">
        <img src={white_arrow} alt="Her" className={style.icon} />
      </Link>
    </button>
    </div>
    </main>
  );
}
