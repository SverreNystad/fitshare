import React, { useState, useEffect, useContext } from "react";
import { FeedItem } from "./FeedItem";
import style from "./FeedComponentStyles.module.css";
import { getSessions } from "../api";


export function FeedComponent() {

    const [sessionList, setSessionList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
          const sessions = await getSessions();
          setSessionList(sessions);
          setLoading(false);
    
        }
        getData();
    }, []);
    console.log(sessionList);




  return (
    <div className={style.trainingItem}>
        {loading ? (
        <p>Loading...</p>
        ) : (
        <ul className={style.sessionComponent}>
          {sessionList.map((session) => (
            <FeedItem
              key={JSON.stringify(session.id)}
              group={session}
              className={style.sessionItem}
              name= {session.name}
            />
          ))}
        </ul>
        )}
    </div>
  );
}
