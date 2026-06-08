import Logo from "../images/logo.png"
import "../css/Navbar.css"
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const isHome = location.pathname === '/'

    const handleNav = (id) => {
        if (isHome) {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate('/')
        }
        setIsOpen(false)
    }

    return (
       <div className="fixed top-0 left-0 right-0 z-50 bg-[#121212] md:px-6 lg:px-12">
            <nav className="hidden text-[#DBDBDB] md:flex items-center justify-between">
                <div>
                    <Link to="/"><img src={Logo} alt="Demlinks Logo" className="w-[70%]"/></Link>
                </div>
                <ul className="flex gap-6">
                    <li><a className="cursor-pointer" onClick={() => handleNav('home')}>Home</a></li>
                    <li><a className="cursor-pointer" onClick={() => handleNav('about')}>About us</a></li>
                    <li><a className="cursor-pointer" onClick={() => handleNav('services')}>Services</a></li>
                    <li><a className="cursor-pointer" onClick={() => handleNav('works')}>Our works</a></li>
                </ul>
                <Link
                    to="/careers"
                    className="navbar-academy-btn"
                >
                    Academy
                </Link>
            </nav>

            <nav className="px-2 md:hidden text-[#DBDBDB] flex items-center justify-between">
                <div>
                    <Link to="/"><img src={Logo} alt="Demlinks Logo" className="w-[70%]"/></Link>
                </div>
                {!isOpen && (
                    <div onClick={() => setIsOpen(true)} className="cursor-pointer p-2">
                        <div className="bg-white w-[28px] h-[2px] mb-[6px]"></div>
                        <div className="bg-white w-[28px] h-[2px] mb-[6px]"></div>
                        <div className="bg-white w-[28px] h-[2px]"></div>
                    </div>
                )}

                {isOpen && (
                    <div className="flex flex-col items-end gap-4 py-2">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white text-xl font-bold w-8 h-8 flex items-center justify-center border border-[#444] rounded-md"
                        >✕</button>
                        <ul className="flex flex-col gap-4 items-end pb-2">
                            <li><a className="cursor-pointer" onClick={() => handleNav('home')}>Home</a></li>
                            <li><a className="cursor-pointer" onClick={() => handleNav('about')}>About us</a></li>
                            <li><a className="cursor-pointer" onClick={() => handleNav('services')}>Services</a></li>
                            <li><a className="cursor-pointer" onClick={() => handleNav('works')}>Our works</a></li>
                            <li>
                                <Link
                                    to="/careers"
                                    onClick={() => setIsOpen(false)}
                                    className="navbar-academy-btn"
                                >
                                    Academy
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
       </div>
     );
}

export default Navbar;
