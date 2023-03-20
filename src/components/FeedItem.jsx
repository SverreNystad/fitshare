import React from "react";
import style from "./FeedComponentStyles.module.css";
import {Button} from "./Inputs.jsx";

export function FeedItem({ session }) {
  return (
  <div className={style.sessionItem}>
    <h3>{session.userName}</h3>
    <div className={style.infoContainer}>
      <h3>{session.name}</h3>
      <p>Varighet: {session.duration}</p>
      <p> Intensitet: {session.intensity}</p>
      <p>Type: {session.type}</p>
    </div>
    
    <br></br>
    <div className={style.infoContainer}>
      <p> Beskrivelse: {session.description}</p>
    </div>

    <div className={style.button}>
      <Button type="submit" className={style.button}> Liker </Button>
    </div>

  </div>

  );
}