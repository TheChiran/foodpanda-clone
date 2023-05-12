import { Container, Grid } from "@mui/material";
import "./styles.scss";
import CityView from "../../common/container/CityView/CityView";

export default function Home() {
  return (
    <section className="home-section">
      <Container maxWidth="lg" className="city-container">
        <CityView />
      </Container>
    </section>
  );
}
