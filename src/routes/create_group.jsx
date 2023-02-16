import React from "react";
import style from "./create_group.module.css"
import img1 from "../img/group.png"

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
        <button type="button" className={style.dot}>Group</button>
        <button type="button" className={style.dot}>Weight</button>
        <button type="button" className={style.dot}>Shoe</button>
        <button type="button" className={style.dot}>Bike</button>
        <button type="button" className={style.dot}>Swim</button>
        </div>
        <button type="submit" className={style.submitfield}>OPPRETT</button>
        </form>

        </main>
    </>
  );
}
