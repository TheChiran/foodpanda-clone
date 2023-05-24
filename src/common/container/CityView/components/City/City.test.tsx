import { render,screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import City, { ICityProps } from "./Index";

const cityTestValue: ICityProps = {
  name: "Dhaka",
  urlPathName: "path-dhaka",
  imgUrl: "dhaka-img-url"
};

test("Renders city name with test title", () => {
  render(<MemoryRouter><City name="Test title"/></MemoryRouter>);
  
  const title = screen.getByText(/test title/i);
  expect(title).toBeInTheDocument();
});

test("Render city with all accurate values", ()=>{
  render(
  <MemoryRouter>
    <City name={cityTestValue.name} urlPathName={cityTestValue.urlPathName} imgUrl={cityTestValue.imgUrl}/>
  </MemoryRouter>);

  expect(screen.getByAltText(/dhaka/i)).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveAttribute("href",`/city/${cityTestValue.urlPathName}`);
  expect(screen.getByRole('img')).toHaveAttribute('src',`${cityTestValue.imgUrl}`);
});
