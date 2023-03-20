import React, { useState, useEffect, useContext } from "react";
import { GoalItem } from "./GoalItem";
import style from "./GoalComponentStyles.module.css";
import { UserContext } from "../UserContext";

export function GoalList() {
  const { user, setUser } = useContext(UserContext);
  const [goalList, setGoalList] = useState([]);
  const [showcasedGoal, setShowcasedGoal] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user.id == null) {
      fetch(`http://localhost:8080/api/v1/goals`)
        .then((res) => res.json())
        .then((data) => {
          setGoalList(data);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
    else {
      fetch(`http://localhost:8080/api/v1/goals/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setGoalList(data);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, []);

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
