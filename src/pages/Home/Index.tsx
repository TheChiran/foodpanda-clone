import { Container, Grid } from "@mui/material";
import "./styles.scss";
import CityView from "../../common/container/CityView/CityView";
import LocationSearch from "../../common/container/LocationSearch/Index";
import RestaurantPartnerRegister from "../../common/container/RestaurantPartnerRegister/Index";
import AppSection from "../../common/container/AppSection/Index";

export default function Home() {
  return (
    <section className="home-section">
      <Container maxWidth="lg" className="location-search-container">
        <LocationSearch/>
      </Container>
      <RestaurantPartnerRegister/>
      <Container maxWidth="lg" className="city-container">
        <CityView />
      </Container>
      <AppSection/>
    </section>
  );
}
