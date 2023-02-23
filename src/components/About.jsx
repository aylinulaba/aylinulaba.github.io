import React, { useState } from 'react';
import "../base.css";
import "../assets/about.css";
import AboutImg from "../assets/img/about.jpg";
import CV from "../assets/files/Aylin-CV.pdf";

function About() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="about starter-margin">
            <div class="container">
                <div className="row" id="lead-section">

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img src={AboutImg} alt="Aylin" className="about__img" />
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12 about__info">

                        <div className="about__data row">
                            <div className="about__box col">
                                <i class="bx bx-award about__icon"></i>

                                <h3 className="about__title">Experience</h3>
                                <span className="about__subtitle">10+ years</span>
                            </div>

                            <div className="about__box col">
                                <i class="bx bx-briefcase-alt about__icon"></i>

                                <h3 className="about__title">Completed</h3>
                                <span className="about__subtitle">20+ projects</span>
                            </div>

                            <div className="about__box col">
                                <i class="bx bx-coffee about__icon"></i>

                                <h3 className="about__title">Coffee</h3>
                                <span className="about__subtitle">5645468748</span>
                            </div>

                            <div className="about__box col">
                                <i class="bx bxs-cat about__icon"></i>

                                <h3 className="about__title">Cat</h3>
                                <span className="about__subtitle">1</span>
                            </div>
                        </div>

                        <p className="about__description">
                            An User Interface (UI) Developer with 10+ years of experience, specializing in Agile methodology, branding, and User Experience (UX) Design. A strong history of working with diverse technical teams to create scalable code and web solutions. Adept at managing stakeholder expectations throughout all phases of the project lifecycle.
                        </p>

                        <a download="../assets/files/Aylin-CV.pdf" href={CV} className="button button--flex">
                            Download CV 
                            <svg
                                class="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </a>

                    </div>

                </div>

                <hr></hr>

                <div className="row" id="areas-section">
                    <div className="col">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="areas__data row">
                                <div className="area__box col">
                                    <i className="uil uil-web-grid area__icon"></i>

                                    <h3 className="area__title">UX/UI Design</h3>
                                    <ul className="area__list">
                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Positioning the brand</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Fluent flows</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">UX element interactions</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Prototyping from scratch</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Exporting the design into code</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="area__box col">
                                    <i class="uil uil-pen area__icon"></i>

                                    <h3 className="area__title">Graphic Design</h3>
                                    <ul className="area__list">
                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Creating timeless brand identities</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Successful brand positioning</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Human-centered experiences</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Strategic target audience studies</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Leading the creative teams</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="area__box col">
                                    <i class="uil uil-arrow area__icon"></i>

                                    <h3 className="area__title">Frontend Development</h3>
                                    <ul className="area__list">
                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Developing the user interface</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Cross platform responsiveness</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Fast user interface</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Dynamic SVG drawing</p>
                                        </li>

                                        <li className="area__item">
                                            <i className="uil uil-check-circle area__check-icon"></i> 
                                            <p className="area__info">Keeping up to date</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="row" id="qualification-section">
                    <div className="qualification__container container">
                        <div className="qualification__tabs">
                            <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                                <i className="uil uil-graduation-cap qualification__icon"></i> Education
                            </div>

                            <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                                <i className="uil uil-briefcase-alt qualification__icon"></i> Certification
                            </div>
                        </div>

                        <div className="qualification__sections">
                            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                                <div className="qualification__data">
                                    <div>
                                        <h3 className="qualification__title">Software Engineering</h3>
                                        <span className="qualification__subtitle">Netkent Mediterranean Study and Science University, Cyprus</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> 2020 - Present
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>

                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification__title">Graphic Design</h3>
                                        <span className="qualification__subtitle">Bilecik Seyh Edebali University, TR</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> 2008 - 2010
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                                <div className="qualification__data">
                                    <div>
                                        <h3 className="qualification__title">Complete Applied Web Development</h3>
                                        <span className="qualification__subtitle">Udemy</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> 2020
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>

                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification__title">Coaching of Robotic Coding</h3>
                                        <span className="qualification__subtitle">Kocaeli University</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> 2019
                                        </div>
                                    </div>
                                </div>

                                <div className="qualification__data">
                                    <div>
                                        <h3 className="qualification__title">Content Editor</h3>
                                        <span className="qualification__subtitle">Istanbul Business Institude</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> 2019
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>

                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification__title">User Experience Design</h3>
                                        <span className="qualification__subtitle">Udemy</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> 2019
                                        </div>
                                    </div>
                                </div>

                                <div className="qualification__data">
                                    <div>
                                        <h3 className="qualification__title">Digital Marketing Specialist</h3>
                                        <span className="qualification__subtitle">Google</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> 2017
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>

                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification__title">HTML, CSS, BOOTSTRAP</h3>
                                        <span className="qualification__subtitle">W3schools.com</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> 2012
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="row" id="skills-section">

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="skills__content row">
                            <div className="skill__box col">
                                <h3 className="skill__title">UX/UI Design</h3>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Research</h3>
                                            <span className="skill__level">Advanced</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Branding</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Userflow</h3>
                                            <span className="skill__level">Advanced</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Prototype</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Lo-fi Wf</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">User Test</h3>
                                            <span className="skill__level">Basic</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Hi-fi Wf</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Export</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="skills__content row">
                            <div className="skill__box col">
                                <h3 className="skill__title">Graphic Design</h3>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Identity</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Illustration</h3>
                                            <span className="skill__level">Advanced</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Publication</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Game</h3>
                                            <span className="skill__level">Intermediate</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Packaging</h3>
                                            <span className="skill__level">Advanced</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Marketing</h3>
                                            <span className="skill__level">Intermediate</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Typography</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Motion</h3>
                                            <span className="skill__level">Basic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="skills__content row">
                            <div className="skill__box col">
                                <h3 className="skill__title">Frontend Development</h3>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">HTML</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">JavaScript</h3>
                                            <span className="skill__level">Intermediate</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">CSS</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">ReactJs</h3>
                                            <span className="skill__level">Intermediate</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Bootstrap</h3>
                                            <span className="skill__level">Expert</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">NodeJs</h3>
                                            <span className="skill__level">Basic</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Tailwindcss</h3>
                                            <span className="skill__level">Basic</span>
                                        </div>
                                    </div>

                                    <div className="col skill__data">
                                        <div>
                                            <i class="bx bx-badge-check"></i>
                                            <h3 className="skill__name">Git</h3>
                                            <span className="skill__level">Intermediate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="spacer"></div>
        </div>
    );
}

export default About;