import React, { useState, useEffect, useContext } from "react";
import { FeedItem } from "./FeedItem";
import style from "./FeedComponentStyles.module.css";
import { getSessionById, getSessions } from "../api";

export function FeedComponent({ sessionID }) {
  const [session, setSession] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await getSessionById(sessionID);
      setSession(data);
      setLoading(false);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div className={style.trainingItem}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={style.sessionComponent}>
          <FeedItem
            key={JSON.stringify(session.id)}
            session={session}
            className={style.sessionItem}
          />
        </div>
      )}
    </div>
  );
}
