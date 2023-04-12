import "./styles.scss";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { MouseEvent, useRef, useState } from "react";
import openStreetService from "../../../services/open-street.service";
import IOpenStreetData from "../../../types/openStreet.type";
import { motion, AnimatePresence } from "framer-motion";
import MapLocationSelectorModal from "../MapLocationSelectorModal/Index";
import SearchTypingLoader from "../SearchTypingLoader/Index";

interface AddressSearchProps {
    enableExpedition?: boolean;
    onSearchClick?: () => {};
};

export default function AddressSearch({ enableExpedition = false, onSearchClick }: AddressSearchProps) {
    const searchInputRef = useRef<HTMLInputElement>();
    const throttling = useRef<boolean>(false);

    const [searchString, setSearchString] = useState("");
    const [searchResults, setSearchResults] = useState<IOpenStreetData[]>([]);
    const [mapLocationDialogOpened, setMapLocationDialogOpened] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleMapLocationDialog = async (event: MouseEvent) => {
        event.preventDefault();
        if (searchString !== "") {
            setMapLocationDialogOpened(!mapLocationDialogOpened);
            return;
        }
        triggerLocationAutoSearch();
    };

    const triggerLocationAutoSearch = () => {
        handleAutoLocationSelection(() => setMapLocationDialogOpened(!mapLocationDialogOpened));
    };

    const canSearchLocation = () => {
        if ((!(searchInputRef.current as HTMLInputElement).value.trim()) || (searchInputRef.current as HTMLInputElement).value.length < 3) return false;
        return true;
    };

    const handleLocationSearch = async (event: any) => {
        setSearchString(event.target.value);

        if (throttling.current) return;

        if (!canSearchLocation()) {
            setTimeout(() => {
                setSearchResults([]);
            }, 500);
            return;
        }

        throttling.current = true;

        setTimeout(async () => {
            throttling.current = false;
            setSearchString(event.target.value);
            setIsLoading(true);
            try {
                const response = await openStreetService.search({
                    q: (searchInputRef.current as HTMLInputElement).value, limit: 100,
                    countrycodes: ["bd"],
                    viewbox: [""],
                    bounded: 0,
                    addressdetails: 0,
                    polygon_geojson: 0
                });
                setSearchResults(response.data as IOpenStreetData[]);
                setIsLoading(false);
            } catch (error) {
                console.log('error occured');
                setIsLoading(false);
            }
        }, 1000);
    };

    const handleAutoLocationSelection = (callBack: any = () => { }) => {
        if (navigator.geolocation) {
            setIsLoading(true);
            navigator.geolocation.getCurrentPosition(async (position: any) => {
                const { latitude, longitude } = position.coords;
                const response = await openStreetService.searchWithLatLng({ lat: latitude, lng: longitude });
                setSearchString(response.data.display_name);
                searchInputRef?.current?.click();
                setIsLoading(false);
                if (typeof callBack === 'function') {
                    setTimeout(() => {
                        callBack();
                    }, 500);
                }
            }, (error) => {
                alert('Could not get location automatically!');
                setIsLoading(false);
            });
        } else {
            alert("Sorry! Your browser dosen't support geolocation API!");
            setIsLoading(false);
        }
    };

    return (
        <div className="address-search">
            <TextField id="outlined-basic" label="Enter Full Address" variant="outlined"
                inputRef={searchInputRef}
                value={searchString}
                onChange={(event) => handleLocationSearch(event)}
                fullWidth
                InputProps={{
                    endAdornment: (
                        isLoading ? <SearchTypingLoader /> :
                            <InputAdornment position="end" onClick={handleAutoLocationSelection}>
                                <span className="material-icons">
                                    gps_fixed
                                </span>
                            </InputAdornment>
                    )
                }}
            />
            {!enableExpedition ? <div className="search-btn" onClick={toggleMapLocationDialog}>
                <button>
                    <div className="material-icons">
                        east
                    </div>
                </button>
            </div> : null}

            {mapLocationDialogOpened ? <MapLocationSelectorModal isOpen={mapLocationDialogOpened} onToggle={toggleMapLocationDialog} /> : null}

            {enableExpedition ?
                <div className="select-expedition">
                    <button>Delivery</button>
                    <p>or</p>
                    <button>Pick-up</button>
                </div> : null}

            <AnimatePresence>
                {searchResults?.length > 0 ?
                    <motion.div className="search-results" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 0 }} exit={{ opacity: 0, y: 0 }}>
                        <h2 className="title">Did you mean: </h2>
                        <ul>
                            {searchResults.map((value: IOpenStreetData) => {
                                return (<li key={value?.place_id}>{value?.display_name}</li>)
                            })}
                        </ul>
                    </motion.div> : null}
            </AnimatePresence>
        </div>
    )
};