import React from "react";
import "../header.css"
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header(props) {

  const [navbarText, setNavbarTxt] = useState("");
  const [navbarColor, setNavbarColor] = useState("");
  const [navbarLogo, setNavbarLogo] = useState("");
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setNavbarTxt("#50A060");
      setNavbarColor("#f4f4f4");
      setNavbarLogo("../logo-was-bk.png")
    } else {
      setNavbarTxt("#fff");
      setNavbarColor("#171717");
      setNavbarLogo("../logo-was-wt.png")
    }
    window.scrollTo(0, 0);
  }, [location, pathname]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={scrolled ? { backgroundColor: navbarColor, borderRadius: " 0px 0px 20px 20px" } : {}} >
      <div className="logo">
        <img className="logo-was" src={navbarLogo} alt="logo" />
      </div>
      <ul className="nav-elements">
        <li className="element"><Link to="/" style={{ color: navbarText }}>Home</Link></li>
        <li className="element"><Link to="/about" style={{ color: navbarText }}>About</Link></li>
        <li className="element"><Link to="/contact" style={{ color: navbarText }}>Contact</Link></li>
        <li className="element"><Link to="/login" style={{ color: navbarText }}><button className="nav-login-btn">Login</button></Link></li>
      </ul>
    </nav>

  )
}

