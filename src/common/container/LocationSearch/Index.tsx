import AddressSearch from "../../components/Address-Search/Index";
import "./styles.scss";

export default function LocationSearch() {
    return (
        <div className="location-search">
            <div className="contents">
                <h2 className="title">It's the food and groceries you love, delivered</h2>
                <AddressSearch onLocationAddressChange={()=>{}} enableExpedition/>
            </div>
        </div>
    );
}