import { openStreetAPI } from "../common/APIS/open-street.api";
import IOpenStreetData, { IOpenStreetAPIQuery } from "../types/openStreet.type";

class OpenStreetService {
    async search(query: IOpenStreetAPIQuery) {
        return openStreetAPI.get<IOpenStreetData[]>(`search?format=json&q=${query.q}&limit=${query.limit}&countrycodes=${query.countrycodes?.join(',')}&viewbox=${query.viewbox?.join(',')}&bounded=${query.bounded}&addressdetails=${query.addressdetails}&polygon_geojson=${query.polygon_geojson}`);
    }
}

export default new OpenStreetService();