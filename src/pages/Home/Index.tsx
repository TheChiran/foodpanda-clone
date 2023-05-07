import City from "../../common/components/City/Index";
import { Container, Grid } from "@mui/material";
import "./styles.scss";

export default function Home() {
  return (
    <section className="home-section">
      <Container maxWidth="lg" className="city-container">
        <Grid item lg={12} md={12} xs={12}>
          <h2 className="city-title">Find us in these cities and many more!</h2>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <div className="city-list">
            <City name="Dhaka" urlPathName="dhaka" />
            <City name="Pabna" />
            <City name="Pabna" />
            <City name="Pabna" />
            <City name="Pabna" />
            <City name="Pabna" />
          </div>
        </Grid>
      </Container>
    </section>
  );
}
