import React, { useState } from "react";
import { Radio, Input, Button, Textarea } from "../components/Inputs";
import style from "./viewgoal.module.scss";
import bikeImg from "../img/bike.png";
import shoeImg from "../img/shoe.png";
import swimImg from "../img/swim.png";
import weightImg from "../img/weight.png";
import { CChartLine } from '@coreui/react-chartjs';
import { registerPR } from "../api";



export default function NewPlan() {
  const [showcasedGoal, setShowcasedGoal] = useState({});
  const intensity = [
    { key: 0, name: "intensity", label: "Lett", value: "low" },
    { key: 1, name: "intensity", label: "Meduim", value: "medium" },
    { key: 2, name: "intensity", label: "Hard", value: "high" },
  ];
  const activity = [
    {
      key: 0,
      name: "type",
      img: weightImg,
      label: "Styrke",
      value: "power",
    },
    {
      key: 1,
      name: "type",
      img: shoeImg,
      label: "Løping",
      value: "running",
    },
    {
      key: 2,
      name: "type",
      img: bikeImg,
      label: "Sykling",
      value: "endurance",
    },
    {
      key: 3,
      name: "type",
      img: swimImg,
      label: "Svømming",
      value: "swimming",
    },
  ];

  const handleRegisterPR = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.PR=calculateMax(data.weight, data.reps);
    const res = await registerPR(
      data.userId,
      data.goalId,
      data.date,
      data.PR,

    );
    alert(`Registrert ny PR ${res.PR}`);
  };


  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Progresjon",
        backgroundColor: "rgba(0,0,0,0,0)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "fff",
        pointBorderColor: "#fff",
        data: [60, 65, 69, 75, 85, 90, 95, 100],

      },
    ],
  };

  function calculateMax(weight, reps) {
    return weight / ((1.0278) - (0.0278 * reps));
  }


  return (
    <div className={style.container}>
      <h1 className={style.header}>[Mål tittel]</h1>

      <div className={style.chartAndPR}>
        <CChartLine className={style.chart} type="line" data={chartData} />

        <form className={style.PR} onSubmit={handleSubmit}>

          <div>Registrer ny PR</div>
          <Input type="text" name="weight" placeholder="Vekt"></Input>
          <Input type="text" name="reps" placeholder="Reps"></Input>
          <Input type="date" name="date" placeholder="Dato"></Input>
          <Button type="submit">Registrer</Button>
        </form>



      </div>
      <div className={style.activityForm} onSubmit={handleSubmit}>


        <Input type="text" name="name" id="name" placeholder="Navn" />
        <Input
          type="number"
          name="duration"
          id="duration"
          placeholder="Varighet"
        />
        <div className={style.inputContainer}>
          <div>Intensitet:</div>
          {intensity.map((item) => (
            <Radio
              key={item.key}
              name={item.name}
              id={item.name}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
        <div className={style.inputContainer}>
          <div>Type økt:</div>
          {activity.map((item) => (
            <Radio
              key={item.key}
              name={item.name}
              id={item.name}
              value={item.value}
              img={item.img}
              alt={item.label}
            />
          ))}
        </div>
        <div className={style.inputContainer}>
          <div>Beskrivelse:</div>
          <Textarea name="description" id="description"></Textarea>
        </div>
        <Button type="submit">Send</Button>
      </div>
    </div>
  );
}
