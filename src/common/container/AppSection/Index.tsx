import "./styles.scss"

import { Container } from "@mui/material"

import iosDownload from "./../../../assets/images/icons/ios-download.svg";
import googleDownload from "./../../../assets/images/icons/google-play.svg";

export default function AppSection(){
    return (
        <div className="app-section">
            <Container maxWidth="lg">
                <div className="title">
                    <h2 className="title-overlay">App</h2>
                    <h2 className="global-title">Put us in your pocket</h2> 
                </div>
            </Container>

            <div className="app-section-container-parent">
                <Container maxWidth="lg" className="app-section-contents-container">
                    <div className="app-section__contents">
                        <h2 className="title">Download the food and groceries you love</h2>
                        <p className="description">It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
                        <div className="app-download-links">
                            <a href="https://apps.apple.com/app/id758103884" target="_blank">
                                <img src={iosDownload} alt="Food panda app ios" />
                            </a>
                            
                            <a href="https://play.google.com/store/apps/details?id=com.global.foodpanda.android&referrer=adjust_reftag%3DcqNRJG18ldB27%26utm_source%3DWebsite%26utm_campaign%3DBD_Homepage_Android&pli=1" target="_blank">
                                <img src={googleDownload} alt="Food panda app google play" />
                            </a>

                        </div>
                    </div>

                    <div className="app-section__image-wrapper">
                            <img src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=2000&height=1590" alt="Image Banner" />
                    </div>
                </Container>
            </div>
        </div>
    )
}