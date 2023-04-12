import * as Dialog from '@radix-ui/react-dialog';
import "./styles.scss";
import { MouseEventHandler, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
// import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Control, ControlOptions, ControlPosition, LatLngExpression, LatLngTuple } from 'leaflet';
import L from 'leaflet';
import React from 'react';

interface IProps {
    isOpen: boolean;
    onToggle: MouseEventHandler;
};

interface CustomButtonProps {
    position?: string;
    className?: string;
}

function RestaurantFinder({ position = 'topright', className = 'foodpanda-leaflet-position' }: CustomButtonProps) {
    const map = useMap();

    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const container = L.DomUtil.create('div', 'restaurant-finder-container');
        containerRef.current?.appendChild(container);

        const button = L.DomUtil.create('button', 'leaflet-bar leaflet-control');
        button.innerHTML = 'Find restaurants';
        button.className = 'restaurant-finder-btn';

        L.DomEvent.disableClickPropagation(button);
        L.DomEvent.on(button, 'click', () => { console.log('clicked finder') });

        container.appendChild(button);

        const customControl = Control.extend({
            options: {
                position,
                className: `leaflet-${position.split('')[0]} ${className}`
            },
            onAdd: function () {
                return containerRef.current as HTMLElement;
            }
        });

        const controlInstance = new customControl();
        controlInstance.addTo(map);

        if (controlInstance && controlInstance.getContainer()) {
            controlInstance?.getContainer()!.parentElement!.classList.add('restaurant-finder');
        }

        return () => {
            map.removeControl(controlInstance);
            containerRef.current?.removeChild(container);
        };
    }, [className, map, position]);

    return <div ref={containerRef} />;
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
            const restaurantFinderSearchElem = document.getElementsByClassName('restaurant-finder-container') as HTMLCollectionOf<HTMLElement>;
            if (restaurantFinderSearchElem) {
                restaurantFinderSearchElem[0].style.opacity = '0';
            }

            updateMarkerPosition(event);
        },
        moveend(event: any) {
            const restaurantFinderSearchElem = document.getElementsByClassName('restaurant-finder-container') as HTMLCollectionOf<HTMLElement>;
            if (restaurantFinderSearchElem) {
                restaurantFinderSearchElem[0].style.opacity = '1';
            }

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
                    <div className="location-map" style={{ width: '100%', height: '350px' }}>
                        {markerPosition !== null ? <MapContainer center={markerPosition as LatLngExpression} zoom={13} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LocationMarker markerPosition={markerPosition} />
                            <RestaurantFinder />
                        </MapContainer> : null}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};