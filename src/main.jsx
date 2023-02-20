import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Friends from "./routes/friends";
import ErrorPage from "./errorPage";
import Profile from "./routes/profile";
import Groups from "./routes/groups";
import Create_Group from "./routes/create_group";
import Signin from "./routes/signin";
import Login from "./routes/login";
import Plans from "./routes/former_plans";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "friends", element: <Friends /> },
      { path: "groups", element: <Groups /> },
      { path: "plans", element: <Plans />},
      { path: "groups", element: <Groups />},
      {path: "groups/new", element:<Create_Group/>},
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
