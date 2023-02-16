import React from "react";
import style from "./create_group.module.css"
import group from "../img/group.png"
import bike from "../img/bike.png"
import swim from "../img/swim.png"
import weight from "../img/weight.png"
import shoe from "../img/shoe.png"

export default function Create_Group() {
  return (
    <>
        <main className={style.create_group}>
        <h1>Opprett Gruppe</h1>
        <form method="post" className={style. form}>
        <text>Gi gruppen et navn:</text>
        <input type="text" className={style.field}/>
        <text>Legg til medlemmer:</text>
        <input type="text" className= {style. field}/>
        <text>Gi gruppen et treningsmål:</text>
        <input type="text" className={style. field}/>
        <text>Gi gruppen et treningsikon for hensikten med gruppen:</text>
        
        
        <div>
        <button type="button" className={style.dot}><img src={group} alt="Community" className={style.icon} /></button>
        <button type="button" className={style.dot}><img src={weight} alt="Strength" className={style.icon} /></button>
        <button type="button" className={style.dot}><img src={shoe} alt="Running" className={style.icon} /></button>
        <button type="button" className={style.dot}><img src={bike} alt="Cycling" className={style.icon} /></button>
        <button type="button" className={style.dot}><img src={swim} alt="Swimming" className={style.icon} /></button>
        </div>
        <button type="submit" className={style.submitfield}>OPPRETT</button>
        </form>

        </main>
    </>
  );
}
