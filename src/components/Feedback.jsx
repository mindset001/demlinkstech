/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import NextArrow from "../images/next-arrow.svg"
import FrontArrowBlack from "../images/black-next-arrow.png"
import "../css/Feedback.css"

const Feedback = ({data}) => {
    return (
        <section className="mt-4 mb-12">
            <div className="flex mb-[4rem] justify-between items-center">
                <h2 className="text-[24px] md:text-5xl tracking-wide">This is what people say about us</h2>
                <div className="flex items-center">
                    <div className="mr-2 rounded-3xl w-12 h-[2px] bg-[#EC500B]"></div>
                    <h5 className="text-[#F68A44]">Feedback</h5>
                </div>
            </div>

            <div className="testimonials-grid">
                {data.map((item, id) => (
                    <div key={id} className="testimonial-card">
                        <span className="testimonial-quote">"</span>
                        <p className="testimonial-body">{item.body}</p>
                        <div className="testimonial-divider"></div>
                        <div>
                            <h4 className="testimonial-name">{item.name}</h4>
                            <h6 className="testimonial-position">{item.position}</h6>
                        </div>
                    </div>
                ))}
            </div>

            <div id="contact" className="contact">
                <h2>Let's make something incredible together</h2>
                <p className="text-xl font-medium mb-12">Looking for a creative partner? Let's get started.</p>
                <div className="btns flex justify-between items-center gap-8">
                    <button className="bg-[#DA6529] text-[#121212] shadow-lg">Leave us a Message <img src={FrontArrowBlack} alt="next-arrow" /></button>
                    <button className="bg-[#121212] text-white shadow-lg">Schedule a Call <img src={NextArrow} alt="next-arrow" /></button>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
