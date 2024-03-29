import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

export async function getGroups() {
  try {
    const res = await axios.get(baseURL + "/groups");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getGroupById(groupID) {
  try {
    const res = await axios.get(baseURL + `/groups/${groupID}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createGroups(name, goal, type) {
  try {
    const res = await axios.post(baseURL + `/groups/${name}/${goal}/${type}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSessions() {
  try {
    const res = await axios.get(baseURL + "/sessions");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSessionById(sessionID) {
  try {
    const res = await axios.get(baseURL + `/session/${sessionID}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addSessionToGroup(groupID, sessionID) {
  try {
    const res = await axios.post(
      baseURL + `/groups/${groupID}/session/${sessionID}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postNewPlan(name, dur, int, type, desc, userName) {
  try {
    const res = await axios.post(
      baseURL + `/sessions/${name}/${dur}/${int}/${type}/${desc}/${userName}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    alert(`Oops! Det oppstod en feil, prøv igjen.\n\n${error}`);
  }
}

export async function logIn(username, password) {
  try {
    const res = await axios.get(
      baseURL + `/users/login/${username}/${password}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function signIn(username, password) {
  try {
    const res = await axios.post(
      baseURL + `/users/signup/${username}/${password}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}


export async function registerPR(userId, goalId, date, currentValue) {
  try {
    const res = await axios.post(baseURL + `/user/${userId}/${goalId}/${date.toString()}/${currentValue}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getGoals(userId) {
  if (userId === undefined) {
    console.log("No user id provided");
    return;
  }
  try {
    const res = await axios.get(baseURL + `/goals/${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function handleJoinGroup(groupID, userID) {
  try {
    const res = await axios.post(
      baseURL + `/group/addUser/${groupID}/${userID}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
