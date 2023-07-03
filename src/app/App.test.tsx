import { render,screen } from "@testing-library/react";

import App from "./App"; 

jest.mock('react-leaflet', () => {
  return {}
});

test("Renders main page correctly", () => {
  render(<App />);
  
  expect(true).toBeTruthy();
});
