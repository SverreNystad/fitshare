import React, { useState, useEffect } from 'react';
import style from "./my_groups.module.scss";
import white_arrow from "../img/white_arrow.png";
import { Link } from 'react-router-dom';

export default function Groups() {

  const [groups, setGroups] = useState();
  
  
  useEffect(() => {
    getGroups();
    console.log(groups);
  }, []);

  // api/v1/groups

  async function getGroups() {
    const res = await fetch(
      `http://localhost:8080/api/v1/groups`
    ).then((groups) => groups.json());
    setGroups(res);
  }



  return (
    
    <div className={style.groups}>
    <h1 className={style.header1}>Grupper</h1>
    <div className= {style.topbuttons}>
        <button className={style.topbutton}><Link to="/groups/activities" style={{ textDecoration: 'none', color: 'black' }}>Aktiviteter</Link></button>
        <button className={style.topbutton}><Link to="/groups/challenges" style={{ textDecoration: 'none', color: 'black' }}>Utfordringer</Link></button>
        <button className={style.selectedbutton}><Link to="/groups/mygroups" style={{ textDecoration: 'none' , color: 'black'}}>Mine Grupper</Link></button>
    </div>
    <div className={style.newgrouprow}>
      <text className={style.opprettgruppetext}>Opprett ny gruppe</text>
    <button className={style.creategroupbutton}>
      <Link to="/groups/new">
        <img src={white_arrow} alt="Her" className={style.icon} />
      </Link>
    </button>
    </div>
    </div>
  );
}
