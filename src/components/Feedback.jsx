/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import OpenQuotes from "../images/opening-quotes.png"
import CloseQuotes from "../images/closing-quotes.png"
import NextArrow from "../images/next-arrow.svg"
import FrontArrow from "../images/front-arrow.png"
import FrontArrowBlack from "../images/black-next-arrow.png"
import PrevArrow from "../images/back-arrow.png"

import "../css/Feedback.css"
// eslint-disable-next-line react/prop-types
const Feedback = ({data}) => {
    const [slide, setSlide] = useState(0)

    const nextSlide = ()=>{
        setSlide (slide === data.length - 1 ? 0 : slide+1)
    }
    const prevSlide = ()=>{
        setSlide (slide === 0 ? data.length - 1 : slide-1)
    }
    return ( 
        <section className="mt-4 mb-12">
            <div className="flex mb-[4rem] justify-between items-center">
                <h2 className="text-[24px] md:text-5xl tracking-wide">This is what people say about Us</h2>
                <div className="flex justify-between items-center">
                    <div className="mr-2  rounded-3xl w-12 h-[2px] bg-[#EC500B]"></div>
                    <h5 className="text-[#F68A44]">Feedback</h5>
                </div>
            </div>
            <div className="relative mb-12">
                <button onClick={prevSlide} className="absolute left-0 bottom-[50%]"><img src={PrevArrow} alt="" /></button>
                {data.map((item, id) => {
                    return <div key={id} className={slide === id ?  'carousel' : ' carousel carousel-hidden'}>
                        <div  className="mb-4 relative py-12">
                            <img className="absolute left-0 top-0" src={OpenQuotes} alt="OpenQuotes" />
                            <p className="text-[14px] md:text-[28px] py-[.5rem] md:px-[2.5rem]">{item.body}</p>
                            <img className="absolute right-0 bottom-0" src={CloseQuotes} alt="CloseQuotes" />

                        </div>
                        <div>
                            <h4 className=" text-[#F68A44] font-bold">/ {item.name}</h4>
                            <h6 className="text-sm">{item.position}</h6>
                        </div>
                        
                    </div>
                })}
                <button onClick={nextSlide} className="absolute right-0 bottom-[50%]"><img src={FrontArrow} alt="" /></button>
            </div>

            <div className="contact">
                <h2 className="">Let's make something incredible together</h2>
                <p className="text-xl font-medium mb-12">Looking for a creative partner? Let's get started.</p>
                <div className="btns flex justify-between items-center gap-8">
                    <button className=" bg-[#DA6529] text-[#121212] shadow-lg"> Leave us a Message <img src={FrontArrowBlack} alt="next-arrow" /></button>
                    <button className="bg-[#121212] text-white shadow-lg">Schedule a Call <img src={NextArrow} alt="next-arrow" /> </button>
                </div>
            </div>
            
        </section>
     );
}
 
export default Feedback;