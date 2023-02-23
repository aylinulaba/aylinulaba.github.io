import React, { useState } from 'react';
import "../base.css";
import "../assets/portfolio.css";
import { Link } from 'react-router-dom';
/* THUMBS */
import Frontend1 from "../portfolio/frontend/work1.jpg";
import Frontend2 from "../portfolio/frontend/work2.jpg";
import Frontend3 from "../portfolio/frontend/work3.jpg";
import Frontend4 from "../portfolio/frontend/work4.jpg";
import Frontend5 from "../portfolio/frontend/work5.jpg";
import Frontend6 from "../portfolio/frontend/work6.jpg";
import Frontend0 from "../portfolio/frontend/work0.jpg";
import Ltr1 from "../portfolio/frontend/work.jpg";
/* WORK GALLERY */
/* Garage */
import Garage1 from "../portfolio/frontend/work1.jpg";
/* Eagles Coffee & Food Studio */
import Eagles1 from "../portfolio/frontend/work2.jpg";
/* Gunseven */
import Gunseven1 from "../portfolio/frontend/gunseven/01.jpg";
import Gunseven2 from "../portfolio/frontend/gunseven/02.jpg";
import Gunseven3 from "../portfolio/frontend/gunseven/03.jpg";
import Gunseven4 from "../portfolio/frontend/gunseven/04.jpg";
/* Hangover */
import Hangover1 from "../portfolio/frontend/hangover/01.jpg";
import Hangover2 from "../portfolio/frontend/hangover/02.jpg";
import Hangover3 from "../portfolio/frontend/hangover/03.jpg";
/* Barbaros Yachting */
import Barbaros1 from "../portfolio/frontend/work5.jpg";
/* Avan Language School */
import Avan1 from "../portfolio/frontend/work6.jpg";
/* Aylin Ulaba */
import Aylin1 from "../portfolio/frontend/work0.jpg";


function Frontend() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="frontend starter-margin">
            <div class="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className="portfolio__title">Selected Works</h3>
                        <p className="note yellow-bg d-none_576">Please write for more references.</p>
                    </div>
                    
                    <div className="tabset">
                        <ul>
                            <li className="tab__item">
                                <Link className="tab__item-link" to="/portfolio">UX/UI Design</Link>
                            </li>
                            <li className="tab__item">
                                <Link className="tab__item-link" to="/branding">Branding</Link>
                            </li>
                            <li className="tab__item active">
                                <Link className="tab__item-link" to="/frontend">Frontend Development</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="row work__grid">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                    <img src={Ltr1} alt="work" title="Lives in Turkish" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(1)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Frontend Development
                                    </span>
                                </div>

                                <div className={toggleState === 1 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Lives in Turkish</h3>
                                        <p className="work__modal-description">A public responsive website of a digital library.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-arrow work__modal-list-icon"></i> HTML, CSS, Bootstrap
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba & broadAngle
                                            </li>
                                            <li>
                                            <a className="work__modal-list-link" href="https://www.livesinturkish.com/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Ltr1} alt="work" title="Lives in Turkish" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                    <img src={Frontend0} alt="work" title="Aylin Ulaba" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(2)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Frontend Development
                                    </span>
                                </div>

                                <div className={toggleState === 2 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Aylin Ulaba</h3>
                                        <p className="work__modal-description">ReactJs multi-page portfolio.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-arrow work__modal-list-icon"></i> HTML, CSS, Bootstrap, ReactJs
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                            <a className="work__modal-list-link" href="http://www.aylinulaba.com" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Aylin1} alt="work" title="Aylin Ulaba" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                    <img src={Frontend1} alt="work" title="Garage" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(3)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Frontend Development
                                    </span>
                                </div>

                                <div className={toggleState === 3 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Garage</h3>
                                        <p className="work__modal-description">A public responsive website of a printing house.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-arrow work__modal-list-icon"></i> HTML, CSS, Bootstrap, Js
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a aria-disabled="true" className="work__modal-list-link disabled-link" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Garage1} alt="work" title="Garage" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                    <img src={Frontend2} alt="work" title="Eagles Coffee & Food Studio" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(4)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Frontend Development
                                    </span>
                                </div>

                                <div className={toggleState === 4 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Eagles Coffee & Food Studio</h3>
                                        <p className="work__modal-description">A public responsive website of a cafeteria.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-arrow work__modal-list-icon"></i> HTML, CSS, Bootstrap, Js
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba & artarda
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="http://www.eaglescafe.com/tr.aspx" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Eagles1} alt="work" title="Eagles Coffee & Food Studio" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Frontend3} alt="work" title="Gunseven" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(5)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Frontend Development
                                    </span>
                                </div>

                                <div className={toggleState === 5 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Gunseven</h3>
                                        <p className="work__modal-description">A public responsive website of a drink company.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-arrow work__modal-list-icon"></i> HTML, CSS, Bootstrap, Js
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a aria-disabled="true" className="work__modal-list-link disabled-link" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Gunseven1} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven2} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven3} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven4} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Frontend4} alt="work" title="Hangover" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(6)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Frontend Development
                                    </span>
                                </div>

                                <div className={toggleState === 6 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Hangover</h3>
                                        <p className="work__modal-description">A public responsive website of a drink company.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-arrow work__modal-list-icon"></i> HTML, CSS, Bootstrap, Js
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a aria-disabled="true" className="work__modal-list-link disabled-link" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Hangover1} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover2} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover3} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Frontend5} alt="work" title="Barbaros Yachting" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(7)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Frontend Development
                                    </span>
                                </div>

                                <div className={toggleState === 7 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Barbaros Yachting</h3>
                                        <p className="work__modal-description">A public responsive website of a yachting company.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-arrow work__modal-list-icon"></i> HTML, CSS, Bootstrap, Js
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://www.barbarosyachting.com.tr/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Barbaros1} alt="work" title="Barbaros Yachting" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Frontend6} alt="work" title="Avan Language School" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(8)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Frontend Development
                                    </span>
                                </div>

                                <div className={toggleState === 8 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Avan Language School</h3>
                                        <p className="work__modal-description">A public responsive website of a language school.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-arrow work__modal-list-icon"></i> HTML, CSS, Bootstrap, Js
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a aria-disabled="true" className="work__modal-list-link disabled-link" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Avan1} alt="work" title="Avan Language School" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="note yellow-bg finish-margin">Please write for more references.</p>
                </div>
            </div>
            <div className="spacer"></div>
        </div>
    );
}

export default Frontend;