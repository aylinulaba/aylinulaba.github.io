import React, { useState } from 'react';
import "../base.css";
import "../assets/portfolio.css";
import { Link } from 'react-router-dom';
/* THUMBS */
import Uxui1 from "../portfolio/uxui/work1.jpg";
import Uxui2 from "../portfolio/uxui/work2.jpg";
import Uxui3 from "../portfolio/uxui/work3.jpg";
import Uxui4 from "../portfolio/uxui/work4.jpg";
import Uxui5 from "../portfolio/uxui/work5.jpg";
import Uxui6 from "../portfolio/uxui/work6.jpg";
/* WORK GALLERY */
/* Erasmusport */
import Erasmusport1 from "../portfolio/uxui/erasmusport/01.jpg";
import Erasmusport2 from "../portfolio/uxui/erasmusport/02.jpg";
import Erasmusport3 from "../portfolio/uxui/erasmusport/03.jpg";
import Erasmusport4 from "../portfolio/uxui/erasmusport/04.jpg";
import Erasmusport5 from "../portfolio/uxui/erasmusport/05.jpg";
/* Nerede Ne Yenir */
import NNYenir1 from "../portfolio/uxui/nerede-ne-yenir/01.jpg";
import NNYenir2 from "../portfolio/uxui/nerede-ne-yenir/02.jpg";
import NNYenir3 from "../portfolio/uxui/nerede-ne-yenir/03.jpg";
import NNYenir4 from "../portfolio/uxui/nerede-ne-yenir/04.jpg";
import NNYenir5 from "../portfolio/uxui/nerede-ne-yenir/05.jpg";
import NNYenir6 from "../portfolio/uxui/nerede-ne-yenir/06.jpg";
import NNYenir7 from "../portfolio/uxui/nerede-ne-yenir/07.jpg";
import NNYenir8 from "../portfolio/uxui/nerede-ne-yenir/08.jpg";
import NNYenir9 from "../portfolio/uxui/nerede-ne-yenir/09.jpg";
/* Serviscell */
import Serviscell1 from "../portfolio/uxui/serviscell/01.jpg";
import Serviscell2 from "../portfolio/uxui/serviscell/02.jpg";
import Serviscell3 from "../portfolio/uxui/serviscell/03.jpg";
import Serviscell4 from "../portfolio/uxui/serviscell/04.jpg";
import Serviscell5 from "../portfolio/uxui/serviscell/05.jpg";
import Serviscell6 from "../portfolio/uxui/serviscell/06.jpg";
import Serviscell7 from "../portfolio/uxui/serviscell/07.jpg";
/* Garage */
import Garage1 from "../portfolio/uxui/work4.jpg";
/* Lo-fi Wireframe */
import Lofi1 from "../portfolio/uxui/lo-fi/01.jpg";
import Lofi2 from "../portfolio/uxui/lo-fi/02.jpg";
/* Blueprint */
import Blueprint1 from "../portfolio/uxui/blueprint/01.jpg";
import Blueprint2 from "../portfolio/uxui/blueprint/02.jpg";
import Blueprint3 from "../portfolio/uxui/blueprint/03.jpg";

function Uxui() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="uxui starter-margin">
            <div class="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className="portfolio__title">Selected Works</h3>
                        <p className="note yellow-bg d-none_576">Please write for more references.</p>
                    </div>
                    
                    <div className="tabset">
                        <ul>
                            <li className="tab__item active">
                                <Link className="tab__item-link" to="/portfolio">UX/UI Design</Link>
                            </li>
                            <li className="tab__item">
                                <Link className="tab__item-link" to="/branding">Branding</Link>
                            </li>
                            <li className="tab__item">
                                <Link className="tab__item-link" to="/frontend">Frontend Development</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="row work__grid">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                    <img src={Uxui1} alt="work" title="Erasmusport" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(1)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> UX/UI Design
                                    </span>
                                </div>

                                <div className={toggleState === 1 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Erasmusport</h3>
                                        <p className="work__modal-description">A mobile application design where Erasmus students can receive relevant notifications instantly and help each other.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Xd, Adobe Photoshop
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba & spetron
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://erasmusport.com/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Erasmusport1} alt="work" title="Erasmusport" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Erasmusport2} alt="work" title="Erasmusport" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Erasmusport3} alt="work" title="Erasmusport" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Erasmusport4} alt="work" title="Erasmusport" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Erasmusport5} alt="work" title="Erasmusport" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                    <img src={Uxui2} alt="work" title="Nerede Ne Yenir?" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(2)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> UX/UI Design
                                    </span>
                                </div>

                                <div className={toggleState === 2 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Nerede Ne Yenir?</h3>
                                        <p className="work__modal-description">A mobile application that provides the opportunity to browse through nearby cafeterias and restaurants using location services, where users can leave comments on places and add new places, thus gaining discounts by accumulating points, and bringing places and users together.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Xd, Adobe Photoshop
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
                                                <img src={NNYenir1} alt="work" title="Nerede Ne Yenir" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={NNYenir2} alt="work" title="Nerede Ne Yenir" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={NNYenir3} alt="work" title="Nerede Ne Yenir" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={NNYenir4} alt="work" title="Nerede Ne Yenir" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={NNYenir5} alt="work" title="Nerede Ne Yenir" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={NNYenir6} alt="work" title="Nerede Ne Yenir" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={NNYenir7} alt="work" title="Nerede Ne Yenir" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={NNYenir8} alt="work" title="Nerede Ne Yenir" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={NNYenir9} alt="work" title="Nerede Ne Yenir" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                    <img src={Uxui3} alt="work" title="Serviscell" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(3)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> UX/UI Design
                                    </span>
                                </div>

                                <div className={toggleState === 3 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Serviscell</h3>
                                        <p className="work__modal-description">A mobile application design that allows parents to monitor and manage their children's service, receive instant notifications and keep them connected with schools and services.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Xd, Adobe Photoshop
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://serviscell.com.tr/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Serviscell1} alt="work" title="Serviscell" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Serviscell2} alt="work" title="Serviscell" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Serviscell3} alt="work" title="Serviscell" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Serviscell4} alt="work" title="Serviscell" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Serviscell5} alt="work" title="Serviscell" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Serviscell6} alt="work" title="Serviscell" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Serviscell7} alt="work" title="Serviscell" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                    <img src={Uxui4} alt="work" title="Garage" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(4)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> UX/UI Design
                                    </span>
                                </div>

                                <div className={toggleState === 4 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Garage</h3>
                                        <p className="work__modal-description">A mobile application concept where users can create memberships, send jobs to print, get price quotes from the printing house, and track these jobs.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Xd, Adobe Photoshop
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
                                    <img src={Uxui5} alt="work" title="Lo-fi Wireframe" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(5)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> UX/UI Design
                                    </span>
                                </div>

                                <div className={toggleState === 5 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Lo-fi Wireframe</h3>
                                        <p className="work__modal-description">A low-fidelity wireframe of a mobile application that was prototyped and brought to life.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Balsamiq, Adobe Xd
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
                                                <img src={Lofi1} alt="work" title="Lo-fi Wireframe" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Lofi2} alt="work" title="Lo-fi Wireframe" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                    <img src={Uxui6} alt="work" title="Blueprint" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(6)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> UX/UI Design
                                    </span>
                                </div>

                                <div className={toggleState === 6 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Blueprint</h3>
                                        <p className="work__modal-description">The blueprint of a mobile application that was prototyped and brought to life.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Balsamiq, Adobe Xd, Adobe Photoshop
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
                                                <img src={Blueprint1} alt="work" title="Blueprint" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Blueprint2} alt="work" title="Blueprint" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Blueprint3} alt="work" title="Blueprint" className="work__gallery-img" />
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

export default Uxui;