import axios from "axios";
import { API_URLS } from "../../constants/API_URLS";

/*
  * Open Street map query params with explaination
    var searchQuery = "pizza";
    var limit = 10;
    var countryCodes = "us,gb";
    var viewbox = "-74.05,40.65,-73.85,40.85";
    var bounded = 1;
    var addressDetails = 1;
    var polygonGeoJSON = 1;
    var email = "your_email@example.com";
    var userAgent = "your_user_agent";

    var nominatimUrl = "https://nominatim.openstreetmap.org/search"
    + "?q=" + searchQuery
    + "&limit=" + limit
    + "&countrycodes=" + countryCodes
    + "&viewbox=" + viewbox
    + "&bounded=" + bounded
    + "&addressdetails=" + addressDetails
    + "&polygon_geojson=" + polygonGeoJSON
    + "&email=" + email
    + "&useragent=" + encodeURIComponent(userAgent);

    Query Details === >
    limit: Limit the number of search results to 10
    countrycodes: Limit results to the United States and United Kingdom
    viewbox: Limit results to a bounding box around New York City
    bounded: Only return results that are fully contained within the bounding box
    addressdetails: Include detailed address information in the search results
    polygon_geojson: Include the full GeoJSON geometry of each result, if available
    email: Provide your email address as a contact in case of problems
    useragent: Provide a user agent string for identification purposes
*/
export const openStreetAPI = axios.create({
    baseURL: API_URLS.openStreetAPIURL,
    headers: {
        "Content-Type": "application/json"
    }
});