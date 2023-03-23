import React, { useState, useEffect, useContext } from "react";
import { GoalItem } from "./GoalItem";
import style from "./GoalComponentStyles.module.css";
import { UserContext } from "../UserContext";

export function GoalList({ goalList, loading, setShowcasedGoal }) {
  return (
    <div>
      <h2 className={style.header}>Mine Mål</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={style.goalList}>
          {goalList?.map((goal) => (
            <GoalItem
              setShowcasedGoal={setShowcasedGoal}
              key={goal.id}
              goal={goal}
              className={style.goalItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
