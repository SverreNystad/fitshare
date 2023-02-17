import React from "react";
import style from "./Inputs.module.scss";

export function Button(props) {
  return (
    <button className={style.button} type={props.type}>
      {props.children}
    </button>
  );
}

export function Input(props) {
  return (
    <input
      className={style.input}
      type={props.type}
      name={props.name}
      id={props.name}
      placeholder={props.placeholder}
    />
  );
}

export function Radio(props) {
  return (
    <label>
      <input type="radio" name={props.name} id={props.id} value={props.value} />
      {props.img ? (
        <img width="32px" src={props.img} alt="ikon" />
      ) : (
        <span>{props.value}</span>
      )}
    </label>
  );
}
