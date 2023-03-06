import React from "react";
import style from "./GoalComponentStyles.module.css";

export function GoalItem({ goal }) {
  return (
    <div className={style.goalItem}>
      <h3>{goal.name}</h3>
      <p>{goal.description}</p>
    </div>
  );
}