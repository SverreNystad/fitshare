import React, { useState, useEffect, useContext } from "react";
import { GoalItem } from "./GoalItem";
import style from "./GoalComponentStyles.module.css";
import { UserContext } from "../UserContext";

export function GoalList({ goalList, loading, setShowcasedGoal }) {
  const [showcasedGoal, setShowcasedGoal] = useState({});

  useEffect(() => {
    console.log(showcasedGoal);
  }, [showcasedGoal]);

  return (
    <div>
      <h2 className={style.header}>Mine Mål</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (

        // <GoalChart 
        // showcasedGoal={showcasedGoal}>
        // </GoalChart>
        <ul className={style.goalList}>
          {goalList.map((goal) => (
            <GoalItem 
              setShowcasedGoal={setShowcasedGoal}
              key={goal.id}
              goal={goal}
              className={style.goalItem}
            // onClick={setShowcasedGoal(goal)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
