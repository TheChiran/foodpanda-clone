import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles.scss";
import ReadMoreAccordionData from "./components/ReadMoreAccordionData/Index";

interface IProps {}

const WHY_CHOOSE_CONTENT_LIST = [
  `More options: food delivery from 2000+ restaurants in" 
    Dhaka, Chittagong and Sylhet in Bangladesh, as well as
    Bangladesh grocery delivery and more from shop partners.
    Order from cuisines ranging from fast food, to sushi, to
    cakes. Shop online for everything from fresh produce to
    electronics.`,
  `Easy search: filter by cuisine or location, or simply type
    in the name of the bsiness you want.`,
  `Various offers: indulge in the endless discounts and
    offers available from top restaurants and shops.`,
  `Payment options: Payment made easier with cash on delivery
    and online payment options`,
  `A simple 4-step food ordering process: Search → Choose →
    Pay → Enjoy`,
];

const GET_GROCERY_CONTENT_LIST = [
  "over 20,000 items.",
  "select your grocery store",
  "everyday affordable items delivered",
  "25 minute average delivery time",
];

export default function OrderFood({}: IProps) {
  return (
    <div className="order-food">
      <Container maxWidth="lg">
        <div className="order-food__contents">
          <h2 className="title">
            Order food from the best restaurants and shops with foodpanda
            Bangladesh
          </h2>
          <h3 className="description">
            Are you hungry? Did you have a long and stressful day? Interested in
            getting a cheesy pizza delivered to your office or looking to avoid
            the weekly shop? Then foodpanda Bangladesh is the right destination
            for you! foodpanda offers you a long and detailed list of the best
            restaurants and shops near you to help make your everyday easier.
            Our online food delivery service has it all, whether you fancy a
            juicy burger from Takeout, fresh sushi from Samdado or peri peri
            chicken from Nando's, foodpanda Bangladesh has over 2000 restaurants
            available from Dhaka to Chittagong through to Sylhet. Did you know
            you can order your groceries and more from foodpanda, too? Check out
            foodpanda shops for favourite partners like Unimart, Suborno,
            Shwapno, Bengal Meat, and much more. Sit back and relax – let
            foodpanda Bangladesh take the pressure off your shoulders.
          </h3>
          <div className="read-more-contents">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Read More</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ReadMoreAccordionData
                  title={"Why choose foodpanda?"}
                  contentList={WHY_CHOOSE_CONTENT_LIST}
                  divider
                />

                <ReadMoreAccordionData
                  title={"Choose from over 25 cuisines and order online now!"}
                  description={`From the first step of choosing your location to receiving
                  the food, foodpanda makes ordering the food you love easy.
                  Want some Indian, Mexican or Middle Eastern food? Take your
                  tastebuds on a journey around the world with the vast range
                  of cuisines available at your fingertips. Order your
                  favourite soup, salad, sandwich or dessert from the finest
                  restaurants in your area or affordable local favourites.
                  Choose home delivery to sit back and relax, or select
                  Pick-Up to self-collect when you're on the go. Let foodpanda
                  take care of it.`}
                />

                <ReadMoreAccordionData
                  title={
                    "Get grocery delivery in Bangladesh with foodpanda shops"
                  }
                  description={`Missing milk? Batteries? Detergent? foodpanda shops delivers
                  all your essential grocery items through the foodpanda app.
                  It's everyday online shopping made easy. Choose anything
                  from daily essentials to grocery to health to
                  pharmaceuticals and even electronics. Head to checkout and
                  our pandamart rider will be at your door in a flash.`}
                  contentList={GET_GROCERY_CONTENT_LIST}
                  divider
                />

                <ReadMoreAccordionData
                  title={"Home delivery via foodpanda's mobile app"}
                  description={`Even while on the move, you can order food online anytime and anywhere, thanks to the foodpanda mobile app for iOS, Android and Windows Phone devices. Simple, fast and convenient - it's the simplest online food ordering process in Bangladesh. With an impressive choice of restaurants and shops , foodpanda Bangladesh is confident you'll find just what you're looking for. Browse through the menus, make your choices, go to checkout and then sit back and wait for your order to arrive.`}
                />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
}
