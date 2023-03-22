import React, {useState, useEffect} from "react";
import { getSessions } from "../api";
import { FeedComponent } from "../components/FeedComponent";


export default function Main_Feed() {

    const [sessions, setSession] = useState([]);

  useEffect(() => {
    async function getData() {
      const session = await getSessions(sessions);
      setSession(session);
      console.log(session);
    }
    getData();

  }, []);

  return (
    <>
      <h1>Feed </h1>
      <div>
        {sessions.map((session) => (
            <FeedComponent sessionID={session.id}/>
        ))}
      </div>
    </>
  );
}
