import React, { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiMail, CiClock1 } from "react-icons/ci";
import {
  FaFlag,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/New folder/images/logo/edufynd-logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
    setShowHeader(scrollTop <= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  // Check if a path is active
  const isActivePath = (path) => location.pathname === path;

  // Determine the class for nav links and dropdown items
  const getNavLinkClass = (path) => isActivePath(path) ? "nav-link active" : "nav-link";

  // Determine if dropdown should be active
  const isDropdownActive = (paths) => paths.some(path => isActivePath(path));


  return (
    <>
    <div
      className={`fixed-top navbar-container ${
        showHeader ? "header-visible" : "header-hidden"
      }`}
    >
      <div className="container-fluid text-white p-0 mb-0">
        {/* Header */}
        <div
          className="container-fluid text-center"
          style={{ backgroundColor: "#fe5722", color: "#fff" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-none d-lg-inline">
                    <div className="fw-semibold">
                      <IoCallOutline /> +91 9840591820
                    </div>
                  </div>
                  <div className="d-none d-lg-inline">
                    <div className="fw-semibold">
                      <CiMail /> students@edufynd.com
                    </div>
                  </div>
                  <div className="d-none d-lg-inline">
                    <div className="fw-semibold">
                      <CiClock1 /> Mon - Sat: 10.00am - 5:30pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-2 py-2">
                <div className="d-flex gap-3">
                  <div className="text-capitalize fw-semibold">follow us:</div>
                  <Link to="/" className="text-white">
                    <FaFacebookF />
                  </Link>
                  <Link to="/" className="text-white">
                    <FaLinkedinIn />
                  </Link>
                  <Link to="/" className="text-white">
                    <FaInstagram />
                  </Link>
                  <Link to="/" className="text-white">
                    <FaYoutube />
                  </Link>
                  <Link to="/" className="text-white">
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav 
          className={`navbar navbar-expand-lg bg-white ${
            isScrolled ? "scrolled" : ""
          }`}
        >
          <div className="container-fluid p-0 m-0">
            <Link to="/" className="navbar-brand mx-lg-3 px-lg-5">
              <img
                src={logo}
                alt="Edufynd Logo"
                style={{ width: '200px' }}
                className="img-fluid"
              />
            </Link>

            <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
       
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <ul className="navbar-nav mb-lg-0 me-auto">
                <li className="nav-item ">
                  <Link to="/" className={getNavLinkClass("/")}>
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/About" className={getNavLinkClass("/About")}>
                    About
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/Program" className={getNavLinkClass("/Program")}>
                    Program
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/University" className={getNavLinkClass("/University")}>
                    University
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/RecruitingPartner" className={getNavLinkClass("/RecruitingPartner")}>
                    Recruiting Partner
                  </Link>
                </li>

                <li className={`nav-item dropdown ${isDropdownActive([
                    "/Study-In-USA",
                    "/Study-in-UK",
                    "/Study-in-Canada",
                    "/Study-in-Australia",
                    "/Study-in-Ireland",
                    "/Study-In-New-Zealand",
                    "/Study-In-Singapore",
                    "/Study-in-France",
                    "/Study-in-Europe"
                  ]) ? 'active' : ''}`}>
                    <Link
                      to="/StudyDestination"
                      className={`nav-link  ${isDropdownActive([
                        "/StudyDestination",
                        "/Study-In-USA",
                        "/Study-in-UK",
                        "/Study-in-Canada",
                        "/Study-in-Australia",
                        "/Study-in-Ireland",
                        "/Study-In-New-Zealand",
                        "/Study-In-Singapore",
                        "/Study-in-France",
                        "/Study-in-Europe"
                      ]) ? 'active' : ''}`}
                      role="button"
                      aria-expanded={isDropdownActive([
                        "/StudyDestination",
                        "/Study-In-USA",
                        "/Study-in-UK",
                        "/Study-in-Canada",
                        "/Study-in-Australia",
                        "/Study-in-Ireland",
                        "/Study-In-New-Zealand",
                        "/Study-In-Singapore",
                        "/Study-in-France",
                        "/Study-in-Europe"
                      ])}
                    >
                      Study Destinations <IoIosArrowDown />
                    </Link>
                    <ul className="dropdown-menu p-2 border-0 shadow">
                      <li>
                        <Link
                          to="/Study-In-USA"
                          className={`dropdown-item fw-semibold ${getNavLinkClass("/Study-In-USA")}`}
                        >
                          <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                          Study in USA
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Study-in-UK"
                          className={`dropdown-item fw-semibold ${getNavLinkClass("/Study-in-UK")}`}
                        >
                          <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                          Study in UK
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Study-in-Canada"
                          className={`dropdown-item fw-semibold ${getNavLinkClass("/Study-in-Canada")}`}
                        >
                          <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                          Study in Canada
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Study-in-Australia"
                          className={`dropdown-item fw-semibold ${getNavLinkClass("/Study-in-Australia")}`}
                        >
                          <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                          Study in Australia
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Study-in-Ireland"
                          className={`dropdown-item fw-semibold ${getNavLinkClass("/Study-in-Ireland")}`}
                        >
                          <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                          Study in Ireland
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Study-In-New-Zealand"
                          className={`dropdown-item fw-semibold ${getNavLinkClass("/Study-In-New-Zealand")}`}
                        >
                          <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                          Study in New Zealand
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Study-In-Singapore"
                          className={`dropdown-item fw-semibold ${getNavLinkClass("/Study-In-Singapore")}`}
                        >
                          <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                          Study in Singapore
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Study-in-France"
                          className={`dropdown-item fw-semibold ${getNavLinkClass("/Study-in-France")}`}
                        >
                          <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                          Study in France
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Study-in-Europe"
                          className={`dropdown-item fw-semibold ${getNavLinkClass("/Study-in-Europe")}`}
                        >
                          <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                          Study in Europe
                        </Link>
                      </li>
                    </ul>
                  </li>
             
             

<li className={`nav-item dropdown ${isDropdownActive([
                    "/Admission-Support",
                    "/SOP-Crafting",
                     "/Visa-Support",
                     "/Financial-Aid",
                     "/Pre-and-Post-Support",
                    "/Forex",
                  ]) ? 'active' : ''}`}>
                    <Link
                      to="/Service"
                      className={`nav-link  ${isDropdownActive([
                        "/Service",
                        "/Admission-Support",
                        "/SOP-Crafting",
                         "/Visa-Support",
                         "/Financial-Aid",
                         "/Pre-and-Post-Support",
                        "/Forex",
                      ]) ? 'active' : ''}`}
                      role="button"
                      aria-expanded={isDropdownActive([
                        "/Service",
                        "/Admission-Support",
                        "/SOP-Crafting",
                         "/Visa-Support",
                         "/Financial-Aid",
                         "/Pre-and-Post-Support",
                        "/Forex",
                      ])}
                    >
                    Services<IoIosArrowDown />
                    </Link>

                  <ul className="dropdown-menu p-2 border-0 shadow">
                    <li>
                      <Link
                        to="/Admission-Support"
                         className={`dropdown-item fw-semibold ${getNavLinkClass("/Admission-Support")}`}
                      >
                        <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                        Admission Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/SOP-Crafting"
                         className={`dropdown-item fw-semibold ${getNavLinkClass("/SOP-Crafting")}`}
                      >
                        <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                        SOP Crafting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Visa-Support"
                         className={`dropdown-item fw-semibold ${getNavLinkClass("/Visa-Support")}`}
                      >
                        <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                        Visa Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Financial-Aid"
                         className={`dropdown-item fw-semibold ${getNavLinkClass("/Financial-Aid")}`}
                      >
                        <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                        Financial Aid
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Pre-and-Post-Support"
                         className={`dropdown-item fw-semibold ${getNavLinkClass("/Pre-and-Post-Support")}`}
                      >
                        <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                        Pre and Post Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/Forex"  className={`dropdown-item fw-semibold ${getNavLinkClass("/Forex")}`}>
                        <FaFlag className="me-2" style={{ color: "#fe5722" }} />
                        Forex
                      </Link>
                    </li>
                  </ul>
                
                 
                </li>

                 
             
                <li className="nav-item ">
                  <Link to="/Blog" className={getNavLinkClass("/Blog")}>
                  Blog
                  </Link>
                </li>
               
                <li className="nav-item ">
                  <Link to="/Contact" className={getNavLinkClass("/Contact")}>
                    Contact Us
                  </Link>
                </li>
              </ul>
      </div>
      </div>
         
         
          </div>
        </nav>
      </div>
    </div>
    </>
  );
};

export default Navbar;
