import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/hello"}>Hello, World!</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
