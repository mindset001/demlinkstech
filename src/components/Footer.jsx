import Logo from "../images/logo.png"

const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

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
            <div className="mt-8 flex justify-center">
                <ul className="flex gap-6 justify-center">
                    <li><a className="cursor-pointer" onClick={() => scrollTo('home')}>Home</a></li>
                    <li><a className="cursor-pointer" onClick={() => scrollTo('about')}>About us</a></li>
                    <li><a className="cursor-pointer" onClick={() => scrollTo('services')}>Services</a></li>
                    <li><a className="cursor-pointer" onClick={() => scrollTo('works')}>Our works</a></li>
                </ul>
            </div>
        </footer>
     );
}

export default Footer;
