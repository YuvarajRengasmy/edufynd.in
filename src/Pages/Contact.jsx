import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { FaArrowRight } from "react-icons/fa6";
import envelope from '../assets/bootstrap icons/envelope.svg'
import geo_alt from '../assets/bootstrap icons/geo-alt.svg'
import telephone from '../assets/bootstrap icons/telephone.svg'
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from 'react-helmet';
export const Contact = () => {
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>EduFynd</title>
        <meta name="author" content="https://afynd.com/" />
        <meta
          name="description"
          content="We take care from Application to Acceptance. Our Overseas Education services include admission procedure, documentation, VISA assistance, Education Loan assistance from a reputed bank, pre/post departure service."
        />
        <meta
          name="keywords"
          content="Application to Acceptance, Overseas Education, admission procedure, VISA assistance, Education Loan assistance, pre/post departure service"
        />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/images/edufynd-fav-logo"
        />
        <link rel="manifest" href="assets/img/favicons/manifest.php" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="assets/img/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&amp;family=Jost:wght@300;400;500;600;700;800;900&amp;family=Roboto:wght@100;300;400;500;700&amp;display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <div className="container">
    <div className="row">
        <div className="col">
          <a href="https://api.whatsapp.com/send/?phone=919840591820&text&type=phone_number&app_absent=0" className="">
          <div className="whatsapp-bottom" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
                <div className="logo">
                    <span className='rounded-circle badge p-3 fs-3 text-white' style={{backgroundColor:'rgb(37, 211, 102)',color:'#fff'}}><FaWhatsapp /></span>
                </div>
            </div>
          </a>
           
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col">
            <button class="btn rounded-0 fixed-button " type='button'  data-bs-toggle="modal" data-bs-target="#exampleModa2" >
                E <br /> n  <br /> q  <br />u  <br />i  <br />r  <br />y
            </button>
            <div class="modal fade" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabe2" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-3 fw-bold" id="exampleModalLabel">Enquiry Form</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="" className="">
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Enter Your Name.."/>
  <label for="floatingInput">Enter Your Name..</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingPassword" placeholder="Enter Your Email.."/>
  <label for="floatingPassword">Enter Your Email..</label>
</div>
<div class="input-group mb-3">
  <button class="btn dropdown-toggle" style={{backgroundColor:'#fe5722',color:'#fff'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">+91</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">+91</a></li>
    <li><a class="dropdown-item" href="#">+91</a></li>
    <li><a class="dropdown-item" href="#">+91</a></li>
   
   
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder='Enter Your Phone..' />
</div>
<div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:" 100px"}}></textarea>
  <label for="floatingTextarea2">Type Message</label>
</div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Send</button>
        <button type="button" class="btn btn-danger">Close</button>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
</div>
      <div
        className="container-fluid position-relative my-5 contact_us"
        style={{
          
        
         
          
        }}
      >
        <div className="row">
          <div className="col-lg-12">
          
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className="text-uppercase text-white text-center fs-2 fw-bold">Contact Us</div>
              <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                <div>
                  <a href="/" className="text-decoration-none text-white fs-6">
                    Home
                  </a>
                </div>
                <div className="text-white">
                  <FaArrowRight />
                </div>
                <div className="text-white fs-6">Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-5">
            <div className="contact-header">
              <h4 className="fw-semibold" style={{ color: '#fe5722' }}>Start Your Study Abroad Journey</h4>
              <hr className=" w-25 " style={{height:'3px',borderWidth:'0',color:'#fe5722',backgroundColor:'#fe5722'}} />
              <p className="fw-bold">Have an inquiry or some feedback for us?</p>
            </div>
            <div className="card mb-3 p-2 border-0 shadow">
              <div className="row g-0">
                <div className="col-md-4 align-self-center">
                  <img
                    src={geo_alt}
                    className="img-fluid mx-auto d-block   bg-light p-2 rounded-2 "
                    alt="Our Address"
                    style={{width:'50px'}}
                  />
                </div>
                <div className="col-md-8 align-self-center">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Our Address</h5>
                    <p className="card-text fw-semibold" style={{ fontSize: '14px' }}>
                      17/3A2, Gandhi St, Alwartirunagar, Chennai - 600087, Tamil Nadu, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-3 border-0 shadow">
              <div className="row g-0">
                <div className="col-md-4 align-self-center ">
                  <img
                    src={telephone}
                    className="img-fluid mx-auto d-block   bg-light p-2 rounded-2 "
                    alt="Phone Number"
                    style={{width:'50px'}}
                  />
                </div>
                <div className="col-md-8 align-self-center">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Phone Number</h5>
                    <p className="card-text fw-semibold" style={{ fontSize: '14px' }}>Phone: +91 98405 91820</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-2 border-0 shadow">
              <div className="row g-0">
                <div className="col-md-4 align-self-center">
                  <img
                    src={envelope}
                    className="img-fluid mx-auto d-block   bg-light p-2 rounded-2 "
                    alt="Mail ID"
                    style={{width:'50px'}}
                  />
                </div>
                <div className="col-md-8 align-self-center">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Mail ID</h5>
                    <p className="card-text fw-semibold" style={{ fontSize: '14px' }}>Business: info@edufynd.com</p>
                    <p className="card-text fw-semibold" style={{ fontSize: '14px' }}>Student: students@edufynd.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="container">
              <div className="card card-body border-0 contact_bg_1 p-5">
                <h5 className="card-text fw-bold">Connect with Experts for Guidance!</h5>
                <h1 className="card-title">Get in Touch</h1>
                <hr className=" w-25 " style={{height:'3px',borderWidth:'0',color:'#fe5722',backgroundColor:'#fe5722'}} />
                <form className="p-3">
                  <div className="row g-2 mb-3">
                    <div className="col-md">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="User Name" />
                        <label htmlFor="floatingInputGrid">User Name</label>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                        <label htmlFor="floatingInputGrid">Email address</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-2 mb-3">
                    <div className="col-md">
                      <div className="input-group">
                        <select className="form-select form-select-lg" id="floatingSelectGrid">
                          <option defaultValue>Select</option>
                          <option value="1">Student</option>
                          <option value="2">Partner</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="input-group mb-3">
                        <button className="btn  dropdown-toggle" type="button" style={{backgroundColor:'#fe5722',color:'#fff'}} data-bs-toggle="dropdown" aria-expanded="false">+91</button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">+91 India</a></li>
                          <li><a className="dropdown-item" href="#">+91 India</a></li>
                          <li><a className="dropdown-item" href="#">+91 India</a></li>
                        </ul>
                        <input type="text" className="form-control form-control-lg" aria-label="Text input with dropdown button" />
                      </div>
                    </div>
                  </div>
                  <div className="row g-2 mb-3">
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                  </div>
                  <div className="row g-2 mb-3">
                    <a href="#" className="btn fw-bold text-uppercase text-white p-3 rounded-2 border-0" style={{ backgroundColor: '#fe5722' }}>Submit</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
