import React from "react";
import { Radio, Input, Button } from "../../components/Inputs";
import style from "./newplan.module.scss";
import logo from "../../img/logo.png";

export default function NewPlan() {
  const intensity = [
    { key: 0, name: "intensity", value: "Lett" },
    { key: 1, name: "intensity", value: "Meduim" },
    { key: 2, name: "intensity", value: "Hard" },
  ];

  const activity = [
    { key: 0, name: "activity", img: logo, value: "Styrke" },
    { key: 1, name: "activity", img: logo, value: "Løping" },
    { key: 2, name: "activity", img: logo, value: "Sykling" },
    { key: 3, name: "activity", img: logo, value: "Svømming" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
  };

  return (
    <div className={style.container}>
      <h1 className={style.header}>Lag ny økt</h1>
      <form className={style.activityForm} onSubmit={handleSubmit}>
        <Input type="text" name="name" id="name" placeholder="Navn" />
        <Input
          type="number"
          name="duration"
          id="duration"
          placeholder="Varighet"
        />
        <div>
          <div>Intensitet:</div>
          {intensity.map((item) => (
            <Radio
              key={item.key}
              name={item.name}
              id={item.name}
              value={item.value}
            />
          ))}
        </div>
        <div>
          <div>Type økt:</div>
          {activity.map((item) => (
            <Radio
              key={item.key}
              name={item.name}
              id={item.name}
              value={item.value}
              img={item.img}
            />
          ))}
        </div>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
