import { SearchField } from "./SearchField"
import {Info} from './Info'
import './Header.css'
export const Header = (props) => {
    return <header>
        <h1>IP Adress Tracker</h1>
        <SearchField/>
        <Info/>
    </header>
}