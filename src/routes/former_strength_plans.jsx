import React from "react";
import style from "./former_strength_plans.module.css"
import weight from "../img/weight.png"
import shoe from "../img/shoe.png"
import bike from "../img/bike.png"
import swim from "../img/swim.png"

export function Activity(props){
  return (
    <img 
      className={style.icon}
      type={props.type}
      src={props.image}  
      alt=""
    />
  );
}

export default function Strength_plans(){

  // fetch("localhost:8080/api/v1/sessions", {
  //   method: "GET" 

  // })
  
  async function postLogInData(event, url="localhost:8080/api/v1/sessions"){
    event.preventDefault();
  }
    
  
      

  return (
    <>
      <div className={style.former_plans}>
      <h1 className={style.headline}>Tidligere økter</h1>
      <form method="post" className={style.form}>
      </form>
      </div>
      <Activity type={"power"} image={weight} alt="Weight"/>
      <Activity type={"power"} image={swim} alt="Swim"/>
      <Activity type={"power"} image={bike} alt="Bike"/>
      <Activity type={"power"} image={shoe} alt="Shoe"/>
    </>
  );
}

// export default Strength_plans
