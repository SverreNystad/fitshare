import React from "react";
import style from "./FeedComponentStyles.module.css";

export function FeedItem({ session }) {
  return (
  <div className={style.sessionItem}>
    <h3>{session.name}</h3>
    <p>{session.duration}</p>
    <p>{session.intensity}</p>
    <p>{session.type}</p>
    <p>{session.description}</p>
  </div>
  );
}