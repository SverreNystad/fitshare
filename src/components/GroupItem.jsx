import React from "react";
import { useNavigate } from "react-router";
import style from "./GroupComponentStyles.module.scss";

export function GroupItem({ group }) {
  const navigate = useNavigate();

  function navigateToGroup(id) {
    navigate(`/group_feed/${id}`);
  }

  return (
    <div className={style.groupItem} onClick={() => navigateToGroup(group.id)}>
      <h3>{group.name}</h3>
      <p>{group.description}</p>
    </div>
  );
}
