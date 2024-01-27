import Logo from "../images/logo.png"
import "../css/Navbar.css"
import Button from "./utils/Button";
// import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className=" text-[#DBDBDB]  sticky bg-[#121212] flex items-center justify-between ">
            <div>
                <img src={Logo} alt="Demlinks Logo"  className="w-[70%]"/>
            </div>
            <ul className=" flex gap-6 ">
                <li> <a>Home</a> </li>
                <li> <a>About us</a> </li>
                <li> <a>Services</a> </li>
                <li> <a>Our works</a> </li>
            </ul>
            <Button text="Schedule a call"/>
        </nav>
     );
}
 
export default Navbar;