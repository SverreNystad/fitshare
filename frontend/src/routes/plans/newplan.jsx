import React from "react";
import { Radio, Input, Button, Textarea } from "../../components/Inputs";
import style from "./newplan.module.scss";
import bikeImg from "../../img/bike.png";
import shoeImg from "../../img/shoe.png";
import swimImg from "../../img/swim.png";
import weightImg from "../../img/weight.png";
import { postNewPlan } from "../../api";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

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

  //get userContext
  const { user } = useContext(UserContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.userName = user.username;
    const res = await postNewPlan(
      data.name,
      data.duration,
      data.intensity,
      data.type,
      data.description,
      data.userName
    );
    console.log(data);
    alert(`Laget økten ${res.name}`);
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
      </form>
    </div>
  );
}
