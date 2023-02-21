import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Profil</h1>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </>
  );
}
