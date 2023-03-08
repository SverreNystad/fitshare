import React, { useState, useEffect } from "react";
import { GoalItem } from "./GoalItem";
import style from "./GoalComponentStyles.module.css";

export function GoalList() {
  const [goalList, setGoalList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/goals`)
      .then((res) => res.json())
      .then((data) => {
        setGoalList(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className={style.header}>Mine Mål</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={style.goalList}>
          {goalList.map((goal) => (
            <GoalItem
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
