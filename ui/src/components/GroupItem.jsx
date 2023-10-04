import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import style from "./GroupComponentStyles.module.scss";
import { UserContext } from "../UserContext";

import { handleJoinGroup } from "../api";

export function GroupItem({ group }) {
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {

    if (group.users) {
      if (group.users.includes(user.id)) {
        setIsMember(true);
      }
    }
  }, []);

  useEffect(() => {
    if (group.users) {
      if (group.users.includes(user.id)) {
        setIsMember(true);
      }
    }
  }, [isMember]);
  function navigateToGroup(id) {
    navigate(`/group_feed/${id}`);
  }

  function joinGroup(event) {
    event.preventDefault();
    handleJoinGroup(group.id, user.id).then((res) => {
      console.log(res);
      console.log("Du er medlem av gruppen");
      setIsMember(true);
    });
  }

  return (
    <div className={style.groupItem} >

      <div>
        <h3 className={style.text} onClick={() => { navigateToGroup(group.id) }}>{group.name}</h3>
        <p >{group.description}</p>
      </div>

      {isMember ? (
        <div className={style.joinedButton}>
          <p className={style.boxedtext}>Du er medlem av denne gruppen!</p>
        </div>
      ) : (
        <div className={style.button}>
          <form onSubmit={joinGroup}>
            <button className={style.button} type="submit" disabled={isMember}>
              Bli med
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
