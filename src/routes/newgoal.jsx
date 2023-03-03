import React from "react";
import { Radio, Input, Button, Textarea } from "../components/Inputs";
import style from "./plans/newplan.module.scss";
import bikeImg from "../img/bike.png";
import shoeImg from "../img/shoe.png";
import swimImg from "../img/swim.png";
import weightImg from "../img/weight.png";

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
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/sessions/${data.name}/${data.duration}/${data.intensity}/${data.type}/${data.description}`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      ).then((res) => res.json());
      alert(`Laget økten ${res.name}`);
    } catch (error) {
      alert(`Oops! Det oppstod en feil, prøv igjen.\n\n${error}`);
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.header}>Lag et nytt mål</h1>
      <form className={style.activityForm} onSubmit={handleSubmit}>
        <Input type="text" name="name" id="name" placeholder="Navn" />
        <Input
        type="date"
        name="date"
        id="date"
        placeholder="Dato"
      />
        <div className={style.inputContainer}>
          <div>Kategori:</div>
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
        <Button type="submit">Opprett</Button>
      </form>
    </div>
  );
}
