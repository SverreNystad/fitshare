import React, { useState, useContext } from "react";
import { Radio, Input, Button, Textarea } from "./Inputs";
import style from "./ViewGoal.module.scss";
import { CChartLine } from '@coreui/react-chartjs';
import { registerPR } from "../api";


export function GoalChart({ showcasedGoal, userId }) {
  
  const handleRegisterPR = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    data.currentValue = calculateMax(data.weight, data.reps).toString();
    console.log(data);

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
    result = weight / ((1.0278) - (0.0278 * reps));
    roundedResult = Math.ceil(result);
    return roundedResult;
  }


  return (
    <div className={style.container}>
      <h1 className={style.header}>[Mål tittel]</h1>

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

    </div>
  );
}

