import React, { useState, useEffect, useContext } from "react";
import style from "./my_goals.module.css";
import { UserContext } from "../UserContext";
import white_arrow from "../img/white_arrow.png";
import { Link } from "react-router-dom";
import { GoalList } from "../components/GoalList";
import { GoalChart } from "../components/ViewGoal";
import { getGoals } from "../api";

export default function My_goals() {

  const [showcasedGoal, setShowcasedGoal] = useState({});

  useEffect(() => { console.log(showcasedGoal) }, [showcasedGoal])

  const { user, setUser } = useContext(UserContext);
  const [goalList, setGoalList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGoals().then((res) => {
      setGoalList(res);
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log("The showcased Goal: " + showcasedGoal);
  }, [showcasedGoal]);
  //hente alle personlige mål, usercontext.goals, hente ut alle mål til gruppene som man er med i

  return (
    <div className={style.goal}>
      <h1 className={style.header1}>Mine mål</h1>
      <div className={style.newgoalrow}>
        <h3 className={style.opprettgoaltext}>
          <Link to="/goals/newgoal" style={{ textDecoration: "none", color: "white" }}>
            Opprett nytt mål
          </Link>
        </h3>
        <button className={style.creategoalbutton}>
          <Link to="/goals/newgoal">
            <img src={white_arrow} alt="Her" className={style.icon} />
          </Link>
        </button>
      </div>
      <div>
        <GoalChart
          showcasedGoal={showcasedGoal}
          userId={user.id}
        />
        <GoalList
          goalList={user.goals}
          loading={loading}
          setShowcasedGoal={setShowcasedGoal} />
      </div>
    </div>
  );
}

