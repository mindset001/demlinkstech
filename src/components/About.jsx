import "../css/About.css"
import  AboutImage  from "../images/about.png";
import playImage from "../images/play.png"
import Cpu from "../images/cpu-charge.png"
import Brush from "../images/brush.png"

const About = () => {

    return ( 
        <section className=" mt-12">
            <div className="flex justify-between items-center">
                <h2 className="text-5xl tracking-wide">We are a friendly and experienced <br /> Product Design Agency</h2>
                <div className="flex justify-between items-center">
                    <div className="mr-2  rounded-3xl w-12 h-[2px] bg-[#EC500B]"></div>
                    <h5 className="text-[#EC500B]">About Us</h5>
                </div>
            </div>
            <div className="mt-8 mb-12 flex justify-between  ">
                <div className="w-[50%]">
                    <img src={AboutImage} alt="about image" className="w-[90%]" />
                    <button className=" rounded-xl mt-8 text-[#EC500B] bg-[#ec4f0b1c] flex items-center px-6 py-3 "> <img src={playImage} alt="play btn" className="w-6 mr-4" /> Watch our Video</button>
                </div>
                <div className="w-[50%] relative flex flex-col justify-between">
                    <div>
                        <h3 className="flex items-center text-left text-4xl mb-8 mt-8"><img src={Brush} alt="brush image " className="mr-4" /> We are Creatives</h3>
                        <p className="text-xl pr-8 text-[#ffffffa2] tracking-wide">We are a team of great minds dedicated to serving our consumers with an excelent delivery service thus greatly improving our client's revenue and engagements.</p>
                    </div>
                    <div className=" sub-div absolute">
                        <h3  className="text-left text-[2rem] mb-6 flex items-center"> <img src={Cpu} alt="cpu image " className="mr-4" /> We Provide Technology Services</h3>
                        <p className="text-xl tracking-wide">We are a team of great minds dedicated to serving our consumers with an excelent delivery service thus greatly improving our client's revenue and engagements.</p>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default About;