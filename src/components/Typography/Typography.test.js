import React from "react";
import { render } from "@testing-library/react";
import Typography from "./Typography";

it("has a Typography component", () => {
  const { getByText } = render(<Typography />);
  expect(getByText("Typography")).toBeInTheDocument();
});
