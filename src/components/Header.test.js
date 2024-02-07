import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("header", () => {
  render(<Header />);
  it("renders without crashing", () => {
    expect(screen.getByText("Fitness Tracker")).toBeInTheDocument();
  });
});
