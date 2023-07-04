import { Container } from "@mui/material";
import "./styles.scss";

export default function RestaurantPartnerRegister() {
    const bannerBgURL = 'https://images.pexels.com/photos/6287283/pexels-photo-6287283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    return (
        <div className="restaurant-partner-registration">
            <Container maxWidth="lg">
                <div className="title">
                    <h2 className="parent title-overlay">Partners</h2>
                    <h2 className="content global-title">You prepare the food, we handle the rest</h2>
                </div>
            </Container>

            <div className="banner-wrapper" style={{ background: `url("${bannerBgURL}")` }}></div>

            <Container maxWidth="lg">
                <div className="get-started-section">
                    <h2 className="title">List your restaurant or shop on foodpanda</h2>
                    <div className="content">
                        <p> Would you like millions of new customers to enjoy your amazing food and groceries? So would we!

                            It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!

                            Interested? Let's start our partnership today!
                        </p>
                    </div>
                    <div className="button-section">
                        <button>Get Started</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}