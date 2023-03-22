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

export function Select(props) {
  return (
    <select
      className={style.select}
      ref={props.reference}
      name={props.name}
      id={props.id}
    >
      {props.options.map((option, idx) => (
        <option key={idx} value={option.id || option}>
          {option.name || option}
        </option>
      ))}
    </select>
  );
}

export function Radio(props) {
  return (
    <label className={style.radioContainer}>
      <input type="radio" name={props.name} id={props.id} value={props.value} />
      {props.img ? (
        <img width="40px" src={props.img} alt={props.alt} />
      ) : (
        <span>{props.label}</span>
      )}
    </label>
  );
}

export function Textarea(props) {
  return (
    <textarea className={style.textarea} name={props.name} id={props.id}>
      {props.children}
    </textarea>
  );
}
