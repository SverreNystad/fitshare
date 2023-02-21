import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext } from "./UserContext";
import Root from "./routes/root";
import Friends from "./routes/friends";
import ErrorPage from "./errorPage";
import Profile from "./routes/profile";
import Groups from "./routes/groups";
import Create_Group from "./routes/create_group";
import Signin from "./routes/signin";
import Login from "./routes/login";
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
      { path: "groups/new", element: <Create_Group /> },
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
