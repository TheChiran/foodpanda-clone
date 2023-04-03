import * as Dialog from '@radix-ui/react-dialog';
import "./styles.scss";
import { MouseEventHandler, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
// import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import { LatLngExpression, LatLngTuple } from 'leaflet';

interface IProps {
    isOpen: boolean;
    onToggle: MouseEventHandler;
};

function LocationMarker({ markerPosition }: any) {
    const [locationMarkerposition, setLocationMarkerPosition] = useState<LatLngExpression | null>(null);
    const updateMarkerPosition = (event: any) => {
        const latlng = event.target.getCenter();
        const lat = latlng.lat;
        const lng = latlng.lng;

        setLocationMarkerPosition({ lat, lng });
    };

    const map = useMapEvents({
        drag(event: any) {
            updateMarkerPosition(event);
        },
        moveend(event: any) {
            updateMarkerPosition(event);
        }
    });

    if (locationMarkerposition === null && markerPosition === null) return null;
    if (locationMarkerposition !== null) return (<Marker position={locationMarkerposition} draggable>
        <Popup>You are here</Popup>
    </Marker>);

    return (<Marker position={{ lat: markerPosition[0], lng: markerPosition[1] }} draggable>
        <Popup>You are here</Popup>
    </Marker>);
};

export default function MapLocationSelectorModal({ isOpen, onToggle }: IProps) {
    const [markerPosition, setMarkerPosition] = useState<LatLngExpression | null>(null);

    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position: any) => {
                    const { latitude, longitude } = position.coords;
                    setMarkerPosition([latitude, longitude]);
                }, (error) => {
                    setMarkerPosition([23.8103, 90.4125]);
                });
            } else {
                alert("Sorry! Your browser dosen't support geolocation API!");
            }
        };

        getUserLocation();
    }, []);

    return (
        <Dialog.Root defaultOpen={false} open={isOpen} modal={true}>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" onClick={onToggle} />
                <Dialog.Content className="DialogContent">
                    <div className="title-section">
                        <h2 className="title">Is this your exact location?</h2>
                        <div className="close-btn" onClick={onToggle}>
                            <div className="material-icons">clear</div>
                        </div>
                    </div>
                    <TextField id="outlined-basic" label="Enter Full Address" variant="outlined"
                        fullWidth
                    />
                    <div className="location-map" style={{ width: '100%', height: '250px' }}>
                        {markerPosition !== null ? <MapContainer center={markerPosition as LatLngExpression} zoom={13} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LocationMarker markerPosition={markerPosition} />
                        </MapContainer> : null}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};