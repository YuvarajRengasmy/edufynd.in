import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { CiMail, CiClock1 } from 'react-icons/ci';
import { FaFlag, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavVisible(scrollPosition > 100);
      setIsTop(scrollPosition <= 0);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed-top ${isNavVisible ? 'scrolling-navbar' : ''}`} style={{ fontSize: '14px' }}>
      <div className={`container-fluid text-white p-0 ${isTop ? 'bg-initial' : 'bg-scrolled'}`}>
        <div className="container-fluid text-center">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-none d-lg-inline">
                    <div className="fw-bold">
                      <span><IoCallOutline /></span> +91 9840591820
                    </div>
                  </div>
                  <div className="d-none d-lg-inline">
                    <div className="fw-bold">
                      <CiMail /> students@edufynd.com
                    </div>
                  </div>
                  <div className="d-none d-lg-inline">
                    <div className="fw-bold">
                      <CiClock1 /> Mon - Sat: 10.00am - 5:30pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-2 py-2">
                <div className="d-flex gap-3">
                  <div className="text-capitalize fw-bold">follow us:</div>
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

        <nav className={`navbar navbar-expand-lg ${isTop ? 'bg-initial-nav' : 'bg-scrolled-nav'}`}>
          <div className="container-fluid p-2">
            <Link className="navbar-brand mx-lg-3  px-lg-5" to="/">
              <img
                src="https://www.edufynd.com/assets/images/edufynd-logo.svg"
                alt="Edufynd Logo"
                style={{ width: '200px', height: '60px' }}
                className="img-fluid"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-lg-0 mx-auto">
                <li className="nav-item">
                  <Link className="nav-link fw-bold" aria-current="page" to="/" activeClassName="active-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/About" activeClassName="active-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/Program" activeClassName="active-link">
                    Program
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/University" activeClassName="active-link">
                    University
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/RecruitingPartner" activeClassName="active-link">
                    Recruiting Partner
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link fw-bold"
                    to="/StudyDestination"
                    role="button"
                    aria-expanded="false"
                  >
                    Study Destinations <IoIosArrowDown />
                  </Link>
                  <ul className="dropdown-menu px-1 py-2">
                    <li><Link to="/Study-In-USA" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in USA</Link></li>
                    <li><Link to="/Study-in-UK" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in UK</Link></li>
                    <li><Link to="/Study-in-Canada" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Canada</Link></li>
                    <li><Link to="/Study-in-Australia" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Australia</Link></li>
                    <li><Link to="/Study-in-Ireland" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Ireland</Link></li>
                    <li><Link to="/Study-In-New-Zealand" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in New Zealand</Link></li>
                    <li><Link to="/Study-In-Signapore" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Singapore</Link></li>
                    <li><Link to="/Study-in-France" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in France</Link></li>
                    <li><Link to="/Study-in-Europe" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Europe</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link fw-bold"
                    to="/Service"
                    role="button"
                    aria-expanded="false"
                  >
                    Services <IoIosArrowDown />
                  </Link>
                  <ul className="dropdown-menu py-2">
                    <li><Link to="/Admission-Support" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Admission Support</Link></li>
                    <li><Link to="/SOP-Crafting" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>SOP Crafting</Link></li>
                    <li><Link to="/Visa-Support" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Visa Support</Link></li>
                    <li><Link to="/Financial-Aid" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Financial Aid</Link></li>
                    <li><Link to="/Pre-and-Post-Support" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Pre and Post Support</Link></li>
                    <li><Link to="/Forex" className="dropdown-item fw-bold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Forex</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/Blog" activeClassName="active-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/Contact" activeClassName="active-link">
                    Contact
                  </Link>
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
