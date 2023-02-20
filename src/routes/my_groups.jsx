import React from "react";
import style from "./my_groups.module.scss"
import white_arrow from "../img/white_arrow.png"

export default function Groups() {
  return (
    
    <main className={style.groups}>
    <h1>Grupper</h1>
    <div className= {style.topbuttons}>
      <button className={style.topbutton}>Aktiviteter</button>
      <button className={style.topbutton}>Utfordringer</button>
      <button className={style.topbutton}>Mine grupper</button>
    </div>
    <div className={style.newgrouprow}>
      <text>Opprett ny gruppe</text>
      <button className={style.creategroupbutton}><img src={white_arrow} alt="Her" className={style.icon} /></button>
    </div>
    </main>
  );
}
