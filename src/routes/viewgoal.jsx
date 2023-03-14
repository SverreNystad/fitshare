import React from "react";
import { Radio, Input, Button, Textarea } from "../components/Inputs";
import style from "./plans/newplan.module.scss";
import bikeImg from "../img/bike.png";
import shoeImg from "../img/shoe.png";
import swimImg from "../img/swim.png";
import weightImg from "../img/weight.png";
import { CChartLine } from '@coreui/react-chartjs';



export default function NewPlan() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await postNewPlan(
      data.name,
      data.duration,
      data.intensity,
      data.type,
      data.description
    );
    alert(`Laget økten ${res.name}`);
  };

  
    const chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets:[
        {
          label: "My First dataset",
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          borderColor: "rgba(220, 220, 220, 1)",
          pointBackgroundColor: "rgba(220, 220, 220, 1)",
          pointBorderColor: "#fff",
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
        },
        {
          label: "My Second dataset",
          backgroundColor: "rgba(151, 187, 205, 0.2)",
          borderColor: "rgba(151, 187, 205, 1)",
          pointBackgroundColor: "rgba(151, 187, 205, 1)",
          pointBorderColor: "#fff",
          data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
        },
      ],
    };
  

  return (
    <div className={style.container}>
      <h1 className={style.header}>[Mål tittel]</h1>
      
      <CChartLine type="line" data={chartData.datasets} labels={chartData.labels} />
        
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
