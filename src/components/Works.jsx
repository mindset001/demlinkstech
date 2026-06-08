/* eslint-disable react/prop-types */
import { useState } from "react";
import "../css/Works.css";

const categories = ['All', 'Mobile', 'Web', 'Branding', 'Design'];

const Works = ({works}) => {
    const [active, setActive] = useState('All');

    const filtered = active === 'All' ? works : works.filter(w => w.title === active);

    return (
        <section id="works" className="bg-white rounded-3xl w-full py-12 px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="rounded-3xl w-12 h-[2px] bg-[#EC500B]"></div>
                        <h5 className="text-[#F68A44]">Our Works</h5>
                    </div>
                    <h2 className="text-4xl md:text-5xl tracking-wide text-black leading-tight">
                        Take a look at what <br className="hidden md:block" /> we have done
                    </h2>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`works-filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                active === cat
                                    ? 'active text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="works-grid">
                {filtered.map((work, id) => (
                    <div key={id} className="work-card">
                        <img src={work.src} alt={work.alt} />
                        <div className="work-overlay">
                            <span className="work-category">{work.title}</span>
                            <p className="work-title">{work.project}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Works;
