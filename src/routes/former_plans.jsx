import React from "react";
import style from "./former_plans.module.css"
import weight from "../img/weight.png"
import shoe from "../img/shoe.png"
import bike from "../img/bike.png"
import swim from "../img/swim.png"

export default function Plans() {
  return (
    <>
      <main className={style.former_plans}>
      <h1 className={style.headline}>Tidligere økter</h1>
      <form method="post" className={style.form}>
      <div className={style.rows}>
      <img src={weight} alt="Strength" className={style.icon}/><button type="text" className={style.field}> Styrketrening </button>
      </div>
      <div className={style.rows}>
      <img src={shoe} alt="Running" className={style.icon}/><button type="text" className={style.field}> Kondisjon </button>
      </div>
      <div className={style.rows}>
      <img src={bike} alt="Cycling" className={style.icon}/><button type="text" className={style.field}> Svømming </button>
      </div>
      <div className={style.rows}>
      <img src={swim} alt="Swimming" className={style.icon}/><button type="text" className={style.field}> Sykling </button>
      </div>
      </form>
      </main>
    </>
  );
}