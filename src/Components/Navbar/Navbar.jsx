import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { CiMail, CiClock1 } from 'react-icons/ci';
import { FaFlag, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavVisible(scrollPosition <= 0);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed-top ${isNavVisible ? '' : 'scrolling-navbar'}`} style={{ fontSize: '14px' }}>
      <div className={`container-fluid text-white p-0 ${isNavVisible ? 'bg-initial' : 'bg-scrolled'}`}>
        <div className="container-fluid text-center">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-none d-lg-inline">
                    <div className="fw-semibold">
                      <span><IoCallOutline /></span> +91 9840591820
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
                  <div><a href="/" className="text-white"><span><FaFacebookF /></span></a></div>
                  <div><a href="/" className="text-white"><span><FaLinkedinIn /></span></a></div>
                  <div><a href="/" className="text-white"><span><FaInstagram /></span></a></div>
                  <div><a href="/" className="text-white"><span><FaYoutube /></span></a></div>
                  <div><a href="/" className="text-white"><span><FaTwitter /></span></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className= 'navbar navbar-expand-lg bg-scrolled-nav'>
          <div className="container-fluid p-2">
            <NavLink className="navbar-brand mx-lg-3  px-lg-5" to="/">
              <img
                src="https://www.edufynd.com/assets/images/edufynd-logo.svg"
                alt="Edufynd Logo"
                style={{ width: '200px', height: '60px' }}
                className="img-fluid"
              />
            </NavLink>
            <button
              class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <ul className="navbar-nav mb-lg-0 me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" aria-current="page" exact to="/" activeClassName="active-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" to="/About" activeClassName="active-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" to="/Program" activeClassName="active-link">
                    Program
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" to="/University" activeClassName="active-link">
                    University
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" to="/RecruitingPartner" activeClassName="active-link">
                    Recruiting Partner
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link fw-bold"
                    to="/StudyDestination"
                    role="button"
                    aria-expanded="false"
                  >
                    Study Destinations <IoIosArrowDown />
                  </NavLink>
                  <ul className="dropdown-menu px-1 py-2 border-0 shadow">
                    <li><NavLink to="/Study-In-USA" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in USA</NavLink></li>
                    <li><NavLink to="/Study-in-UK" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in UK</NavLink></li>
                    <li><NavLink to="/Study-in-Canada" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Canada</NavLink></li>
                    <li><NavLink to="/Study-in-Australia" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Australia</NavLink></li>
                    <li><NavLink to="/Study-in-Ireland" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Ireland</NavLink></li>
                    <li><NavLink to="/Study-In-New-Zealand" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in New Zealand</NavLink></li>
                    <li><NavLink to="/Study-In-Signapore" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Singapore</NavLink></li>
                    <li><NavLink to="/Study-in-France" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in France</NavLink></li>
                    <li><NavLink to="/Study-in-Europe" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Europe</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link fw-bold"
                    to="/Service"
                    role="button"
                    aria-expanded="false"
                  >
                    Services <IoIosArrowDown />
                  </NavLink>
                  <ul className="dropdown-menu py-2 border-0 shadow">
                    <li><NavLink to="/Admission-Support" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Admission Support</NavLink></li>
                    <li><NavLink to="/SOP-Crafting" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>SOP Crafting</NavLink></li>
                    <li><NavLink to="/Visa-Support" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Visa Support</NavLink></li>
                    <li><NavLink to="/Financial-Aid" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Financial Aid</NavLink></li>
                    <li><NavLink to="/Pre-and-Post-Support" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Pre and Post Support</NavLink></li>
                    <li><NavLink to="/Forex" className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Forex</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" to="/Blog" activeClassName="active-link">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" to="/Contact" activeClassName="active-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
