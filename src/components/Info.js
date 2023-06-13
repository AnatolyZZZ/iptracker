import { useContext } from "react"
import {RespContext, OkContext} from '../App'
import './Info.css'


export const Info = props => {
    const {responce} = useContext(RespContext);
    const {respOk} = useContext(OkContext);
    const isp = responce.isp.split(' ')[0] 
    const timezone = 'UTC '+responce.location.timezone
    const location = responce.location.city+', '+responce.location.region+" "+responce.location.postalCode;
    const ip = responce.ip;
    // console.log(ip)
    return respOk ? <div className="info">
        <div className="section">
            <p className="subheader">ip address</p>
            <p className="data">{ip}</p>
        </div>
        <div className="line"></div>
        <div className="section">
            <p className="subheader">location</p>
            <p className="data">{location}</p>
        </div>
        <div className="section">
            <p className="subheader">timezone</p>
            <p className="data">{timezone}</p>
        </div>
        <div className="section">
            <p className="subheader">isp</p>
            <p className="data">{isp}</p>
        </div>
    </div> 
    :
    <div className="info">
        <p className="data">Sorry server is not responding</p>
    </div>
}