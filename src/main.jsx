import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Friends from "./routes/friends";
import ErrorPage from "./errorPage";
import Profile from "./routes/profile";
import Groups from "./routes/groups";
import Signin from "./routes/signin";
import Login from "./routes/login";
import "./index.scss";

const router = createBrowserRouter([
  // beginning of page routing
  // https://reactrouter.com/en/main/start/tutorial
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "friends", element: <Friends /> },
      { path: "groups", element: <Groups /> },
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
