import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getGroupById } from "../api";
import { FeedComponent } from "../components/FeedComponent";
import style from "./group_feed.module.css";

export default function Group_Feed() {
  const params = useParams();
  const [group, setGroup] = useState({});
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getGroupById(params.id);
      setGroup(data);
      setSessions(data.sessions);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Feed for {group.name}</h1>
      <div>
        {sessions
          ? sessions.map((session) => (
              <FeedComponent key={session.id} sessionID={session} />
            ))
          : null}
      </div>
    </>
  );
}
