import React from "react";
import style from "./GroupComponentStyles.module.scss";

export function GroupItem({ group }) {
  return (
    <div className={style.groupItem}>
      <h3>{group.name}</h3>
      <p>{group.description}</p>
    </div>
  );
}
