import React from "react";
import style from "./newplan.module.css";
import logo from "../../img/logo.png";

export default function NewPlan() {
  return (
    <div className={style.container}>
      <h2>Lag ny økt</h2>
      <form className={style.activityForm} action="#" method="post">
        <div className={style.inputContainer}>
          <label htmlFor="Navn">Navn</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="date">Dato</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="activity">Type økt:</label>
          <label>
            <input type="radio" name="activity" id="activity" />
            <span>Styrke</span>
          </label>
          <label>
            <input type="radio" name="activity" id="activity" />
            <span>Løping</span>
          </label>
          <label>
            <input type="radio" name="activity" id="activity" />
            <span>Sykling</span>
          </label>
          <label>
            <input type="radio" name="activity" id="activity" />
            <span>Svømming</span>
          </label>
          <ul>
            <li>ahwd</li>
            <li>ahwd</li>
            <li>ahwd</li>
            <li>ahwd</li>
          </ul>
        </div>
      </form>
    </div>
  );
}
