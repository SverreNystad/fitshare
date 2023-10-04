import React, { useState, useContext, useEffect } from "react";
import { Radio, Input, Button, Textarea } from "./Inputs";
import style from "./ViewGoal.module.scss";
import { CChartLine } from '@coreui/react-chartjs';
import { registerPR } from "../api";


export function GoalChart({ showcasedGoal, setShowcasedGoal, userId }) {
  const [changed, setChanged] = useState(false);
  const [chartData, setChartData] = useState(
    {
      labels: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt"],
      datasets: [
        {
          label: "Progresjon",
          backgroundColor: "rgba(0,0,0,0,0)",
          borderColor: "#a0dbcc",
          pointBackgroundColor: "fff",
          pointBorderColor: "#a0dbcc",
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],

        },
      ],
    }
  );
  useEffect(() => {
    if (showcasedGoal !== undefined) {
      if (showcasedGoal?.history?.workouts && showcasedGoal?.history?.dates) {
        setChartData({
          labels: showcasedGoal.history.dates,
          datasets: [
            {
              label: "Progresjon",
              backgroundColor: "rgba(0,0,0,0,0)",
              borderColor: "#a0dbcc",
              pointBackgroundColor: "fff",
              pointBorderColor: "#a0dbcc",
              data: showcasedGoal.history.workouts,

            },
          ],
        });
      }
    }
  }, [showcasedGoal]);

  useEffect(() => {
    if (showcasedGoal !== undefined) {
      if (showcasedGoal?.history?.workouts && showcasedGoal?.history?.dates) {
        setChartData({
          labels: showcasedGoal.history.dates,
          datasets: [
            {
              label: "Progresjon",
              backgroundColor: "rgba(0,0,0,0,0)",
              borderColor: "#a0dbcc",
              pointBackgroundColor: "fff",
              pointBorderColor: "#a0dbcc",
              data: showcasedGoal.history.workouts,

            },
          ],
        });
      }
    }
  }, [changed]);

  const handleRegisterPR = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.currentValue = calculateMax(parseInt(data.weight), parseInt(data.reps)).toString();

    const res = await registerPR(
      userId,
      showcasedGoal.id,
      data.date,
      data.currentValue,
    ).then((res) => {
      showcasedGoal.history.workouts.push(parseInt(data.currentValue));
      showcasedGoal.history.dates.push(data.date);
      setChanged(!changed);
    }
    ).catch((err) => console.log(err));
    // alert(`Registrert ny PR ${res}`);
  };

  function formatDate(dateString) {
    // console.log(dateString);
    const date = new Date(dateString);
    const niceFormat = date.toLocaleDateString('nb-NO', {
      // year: 'numeric',
      month: 'long',
      day: 'numeric',
      // hour: 'numeric',
      // minute: 'numeric',
      // second: 'numeric',
      timeZone: 'UTC'
    });
    return (dateString) ? "2. Juli 2023" : "Velg et mål";
    return niceFormat;
  }


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
          <Input type="number" name="weight" placeholder="Vekt"></Input>
          <Input type="number" name="reps" placeholder="Reps"></Input>
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
        <div className={style.backgroundBox}>{(showcasedGoal) ? formatDate(showcasedGoal.dueDate) : "Velg et mål"}</div>

      </div>
    </div>
  );
}

