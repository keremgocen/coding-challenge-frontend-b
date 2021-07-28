import React from "react";
import { render, screen } from "@testing-library/react";
import SearchContainer from "./SearchContainer";

test("renders search container", () => {
  render(<SearchContainer message="search context" />);
  const search = screen.getByText(/search context/i);
  expect(search).toBeInTheDocument();
});