import "./styles.scss";

import fb from "./../../../assets/images/icons/facebook.svg";
import instagram from "./../../../assets/images/icons/instagram.svg";
import foodPanda from "./../../../assets/images/icons/foodpanda-logo.svg";

import { Container } from "@mui/material";

const LINK_GROUP_LINKS_LIST1 = [
  "Press",
  "Help center",
  "Terms and conditions",
  "Privacy policy",
  "Refund Account Terms & Conditions",
  "Cashback Program",
  "Pandapro subscription",
];

const LINK_GROUP_LINKS_LIST2 = [
  "Dine-In",
  "Security",
  "Partner with us",
  "Download foodpanda Apps",
  "Careers",
  "Corporate Customer",
];

const LINK_GROUP_LINKS_LIST3 = [
  "pandago-Request a rider",
  "foodpanda Deals",
  "Grocery delivery",
  "Become an affliate",
  "All cities",
];

const LOCATION_LIST = [
  "Myanmar",
  "Laos",
  "Hong Kong",
  "Pakistan",
  "Singapore",
  "Malaysia",
  "Philippines",
  "Thailand",
  "Taiwan",
  "Cambodia",
];

export default function Footer() {
  return (
    <Container maxWidth="lg">
      <footer className="footer">
        <div className="footer__social-media">
          <div className="logo">
            <img src={foodPanda} alt="" />
          </div>
          <div className="social-media-list">
            <div className="media">
              <img src={fb} alt="" />
            </div>
            <div className="media">
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
        <div className="footer__others">
          <div className="credit">
            &copy; {new Date().getFullYear()} foodpanda
          </div>

          <ul className="link-group">
            {LINK_GROUP_LINKS_LIST1.map((link) => {
              return <li>{link}</li>;
            })}
          </ul>

          <ul className="link-group">
            {LINK_GROUP_LINKS_LIST2.map((link) => {
              return <li>{link}</li>;
            })}
          </ul>

          <ul className="link-group">
            {LINK_GROUP_LINKS_LIST3.map((link) => {
              return <li>{link}</li>;
            })}
          </ul>
        </div>

        <ul className="footer__available-location-list">
          {LOCATION_LIST.map((location) => {
            return <li>{location}</li>;
          })}
        </ul>
      </footer>
    </Container>
  );
}
