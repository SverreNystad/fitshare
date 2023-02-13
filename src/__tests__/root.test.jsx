import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root";

const router = createMemoryRouter([{
  path: "/",
  element: <Root />,
},])

describe("Root", () => {
  it("should render as expected", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("main")).toBeDefined();
  });
});
