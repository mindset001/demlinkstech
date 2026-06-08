/* eslint-disable react/prop-types */
import Footer from '../components/Footer'
import { WA_MESSAGE, openWhatsApp } from '../utils/whatsapp'
import '../css/Careers.css'

const Careers = ({ courses }) => {
    const waEnroll = (title) => {
        const msg = encodeURIComponent(`Hi, I'd like to enroll in the ${title} course at Demlinks Academy.`)
        openWhatsApp(`https://wa.me/2348160071243?text=${msg}`)
    }

    const emailEnroll = (title) => {
        window.location.href = `mailto:academy@demlinkstech.com?subject=Enrollment – ${encodeURIComponent(title)}`
    }

    return (
        <div className="careers-page">
            <div className="careers-hero">
                <div className="careers-hero-inner md:px-6 lg:px-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-[2px] bg-[#EC500B] rounded-full"></div>
                        <span className="text-[#F68A44] font-medium">Demlinks Academy</span>
                    </div>
                    <h1 className="careers-heading">
                        Learn the skills that <br />
                        <span className="careers-gradient">build careers.</span>
                    </h1>
                    <p className="careers-subtext">
                        Hands-on training from a team that builds real digital products every day.
                        Pick a course, learn fast, and launch your career in tech and design.
                    </p>
                    <div className="careers-stats">
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Courses</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Practical</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">Live</span>
                            <span className="stat-label">Sessions</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">Cert.</span>
                            <span className="stat-label">On Completion</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="careers-body md:px-6 lg:px-12">
                <h2 className="careers-section-title">Our Courses</h2>
                <p className="careers-section-sub">Choose what you want to learn and reach out to get started</p>

                <div className="courses-grid">
                    {courses.map((course, id) => (
                        <div key={id} className="course-card">
                            <div className="course-icon">{course.icon}</div>
                            <div className="course-meta">
                                <span className="course-duration">⏱ {course.duration}</span>
                                <span className="course-level">{course.level}</span>
                            </div>
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc">{course.description}</p>
                            <div className="course-skills">
                                {course.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                            <div className="course-btns">
                                <button onClick={() => waEnroll(course.title)} className="enroll-whatsapp">
                                    WhatsApp
                                </button>
                                <button onClick={() => emailEnroll(course.title)} className="enroll-email">
                                    Send Email
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="academy-cta md:px-6 lg:px-12">
                <div className="academy-cta-inner">
                    <h2>Not sure which course is right for you?</h2>
                    <p>Chat with us on WhatsApp and we'll help you find the best fit.</p>
                    <button onClick={() => openWhatsApp(WA_MESSAGE)} className="cta-btn">
                        Talk to us →
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Careers
