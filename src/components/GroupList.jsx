import React, { useState, useEffect } from "react";
import { GroupItem } from "./GroupItem";
import style from "./GroupComponentStyles.module.scss";
import { getGroups } from "../api";

export function GroupList() {
  const [groupList, setGroupList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await getGroups();
      setGroupList(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div>
      <h2 className={style.header}>Mine Grupper</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={style.groupsList}>
          {groupList?.map((group) => (
            <GroupItem
              key={JSON.stringify(group.id)}
              group={group}
              className={style.groupItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
