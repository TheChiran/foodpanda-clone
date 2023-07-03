import { Container, Grid } from "@mui/material";
import "./styles.scss";
import CityView from "../../common/container/CityView/CityView";
import LocationSearch from "../../common/container/LocationSearch/Index";

export default function Home() {
  return (
    <section className="home-section">
      <Container maxWidth="lg" className="location-search-container">
        <LocationSearch/>
      </Container>
      <Container maxWidth="lg" className="city-container">
        <CityView />
      </Container>
    </section>
  );
}
