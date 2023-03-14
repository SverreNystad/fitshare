import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext } from "./UserContext";
import Root from "./routes/root";
import Friends from "./routes/friends";
import ErrorPage from "./errorPage";
import Profile from "./routes/profile";
import My_Groups from "./routes/my_groups";
import Create_Group from "./routes/create_group";
import Signin from "./routes/signin";
import Login from "./routes/login";
import Groups from "./routes/my_groups";
import Groups_Activities from "./routes/activities";
import Groups_Challenges from "./routes/challenges";
import Plans from "./routes/former_strength_plans";
import NewPlan from "./routes/plans/newplan";
import My_goals from "./routes/my_goals";
import NewGoal from "./routes/newgoal";
import ViewGoal from "./routes/viewgoal",

import "./index.scss";
// import Strength_plans from "./routes/former_strength_plans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Plans /> },
      { path: "profile", element: <Profile /> },
      { path: "friends", element: <Friends /> },
      { path: "groups", element: <Groups /> },
      { path: "groups/mygroups", element: <My_Groups /> },
      { path: "groups/new", element: <Create_Group /> },
      { path: "groups/activities", element: <Groups_Activities /> },
      { path: "groups/challenges", element: <Groups_Challenges /> },
      { path: "plans", element: <Plans /> },
      { path: "plans/new", element: <NewPlan /> },
      { path: "goals", element: <My_goals /> },
      { path: "goals/newgoal", element: <NewGoal /> },
      { path: "goals/viewgoal", element: <ViewGoal /> }
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function Main() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("USER"));
    if (storedUser) setUser(storedUser);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("USER", JSON.stringify(user));
  }, [user, setUser]);

  return (
    <React.StrictMode>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
