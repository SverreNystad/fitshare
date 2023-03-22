import React, { useState, useContext, useEffect } from "react";
import { Radio, Input, Button, Textarea } from "./Inputs";
import style from "./ViewGoal.module.scss";
import { CChartLine } from '@coreui/react-chartjs';
import { registerPR } from "../api";


export function GoalChart({ showcasedGoal, userId }) {
  
  useEffect(() => {
    console.log("showcasedGoal", showcasedGoal);
  }, [showcasedGoal]);
  
  const handleRegisterPR = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.currentValue = calculateMax(parseInt(data.weight), parseInt(data.reps)).toString();

    const res = await registerPR(
      userId,
      showcasedGoal.id,
      data.date,
      data.currentValue,

    );
    alert(`Registrert ny PR ${res}`);
  };


  const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    datasets: [
      {
        label: "Progresjon",
        backgroundColor: "rgba(0,0,0,0,0)",
        borderColor: "#a0dbcc",
        pointBackgroundColor: "fff",
        pointBorderColor: "#a0dbcc",
        data: [60, 65, 69, 75, 85, 90, 95, 100],

      },
    ],
  };

  function calculateMax(weight, reps) {
    let result = weight / ((1.0278) - (0.0278 * reps));
    let roundedResult = Math.ceil(result);
    return roundedResult;
  }


  return (
    <div className={style.container}>
      <h2 className={style.header}>{(showcasedGoal) ? showcasedGoal.name : "Velg et mål"}</h2>

      <div className={style.chartAndPR}>
        <CChartLine className={style.chart} type="line" data={chartData} />

        <form className={style.PR} onSubmit={handleRegisterPR}>

          <div>Registrer ny PR</div>
          <Input type="text" name="weight" placeholder="Vekt"></Input>
          <Input type="text" name="reps" placeholder="Reps"></Input>
          <Input type="date" name="date" placeholder="Dato"></Input>
          <Button type="submit">Registrer</Button>
        </form>

      </div>
      <div className={style.infoUnderChart}>
        <div>Beskrivelse av målet</div>
        <div className={style.backgroundBox}>{(showcasedGoal) ? showcasedGoal.description : "Velg et mål"}</div>
        
        <div className={style.numbersRow}>

        <div className={style.column}>Mål:
        <div className={style.backgroundBox}>{(showcasedGoal) ? showcasedGoal.targetValue : "Velg et mål"}</div>
        </div>
        
        <div className={style.column}>Enhet:
        <div className={style.backgroundBox}>{(showcasedGoal) ? showcasedGoal.targetUnit : "Velg et mål"}</div>
        </div>
      </div>

      <div className={style.column}>Frist for å nå målet:</div>
        <div className={style.backgroundBox}>{(showcasedGoal) ? showcasedGoal.dueDate : "Velg et mål"}</div>

    </div>
    </div>
  );
}

