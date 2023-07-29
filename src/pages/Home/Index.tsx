import { Container, Grid } from "@mui/material";
import "./styles.scss";
import CityView from "../../common/container/CityView/CityView";
import LocationSearch from "../../common/container/LocationSearch/Index";
import RestaurantPartnerRegister from "../../common/container/RestaurantPartnerRegister/Index";
import AppSection from "../../common/container/AppSection/Index";
import OrderFood from "../../common/container/OrderFood/Index";
import Footer from "../../common/components/Footer/Index";

export default function Home() {
  return (
    <section className="home-section">
      <Container maxWidth="lg" className="location-search-container">
        <LocationSearch />
      </Container>
      <RestaurantPartnerRegister
        headerName="Partners"
        title="You prepare the food, we handle the rest"
        contentTitle="List your restaurant or shop on foodpanda"
        contentDescription="Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
        It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
        Interested? Let's start our partnership today!"
        imgUrl="https://images.pexels.com/photos/6287283/pexels-photo-6287283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Container maxWidth="lg" className="city-container">
        <CityView />
      </Container>
      <AppSection />

      <RestaurantPartnerRegister
        headerName="Office"
        title="Take your office out to lunch"
        contentTitle="foodpanda for business"
        contentDescription="Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more."
        imgUrl="https://images.deliveryhero.io/image/foodpanda/home-corporate-bd.jpg?width=1400&height=896"
      />

      <OrderFood />
    </section>
  );
}
