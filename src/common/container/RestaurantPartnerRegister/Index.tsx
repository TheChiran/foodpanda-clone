import { Container } from "@mui/material";
import "./styles.scss";

type IProps = {
  title: string;
  headerName: string;
  imgUrl: string;
  contentTitle: string;
  contentDescription: string;
  contentUrl?: string;
};

export default function RestaurantPartnerRegister({
  headerName,
  title,
  imgUrl,
  contentTitle,
  contentDescription,
  contentUrl,
}: IProps) {
  const bannerBgURL =
    "https://images.pexels.com/photos/6287283/pexels-photo-6287283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="restaurant-partner-registration">
      <Container maxWidth="lg">
        <div className="title">
          <h2 className="parent title-overlay">{headerName}</h2>
          <h2 className="content global-title">{title}</h2>
        </div>
      </Container>

      <div
        className="banner-wrapper"
        style={{ background: `url("${imgUrl}")` }}
      >
        <Container maxWidth="lg">
          <div className="get-started-section">
            <h2 className="title">{contentTitle}</h2>
            <div className="content">
              <p> {contentDescription}</p>
            </div>
            <div className="button-section">
              <button>Get Started</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
