import Logo from "../images/logo.png"

const Footer = () => {
    return ( 
        <footer className="py-12 bg-[#181818]">
            <div className="flex flex-col items-center gap-8 text-center">
                <img src={Logo} alt="Logo" />
                <div>
                    <p className="mb-4">Make Your Brand Stand Out.</p>
                    <h3 className="text-5xl font-bold">We Create, We <span className="text-[#F68A44]">Build</span></h3>
                </div>
                <p className="md:w-[50%]">Demlinks technology is a creative digital agency that helps brands create, design and market their products and services.</p>
            </div>
            <div>
                <ul className=" flex gap-6 ">
                    <li> <a>Home</a> </li>
                    <li> <a>About us</a> </li>
                    <li> <a>Services</a> </li>
                    <li> <a>Our works</a> </li>
                </ul>
                <div>
                    
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;