import './Map.css'
import { useEffect, useContext } from 'react'
import "./Map.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { RespContext } from '../App';
import L from 'leaflet'


export const Map = (props) => {
    const {responce} = useContext(RespContext);
    console.log(responce)
    const lat = responce.location.lat;
    const long = responce.location.lng;
    const myIcon = new L.Icon({
        iconUrl: "./images/icon-location.svg",
        iconRetinaUrl: "./images/icon-location.svg",
        popupAnchor:  [-0, -0],
        iconSize: [46,56],     
    });
    return <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false} id='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, long]} icon={myIcon}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
}