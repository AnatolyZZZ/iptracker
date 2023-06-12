import { useState, useContext } from "react"
import { SearchContext, OkContext } from "../App";
import './Search.css'


export const SearchField = (props) => {
    const [searchInput, setInput] = useState('');
    const {response, setResponce} = useContext(SearchContext);
    const {respOk, setRespOk} = useContext(OkContext)
    const makeRequest = () => {
        
    }

    return <div className="search">
        <input
            placeholder="Search for any IP adress or domain"
            value={searchInput}
            onChange={(e) => setInput(e.target.value)}
        />
        <div className="button" onClick={(e) => makeRequest() }>
            <img src='./images/icon-arrow.svg'/>
        </div>
    </div>
}