import React from "react";
import style from "./GoalComponentStyles.module.css";

export function GoalItem({ goal, setShowcasedGoal }) {

  const handleClick = (e) => {
    e.preventDefault();
    setShowcasedGoal(goal)
    console.log('The goal was clicked.');
  }

  return (
    <div onClick={handleClick} className={style.goalItem}>
      <h3 onClick={console.log("I WAS CLICKED")}>{goal.name}</h3>
      <p>{goal.description}</p>
    </div>
  );
}