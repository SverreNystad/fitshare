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
  const { user, setUser } = useContext(UserContext);
  const [goalList, setGoalList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { console.log(showcasedGoal) }, [showcasedGoal])


  useEffect(() => {
    getGoals(user.id).then((res) => {
      setGoalList(res);
    }).catch((err) => {
      console.log(err);
    });
    setLoading(false);
  }, [showcasedGoal]);

  useEffect(() => {
    console.log("The showcased Goal: " + showcasedGoal);
    console.log(showcasedGoal?.history);
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
      <div className={style.chartAndText}>
        <GoalChart
          showcasedGoal={showcasedGoal}
          userId={user.id}
        />
      </div>
      <div className={style.goalList}>
        <GoalList
          goalList={goalList}
          loading={loading}
          setShowcasedGoal={setShowcasedGoal} />
      </div>
    </div>
  );
}

