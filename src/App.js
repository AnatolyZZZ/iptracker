import './App.css';
import { useState, useContext, createContext } from 'react';
import { Header } from './components/Header';
import { Map } from './components/Map';

const initialResp = {
  "ip": "",
  "location": {
      "country": "US",
      "region": "California",
      "city": "Mountain View",
      "lat": 37.40599,
      "lng": -122.078514,
      "postalCode": "94043",
      "timezone": "-07:00",
      "geonameId": 5375481
  },
  "domains": [],
  "as": {
      "asn": 15169,
      "name": "Google LLC",
      "route": "8.8.8.0/24",
      "domain": "https://about.google/intl/en/",
      "type": "Content"
  },
  "isp": "Google LLC"
}

export const RespContext = createContext(null);
export const OkContext = createContext('ok');
export const SearchContext = createContext('');

function App() {
  const [responce, setResponce] = useState(initialResp);
  const [respOk, setRespOk] = useState('ok');
  const [searchValue, setSearchValue] = useState ('');
 

  return (<>
  <RespContext.Provider value = {{responce, setResponce}}>
    <OkContext.Provider value = {{respOk, setRespOk}}>
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header/>
        <Map/>
      </SearchContext.Provider>
    </OkContext.Provider>
  </RespContext.Provider>
  </>
  );
}

export default App;
