import { SearchField } from "./SearchField"
import {Info} from './Info'
export const Header = (props) => {
    return <header>
        <h1>IP Adress Tracker</h1>
        <SearchField/>
        <Info/>
    </header>
}