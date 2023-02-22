import React from 'react';
import style from "./GroupComponentStyles.module.scss";

export function GroupItem({ group }) {
  return (
    <div className={style.groupItem}>
      <h2>{group.name}</h2>
      <p>{group.description}</p>
    </div>
  );
}
