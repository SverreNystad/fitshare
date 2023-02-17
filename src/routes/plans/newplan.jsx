import React from "react";
import style from "./newplan.module.css";

export default function NewPlan() {
  const intensity = [
    { name: "intensity", value: "Lett" },
    { name: "intensity", value: "Meduim" },
    { name: "intensity", value: "Hard" },
  ];

  const activity = [
    { name: "activity", value: "Styrke" },
    { name: "activity", value: "Løping" },
    { name: "activity", value: "Sykling" },
    { name: "activity", value: "Svømming" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
  };

  return (
    <div className={style.container}>
      <h2>Lag ny økt</h2>
      <form className={style.activityForm} onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <label htmlFor="Navn">Navn</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="date">Varighet</label>
          <input type="number" name="duration" id="duration" />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="intensity">Intensitet:</label>
          {intensity.map((item) => (
            <Radio name={item.name} id={item.name} value={item.value} />
          ))}
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="activity">Type økt:</label>
          {activity.map((item) => (
            <Radio name={item.name} id={item.name} value={item.value} />
          ))}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

function Radio(props) {
  return (
    <label>
      <input type="radio" name={props.name} id={props.id} value={props.value} />
      <span>{props.value}</span>
    </label>
  );
}
