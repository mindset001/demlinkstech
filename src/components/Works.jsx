/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import  "../css/Works.css";
// import {Wo}
const Works = ({works}) => {
    return ( 
        <section className="bg-white rounded-3xl w-full">
            <div className="flex py-8 px-6 gap-6 mb-[4rem] justify-between items-center flex-col-reverse" >
                <h2 className="text-5xl tracking-wide text-black">Take a look at what we have done</h2>
                <div className="flex justify-between items-center">
                    <div className="mr-2  rounded-3xl w-12 h-[2px] bg-[#EC500B]"></div>
                    <h5 className="text-[#F68A44]">Our Works</h5>
                </div>
            </div>
            <div className="works">
                {works.map((work, id)=>{
                    return <div className="work">
                        <div className="w-full" key={id} >
                            {work.title}
                            <img src={work.src}  alt={work.alt}  className="" />
                        </div>
                    </div>
                })}
            </div>
        </section>
     );
}
 
export default Works;