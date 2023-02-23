import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    /* Add shadow */
    window.addEventListener('scroll',(e)=>{
        const nav = document.querySelector('.navbar-type');
        if(window.pageYOffset>0){
          nav.classList.add("add-shadow");
        }else{
          nav.classList.remove("add-shadow");
        }
    });
    return (
        <div className="navigation">
            <nav className="fixed-top navbar-expand navbar-type">
                <div className="container-fluid">
                    <div>
                        <ul className="navbar">
                            <li className="nav-item active">
                                <NavLink className="navbar-brand" to="/">
                                    A.
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolio">
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;