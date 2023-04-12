import { openStreetAPI } from "../common/APIS/open-street.api";
import IOpenStreetData, { IOpenStreetAPIQuery, IOpenStreetAPIQueryWithLatLng } from "../types/openStreet.type";

class OpenStreetService {
    async search(query: IOpenStreetAPIQuery) {
        return openStreetAPI.get<IOpenStreetData[]>(`search?format=json&q=${query.q}&limit=${query.limit}&countrycodes=${query.countrycodes?.join(',')}&viewbox=${query.viewbox?.join(',')}&bounded=${query.bounded}&addressdetails=${query.addressdetails}&polygon_geojson=${query.polygon_geojson}`);
    }

    async searchWithLatLng(query: IOpenStreetAPIQueryWithLatLng) {
        return openStreetAPI.get<IOpenStreetData>(`reverse?format=jsonv2&lat=${query.lat}&lon=${query.lng}`);
    }
}

export default new OpenStreetService();