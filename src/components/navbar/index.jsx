import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
    
    const toggleNav = () => {
        const iconToggle = document.getElementById("icon-toggle");
        const navToggle = document.getElementById("nav-toggle");
        if(iconToggle.className == "fa-solid fa-bars") {
            navToggle.classList.add("show");
            setIsClicked(true);
        } else {
            navToggle.classList.remove("show");
            setIsClicked(false);
        }
    }
    const closeNav = () => {
        const navToggle = document.getElementById("nav-toggle");
        navToggle.classList.remove("show");
        setIsClicked(false);
    }
    const removeActive = () => {
        const links = document.querySelectorAll("#nav-toggle li a");
        links.forEach(link => {
            link.classList.remove("active");
        });
    }
    const links = document.querySelectorAll("#nav-toggle li a");
    const signUpBtn = document.querySelector(".sign-up-btn");
    links.forEach((link, i) => {
        signUpBtn.addEventListener("click", () => {
            removeActive();
        });
        link.addEventListener("click", () => {
            removeActive();
            link.classList.add("active");
        });
    });
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="brand">
                        <Link to="/" onClick={closeNav}><i className="fa-solid fa-fingerprint me-2"></i>LAVISH</Link>
                    </div>
                    <i id="icon-toggle" className={isClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={toggleNav}></i>
                    <ul id="nav-toggle">
                        <li>
                            <Link to="/" id="link" className="active" onClick={closeNav}>Home</Link>
                        </li>
                        <li>
                            <Link to="/services" id="link" onClick={closeNav} className="link">Services</Link>
                        </li>
                        <li>
                            <Link to="/products" id="link" onClick={closeNav} className="link">Products</Link>
                        </li>
                        <li className='sign-up-btn'>
                            <Link to="/sign-up" className="sign-up-link">SIGN UP</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;