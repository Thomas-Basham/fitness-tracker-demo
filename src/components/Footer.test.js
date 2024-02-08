import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  render(<Footer />);
  it("renders without crashing", () => {
    expect(screen.getByText("© Codex Academy July Cohort")).toBeInTheDocument();
  });
});
