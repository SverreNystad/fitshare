import React from "react";
import { FeedComponent } from "../components/FeedComponent";
import style from "./group_feed.module.css";



export default function Group_Feed(){

    const session = [
        { id: 1, name: "Session 1" },
        { id: 2, name: "Session 2" },
        { id: 3, name: "Session 3" },
      ];

    return (
        <>
            <h1>Feed</h1>
            <div>
                <FeedComponent session={session} />
            </div>


        </>
      );

}