import React from "react";
import { render } from "@testing-library/react";
import Grid from "./Grid";

it("has a Grid component", () => {
  const { getByText } = render(<Grid />);
  expect(getByText("Grid")).toBeInTheDocument();
});
