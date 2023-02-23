import React from "react";
import style from "./my_groups.module.scss";
import white_arrow from "../img/white_arrow.png";
import { Link } from 'react-router-dom';
import logo from "/logo.png"

export default function Groups() {
    return (
      
      <div className={style.groups}>
      <h1 className={style.header1}>Grupper</h1>
      <div className= {style.topbuttons}>
        <button className={style.topbutton}><Link to="/groups/activities" style={{ textDecoration: 'none', color: 'black' }}>Aktiviteter</Link></button>
        <button className={style.selectedbutton}><Link to="groups/challenges" style={{ textDecoration: 'none', color: 'black' }}>Utfordringer</Link></button>
        <button className={style.topbutton}><Link to="/groups/mygroups" style={{ textDecoration: 'none', color: 'black' }}>Mine Grupper</Link></button>
      </div>
      <div>
      <button type="submit" className={style.activitybutton}>
          Utfodringer X Februar  
          <img src={logo} alt="Logo" className={style.challengeicon} />
        </button>

      </div>
      </div>
    );
  }