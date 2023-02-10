import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Hello from "./routes/hello";
import "./index.css";
import ErrorPage from "./errorPage";

const router = createBrowserRouter([
  // beginning of page routing 
  // https://reactrouter.com/en/main/start/tutorial
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ path: "/hello", element: <Hello /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
