import React, { useState, useEffect } from "react";
import style from "./former_strength_plans.module.css"
import power from "../img/weight.png"
import running from "../img/shoe.png"
import endurance from "../img/bike.png"
import swimming from "../img/swim.png"

export function Activity(props){
  return (
    <div>
      <img 
        className={style.icon}
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
  console.log(imgName);
  switch (imgName) {
    case "power":
      return power;
    case "swimming":
      return swimming;
    case "endurance":
      return endurance;
    case "running":
      return running;
  
    default:
      break;
  }
}
export default function Plans(){

  const [sessionList, setSessionList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/sessions`)
      .then(res => res.json())
      .then(type => {
        setSessionList(type);
        setLoading(false);
      })
      .catch(error => console.error(error));
    }, []);

    useEffect(() => {
      console.log(sessionList);
      sessionList.map( (session) => {
        (session.type == "running") ? console.log("hei dette er running") : console.log("Den var: " + session.type); 
        (session.type == "power") ? console.log("hei dette var weight") : console.log("Den var: " + session.type);
        (session.type == "endurance") ? console.log("hei dette er cycling") : console.log("Den var: " + session.type); 
        (session.type == "swimming") ? console.log("hei dette er swimming") : console.log("Den var: " + session.type); 
      })
    }, [sessionList]);

  

  return (
    <>
      <div className={style.former_plans}>
        <h1 className={style.headline}>Tidligere økter</h1>
        <div className={style.session_container}>
        {sessionList.map ( (session) => {
          return <Activity type={session.type} name={session.name} intensity={session.intensity}/>
        })}
        </div>
      </div>
    </>
  );
}
