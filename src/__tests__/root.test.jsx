import { render, screen } from "@testing-library/react";
import Root from "../routes/root";

describe("Root", () => {
  it("should render as expected", () => {
    render(<Root />);
  });
});
