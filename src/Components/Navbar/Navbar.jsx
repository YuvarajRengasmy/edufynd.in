import React, { useEffect, useState } from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { CiMail, CiClock1 } from 'react-icons/ci';
import { FaFlag, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Navbar.css';


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
            <a href='/' className="navbar-brand mx-lg-3  px-lg-5" >
              <img
                src="https://www.edufynd.com/assets/images/edufynd-logo.svg"
                alt="Edufynd Logo"
                style={{ width: '200px', height: '60px' }}
                className="img-fluid"
              />
            </a>
            <button
              class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <ul className="navbar-nav mb-lg-0 me-auto">
                <li className="nav-item">
                  <a href='/' className="nav-link fw-bold" aria-current="page" >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href='/About' className="nav-link fw-bold"  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href='/Program' className="nav-link fw-bold"  >
                    Program
                  </a>
                </li>
                <li className="nav-item">
                  <a href='/University' className="nav-link fw-bold"  >
                    University
                  </a>
                </li>
                <li className="nav-item">
                  <a href='/RecruitingPartner' className="nav-link fw-bold"  >
                    Recruiting Partner
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a href='/StudyDestination'
                    className="nav-link fw-bold"
                    
                    role="button"
                    aria-expanded="false"
                  >
                    Study Destinations <IoIosArrowDown />
                  </a>
                  <ul className="dropdown-menu px-1 py-2 border-0 shadow">
                    <li><a href='/Study-In-USA'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in USA</a></li>
                    <li><a href='/Study-in-UK'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in UK</a></li>
                    <li><a href='/Study-in-Canada'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Canada</a></li>
                    <li><a href='/Study-in-Australia'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Australia</a></li>
                    <li><a href='/Study-in-Ireland'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Ireland</a></li>
                    <li><a href='/Study-In-New-Zealand'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in New Zealand</a></li>
                    <li><a href='/Study-In-Signapore'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Singapore</a></li>
                    <li><a href='/Study-in-France'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in France</a></li>
                    <li><a href='/Study-in-Europe'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Study in Europe</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a href='/Service'
                    className="nav-link fw-bold"
                    
                    role="button"
                    aria-expanded="false"
                  >
                    Services <IoIosArrowDown />
                  </a>
                  <ul className="dropdown-menu py-2 border-0 shadow">
                    <li><a href='/Admission-Support'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Admission Support</a></li>
                    <li><a href='/SOP-Crafting'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>SOP Crafting</a></li>
                    <li><a href='/Visa-Support'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Visa Support</a></li>
                    <li><a href='/Financial-Aid'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Financial Aid</a></li>
                    <li><a href='/Pre-and-Post-Support'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Pre and Post Support</a></li>
                    <li><a href='/Forex'  className="dropdown-item fw-semibold"><span><FaFlag className="me-2" style={{ color: '#fe5722' }} /></span>Forex</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href='/Blog' className="nav-link fw-bold"  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href='/Contact' className="nav-link fw-bold"  >
                    Contact
                  </a>
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
