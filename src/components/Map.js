import './Map.css'
import { useEffect, useContext, useState } from 'react'
import "./Map.css"
import { MapContainer, TileLayer, useMap, Marker} from 'react-leaflet';
import { RespContext } from '../App';
import L from 'leaflet'


export const Map = (props) => {
    const {responce} = useContext(RespContext);
    // console.log(responce)
    const lat = responce.location.lat;
    const long = responce.location.lng;
    // console.log(lat)
    const [center, setCenter] = useState([lat, long]);
    useEffect(()=>setCenter([...[lat+0.007, long]]),JSON.stringify([lat, long]))
   
    const myIcon = new L.Icon({
        iconUrl: "./images/icon-location.svg",
        iconRetinaUrl: "./images/icon-location.svg",
        popupAnchor:  [-0, -0],
        iconSize: [46,56],     
    });
    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
        return null;
      }
    
    return <MapContainer center={center} zoom={13} scrollWheelZoom={false} id='map' >
            <ChangeView center={center} zoom={13} /> 
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, long]} icon={myIcon}>
            </Marker>
        </MapContainer>
}