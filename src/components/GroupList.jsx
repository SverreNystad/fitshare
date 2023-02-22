import React, { useState, useEffect } from 'react';
import { GroupItem } from './GroupItem';
import style from "./GroupComponentStyles.module.scss";

export function GroupList() {
  const [groupList, setGroupList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/groups`)
      .then(res => res.json())
      .then(data => {
        setGroupList(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div >
      <h1 className={style.header}>Group List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={style.groupsList}>
          {groupList.map(group => (
            <GroupItem key={group.id} group={group} className={style.groupItem}/>
          ))}
        </ul>
      )}
    </div>
  );
}



