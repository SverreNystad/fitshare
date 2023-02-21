import React from "react";
import style from "./former_plans.module.css"
import weight from "../img/weight.png"
import shoe from "../img/shoe.png"
import bike from "../img/bike.png"
import swim from "../img/swim.png"
import { Link } from "react-router-dom";

export default function Plans() {
  return (
    <>
      <main className={style.former_plans}>
        <h1 className={style.headline}>Tidligere økter</h1>
        <form method="post" className={style.form}>
        <div className={style.rows}>
          <img src={weight} alt="Strength" className={style.icon}/><Link to={"/plans/strength"} className={style.field}> Styrketrening </Link>
        </div>
        <div className={style.rows}>
          <img src={shoe} alt="Running" className={style.icon}/><Link to={"/plans/running"} className={style.field}> Løping </Link>
        </div>
        <div className={style.rows}>
          <img src={bike} alt="Cycling" className={style.icon}/><Link to={"/plans/cycling"} className={style.field}> Sykling </Link>
        </div>
        <div className={style.rows}>
          <img src={swim} alt="Swimming" className={style.icon}/><Link to={"/plans/swimming"} className={style.field}> Svømming </Link>
        </div>
        </form>
      </main>
    </>
  );
}