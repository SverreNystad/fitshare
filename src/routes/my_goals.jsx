import React, { useState, useEffect, useContext } from "react";
import style from "./my_goals.module.css";
import white_arrow from "../img/white_arrow.png";
import { Link } from "react-router-dom";
import { GoalList } from "../components/GoalList";
// import { UserContext } from "../UserContext";

export default function My_goals() {
  const goal = [
    { id: 1, name: "Group 1" },
    { id: 2, name: "Group 2" },
    { id: 3, name: "Group 3" },
  ];

  // const {user, setUser} = useContext(UserContext)
  // console.log(user.goal)
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
        <GoalList goal={goal} />
      </div>
    </div>
  );
}

