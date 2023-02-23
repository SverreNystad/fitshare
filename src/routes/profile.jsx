import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import style from "./profile.module.css";
import profile from "../img/profile.png";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const convetDate = new Date(user.birthday);
  const year = convetDate.getFullYear().toString();
  let month = (convetDate.getMonth() + 1).toString();
  const date = convetDate.getDate().toString();

  if (month.length < 2) {
    month = "0" + (convetDate.getMonth() + 1).toString();
  }

  return (
    <>
      <div className={style.profile}>
        <h1>Profil</h1>
        <img src={profile} alt="Profile" className={style.icon} />
        <div className={style.fields}>
          <div className={style.inputContainer}>
            <span>Navn</span>
            <input
              type="text"
              disabled
              className={style.field}
              value={user.username}
            />
          </div>
          <div className={style.inputContainer}>
            <span>Fødselsdato</span>
            <input
              type="text"
              disabled
              className={style.field}
              value={year + "-" + month + "-" + date}
            />
          </div>
          <div className={style.inputContainer}>
            <span>Biografi</span>
            <input
              type="text"
              disabled
              className={style.field}
              value={user.description}
            />
          </div>
        </div>
      </div>
    </>
  );
}
