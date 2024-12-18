import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import useStyles from './styles';

const Map = ({ address }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    // Default to NYC coordinates and fixed zoom level
    const [coordinates, setCoordinates] = useState({ lat: 40.712776, lng: -74.005974 });
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (address) {
            const geocoder = new window.google.maps.Geocoder();
            // Append "New York" to ensure city and state are always New York
            const addressWithNY = `${address}, New York`;

            geocoder.geocode({ address: addressWithNY }, (results, status) => {
                if (status === "OK" && results[0]) {
                    const location = results[0].geometry.location;
                    setCoordinates({ lat: location.lat(), lng: location.lng() });
                    setZoom(14);
                } else {
                    console.error("Geocode was not successful:", status);
                }
            });
        }
    }, [address]);

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAJJmZEMdvOtBSEC72ImaHUlisQcmeunm8' }}
                center={coordinates} 
                zoom={zoom} 
                margin={[50, 50, 50, 50]}
                options={{ fullscreenControl: false }}
            >
                {/* Marker */}
                <div
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    className={classes.markerContainer}
                >
                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                </div>
            </GoogleMapReact>
        </div>
    );
};

export default Map;
