import "./styles.scss";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useState } from "react";

interface AddressSearchProps {
    enableExpedition?: boolean;
    onSearchClick?: () => {}
};

export default function AddressSearch({ enableExpedition = false, onSearchClick }: AddressSearchProps) {

    return (
        <div className="address-search">
            <TextField id="outlined-basic" label="Enter Full Address" variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <span className="material-icons">
                                gps_fixed
                            </span>
                        </InputAdornment>
                    )
                }}
            />
            {!enableExpedition ? <div className="search-btn" onClick={onSearchClick}>
                <button>
                    <div className="material-icons">
                        east
                    </div>
                </button>
            </div> : null}

            {enableExpedition ?
                <div className="select-expedition">
                    <button>Delivery</button>
                    <p>or</p>
                    <button>Pick-up</button>
                </div> : null}

        </div>
    )
};