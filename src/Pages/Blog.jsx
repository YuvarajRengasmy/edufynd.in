import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { FaArrowRight } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import about_1_shape1 from '../assets/img/normal/about_1_shape1.png'
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import FixedEnquiry from '../Components/fixed compoents/FixedEnquiry'
import FixedWhatsapp from '../Components/fixed compoents/FixedWhatsapp'
import { Link } from 'react-router-dom';
export const Blog = () => {
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
   

      <FixedEnquiry/>
      <FixedWhatsapp/>
      <div className="container-fluid p-0 overflow-hidden">
        <div className="row ">
          <div className="col-12">
            <div class="card text-bg-dark rounded-0 ">
              <img
                src="https://www.eduthrive.org/wp-content/uploads/2023/07/desktop-wallpaper-study-abroad-abroad.jpg"
                class="card-img img-fluid "
                style={{ maxHeight: "23rem", mixBlendMode: "multiply" }}
                alt="admission_image"
              />
              <div class="card-img-overlay align-self-end">
                <div className="text-uppercase text-white text-center fs-2 fw-bold">
                Our Blogs
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                  <div>
                    <Link
                      to=""
                      href="/"
                      className="text-decoration-none text-white fs-5"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="text-white">
                    <FaArrowRight />
                  </div>
               
                 
                  <div className="text-white fs-5">Blog</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card rounded-3 position-relative  shadow-sm ">
              <div  id='flag' className='position-absolute top-0 start-0 translate-middle  rounded-3'></div>
                
               
             <div className="card-body p-3">
             <div className="card-text text-end fw-semibold" style={{ fontSize: '13px' }}> <span className='pe-1'><FaClock /></span> Published On</div>
              <div className="card-text text-end fw-semibold" style={{ fontSize: '13px' }}> <span className='pe-1'> <FaCalendar /></span> 04/04/2024</div>
              <div className="card-title fw-bold p-4" style={{ fontSize: '20px' }}>
                Challenges Faced by Indian Students in Studying Abroad and How to Conquer Them
              </div>
              <div className="position-absolute bottom-0 end-0">
                <img src={about_1_shape1} alt="" className='img-fluid p-2 vert-move' style={{width:'150px',height:'150px'}} />
              </div>
              <div className="d-inline text-start ms-3">
                <Link to="/Blog-Details" className="btn text-uppercase text-white fw-bold border-0 rounded-1 px-4 py-2" style={{ backgroundColor: '#fe5722',fontSize:'12px' }}>
                  View Blog &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
             </div>
                
              
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
