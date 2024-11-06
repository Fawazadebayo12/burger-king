import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const branches = [
    { name: "Surulere", coords: [6.4972, 3.3577] },
    { name: "Ebute-Metta", coords: [6.4867, 3.3751] },
    { name: "Apapa", coords: [6.4493, 3.3692] },
    { name: "Ajegunle", coords: [6.4649, 3.3405] },
    { name: "Victoria Island", coords: [6.4281, 3.4219] },
    { name: "Lekki Phase 1", coords: [6.4483, 3.4847] },
    { name: "Banana Island", coords: [6.4474, 3.4390] },
];

// Component to change the map view whenever selectedLocation updates
const ChangeView = ({ center }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center);
    }, [center, map]);
    return null;
};

const BranchMap = ({ selectedLocation }) => {
    const initialCenter = [6.5244, 3.3792]; // Initial center on Lagos

    return (
        <MapContainer center={initialCenter} zoom={11} style={{ height: "500px", width: "50%"}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {selectedLocation && <ChangeView center={selectedLocation.coords} />}
            {branches.map((branch, index) => (
                <Marker key={index} position={branch.coords}>
                    <Popup>{branch.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default BranchMap;
