import "../css/Services.css"
import Card1 from "../images/card1.png"
import Card2 from "../images/card2.png"
import Card3 from "../images/card3.png"
import Card4 from "../images/card4.png"
import XnO from "../images/xNo.png"


const Services = () => {
    return ( 
        <div className="pb-[2rem] pt-[8.5rem] mb-[5rem] relative">
            <img src={XnO} alt="" className="absolute -left-12 top-0" />
            <div className="flex items-center mb-4">
                <div className="mr-2  rounded-3xl w-12 h-[2px] bg-[#EC500B]"></div>
                <h5 className="text-[#EC500B]">Services</h5>
            </div>
            <h2 className="text-5xl">We provide different services</h2>
            <div className="services mt-8">
                <div className=" mb-8 flex justify-between items-end">
                    <div className="flex justify-between items-center w-[57%] service">
                        <div className="w-[75%]">
                            <h3>Business branding</h3>
                            <p>We create visual identity and marketing materials for your company that sets it running and bring about high conversations</p>
                        </div>
                        <div>
                            <img src={Card1} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[40%] service">
                        <div className="w-[75%]">
                            <h3>UI/UX Design</h3>
                            <p >We create visual identity and marketing materials for your company that sets it running and bring about high conversations</p>
                        </div>
                        <div>
                            <img src={Card2} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="flex justify-between items-center w-[40%] service">
                        <div className="w-[75%]">
                            <h3>Web & App Development</h3>
                            <p>We create visual identity and marketing materials for your company that sets it running and bring about high conversations</p>
                        </div>
                        <div>
                            <img src={Card3} alt="" />
                        </div>
                    </div>
                    <div className="z-20 flex justify-between items-center w-[57%] service">
                        <div className="w-[75%]">
                            <h3>CCTV and Home automation </h3>
                            <p >We create visual identity and marketing materials for your company that sets it running and bring about high conversations</p>
                        </div>
                        <div>
                            <img src={Card4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={XnO} alt=""  className="absolute -right-12 bottom-6 "/>
        </div>
     );
}
 
export default Services
