import React from "react";
import style from "./GoalComponentStyles.module.scss";

export function GoalItem({ goal, setShowcasedGoal }) {

  const handleClick = (e) => {
    e.preventDefault();
    setShowcasedGoal(goal)
    console.log('The goal was clicked.');
  }

  return (
    <div onClick={handleClick} className={style.goalItem}>
      <h3 className={style.goalText}>{goal.name}</h3>
      <p>{goal.description}</p>
    </div>
  );
}