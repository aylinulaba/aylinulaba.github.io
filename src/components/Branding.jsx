import React, { useState } from 'react';
import "../base.css";
import "../assets/portfolio.css";
import { Link } from 'react-router-dom';
/* THUMBS */
import Branding1 from "../portfolio/branding/work1.jpg";
import Branding2 from "../portfolio/branding/work2.jpg";
import Branding3 from "../portfolio/branding/work3.jpg";
import Branding4 from "../portfolio/branding/work4.jpg";
import Branding5 from "../portfolio/branding/work5.jpg";
import Branding6 from "../portfolio/branding/work6.jpg";
import Branding7 from "../portfolio/branding/work7.jpg";
import Branding8 from "../portfolio/branding/work8.jpg";
import Branding9 from "../portfolio/branding/work9.jpg";
import Branding10 from "../portfolio/branding/work10.jpg";
import Branding11 from "../portfolio/branding/work11.jpg";
import Branding12 from "../portfolio/branding/work12.jpg";
import Ltr1 from "../portfolio/branding/work.jpg";
/* WORK GALLERY */
/* Sodek */
import Sodek1 from "../portfolio/branding/sodek/01.jpg";
import Sodek2 from "../portfolio/branding/sodek/02.jpg";
import Sodek3 from "../portfolio/branding/sodek/03.jpg";
import Sodek4 from "../portfolio/branding/sodek/04.jpg";
import Sodek5 from "../portfolio/branding/sodek/05.jpg";
import Sodek6 from "../portfolio/branding/sodek/06.jpg";
import Sodek7 from "../portfolio/branding/sodek/07.jpg";
import Sodek8 from "../portfolio/branding/sodek/08.jpg";
import Sodek9 from "../portfolio/branding/sodek/09.jpg";
import Sodek10 from "../portfolio/branding/sodek/10.jpg";
import Sodek11 from "../portfolio/branding/sodek/11.jpg";
import Sodek12 from "../portfolio/branding/sodek/12.jpg";
import Sodek13 from "../portfolio/branding/sodek/13.jpg";
import Sodek14 from "../portfolio/branding/sodek/14.jpg";
import Sodek15 from "../portfolio/branding/sodek/15.jpg";
/* Gunseven */
import Gunseven1 from "../portfolio/branding/gunseven/01.jpg";
import Gunseven2 from "../portfolio/branding/gunseven/02.jpg";
import Gunseven3 from "../portfolio/branding/gunseven/03.jpg";
import Gunseven4 from "../portfolio/branding/gunseven/04.jpg";
import Gunseven5 from "../portfolio/branding/gunseven/05.jpg";
import Gunseven6 from "../portfolio/branding/gunseven/06.jpg";
import Gunseven7 from "../portfolio/branding/gunseven/07.jpg";
import Gunseven8 from "../portfolio/branding/gunseven/08.jpg";
import Gunseven9 from "../portfolio/branding/gunseven/09.jpg";
import Gunseven10 from "../portfolio/branding/gunseven/10.jpg";
import Gunseven11 from "../portfolio/branding/gunseven/11.jpg";
import Gunseven12 from "../portfolio/branding/gunseven/12.jpg";
import Gunseven13 from "../portfolio/branding/gunseven/13.jpg";
import Gunseven14 from "../portfolio/branding/gunseven/14.jpg";
import Gunseven15 from "../portfolio/branding/gunseven/15.jpg";
import Gunseven16 from "../portfolio/branding/gunseven/16.jpg";
import Gunseven17 from "../portfolio/branding/gunseven/17.jpg";
import Gunseven18 from "../portfolio/branding/gunseven/18.jpg";
import Gunseven19 from "../portfolio/branding/gunseven/19.jpg";
import Gunseven20 from "../portfolio/branding/gunseven/20.jpg";
/* Garage */
import Garage1 from "../portfolio/branding/work3.jpg";
/* Sandraport */
import Sandraport1 from "../portfolio/branding/sandraport/01.jpg";
import Sandraport2 from "../portfolio/branding/sandraport/02.jpg";
import Sandraport3 from "../portfolio/branding/sandraport/03.jpg";
import Sandraport4 from "../portfolio/branding/sandraport/04.jpg";
import Sandraport5 from "../portfolio/branding/sandraport/05.jpg";
/* Thingo */
import Thingo1 from "../portfolio/branding/work5.jpg";
/* Hangover */
import Hangover1 from "../portfolio/branding/hangover/01.jpg";
import Hangover2 from "../portfolio/branding/hangover/02.jpg";
import Hangover3 from "../portfolio/branding/hangover/03.jpg";
import Hangover4 from "../portfolio/branding/hangover/04.jpg";
import Hangover5 from "../portfolio/branding/hangover/05.jpg";
import Hangover6 from "../portfolio/branding/hangover/06.jpg";
import Hangover7 from "../portfolio/branding/hangover/07.jpg";
import Hangover8 from "../portfolio/branding/hangover/08.jpg";
import Hangover9 from "../portfolio/branding/hangover/09.jpg";
import Hangover10 from "../portfolio/branding/hangover/10.jpg";
import Hangover11 from "../portfolio/branding/hangover/11.jpg";
import Hangover12 from "../portfolio/branding/hangover/12.jpg";
import Hangover13 from "../portfolio/branding/hangover/13.jpg";
/* Gaea */
import Gaea1 from "../portfolio/branding/work7.jpg";
/* BrandyNote */
import Brandy1 from "../portfolio/branding/work8.jpg";
/* Avan Language School */
import Avan1 from "../portfolio/branding/avan-dil/01.jpg";
import Avan2 from "../portfolio/branding/avan-dil/02.jpg";
import Avan3 from "../portfolio/branding/avan-dil/03.jpg";
import Avan4 from "../portfolio/branding/avan-dil/04.jpg";
/* Coffee Lab */
import Coffee1 from "../portfolio/branding/work10.jpg";
/* Why Not Handmade */
import Why1 from "../portfolio/branding/why-not-handmade/01.jpg";
import Why2 from "../portfolio/branding/why-not-handmade/02.jpg";
import Why3 from "../portfolio/branding/why-not-handmade/03.jpg";
/* BMHCOMP */
import Bmh1 from "../portfolio/branding/work12.jpg";

function Branding() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="branding starter-margin">
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
                            <li className="tab__item active">
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
                                    <img src={Ltr1} alt="work" title="Lives in Turkish" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(1)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 1 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Lives in Turkish</h3>
                                        <p className="work__modal-description">Lives in Turkish logo work.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba & broadAngle
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://www.livesinturkish.com/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Logo
                                        </p>

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
                                    <img src={Branding1} alt="work" title="Sodek" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(2)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 2 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Sodek</h3>
                                        <p className="work__modal-description">Sodek branding work.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe InDesign, Adobe Photoshop, Adobe Dimension
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://www.sodek.com.tr/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Logo, business card, letterhead, envelope, product catalog, cd-cd cover, tshirt, branding guidelines
                                        </p>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Sodek1} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek2} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek3} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek4} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek5} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek6} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek7} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek8} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek9} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek10} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek11} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek12} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek13} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek14} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sodek15} alt="work" title="Sodek" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding2} alt="work" title="Gunseven" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(3)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 3 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Gunseven</h3>
                                        <p className="work__modal-description">Gunseven branding work.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe InDesign, Adobe Photoshop, Adobe Dimension
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://www.gunsevensalgam.com.tr/tr" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Logo, business card, letterhead, envelope, product catalog, pocket folder, cd-cd cover, tshirt, packaging, outdoor advertising, promotion products
                                        </p>

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
                                            <div>
                                                <img src={Gunseven5} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven6} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven7} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven8} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven9} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven10} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven11} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven12} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven13} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven14} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven15} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven16} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven17} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven18} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven19} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Gunseven20} alt="work" title="Gunseven" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding3} alt="work" title="Garage" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(4)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 4 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Garage</h3>
                                        <p className="work__modal-description">Garage branding work.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://www.facebook.com/garagematbaasi/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Logo, business card, letterhead, envelope, corporate paperwork, pocket folder, promotion products
                                        </p>

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
                                <img src={Branding4} alt="work" title="Sandraport" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(5)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 5 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Sandraport</h3>
                                        <p className="work__modal-description">Sandraport branding work.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a aria-disabled="true" className="work__modal-list-link disabled-link" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Logo, business card, envelope, letterhead, promotion products
                                        </p>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Sandraport1} alt="work" title="Sandraport" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sandraport2} alt="work" title="Sandraport" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sandraport3} alt="work" title="Sandraport" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sandraport4} alt="work" title="Sandraport" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Sandraport5} alt="work" title="Sandraport" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding5} alt="work" title="Thingo" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(6)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 6 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Thingo</h3>
                                        <p className="work__modal-description">Thingo branding work.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a aria-disabled="true" className="work__modal-list-link disabled-link" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Logo, business card, letterhead, cd-cover, packaging, promotion products
                                        </p>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Thingo1} alt="work" title="Thingo" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding6} alt="work" title="Hangover" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(7)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 7 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Hangover</h3>
                                        <p className="work__modal-description">Hangover graphic design works.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a aria-disabled="true" className="work__modal-list-link disabled-link" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Catalog, packaging, social media post designs
                                        </p>

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
                                            <div>
                                                <img src={Hangover4} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover5} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover6} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover7} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover8} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover9} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover10} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover11} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover12} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Hangover13} alt="work" title="Hangover" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding7} alt="work" title="Gaea" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(8)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 8 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Gaea</h3>
                                        <p className="work__modal-description">Gaea packaging works.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop, Adobe Dimension
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a aria-disabled="true" className="work__modal-list-link disabled-link" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Packaging
                                        </p>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Gaea1} alt="work" title="Gaea" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding8} alt="work" title="BrandyNote" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(9)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 9 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">BrandyNote</h3>
                                        <p className="work__modal-description">BrandyNote business card.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba & Mehmet Ali Karademir
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://www.linkedin.com/in/mehmet-ali-karademir-55375838/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Business card
                                        </p>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Brandy1} alt="work" title="BrandyNote" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding9} alt="work" title="Avan Language School" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(10)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 10 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Avan Language School</h3>
                                        <p className="work__modal-description">Avan Language School graphic design works.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://www.facebook.com/avandilmerkezi/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Logo, business card, flier, brochure, outdoor advertising
                                        </p>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Avan1} alt="work" title="Avan Language School" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Avan2} alt="work" title="Avan Language School" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Avan3} alt="work" title="Avan Language School" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Avan4} alt="work" title="Avan Language School" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding10} alt="work" title="Coffee Lab" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(11)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 11 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Coffee Lab</h3>
                                        <p className="work__modal-description">Coffee Lab packaging works.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop, Adobe Dimension
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://coffeelab.com.tr/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Packaging
                                        </p>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Coffee1} alt="work" title="Coffee Lab" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding11} alt="work" title="Why Not Handmade" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(12)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 12 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">Why Not Handmade</h3>
                                        <p className="work__modal-description">Why Not Handmade packaging works.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop, Adobe Dimension
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="https://whynothandmade.wordpress.com/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Packaging
                                        </p>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Why1} alt="work" title="Why Not Handmade" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Why2} alt="work" title="Why Not Handmade" className="work__gallery-img" />
                                            </div>
                                            <div>
                                                <img src={Why3} alt="work" title="Why Not Handmade" className="work__gallery-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="work__box">
                                <div>
                                <img src={Branding12} alt="work" title="BMHCOMP" className="work__img" />
                                </div>

                                <div className="tool__group">
                                    <span className="detail__button" onClick={() => toggleTab(13)}>
                                        Detail
                                    </span>

                                    <span className="tag">
                                        <i class="uil uil-bookmark"></i> Branding
                                    </span>
                                </div>

                                <div className={toggleState === 13 ? "work__modal active-modal" : "work__modal"}>
                                    <div className="work__modal-content">
                                        <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                                        <h3 className="work__modal-title">BMHCOMP</h3>
                                        <p className="work__modal-description">BMHCOMP branding work.</p>
                                        <hr></hr>

                                        <ul className="work__modal-list">
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-apps work__modal-list-icon"></i> Adobe Illustrator, Adobe Photoshop, Adobe After Effects
                                            </li>
                                            <li className="border-right__dotted border-none-sm">
                                                <i class="uil uil-users-alt work__modal-list-icon"></i> Aylin Ulaba
                                            </li>
                                            <li>
                                                <a className="work__modal-list-link" href="http://bmhcomp.com/" rel="noreferrer" target="_blank"><i class="uil uil-link work__modal-list-icon"></i> Demo/Source</a>
                                            </li>
                                        </ul>
                                        <hr></hr>

                                        <p className="work__modal-text note">
                                            <strong>Including:</strong> Logo, business card, letterhead, envelope, packaging, promotion products
                                        </p>

                                        <div className="work__gallery">
                                            <div>
                                                <img src={Bmh1} alt="work" title="BMHCOMP" className="work__gallery-img" />
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

export default Branding;