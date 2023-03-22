import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import style from "./GroupComponentStyles.module.scss";
import { handleJoinGroup } from "../api";

export function GroupItem({ group }) {
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(false);

  function navigateToGroup(id) {
    navigate(`/group_feed/${id}`);
  }

  return (
    <div className={style.groupItem} >
      <h3 className={style.text} onClick={() => navigateToGroup(group.id)}>{group.name}</h3>
      <p>{group.description}</p>
      {isMember ? (
        <p>Du er nå medlem av denne gruppen!</p>
      ) : (
        <form onSubmit={handleJoinGroup}>
          <button type="submit" disabled={isMember}>
            Bli med
          </button>
        </form>
      )}
    </div>
  );
}
