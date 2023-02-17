import React, { useState } from 'react';
import style from "./create_group.module.css"
import group from "../img/group.png"
import bike from "../img/bike.png"
import swim from "../img/swim.png"
import weight from "../img/weight.png"
import shoe from "../img/shoe.png"
import { Link } from "react-router-dom";

export default function Create_Group() {
  
  {/* Prøver her å få til funksjonalitet hvor knapper blir mørke når de er valgt, og blir lyse igjen når andre knapper er valgt */}
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButtonIndex(buttonIndex);
  };
  
  return (
    <>
        {/* Alle andre felter enn knappene */}
        
        <main className={style.create_group}>
        
        <h1>Opprett Gruppe</h1>
        <form method="post" className={style. form}>
        <text>Gi gruppen et navn:</text>
        <input type="text" className={style.field}/>
        <text>Legg til medlemmer:</text>
        <input type="text" className= {style. field}/>
        <text>Gi gruppen et treningsmål:</text>
        <input type="text" className={style. field}/>
        <text>Gi gruppen et treningsikon for hensikten med gruppen:</text>
        
        {/* Under følger koden for knappene med ikoner, samt opprett-knappen */}
        <div>
            <button
              type="button"
              className={`${style.dot} ${selectedButtonIndex === 0 ? style.dotselected : ''}`}
              onClick={() => handleButtonClick(0)}
            >
              <img src={group} alt="Community" className={style.icon} />
            </button>
            <button
              type="button"
              className={`${style.dot} ${selectedButtonIndex === 1 ? style.dotselected : ''}`}
              onClick={() => handleButtonClick(1)}
            >
              <img src={weight} alt="Strength" className={style.icon} />
            </button>
            <button
              type="button"
              className={`${style.dot} ${selectedButtonIndex === 2 ? style.dotselected : ''}`}
              onClick={() => handleButtonClick(2)}
            >
              <img src={shoe} alt="Running" className={style.icon} />
            </button>
            <button
              type="button"
              className={`${style.dot} ${selectedButtonIndex === 3 ? style.dotselected : ''}`}
              onClick={() => handleButtonClick(3)}
            >
              <img src={bike} alt="Cycling" className={style.icon} />
            </button>
            <button
              type="button"
              className={`${style.dot} ${selectedButtonIndex === 4 ? style.dotselected : ''}`}
              onClick={() => handleButtonClick(4)}
            >
              <img src={swim} alt="Swimming" className={style.icon} />
            </button>
        </div>
        <Link to="/groups">
        <button type="submit" className={style.submitfield}>OPPRETT</button>
        </Link>
        </form>

        </main>
    </>
  );
}
