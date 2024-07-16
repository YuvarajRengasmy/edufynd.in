import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { FaListCheck } from "react-icons/fa6";
import { IoMdGrid } from "react-icons/io";
import Footer from '../Components/Footer/Footer'
import { FaArrowRight } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import 'animate.css';
import FixedEnquiry from "../Components/fixed compoents/FixedEnquiry";
import FixedWhatsapp from "../Components/fixed compoents/FixedWhatsapp";
const Program = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Control animation duration
      once: true, // Whether animation should only happen once
      mirror: false // Whether elements should animate out while scrolling past them
    });
  }, []);
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

<div className="container-fluid position-relative my-5" style={{
        
        backgroundImage: `url('https://www.eduthrive.org/wp-content/uploads/2023/07/desktop-wallpaper-study-abroad-abroad.jpg')`,
        backgroundSize: 'cover', // Ensure the image covers the container
        backgroundPosition: 'center', // Center the background image
        height: '300px', // Set a height to see the background image
        backgroundColor:'rgba(0,0,0,0.5)',
        backgroundBlendMode:'multiply'
      }}>
  <div className="row">
    <div className="col-lg-12">
     
 
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="text-uppercase text-white text-center fs-2 fw-bold">Program</div>
          <div className="d-flex flex-row align-items-center justify-content-center gap-3">
            <div>
              <a href="/" className="text-decoration-none text-white fs-5">
                Home
              </a>
            </div>
           
         
            <div className="text-white">
              <FaArrowRight />
            </div>
            <div className="text-white fs-5">Program</div>
          </div>
        </div>
   
    </div>
  </div>
</div>



      <div className="container  position-relative " data-aos="zoom-in-up" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}>
        <div className="row">

        <div className="col">
        <button class="btn btn-sm text-white px-4 py-2 fw-semibold text-uppercase " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" style={{fontSize:'13px',backgroundColor:'#fe5722',color:'#fff'}}> <span className="me-2"><FaFilter /></span> Filter</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Filter Program</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button fw-semibold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Filter
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="exampleFormControlInput">Search by Program Title</label>
                <input className="form-control" id="exampleFormControlInput" type="email" placeholder="Search by Program Title" />
              </div>
              <div className="d-flex flex-row gap-3">
                <div className="form-check">
                  <input className="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">Public</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">Private</label>
                </div>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Scholarship</label>
              </div>
              <div className="py-1">
                <div className='fw-bold py-1'>Level of Interest</div>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="py-1">
                <div className='fw-bold py-1'>Area of Specialisation</div>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <div className="row mt-3">
        <div className="d-flex flex-row align-items-center justify-content-end gap-3">
          <div>
            <button type="button" className="btn btn-danger text-white px-4 py-2 text-uppercase fw-semibold " style={{fontSize:'12px'}}>Apply</button>
          </div>
          <div>
            <button type="reset" className="btn btn-dark  text-white px-4 py-2 text-uppercase fw-semibold" style={{fontSize:'12px'}}>Reset</button>
          </div>
        </div>
      </div>
  </div>
</div>
  
</div>




          <div className="col-xl-12 justify-content-end align-items-center" data-aos="zoom-in">
            <div className="row">
              <div className="col">
                <div className="dropdown border-0  program-dropdown float-end">
                  <button className="btn btn-sm text-uppercase  fw-semibold px-4 py-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'13px'}} >
                    Sort By
                  </button>
                  <ul className="dropdown-menu border-0 shadow-sm">
                    <ul class="nav " id="myTab" role="tablist"  style={{fontSize:'11px',color:'#231f20'}}>
                      <li class="nav-item"><a class="nav-link text-dark active" id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="true" ><FaListCheck /> List View</a></li>
                      <li class="nav-item"><a class="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" href="#tab-profile" role="tab" aria-controls="tab-profile" aria-selected="false"> <IoMdGrid /> Grid View</a></li>

                    </ul>
                  </ul>
                </div>
              </div>
            </div>


            <div class="tab-content mt-3" id="myTabContent">
              <div class="tab-pane fade show active" id="tab-home" role="tabpanel" aria-labelledby="home-tab">

                <div className="row gx-5 gy-4 overflow-hidden" >
                  {[...Array(4)].map((_, i) => (
                    <div className="col-xl-12 " data-aos="fade-left" key={i}>
                      <div class="card mb-3 border-0 shadow p-3" style={{ height: '6rem' }}>
                        <div class="row g-0">
                          <div class="col-md-1">
                            <div className=" ">
                              <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161532/Chicago-University-Logo.png" class="img-fluid rounded-pill mx-auto d-block " alt="..." style={{width:'4rem',height:'4rem'}} />
                            </div>

                          </div>
                          <div class="col-md-11">
                            <div class="card-body">
                              <div className="d-flex flex-row align-items-center justify-content-between ">
                                <h6 className="card-text">University Name</h6>
                                <p className="card-text pt-2 ">Course Fee : $99999</p>
                                <p className="card-text  pt-2 ">Course : React</p>
                                <p className="card-text  pt-2  ">Country : USA</p>
                                <p className="card-text  pt-2 ">Intake : Summer</p>

                                <button className="btn btn-sm text-white fw-semibold text-uppercase text-center border-0" style={{ backgroundColor: '#fe5722' }}>Apply</button>

                              </div>

                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div class="tab-pane fade" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row gx-5 gy-4">
                  {[...Array(4)].map((_, i) => (
                    <div className="col-xl-3 col-md-6 col-sm-12" key={i}>
                      <div className="card border-0 position-relative shadow" style={{}}>

                        <img src="https://hips.hearstapps.com/housebeautiful/assets/17/32/1502296150-royal-roads-university.jpg" className="card-img-top img-fluid  " alt="img" />
                        <img src="https://t3.ftcdn.net/jpg/04/91/76/62/360_F_491766294_h4j7LbW2YgfbNHhq7F8GboIc1XyBSEY5.jpg" style={{ width: '75px', height: '75px', left: '30%', top: '1%' }} alt="no image" className="img-fluid rounded-pill position-absolute " />

                        <div className="card-body">
                          <h6 className="card-title text-center">University Name</h6>
                          <p className="card-text text-center">Course Fee : $99999</p>
                          <p className="card-text text-center">Course : React</p>
                          <p className="card-text text-center">Country : USA</p>
                          <p className="card-text text-center">Intake : Summer</p>
                          <div className="text-center">
                            <button className="btn text-white fw-semibold text-uppercase text-center border-0" style={{ backgroundColor: '#fe5722' }}>Apply</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default Program;
