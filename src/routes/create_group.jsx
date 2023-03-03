import React, { useState } from "react";
import style from "./create_group.module.css";
import group from "../img/group.png";
import bike from "../img/bike.png";
import swim from "../img/swim.png";
import weight from "../img/weight.png";
import shoe from "../img/shoe.png";
import { useNavigate } from "react-router-dom";
import { createGroups } from "../api";

export default function Create_Group() {
  {
    /* Prøver her å få til funksjonalitet hvor knapper blir mørke når de er valgt, og blir lyse igjen når andre knapper er valgt */
  }
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [type, setType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = (buttonIndex) => {
    setSelectedButtonIndex(buttonIndex);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const users = event.target[1].value;
    const goal = event.target[2].value;

    if (type == "") {
      // make error message
      setErrorMessage("Du må velge hensikt også for gruppen");
      return;
    }
    if (name == "") {
      setErrorMessage("Du må velge et navn for gruppen");
      return;
    }
    if (goal == "") {
      setErrorMessage("Du må velge et mål for gruppen");
      return;
    }
    console.log("name: " + name + " goal:" + goal + " type: " + type);

    const data = await createGroups(name, goal, type);
    navigate("/groups/mygroups");
  }

  return (
    <>
      {/* Alle andre felter enn knappene */}

      <div className={style.create_group}>
        <h1>Opprett Gruppe</h1>
        <form method="post" className={style.form} onSubmit={handleSubmit}>
          <span>Gi gruppen et navn:</span>
          <input type="text" className={style.field} />
          <span>Legg til medlemmer:</span>
          <input type="text" className={style.field} />
          <span>Gi gruppen et treningsmål:</span>
          <input type="text" className={style.field} />
          <span>Gi gruppen et treningsikon for hensikten med gruppen:</span>

          {/* Under følger koden for knappene med ikoner, samt opprett-knappen */}
          <div>
            <button
              type="button"
              className={`${style.dot} ${
                selectedButtonIndex === 0 ? style.dotselected : ""
              }`}
              onClick={() => {
                handleButtonClick(0);
                setType("group");
              }}
            >
              <img src={group} alt="Community" className={style.icon} />
            </button>
            <button
              type="button"
              className={`${style.dot} ${
                selectedButtonIndex === 1 ? style.dotselected : ""
              }`}
              onClick={() => {
                handleButtonClick(1);
                setType("power");
              }}
            >
              <img src={weight} alt="Strength" className={style.icon} />
            </button>
            <button
              type="button"
              className={`${style.dot} ${
                selectedButtonIndex === 2 ? style.dotselected : ""
              }`}
              onClick={() => {
                handleButtonClick(2);
                setType("running");
              }}
            >
              <img src={shoe} alt="Running" className={style.icon} />
            </button>
            <button
              type="button"
              className={`${style.dot} ${
                selectedButtonIndex === 3 ? style.dotselected : ""
              }`}
              onClick={() => {
                handleButtonClick(3);
                setType("cycling");
              }}
            >
              <img src={bike} alt="Cycling" className={style.icon} />
            </button>
            <button
              type="button"
              className={`${style.dot} ${
                selectedButtonIndex === 4 ? style.dotselected : ""
              }`}
              onClick={() => {
                handleButtonClick(4);
                setType("swimming");
              }}
            >
              <img src={swim} alt="Swimming" className={style.icon} />
            </button>
          </div>
          <button type="submit" className={style.submitfield}>
            OPPRETT
          </button>
        </form>
        <div className={style.submitError}>{errorMessage}</div>
      </div>
    </>
  );
}

//api/v1/groups/{name}/{goal}/{type}
