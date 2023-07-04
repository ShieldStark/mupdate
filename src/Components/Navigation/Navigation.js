//import {Link} from "react-router-dom";
import navi from "./Navigation.css";
const Navigation = () =>{
    return(
        <nav>
            <a className={navi.logo}>Megam</a>
            <ul>
                <li>Home</li>
                <li>DashBoard</li>
                <li>About</li>
            </ul>
        </nav>
    )
}
export default Navigation;