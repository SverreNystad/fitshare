import React, { useState, useEffect } from "react";
import style from "./former_strength_plans.module.scss";
import power from "../img/weight.png";
import running from "../img/shoe.png";
import endurance from "../img/bike.png";
import swimming from "../img/swim.png";
import { getSessions } from "../api";

export function Activity(props) {
  return (
    <div className={style.icon}>
      <img
        type={props.type}
        src={getImageByName(props.type)}
        alt={getImageByName(props.type)}
      />
      <p>{props.name}</p>
      <p>{props.intensity}</p>
    </div>
  );
}

function getImageByName(imgName) {
  switch (imgName) {
    case "power":
      return power;
    case "swimming":
      return swimming;
    case "endurance":
      return endurance;
    case "running":
      return running;
  }
}
export default function Plans() {
  const [sessionList, setSessionList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const sessions = await getSessions();
      console.log(sessions);
      setSessionList(sessions);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      <div className={style.former_plans}>
        <h1 className={style.headline}>Tidligere økter</h1>
        <div className={style.session_container}>
          {sessionList.map((session, idx) => {
            return (
              <Activity
                key={idx}
                type={session.type}
                name={session.name}
                intensity={session.intensity}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
