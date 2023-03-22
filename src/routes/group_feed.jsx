import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { addSessionToGroup, getGroupById, getSessions } from "../api";
import { FeedComponent } from "../components/FeedComponent";
import { Button, Select } from "../components/Inputs";
import style from "./group_feed.module.css";

export default function Group_Feed() {
  const params = useParams();
  const [group, setGroup] = useState({});
  const [groupSessions, setGroupSessions] = useState([]);
  const [sessions, setSessions] = useState([]);
  const selectedSession = useRef();

  useEffect(() => {
    async function getData() {
      const currentGroup = await getGroupById(params.id);
      const sessions = await getSessions();
      setGroup(currentGroup);
      setGroupSessions(currentGroup.sessions);
      setSessions(sessions);
    }
    getData();
  }, []);

  async function handleAddSessionToGroup(event) {
    event.preventDefault();
    await addSessionToGroup(group.id, selectedSession.current.value);
    console.log(`gruppe: ${group.id}; økt: ${selectedSession.current.value}`);
    const currentGroup = await getGroupById(params.id);
    setGroup(currentGroup);
    setGroupSessions(currentGroup.sessions);
  }

  return (
    <>
      <h1>Feed for {group.name}</h1>
      <form onSubmit={handleAddSessionToGroup} style={{ marginBottom: "4em" }}>
        <Select
          reference={selectedSession}
          name={"session"}
          id={"session"}
          options={sessions}
        />
        <Button type="submit">Legg ut</Button>
      </form>
      {groupSessions
        ? groupSessions.map((sessionID) => (
            <FeedComponent key={sessionID} sessionID={sessionID} />
          ))
        : null}
    </>
  );
}
