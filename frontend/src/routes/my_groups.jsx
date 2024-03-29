import React, { useState, useEffect } from "react";
import style from "./my_groups.module.scss";
import white_arrow from "../img/white_arrow.png";
import { Link } from "react-router-dom";
import { GroupList } from "../components/GroupList";

export default function Groups() {
  return (
    <div className={style.groups}>
      <h1 className={style.header1}>Grupper</h1>
      <div className={style.topbuttons}>
        <button className={style.topbutton}>
          <Link
            to="/groups/activities"
            style={{ textDecoration: "none", color: "black" }}
          >
            Aktiviteter
          </Link>
        </button>
        <button className={style.topbutton}>
          <Link
            to="/groups/challenges"
            style={{ textDecoration: "none", color: "black" }}
          >
            Utfordringer
          </Link>
        </button>
        <button className={style.selectedbutton}>
          <Link
            to="/groups/mygroups"
            style={{ textDecoration: "none", color: "black" }}
          >
            Mine Grupper
          </Link>
        </button>
      </div>
      <div className={style.newgrouprow}>
        <h3 className={style.opprettgruppetext}>
          <Link
            to="/groups/new"
            style={{ textDecoration: "none", color: "white" }}
          >
            Opprett ny gruppe
          </Link>
        </h3>
        <button className={style.creategroupbutton}>
          <Link to="/groups/new">
            <img src={white_arrow} alt="Her" className={style.icon} />
          </Link>
        </button>
      </div>
      <GroupList />
    </div>
  );
}
