import {useState} from "react";
import style from "./FeedComponentStyles.module.css";
import {Button} from "./Inputs.jsx";

export function FeedItem({ session }) {
  
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    
  <div className={style.sessionItem}>
    <h3>{session.userName}</h3>
    <div className={style.infoContainer}>
      <h3>{session.name}</h3>
      <p>Varighet: {session.duration}</p>
      <p> Intensitet: {session.intensity}</p>
      <p>Type: {session.type}</p>
    </div>
    
    <br></br>
    <div className={style.infoContainer}>
      <p> Beskrivelse: {session.description}</p>
    </div>

    <div className={style.button}>
      <Button className={style.button} onClick={handleClick}> Liker </Button>
      <p>Antall klikk: {count}</p>
    </div>
  </div>

  );
}