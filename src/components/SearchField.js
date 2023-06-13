import { useState, useContext, useEffect } from "react"
import { RespContext, OkContext } from "../App";
import './Search.css'
import myHomeResp from '../myHomeResp.json'
// console.log(myHomeResp)

function isValidURL(url) {
    var pattern = /^((http|https):\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return !!pattern.test(url);
  }

function isValidIP(str) {
    // Split the string into an array of numbers
    const parts = str.split(".");
    // Check that there are exactly 4 numbers
    if (parts.length !== 4) {
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
    const { setResponce} = useContext(RespContext);
    // console.log(responce);
    // console.log(setResponce);
    const {setRespOk} = useContext(OkContext);
    const [valid, setValid] = useState(true);
    const classes = valid ? 'search' : 'search unvalid-input';

    
    const fetchURL = async (url) => {
        try {
            const resp = await fetch(url);
            if (resp.ok === true) {
                const _resp = await resp.json();
                // console.log(_resp);
                setResponce(_resp);
                setRespOk(true);
            } else {
                console.log(resp);
                setRespOk(false);
            }
        } catch {
            setRespOk(false);
        }
    }

    const makeRequest = async (e) => {
        if (e.type === 'submit') {
            e.preventDefault();
        }
        if (isValidURL(searchInput)) {
            fetchURL(`https://geo.ipify.org/api/v2/country,city?apiKey=at_jo96G9wQpckf1WjCXACXhQSOcdEPb&domain=${searchInput}`)
            
        } else if (isValidIP(searchInput)) {
            fetchURL(`https://geo.ipify.org/api/v2/country,city?apiKey=at_jo96G9wQpckf1WjCXACXhQSOcdEPb&ipAddress=${searchInput}`);
        } else {
            setValid(false);
        }
    }
    
    useEffect (()=>{
        setRespOk(true);
        setResponce(myHomeResp);
        // fetchURL('https://geo.ipify.org/api/v2/country,city?apiKey=at_jo96G9wQpckf1WjCXACXhQSOcdEPb')
    }, [])


    return <form className={classes} onSubmit={(e) => makeRequest(e)}>
        <input
            className="input"
            placeholder="Search for any IP adress or domain"
            value={searchInput}
            onChange={(e) => {setInput(e.target.value); setValid(true)}}
        />
        <div className="button" onClick={(e)=> makeRequest(e)}>
            <img src='./images/icon-arrow.svg' alt='arrow'/>
        </div>
    </form>
}