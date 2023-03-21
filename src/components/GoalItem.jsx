import React from "react";
import style from "./GoalComponentStyles.module.css";

export function GoalItem({ goal, setShowcasedGoal }) {
  return (
    <div onClick={setShowcasedGoal(goal)} className={style.goalItem}>
      <h3>{goal.name}</h3>
      <p>{goal.description}</p>
    </div>
  );
}