export default interface IOpenStreetData {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    boundingbox: string[];
    lat: string;
    lon: string;
    display_name: string;
    class: string;
    type: string;
    importance: number;
    icon: string;
}

type statusWithValueNumber = 1 | 0;

export interface IOpenStreetAPIQuery {
    q: string;
    limit?: number;
    countrycodes?: string[];
    viewbox?: string[];
    bounded?: statusWithValueNumber;
    addressdetails?: statusWithValueNumber;
    polygon_geojson?: statusWithValueNumber;
    email?: string;
    useragent?: string;
}