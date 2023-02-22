import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import style from "./profile.module.css"
import profile from "../img/profile.png"



export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const convetDate = new Date(user.birthday);
  const year = convetDate.getFullYear().toString();
  let month = (convetDate.getMonth() +1).toString();
  const date = convetDate.getDate().toString();

  if(month.length > 0){
    month = "0" + (convetDate.getMonth() +1).toString();
  }


  return (
    <>
      <div className={style.profile}>
        <h1>Profil</h1>
        <img src={profile} alt="Profile" className={style.icon} />
        <tr className={style.fields}>
          <tr>
            <td>Navn</td>
            <td><input type="text" className={style.field} placeholder={user.username}/></td>
          </tr>
          <tr>
            <td>Fødselsdato</td>
            <td><input type="text" className={style.field} placeholder={ year +"-"+ month +"-"+ date}/></td>
          </tr>
          <tr>
            <td>Biografi</td>
            <td><input type="text" className={style.field} placeholder={user.description}/></td>
          </tr>
        </tr>
      </div>
    </>
  );
}
