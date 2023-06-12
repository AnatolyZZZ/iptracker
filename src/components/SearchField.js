import { useState, useContext } from "react"
import { SearchContext, OkContext } from "../App";
import './Search.css'

function isValidURL(url) {
    var pattern = /^((http|https):\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return !!pattern.test(url);
  }

function isValidIP(str) {
    // Split the string into an array of numbers
    const parts = str.split(".");
    // Check that there are exactly 4 numbers
    if (parts.length != 4) {
      return false;
    }
    // Check that each number is within the valid range
    for (let i = 0; i < parts.length; i++) {
      let num = parseInt(parts[i], 10);
      if (isNaN(num) || num < 0 || num > 255) {
        return false;
      }
    }
    return true;
  }

export const SearchField = (props) => {
    const [searchInput, setInput] = useState('');
    const {response, setResponce} = useContext(SearchContext);
    const {respOk, setRespOk} = useContext(OkContext);
    const [valid, setValid] = useState(true);
    const classes = valid ? 'search' : 'search unvalid-input';
 
    const makeRequest = async () => {
        if (isValidURL(searchInput)) {
            try {
                const resp_json = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_jo96G9wQpckf1WjCXACXhQSOcdEPb&domain=${searchInput}`);
                const resp = await resp_json.json();
                setResponce(resp);
                setRespOk(true);
            } catch {
                setRespOk(false);
            }
        } else if (isValidIP(searchInput)) {
            try {
                const resp_json = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_jo96G9wQpckf1WjCXACXhQSOcdEPb&ipAddress=${searchInput}`);
                const resp = await resp_json.json();
                setResponce(resp);
                setRespOk(true);
            } catch {
                setRespOk(false);
            }
        } else {
            setValid(false);
        }
        
    }


    return <div className={classes}>
        <input
            className="input"
            placeholder="Search for any IP adress or domain"
            value={searchInput}
            onChange={(e) => {setInput(e.target.value); setValid(true)}}
        />
        <div className="button" onClick={(e) => makeRequest() }>
            <img src='./images/icon-arrow.svg' alt='arrow'/>
        </div>
    </div>
}