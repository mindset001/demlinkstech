import Logo from "../images/logo.png"
import "../css/Navbar.css"
import Button from "./utils/Button";
import { useState } from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
    const [showResults, setShowResults] = useState(false)
    const [hide, setHide] = useState(true)
    const onClick = () => {
        setShowResults(true)
        setHide(false)
    }
    const onHide = () => {
        setShowResults(false)
        setHide(true)
    }
       
    
    return ( 
       <div>
             <nav className="hidden text-[#DBDBDB]  sticky bg-[#121212] md:flex items-center justify-between ">
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

            <nav className="px-2 md:hidden text-[#DBDBDB]  sticky bg-[#121212] flex items-center justify-between ">
            <div>
                <img src={Logo} alt="Demlinks Logo"  className="w-[70%]"/>
            </div>
            {
                hide ?  <div onClick={onClick}>
                <div className="bg-white w-[30px] h-[2px] mb-[2px]"></div>
                <div className="bg-white w-[30px] h-[2px] mb-[2px]"></div>
                <div className="bg-white w-[30px] h-[2px] mb-[2px]"></div>
                <div className="bg-white w-[30px] h-[2px] mb-[2px]"></div>
            </div> : null
            }

            { showResults ?  <div>
                <div onClick={onHide}>
                    <p>x</p>
                </div>
            <ul className="  ">
                <li> <a>Home</a> </li>
                <li> <a>About us</a> </li>
                <li> <a>Services</a> </li>
                <li> <a>Our works</a> </li>
                <Button text="Schedule a call"/>
            </ul>
            </div> : null }
           
           
            </nav>
       </div>
     );
}
 
export default Navbar;